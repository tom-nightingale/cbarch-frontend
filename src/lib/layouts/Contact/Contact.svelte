<script lang="ts">
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import CopyImageSection from "$lib/components/CopyImageSection/CopyImageSection.svelte";
  import Gallery from "$lib/components/Gallery/Gallery.svelte";

  export let introTitle: string | null | undefined;
  export let introSubtitle: string | null | undefined;
  export let introCopy: any[];
  export let images: ImageType[];
</script>

<div class="px-4 py-12 md:py-[70px]">
  <CopyImageSection
    title={introTitle}
    subtitle={introSubtitle}
    copy={introCopy}
  />
</div>

{#if images && images.length > 0}
  <Gallery {images} />
{/if}

<WorkWithUs />
