<script lang="ts">
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Hero from "$lib/components/Hero/Hero.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Copy from "$lib/components/Copy/Copy.svelte";
  import Image from "$lib/components/Image/Image.svelte";

  export let heroImages: ImageType[] | null | undefined;
  export let title: string | null | undefined;
  export let location: string | null | undefined;
  export let value: string | null | undefined;
  export let copy: any[];
  export let involvement: string | null | undefined;
  export let gallery: ImageType[] | null | undefined;
</script>

<Hero images={heroImages} title={`${title}, ${location}`} />

<Container>
  <div class="">
    <div class="md:grid md:grid-cols-2">
      {#if heroImages[0] && heroImages[0].asset}
        <div class="md:pb-0 p-9">
          <Image
            image={heroImages[0]}
            altText={heroImages[0]?.asset?.altText
              ? heroImages[0]?.asset?.altText
              : "Coleflax Bennett Architecture"}
            lgImg={true}
            lgSizes={{
              lg: {
                width: 1600,
                height: 1200,
              },
              md: {
                width: 1600,
                height: 1200,
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
            pictureClasses="block self-center"
          />
        </div>
      {/if}

      <div
        class="flex flex-col justify-center gap-8 px-4 py-12 mb-12 md:mb-0 bg-blue-light md:py-20 lg:px-8 2xl:px-10 3xl:px-16"
      >
        <Typography component="h1" variant="headline1" theme="text-blue"
          >Project Details</Typography
        >
        <div class="grid gap-2 p-4 bg-white lg:p-8">
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
              theme="w-1/2 sm:w-2/3  md:w-1/2 lg:w-2/3 3xl:w-4/5"
              >{location}</Typography
            >
          </div>

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
              theme="w-1/2 sm:w-2/3 md:w-1/2 lg:w-2/3 3xl:w-4/5"
              >{value}</Typography
            >
          </div>

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
              theme="w-1/2 sm:w-2/3 md:w-1/2 lg:w-2/3  3xl:w-4/5"
              >{involvement}</Typography
            >
          </div>
        </div>
        <Copy content={copy} />
      </div>
    </div>
  </div>
</Container>