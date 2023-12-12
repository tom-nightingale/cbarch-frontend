<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/Seo/Seo.svelte";
  import About from "$lib/layouts/About/About.svelte";

  export let data: PageData;

  $: page = data.data;

  $: console.log(page.thirdCopyImage);
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
  firstSubtitle={page.firstSubtitle}
  firstTitle={page.firstTitle}
  firstCopy={page.firstCopyRaw}
  secondSubtitle={page.secondSubtitle}
  secondTitle={page.secondTitle}
  secondCopy={page.secondCopyRaw}
  copyImage={page.copyImage}
  thirdSubtitle={page.thirdSubtitle}
  thirdTitle={page.thirdTitle}
  thirdCopy={page.thirdCopyRaw}
  thirdCopyImage={page.thirdCopyImage}
/>
