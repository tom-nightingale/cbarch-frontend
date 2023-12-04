<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import Image from "$lib/components/Image/Image.svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import { register } from "swiper/element/bundle";
  import "swiper/css/autoplay";

  export let images: ImageType[] | null | undefined;
  export let title: string | null | undefined;
  export let isHome: boolean = false;

  let swiperEl: any;

  onMount(() => {
    if (browser) {
      //initialise swiperJs
      register();

      const swiperParams = {
        autoplay: {
          delay: 3000,
        },
        speed: 1000,
        slidesPerView: 1,
      };
      if (images && images.length > 0) {
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
      }
    }
  });
</script>

<div class="relative w-full">
  <div class="relative overflow-hidden bg-gray-100">
    {#if images && images.length > 0}
      <swiper-container
        init="false"
        bind:this={swiperEl}
        autoplay-disable-on-interaction={false}
      >
        {#each images as image, i}
          <swiper-slide>
            <div class="relative overflow-y-hidden bg-gray-100 hero-container">
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
                    height: 1175,
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
          </swiper-slide>
        {/each}
      </swiper-container>
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
    class="absolute bottom-0 left-0 w-full py-[35px] px-4 md:px-8 bg-white/80 z-20 md:flex items-center justify-between"
  >
    <Typography
      component="p"
      variant={isHome ? "title1" : "title2"}
      theme="text-blue">{title}</Typography
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
    @apply min-h-[calc(88vh-120px)];
    @apply md:min-h-[calc(100vh-119px)];
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
