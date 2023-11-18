<script lang="ts">
  import { fly } from "svelte/transition";
  export let pathname = "";
</script>

{#key pathname}
  <div
    in:fly={{ y: 10, duration: 350, delay: 350 }}
    out:fly={{ y: -10, duration: 350 }}
  >
    <slot />
  </div>
{/key}
