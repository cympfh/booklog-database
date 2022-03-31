<script>
  import Icon from "svelte-awesome";
  import { user } from "svelte-awesome/icons";
  let username;

  function handler() {
    location.assign(`/book/${username}/`);
    return false;
  }
</script>

<form on:submit|preventDefault={handler}>
  <div class="field has-addons has-addons-centered">
    <div class="control has-icons-left">
      <input class="input" type="text" placeholder="booklog ID" bind:value={username}>
      <span class="icon is-small is-left">
        <Icon data={user} />
      </span>
    </div>
    <div class="control">
      <button type="submit" class="button is-primary">Go</button>
    </div>
  </div>
</form>
