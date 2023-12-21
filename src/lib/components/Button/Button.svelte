<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let href = "";
  export let newTab = false;
  export let label = "";
  export let theme = "primary";

  /**
   * Optional click handler
   */
  function onClick(event: Event) {
    dispatch("click", event);
  }
</script>

{#if href}
  <a
    class={`button ${theme}`}
    {href}
    target={newTab ? "_blank" : null}
    rel="noopener noreferrer"
  >
    <Typography component="span" variant="button1">
      {label}
    </Typography>
  </a>
{:else}
  <button class={`button ${theme}`} on:click={onClick}>
    <Typography component="span" variant="button1">
      {label}
    </Typography>
  </button>
{/if}

<style>
  .button {
    @apply inline-block py-[5px] px-[30px] border border-blue transition duration-200;
  }

  .primary {
    @apply bg-white text-blue;
    @apply hover:bg-blue hover:text-white;
  }

  .secondary {
    @apply bg-blue text-white;
    @apply hover:bg-white hover:text-blue;
  }

  .tertiary {
    @apply text-white border-white;
    @apply hover:bg-white hover:text-blue;
  }
</style>
