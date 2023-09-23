<script lang="ts">
  import { onMount } from "svelte";
  import { animate, timeline } from "motion";
  import Image from "$lib/components/Image/Image.svelte";
  import Seo from "$lib/components/Seo/Seo.svelte";
  import type { PageData } from "../$types";

  let image: HTMLElement;
  let logo: HTMLElement;
  let text: HTMLElement;
  let email: HTMLElement;

  export let data: PageData;

  onMount(() => {
    animate(
      image,
      {
        transform: "scale(1.05)",
      },
      { duration: 1.75 },
    );

    const sequence: any = [
      [
        logo,
        {
          y: -10,
          opacity: 1,
        },
      ],
      [
        text,
        {
          y: -5,
          opacity: 1,
        },
        { at: "-0.25" },
      ],
      [
        email,
        {
          y: -5,
          opacity: 1,
        },
        { at: "-0.225" },
      ],
    ];
    timeline(sequence, { duration: 1.75 });
  });
</script>

<Seo
  seo={{
    metaTitle: data?.seo?.metaTitle,
    metaDesc: data?.seo?.metaDesc,
    keywords: data?.seo?.keywords,
    shareGraphic: {
      src: data?.seo?.shareGraphic?.asset?.url
        ? data?.seo?.shareGraphic?.asset?.url
        : "",
      alt: data?.seo?.metaTitle ? data?.seo?.metaTitle : "",
    },
  }}
/>

<main
  class="flex flex-col items-center justify-center overflow-hidden transition-all duration-200 xl:flex-row xl:flex-wrap"
>
  <div
    class="w-full min-h-[25vh] bg-white p-8 pt-12 flex flex-col justify-center items-center xl:w-1/3 xl:min-h-screen transition-all duration-200 xl:p-20"
  >
    <img
      class="w-full max-w-lg mx-auto opacity-0"
      src="logo.jpg"
      loading="lazy"
      alt="Coleflax Bennett Architecture"
      bind:this={logo}
    />
    <p class="mt-6 opacity-0" bind:this={text}>New website coming soon</p>

    <a
      bind:this={email}
      class="mt-6 opacity-0 text-primary"
      href="mailto:jonathan@cbarch.co.uk,matthew@cbarch.co.uk">Get in touch</a
    >
  </div>
  {#if data.landingImage}
    <div
      class="relative w-full min-h-[75vh] xl:w-2/3 xl:min-h-screen transition-all duration-200 overflow-hidden"
      bind:this={image}
    >
      <Image
        image={data.landingImage.asset?.url}
        altText={data.title ? data.title : "Coleflax Bennett Architecture"}
        lgImg={true}
        imageClasses="absolute top-0 bottom-0 left-0 right-0 h-full bg-gray-200 object-cover object-center w-full h-full"
        lgSizes={{
          lg: {
            width: 1500,
            height: 1500,
          },
          md: {
            width: 800,
            height: 800,
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
      />
    </div>
  {/if}
</main>
