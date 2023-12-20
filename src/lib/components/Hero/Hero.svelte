<script lang="ts">
  import { onMount } from "svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Glide from "@glidejs/glide";
  import { inView, animate } from "motion";

  export let mobileImages: ImageType[] | null | undefined = undefined;
  export let images: ImageType[] | null | undefined;
  export let title: string | null | undefined;
  export let isHome: boolean = false;

  let viewportWidth: number;
  let isMobile = true;
  let mdWidth = 600;

  let gallery: any;
  let imageContainer: HTMLElement;

  onMount(() => {
    if (images && images.length > 1) {
      gallery = new Glide(".glide-hero", {
        perView: 1,
        gap: 0,
        autoplay: false,
        bound: true,
        rewind: false,
      });

      gallery.mount();

      gallery.on("resize", () => {
        gallery.update();
      });

      setTimeout(() => {
        gallery.update();
      }, 0);
    }

    // animate the image container
    inView(imageContainer, () => {
      animate(
        imageContainer,
        { opacity: 1 },
        {
          duration: 1,
          easing: [0.17, 0.55, 0.55, 1],
        },
      );
    });
  });

  $: randomImages =
    isMobile && mobileImages && mobileImages.length > 0
      ? mobileImages
      : images &&
        images
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);

  $: isMobile = viewportWidth < mdWidth;
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<div class="relative w-full">
  <div
    class="relative overflow-hidden transition duration-500 bg-gray-100 opacity-0"
    bind:this={imageContainer}
  >
    {#if randomImages && randomImages.length > 1}
      <div class="relative glide-hero">
        <div data-glide-el="track" class="glide__track">
          <div class=" glide__slides">
            {#if isMobile}
              {#each randomImages as image, i}
                <div class="relative overflow-y-hidden bg-gray-100">
                  <Image
                    lazyLoad={false}
                    {image}
                    altText={image?.asset?.altText
                      ? image?.asset?.altText
                      : "Coleflax Bennett Architecture"}
                    lgImg={true}
                    lgSizes={{
                      lg: {
                        width: 600,
                        height: 1000,
                      },
                      md: {
                        width: 600,
                        height: 1000,
                      },
                      sm: {
                        width: 600,
                        height: 1000,
                      },
                      xs: {
                        width: 600,
                        height: 1000,
                      },
                      fallback: {
                        width: 600,
                        height: 1000,
                      },
                    }}
                    pictureClasses="block"
                  />
                </div>
              {/each}
            {:else}
              {#each randomImages as image, i}
                <div
                  class="relative overflow-y-hidden bg-gray-100 hero-container"
                >
                  <Image
                    lazyLoad={false}
                    {image}
                    altText={image?.asset?.altText
                      ? image?.asset?.altText
                      : "Coleflax Bennett Architecture"}
                    lgImg={true}
                    lgSizes={{
                      lg: {
                        width: 2560,
                        height: 1400,
                      },
                      md: {
                        width: 1600,
                        height: 760,
                      },
                      sm: {
                        width: 1280,
                        height: 1000,
                      },
                      xs: {
                        width: 768,
                        height: 1000,
                      },
                      fallback: {
                        width: 768,
                        height: 1622,
                      },
                    }}
                    pictureClasses="block"
                    imageClasses="absolute top-0 left-0 w-full h-full object-cover object-center w-full"
                  />
                </div>
              {/each}
            {/if}
          </div>
        </div>
      </div>
    {:else if images && images[0] && images[0].asset}
      <div class="relative overflow-y-hidden bg-gray-100 hero-container">
        <Image
          lazyLoad={false}
          image={images[0]}
          altText={images[0]?.asset?.altText
            ? images[0]?.asset?.altText
            : "Coleflax Bennett Architecture"}
          lgImg={true}
          lgSizes={{
            lg: {
              width: 2560,
              height: 1440,
            },
            md: {
              width: 1600,
              height: 760,
            },
            sm: {
              width: 1280,
              height: 1000,
            },
            xs: {
              width: 768,
              height: 1000,
            },
            fallback: {
              width: 768,
              height: 1622,
            },
          }}
          pictureClasses="block"
          imageClasses="absolute top-0 left-0 w-full h-full object-cover object-center w-full"
        />
      </div>
    {/if}
  </div>
  <div
    class="absolute bottom-0 left-0 w-full py-[25px] px-4 md:px-8 bg-white/80 z-20 md:flex items-center justify-betwee"
  >
    <Typography component="p" variant="title1" theme="text-blue"
      >{title}</Typography
    >
    {#if isHome}
      <div class="ml-auto mt-[18px] md:mt-0">
        <Button label="Our Projects" theme="secondary" href="/projects" />
      </div>
    {/if}
  </div>
</div>

<style>
  .hero-container {
    /* @apply min-h-[calc(88vh-120px)]; */
    @apply w-full min-h-[110vh];
    @apply md:min-h-[calc(100vh-119px)];
    /* @apply landscape:min-h-[150vh]; */
  }

  @supports (-webkit-touch-callout: none) {
    /* CSS specific to iOS devices */
    .hero-container {
      height: -webkit-fill-available;
    }
  }

  @supports not (-webkit-touch-callout: none) {
    /* CSS for other than iOS devices */
    .hero-container {
      height: -webkit-fill-available;
    }
  }
</style>
