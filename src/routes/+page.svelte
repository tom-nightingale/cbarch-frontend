<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/Seo/Seo.svelte";
  import Home from "$lib/layouts/Home/Home.svelte";

  export let data: PageData;

  $: page = data.home;
  $: testimonials = data.testimonials;
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

<Home
  mobileHeroImages={page.mobileHeroImages}
  heroImages={page.heroImages}
  heroTitle={page.heroHeadline}
  {testimonials}
  galleryImages={page.gallery}
  featuredProjectImages={page &&
  page.featuredProjects &&
  page.featuredProjects.length > 0 &&
  page.featuredProjects[0]?.featuredProjectGallery &&
  page.featuredProjects[0]?.featuredProjectGallery.length > 0
    ? page.featuredProjects[0]?.featuredProjectGallery.slice(0, 2)
    : page.featuredProjects[0]?.gallery.slice(0, 2)}
  featuredProjectName={page.featuredProjects && page.featuredProjects[0]?.title}
  featuredProjectSlug={page.featuredProjects &&
    page.featuredProjects[0]?.slug?.current}
  copyTitle={page.copyTitle}
  copySubtitle={page.copySubtitle}
  copyImage={page.copyImage && page.copyImage}
  copy={page.copyRaw}
/>
