<script lang="ts">
  import { onMount } from "svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import { browser } from "$app/environment";

  export let images: ImageType[] = [];
  export let square: boolean = false;

  const primaryImageSizes = {
    lg: {
      width: 2560,
      height: 1500,
    },
    md: {
      width: 1600,
      height: 1265,
    },
    sm: {
      width: 1280,
      height: 1010,
    },
    xs: {
      width: 768,
      height: 448,
    },
    fallback: {
      width: 768,
      height: 448,
    },
  };

  const secondaryImageSizes = {
    lg: {
      width: 630,
      height: 1004,
    },
    md: {
      width: 640,
      height: 1020,
    },
    sm: {
      width: 310,
      height: 500,
    },
    xs: {
      width: 768,
      height: 448,
    },
    fallback: {
      width: 768,
      height: 448,
    },
  };

  const squareImageSizes = {
    lg: {
      width: 600,
      height: 600,
    },
    md: {
      width: 600,
      height: 600,
    },
    sm: {
      width: 500,
      height: 500,
    },
    xs: {
      width: 500,
      height: 500,
    },
    fallback: {
      width: 600,
      height: 600,
    },
  };

  onMount(async () => {
    if (browser) {
      // @ts-ignore
      const fslightbox = await import("fslightbox");
    }
  });
</script>

{#if images && images.length > 0}
  <Container>
    <div class="grid grid-cols-2 gap-2 px-4 py-14 md:grid-cols-12">
      {#each images as image, i}
        <a
          data-fslightbox="gallery"
          class={`block overflow-hidden
            ${
              !square &&
              i === 0 &&
              "aspect-[12/7] col-span-2 bg-gray-100 md:col-span-6 md:aspect-auto"
            }
            ${
              !square &&
              i !== 0 &&
              "aspect-[7/11] bg-gray-100 md:col-span-3 md:aspect-[128/205] w-full"
            }

            ${square && "aspect-square col-span-1 md:col-span-3 w-full"}
          `}
          href={image?.asset?.url}
        >
          <Image
            {image}
            altText={image?.asset?.altText
              ? image?.asset?.altText
              : "Coleflax Bennett Architecture"}
            lgImg={true}
            lgSizes={square
              ? squareImageSizes
              : i === 0
              ? primaryImageSizes
              : secondaryImageSizes}
            pictureClasses="overflow-hidden"
            imageClasses="object-cover object-center h-full hover:scale-105 transition duration-500"
          />
        </a>
      {/each}
    </div>
  </Container>
{/if}
