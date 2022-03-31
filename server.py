from __future__ import annotations

import logging
from dataclasses import dataclass
from typing import Optional

import expiringdict
import requests
from fastapi import FastAPI

from util.mount import MountFiles

app = FastAPI()
logger = logging.getLogger("uvicorn.app")


@dataclass
class Book:
    book_id: str
    service_id: str
    id: str

    title: str
    authors: list[str]
    image: str
    publisher: str
    release_date: str
    amazon_link: str
    booklog_link: str

    read_datetime: str
    category_name: str
    tags: list[str]
    review: str

    @staticmethod
    def from_json(data: dict, username: str) -> Book:
        """From booklo API JSON"""
        service_id = data.get("service_id")
        id = data.get("id")
        return Book(
            book_id=data.get("book_id"),
            service_id=service_id,
            id=id,
            title=data.get("title"),
            authors=data.get("item", {}).get("authors", []),
            image=data.get("image_2x"),
            publisher=data.get("item", {}).get("publisher"),
            release_date=data.get("item", {}).get("release_date"),
            amazon_link=data.get("item", {}).get("url"),
            booklog_link=f"https://booklog.jp/users/{username}/archives/{service_id}/{id}",
            read_datetime=data.get("create_on"),
            category_name=data.get("category_name"),
            tags=data.get("tags"),
            review=data.get("review", {}).get("description"),
        )


class Booklog:
    def __init__(self):
        self.cache = expiringdict.ExpiringDict(max_len=100, max_age_seconds=30)

    def search(self, username: str, keyword: str):
        logger.info("Booklog.search / %s, %s", username, keyword)

        # cache check
        cache_key = f"{username}/{keyword}"
        cache_val = self.cache.get(cache_key)
        if cache_val:
            logger.info("Cache hit.")
            return cache_val

        # request
        logger.info("Requesting")
        url = f"https://booklog.jp/users/{username}"
        params = {
            "keyword": keyword,
            "json": "true",
        }
        val = requests.get(url, params).json()

        # caching & return
        self.cache[cache_key] = val
        return val


booklog = Booklog()


@app.get("/book/api/{username}")
def get(username: str, limit: int = 20, q: Optional[str] = None):
    res = booklog.search(username, q or "")
    books = [Book.from_json(data, username) for data in res.get("books", [])[:limit]]
    return books


app.mount("/book", MountFiles(directory="web/public", html=True), name="static")
