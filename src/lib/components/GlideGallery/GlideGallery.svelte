<script lang="ts">
  import { onMount } from "svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import { inView, animate } from "motion";
  import Glide from "@glidejs/glide";
  import Icon from "$lib/components/Icon/Icon.svelte";

  export let images: ImageType[] = [];
  export let square: boolean = false;
  export let removeMarginBottom: boolean = false;

  const primaryImageSizes = {
    lg: {
      width: 1600,
      height: 1265,
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

  onMount(async () => {
    // @ts-ignore
    const lightbox = new FsLightbox();

    const projectImages = imageContainer.querySelectorAll("img");

    projectImages.forEach((project) => {
      inView(
        project,
        (item) => {
          animate(
            item.target,
            { opacity: 1, y: [20, 0] },
            {
              duration: 1,
              delay: 0.2,
            },
          );
        },
        { amount: 0.15 },
      );
    });

    //Initialise glide slider.
    new Glide(".glide-gallery", {
      perView: 4,
      gap: 10,
      autoplay: false,
      bound: true,
      rewind: false,
      breakpoints: {
        768: {
          perView: 2,
        },
        1200: {
          perView: 4,
        },
      },
    }).mount();
  });
</script>

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/fslightbox/3.0.9/index.js"
    defer
  ></script>
</svelte:head>

<Container>
  <div
    class="px-4 py-14 {removeMarginBottom && 'pb-0'}"
    bind:this={imageContainer}
  >
    <div class="relative glide-gallery">
      <div data-glide-el="track" class="glide__track">
        <div class="glide__slides">
          {#each images as image, i}
            <a
              data-fslightbox
              class={`block overflow-hidden glide__slide
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
                pictureClasses="block h-full transition-all duration-300 hover:scale-[1.05]"
                imageClasses="opacity-0 object-cover object-center h-full"
              />
            </a>
          {/each}
        </div>
      </div>

      <div class="glide__arrows" data-glide-el="controls">
        <button
          class="absolute flex items-center justify-center p-2 translate-y-[-15%] bg-white rounded-full top-1/2 left-4 transition-all duration-500"
          data-glide-dir="<"
          ><Icon icon="angle-left" width={16} height={16} /></button
        >
        <button
          class="absolute flex items-center justify-center p-2 translate-y-[-15%] bg-white rounded-full top-1/2 right-4 transition-all duration-500"
          data-glide-dir=">"
          ><Icon icon="angle-right" width={16} height={16} /></button
        >
      </div>
    </div>
  </div>
</Container>

<style>
  .glide__arrow--disabled {
    opacity: 0.5;
  }
</style>
