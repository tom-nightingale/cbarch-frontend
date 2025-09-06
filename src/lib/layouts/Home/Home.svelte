<script lang="ts">
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Hero from "$lib/components/Hero/Hero.svelte";
  import FeaturedProject from "$lib/components/FeaturedProject/FeaturedProject.svelte";
  import Testimonials from "$lib/components/Testimonials/Testimonials.svelte";
  import Gallery from "$lib/components/Gallery/Gallery.svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import CopyImageSection from "$lib/components/CopyImageSection/CopyImageSection.svelte";
  import type Image from "$lib/components/Image/Image.svelte";
  import type { ContentBlocks, Maybe } from "$lib/gql/gen/codegen";
  import ContentBlockDigester from "$lib/components/ContentBlockDigester/ContentBlockDigester.svelte";

  export let mobileHeroImages: ImageType[] | null | undefined;
  export let heroImages: ImageType[] | null | undefined;
  export let heroTitle: string | null | undefined;
  export let featuredProjectName: string | null | undefined;
  export let featuredProjectImages: ImageType[] | null | undefined | boolean;
  export let featuredProjectSlug: string | null | undefined;
  export let testimonials: any[];
  export let galleryImages: ImageType[];
  export let contentBlocks: ContentBlocks | Maybe<ContentBlocks>;
</script>

<Hero
  images={heroImages}
  mobileImages={mobileHeroImages}
  title={heroTitle}
  isHome
/>

{#if contentBlocks?.contentblocks && contentBlocks?.contentblocks?.length > 0}
  <ContentBlockDigester {contentBlocks} />
{/if}

{#if featuredProjectImages && featuredProjectImages.length > 0}
  <FeaturedProject
    name={featuredProjectName}
    slug={featuredProjectSlug}
    images={featuredProjectImages}
  />
{/if}

{#if testimonials && testimonials.length > 0}
  <Testimonials {testimonials} />
{/if}

{#if galleryImages && galleryImages.length > 0}
  <Gallery images={galleryImages} />
{/if}

<WorkWithUs />
