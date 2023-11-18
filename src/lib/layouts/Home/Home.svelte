<script lang="ts">
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Hero from "$lib/components/Hero/Hero.svelte";
  import FeaturedProject from "$lib/components/FeaturedProject/FeaturedProject.svelte";
  import Testimonial from "$lib/components/Testimonial/Testimonial.svelte";
  import Gallery from "$lib/components/Gallery/Gallery.svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import CopyImageSection from "$lib/components/CopyImageSection/CopyImageSection.svelte";
  import type Image from "$lib/components/Image/Image.svelte";
  import { fade } from "svelte/transition";

  export let heroImages: ImageType[] | null | undefined;
  export let heroTitle: string | null | undefined;
  export let featuredProjectName: string | null | undefined;
  export let featuredProjectImages: ImageType[] | null | undefined | boolean;
  export let featuredProjectSlug: string | null | undefined;
  export let copyTitle: string | null | undefined;
  export let copySubtitle: string | null | undefined;
  export let copyImage: Image | undefined;
  export let copy: any[];
  export let testimonial: string | null | undefined;
  export let author: string | null | undefined;
  export let galleryImages: ImageType[];

  let open = true;
</script>

<Hero images={heroImages} title={heroTitle} isHome />

<div class="px-4 py-12 md:py-20">
  <CopyImageSection
    title={copyTitle}
    subtitle={copySubtitle}
    {copy}
    image={copyImage}
    linkLabel="Meet the team"
    linkUrl="/about"
  />
</div>

{#if featuredProjectImages && featuredProjectImages.length > 0}
  <FeaturedProject
    name={featuredProjectName}
    slug={featuredProjectSlug}
    images={featuredProjectImages}
  />
{/if}

{#if testimonial}
  <Testimonial {testimonial} {author} />
{/if}

{#if galleryImages && galleryImages.length > 0}
  <Gallery images={galleryImages} />
{/if}

<WorkWithUs />
