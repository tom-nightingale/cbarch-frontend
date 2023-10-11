<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  $: project = data.data;
</script>

<div class="flex flex-col justify-center align-center">
  Project - {project.heroHeadline}
</div>
