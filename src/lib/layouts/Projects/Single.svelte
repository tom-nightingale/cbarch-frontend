<script lang="ts">
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Hero from "$lib/components/Hero/Hero.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Copy from "$lib/components/Copy/Copy.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import GlideGallery from "$lib/components/GlideGallery/GlideGallery.svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  export let heroImages: ImageType[] | null | undefined;
  export let title: string | null | undefined;
  export let location: string | null | undefined;
  export let value: string | null | undefined;
  export let copy: any[];
  export let copyImage: ImageType | null | undefined;
  export let involvement: string | null | undefined;
  export let gallery: any;

  let imageContainer: HTMLElement;
  let contentContainer: HTMLElement;
  import { inView, animate } from "motion";

  onMount(() => {
    inView(
      imageContainer,
      () => {
        animate(
          imageContainer,
          { opacity: 1, y: [20, 0] },
          {
            duration: 1,
            easing: [0.17, 0.55, 0.55, 1],
          },
        );
      },
      { amount: 0.15 },
    );

    inView(
      contentContainer,
      () => {
        animate(
          contentContainer,
          { opacity: 1, y: [20, 0] },
          {
            duration: 1,
            easing: [0.17, 0.55, 0.55, 1],
          },
        );
      },
      { amount: 0.15 },
    );
  });
</script>

{#key $page.url.pathname}
  <Hero
    images={heroImages && heroImages.length > 0 && [heroImages[0]]}
    title={`${title}${location && location !== null ? `, ${location}` : ``}`}
  />
{/key}

<Container>
  <div class="md:grid md:grid-cols-2 md:mb-12">
    <div
      class="relative p-9 opacity-0 transform translate-y-[20px]"
      bind:this={imageContainer}
    >
      {#if copyImage && copyImage.asset}
        {#key $page.url.pathname}
          <Image
            image={copyImage}
            altText={copyImage?.asset?.altText
              ? copyImage?.asset?.altText
              : "Coleflax Bennett Architecture"}
            lgImg={true}
            lgSizes={{
              lg: {
                width: 1600,
                height: 1200,
              },
              md: {
                width: 800,
                height: 700,
              },
              sm: {
                width: 650,
                height: 1000,
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
            pictureClasses="block md:sticky md:top-40"
            imageClasses="object-cover object-center h-full w-full"
          />
        {/key}
      {/if}
    </div>

    <div
      bind:this={contentContainer}
      class="flex flex-col justify-center gap-8 px-4 py-12 bg-blue-light md:py-20 lg:px-8 2xl:px-10 3xl:px-16 opacity-0 transform translate-y-[20px]"
    >
      <Typography component="h1" variant="headline1" theme="text-blue"
        >Project Details</Typography
      >
      <div class="grid gap-2 p-4 bg-white lg:p-8">
        {#if location}
          <div class="flex flex-wrap">
            <Typography
              component="p"
              variant="body1"
              theme="w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3 3xl:w-1/5"
              uppercase>Location</Typography
            >
            <Typography
              component="p"
              variant="body1"
              theme="w-1/2 sm:w-2/3  md:w-1/2 lg:w-2/3 3xl:w-4/5 pl-4"
              >{location}</Typography
            >
          </div>
        {/if}

        {#if value}
          <div class="flex flex-wrap">
            <Typography
              component="p"
              variant="body1"
              theme="w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3 3xl:w-1/5"
              uppercase>Project Value</Typography
            >
            <Typography
              component="p"
              variant="body1"
              theme="w-1/2 sm:w-2/3 md:w-1/2 lg:w-2/3 3xl:w-4/5 pl-4"
              >{value}</Typography
            >
          </div>
        {/if}

        {#if involvement}
          <div class="flex flex-wrap">
            <Typography
              component="p"
              variant="body1"
              theme="w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3 3xl:w-1/5"
              uppercase>Involvement</Typography
            >
            <Typography
              component="p"
              variant="body1"
              theme="w-1/2 sm:w-2/3 md:w-1/2 lg:w-2/3 3xl:w-4/5 pl-4"
              >{involvement}</Typography
            >
          </div>
        {/if}
      </div>
      <Copy content={copy} />
    </div>
  </div>
</Container>

{#if gallery && gallery.length > 3}
  {#key $page.url.pathname}
    <GlideGallery images={gallery} square />
  {/key}
{/if}

<WorkWithUs />
