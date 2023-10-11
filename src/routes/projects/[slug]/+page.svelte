<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/Seo/Seo.svelte";

  export let data: PageData;

  $: project = data.data;
</script>

<Seo
  seo={{
    title: project.seo?.metaTitle ? project.seo.metaTitle : "",
    description: project.seo?.metaDesc ? project.seo.metaDesc : "",
    keywords: project.seo?.keywords ? project.seo.keywords : undefined,
    shareGraphic: project.seo?.shareGraphic?.asset
      ? project.seo?.shareGraphic?.asset
      : undefined,
  }}
/>

<div class="flex flex-col justify-center align-center">
  Project - {project.heroHeadline}
</div>
