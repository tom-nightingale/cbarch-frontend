<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/Seo/Seo.svelte";
  import About from "$lib/layouts/About/About.svelte";

  export let data: PageData;

  $: page = data.data;
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

<About
  introTitle={page.introTitle}
  introSubtitle={page.introSubtitle}
  introCopy={page.introCopyRaw}
  copyTitle={page.copyTitle}
  copySubtitle={page.copySubtitle}
  copy={page.copyRaw}
  copyImage={page.copyImage}
  teamTitle={page.teamTitle}
  teamSubtitle={page.teamSubtitle}
  team={page.team}
/>
