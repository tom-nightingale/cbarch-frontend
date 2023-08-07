<script lang="ts">
  import { onMount } from "svelte";
  import type { MetaModel } from "$lib/groq/queries";
  import { getImageDimensions } from "@sanity/asset-utils";

  export let seo: MetaModel;

  $: ({ metaTitle, metaDesc, keywords, shareGraphic, ogType } = seo);

  onMount(() => {
    document.head
      .querySelectorAll("meta[data-svelte]")
      .forEach((f) => f.remove());
    document.head
      .querySelectorAll("link[data-svelte]")
      .forEach((f) => f.remove());
  });

  const { height, width } = getImageDimensions({
    url: seo.shareGraphic.src,
  });
</script>

<svelte:head>
  {#if metaTitle}
    <title>{metaTitle}</title>
    <meta name="twitter:title" content={metaTitle} />
    <meta property="og:title" content={metaTitle} />
  {/if}

  {#if metaDesc}
    <meta name="description" content={metaDesc} />
    <meta property="og:description" content={metaDesc} />
    <meta name="twitter:description" content={metaDesc} />
  {/if}

  {#if shareGraphic}
    <meta
      property="og:image"
      content={shareGraphic.src
        ? shareGraphic.src
        : "https://res.cloudinary.com/thisissoon/default-meta"}
    />
    <meta property="og:image:alt" content={shareGraphic?.alt} />
    <meta property="og:image:width" content={width.toString()} />
    <meta property="og:image:height" content={height.toString()} />
    <meta
      name="twitter:image"
      content={shareGraphic.src
        ? shareGraphic.src
        : "https://res.cloudinary.com/thisissoon/default-meta"}
    />
    <meta name="twitter:image:alt" content={shareGraphic.alt} />
  {/if}

  {#if keywords}
    <meta name="keywords" content={keywords.join(",")} />
  {/if}

  <meta name="author" content="Coleflax Bennett Architecture" />
  <meta name="twitter:site" content="@soonlondon" />
  <meta name="twitter:creator" content="@soonlondon" />
  <meta property="og:type" content={ogType || "website"} />
  <meta property="og:site_name" content="Coleflax Bennett Architecture" />
</svelte:head>
