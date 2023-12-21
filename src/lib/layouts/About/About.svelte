<script lang="ts">
  import { onMount } from "svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Copy from "$lib/components/Copy/Copy.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import { inView, animate, stagger } from "motion";

  export let firstSubtitle: string | null | undefined;
  export let firstTitle: string | null | undefined;
  export let firstCopy: any[];
  export let secondSubtitle: string | null | undefined;
  export let secondTitle: string | null | undefined;
  export let secondCopy: any[];
  export let copyImage: Image | undefined | null;
  export let thirdSubtitle: string | null | undefined;
  export let thirdTitle: string | null | undefined;
  export let thirdCopy: any[];
  export let thirdCopyImage: Image | undefined | null;

  let contentContainer: HTMLElement;
  let imageContainer: HTMLElement;

  onMount(() => {
    inView(
      contentContainer,
      () => {
        animate(
          contentContainer,
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
  });
</script>

<Container>
  <div class="bg-blue-light">
    <div
      class="grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 opacity-0 transform translate-y-[20px]"
      bind:this={contentContainer}
    >
      <div class="flex flex-col justify-center col-span-1 gap-12">
        <div>
          <div class="grid gap-6 mb-8">
            <Typography component="p" variant="sub1" uppercase
              >{firstSubtitle}</Typography
            >

            <Typography component="h1" variant="headline1"
              >{firstTitle}</Typography
            >
          </div>

          <Copy content={firstCopy} />
        </div>

        <div>
          <div class="grid gap-6 mb-8">
            <Typography component="p" variant="sub1" uppercase
              >{secondSubtitle}</Typography
            >

            <Typography component="h1" variant="headline1"
              >{secondTitle}</Typography
            >
          </div>

          <Copy content={secondCopy} />
        </div>
      </div>

      <div class="col-span-1 md:p-4" bind:this={imageContainer}>
        <Image
          image={copyImage}
          altText={copyImage?.asset?.altText
            ? copyImage?.asset?.altText
            : "Coleflax Bennett Architecture"}
          lgImg={true}
          lgSizes={{
            lg: {
              width: 1400,
              height: 900,
            },
            md: {
              width: 1000,
              height: 1400,
            },
            sm: {
              width: 800,
              height: 1600,
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
          pictureClasses="block md:sticky md:top-36"
          imageClasses="w-full"
        />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2">
    <div class="flex flex-col justify-center col-span-1 gap-4">
      <div>
        <div class="grid gap-6 mb-8">
          <Typography component="p" variant="sub1" uppercase
            >{thirdSubtitle}</Typography
          >

          <Typography component="h1" variant="headline1"
            >{thirdTitle}</Typography
          >
        </div>

        <Copy content={thirdCopy} />
      </div>
    </div>

    <div class="col-span-1 md:p-4 md:-order-1">
      <Image
        image={thirdCopyImage}
        altText={thirdCopyImage?.asset?.altText
          ? thirdCopyImage?.asset?.altText
          : "Coleflax Bennett Architecture"}
        lgImg={true}
        lgSizes={{
          lg: {
            width: 1400,
            height: 900,
          },
          md: {
            width: 1000,
            height: 1400,
          },
          sm: {
            width: 800,
            height: 1600,
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
        pictureClasses="block self-center mt-12 md:mt-0 md:sticky md:top-40"
        imageClasses="w-full"
      />
    </div>
  </div>
</Container>

<WorkWithUs />
