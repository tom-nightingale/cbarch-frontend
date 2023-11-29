<script lang="ts">
  import Container from "$lib/components/Container/Container.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import { onMount } from "svelte";
  import { inView, animate, stagger } from "motion";

  export let name: string | null | undefined = "White Post Street";
  export let images: ImageType[] | any[] | boolean = [];
  export let slug: string | null | undefined = "";

  let titleContainer: HTMLElement;
  let imageContainer: HTMLElement;

  onMount(() => {
    inView(
      titleContainer,
      () => {
        animate(
          titleContainer,
          { opacity: 1, y: [20, 0] },
          {
            delay: stagger(0.2),
            duration: 1,
            easing: [0.17, 0.55, 0.55, 1],
          },
        );
      },
      { amount: 0.15 },
    );
    const projectImages = imageContainer.querySelectorAll("img");

    inView(
      projectImages,
      () => {
        animate(
          projectImages,
          { opacity: 1, y: [20, 0] },
          {
            delay: stagger(0.2),
            duration: 1,
          },
        );
      },
      { amount: 0.15 },
    );
  });
</script>

<div class="bg-blue-light px-4 py-[45px]">
  <Container>
    <div
      bind:this={titleContainer}
      class="opacity-0 transform translate-y-[20px]"
    >
      <Typography component="p" variant="sub1" uppercase>Our work</Typography>

      <div class="flex flex-col gap-4 mb-8 lg:flex-row lg:items-start">
        <Typography component="h3" variant="headline1"
          >Featured Project - {name}</Typography
        >

        <div class="lg:ml-auto">
          <Button
            href={`/projects/${slug}`}
            label="View project"
            theme="secondary"
          />
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2"
      bind:this={imageContainer}
    >
      {#if images && images.length > 0}
        {#each images as image, i}
          <a
            href={`/projects/${slug}`}
            class="overflow-hidden aspect-square lg:aspect-auto"
          >
            <Image
              {image}
              altText={image?.asset?.altText
                ? image?.asset?.altText
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
              pictureClasses="block aspect-square lg:aspect-auto transition-all duration-300 hover:scale-[1.05]"
              imageClasses="opacity-0 translate-y-[20px]"
            />
          </a>
        {/each}
      {/if}
    </div>
  </Container>
</div>
