<script lang="ts">
  import type { ContentBlocks, Maybe } from "$lib/gql/gen/codegen";
  import TextWithImage from "$lib/components/TextWithImage/TextWithImage.svelte";

  export let contentBlocks: ContentBlocks | Maybe<ContentBlocks>;

  $: blocks = contentBlocks?.contentblocks;
</script>

{#if blocks && blocks.length > 0}
  {#each blocks as block, i}
    {#if block?.__typename === "TextWithImage"}
      <TextWithImage
        subtitle={block?.subtitle}
        title={block?.title}
        content={block?.contentRaw}
        image={block?.image}
        applyBackground={block?.applyBackground}
        reverseLayout={block?.reverseLayout}
        links={block?.links}
      />
    {/if}
  {/each}
{/if}
