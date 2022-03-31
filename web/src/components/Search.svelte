<script>
  import { onMount } from "svelte";
  import Icon from "svelte-awesome";
  import { magic } from "svelte-awesome/icons";
  import Book from "./Book.svelte";

  const pathname = location.pathname;
  const username = pathname.split("/")[2];
  let keyword;

  function handler() {
    search(100, keyword);
    label = null;
    books = [];
    return false;
  }

  function latest(limit) {
    fetch(`/book/api/${username}?limit=${limit}`)
      .then(response => response.json())
      .then(data => show("Latest Items", data));
  }

  function search(limit, keyword) {
    fetch(`/book/api/${username}?limit=${limit}&q=${keyword}`)
      .then(response => response.json())
      .then(data => show(`Search with ${keyword}`, data));
  }

  let label;
  let books;

  function show(_label, _books) {
    label = _label;
    books = _books;
  }

  onMount(() => {
    latest(20);
  });
</script>

<form on:submit|preventDefault={handler}>
  <div class="field has-addons has-addons-centered">
    <div class="control has-icons-left">
      <input class="input" type="text" placeholder="keyword" bind:value={keyword}>
      <span class="icon is-small is-left">
        <Icon data={magic} />
      </span>
    </div>
    <div class="control">
      <button type="submit" class="button is-primary">Search</button>
    </div>
  </div>
</form>

<div class="container">
  {#if label && books}
    <div class="subtitle">{label}</div>
    {#each books as book}
      <Book {book} />
    {/each}
  {:else}
    <div class="subtitle">Loading...</div>
  {/if}
</div>
