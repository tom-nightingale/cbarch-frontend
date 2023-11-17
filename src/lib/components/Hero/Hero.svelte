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

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
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
            <div class="bg-gray-100">
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
                imageClasses="object-cover object-center w-full"
              />
            </div>
          </swiper-slide>
        {/each}
      </swiper-container>
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
      <div class="mt-[18px]">
        <Button label="Our Projects" theme="secondary" href="/projects" />
      </div>
    {/if}
  </div>
</div>
