<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/Seo/Seo.svelte";

  export let data: PageData;
  $: page = data.page;
</script>

<Seo
  seo={{
    title: page.seo?.metaTitle ? page.seo.metaTitle : "",
    description: page.seo?.metaDesc ? page.seo.metaDesc : "",
    keywords: page.seo?.keywords ? page.seo.keywords : undefined,
    shareGraphic: page.seo?.shareGraphic?.asset
      ? page.seo?.shareGraphic?.asset
      : undefined,
  }}
/>

<div class="flex flex-col justify-center align-center">
  Projects archive page.
</div>
