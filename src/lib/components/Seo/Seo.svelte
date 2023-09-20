<script lang="ts">
  import { onMount } from "svelte";
  import type { MetaModel } from "./Meta.models";
  import { getImageDimensions } from "@sanity/asset-utils";

  export let seo: MetaModel;

  $: ({ title, description, keywords, shareGraphic, ogType } = seo);

  onMount(() => {
    document.head
      .querySelectorAll("meta[data-svelte]")
      .forEach((f) => f.remove());
    document.head
      .querySelectorAll("link[data-svelte]")
      .forEach((f) => f.remove());
  });

  const { height, width } = getImageDimensions({
    url: shareGraphic && shareGraphic.src ? shareGraphic.src : "",
  });
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
    <meta name="twitter:title" content={title} />
    <meta property="og:title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  {/if}

  {#if shareGraphic && shareGraphic.src}
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
