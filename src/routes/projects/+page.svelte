<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: console.log("data", data);
  $: console.log("projects", data.projects);
</script>

<div class="flex flex-col justify-center align-center">
  Projects archive page.
</div>
