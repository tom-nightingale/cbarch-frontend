<script lang="ts">
  import { onMount } from "svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import { inView, animate } from "motion";

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
      width: 448,
      height: 768,
    },
    fallback: {
      width: 448,
      height: 768,
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

  let imageContainer: HTMLElement;

  $: console.log(square);

  onMount(async () => {
    // @ts-ignore
    const lightbox = new FsLightbox();

    const projectImages = imageContainer.querySelectorAll("img");
    projectImages.forEach((image, i) => {
      inView(
        image,
        () => {
          animate(
            image,
            { opacity: 1, y: [20, 0] },
            {
              delay: 0.2 * i,
              duration: 1,
              easing: [0.17, 0.55, 0.55, 1],
            },
          );
        },
        { amount: 0.15 },
      );
    });
  });
</script>

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/fslightbox/3.0.9/index.js"
    defer
  ></script>
</svelte:head>

{#if images && images.length > 0}
  <Container>
    <div
      class="grid grid-cols-2 gap-2 px-4 py-14 md:grid-cols-12"
      bind:this={imageContainer}
    >
      {#each images as image, i}
        <a
          data-fslightbox
          class={`block overflow-hidden
            ${
              !square &&
              i === 0 &&
              "aspect-[12/7] col-span-2  md:col-span-6 md:aspect-auto"
            }
            ${
              !square &&
              i !== 0 &&
              "aspect-[7/11] md:col-span-3 md:aspect-[128/205] w-full"
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
            pictureClasses="block transition-all duration-300 hover:scale-[1.05]"
            imageClasses="opacity-0 object-cover object-center"
          />
        </a>
      {/each}
    </div>
  </Container>
{/if}
