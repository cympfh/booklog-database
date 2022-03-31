<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "svelte-awesome";
  import { book, undo } from "svelte-awesome/icons";
  import User from "./components/User.svelte";
  import Search from "./components/Search.svelte";

  const pathname = location.pathname;
  const username = pathname.split("/")[2];
  let title = !username ? "/book/" : `/book/${username}/`;

  onMount(() => {
    if (pathname === "/") {
      location.replace("/book/");
    }
    if (pathname === "/book") {
      location.replace("/book/");
    }
  });
</script>

<svelte:head>
  {#if !username}
    <title>/book/</title>
  {:else}
    <title>/book/{username}/</title>
  {/if}
</svelte:head>

<section class="hero">
  <div class="hero-body">
    <div class="container">
      <p class="title">
        <span class="icon-text">
          <Icon data={book} scale="2" />
          <span>{title}</span>
        </span>
      </p>
    </div>
    {#if username}
      <div class="container has-text-right">
        <span class="icon-text has-text-info">
          <span class="icon">
            <a href="/book/"><Icon data={undo} /></a>
          </span>
          <span>username={username}</span>
        </span>
      </div>
    {/if}
  </div>
</section>

<div class="section">
  <div class="container">
    {#if !username}
      <div class="content">
        <User />
      </div>
    {:else}
      <div class="content">
        <Search />
      </div>
    {/if}
  </div>
</div>

<style global lang="scss">
  @import "main.scss";
</style>
