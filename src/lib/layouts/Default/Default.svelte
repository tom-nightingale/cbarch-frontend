<script lang="ts">
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import type { ContentBlocks, Maybe } from "$lib/gql/gen/codegen";
  import ContentBlockDigester from "$lib/components/ContentBlockDigester/ContentBlockDigester.svelte";

  export let contentBlocks: ContentBlocks | Maybe<ContentBlocks>;
</script>

{#if contentBlocks?.contentblocks && contentBlocks?.contentblocks?.length > 0}
  <ContentBlockDigester {contentBlocks} />
{/if}

<WorkWithUs />
