<script lang="ts">
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Hero from "$lib/components/Hero/Hero.svelte";
  import FeaturedProject from "$lib/components/FeaturedProject/FeaturedProject.svelte";
  import Testimonial from "$lib/components/Testimonial/Testimonial.svelte";
  import Gallery from "$lib/components/Gallery/Gallery.svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Copy from "$lib/components/Copy/Copy.svelte";
  import Button from "$lib/components/Button/Button.svelte";

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
</script>

<Hero images={heroImages} title={heroTitle} />

<Container>
  <div class="px-4 py-12 md:grid md:grid-cols-2 md:gap-16 md:py-20">
    <div class="mb-12 md:mb-0">
      <div class="grid gap-6 mb-8 grid-col">
        <Typography component="p" variant="sub1" uppercase
          >{copySubtitle}</Typography
        >

        <Typography component="h1" variant="headline1"
          >{@html copyTitle}</Typography
        >
      </div>

      <Copy content={copy} />

      <Button href="/about" label="Meet the team" />
    </div>

    <Image
      image={copyImage}
      altText={copyImage?.asset?.altText
        ? copyImage?.asset?.altText
        : "Coleflax Bennett Architecture"}
      lgImg={true}
      lgSizes={{
        lg: {
          width: 2560,
          height: 1376,
        },
        md: {
          width: 1600,
          height: 1101,
        },
        sm: {
          width: 1280,
          height: 1280,
        },
        xs: {
          width: 768,
          height: 768,
        },
        fallback: {
          width: 768,
          height: 768,
        },
      }}
      pictureClasses="block aspect-square lg:aspect-auto"
    />
  </div>
</Container>

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
