<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: console.log("data", data);
</script>

<div class="flex flex-col justify-center align-center">Contact page.</div>
