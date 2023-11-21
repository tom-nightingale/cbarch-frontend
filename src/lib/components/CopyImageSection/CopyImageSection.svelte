<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Copy from "$lib/components/Copy/Copy.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import { onMount } from "svelte";
  import { inView, timeline } from "motion";

  export let title: string | null | undefined;
  export let subtitle: string | null | undefined;
  export let copy: any[];
  export let image: Image | undefined;
  export let reverse: boolean = false;
  export let linkLabel = "";
  export let linkUrl = "";

  let contentContainer: HTMLElement;
  let imageComponent: HTMLElement;
  let copyComponent: HTMLElement;

  let sequence: any[];

  onMount(() => {
    if (imageComponent) {
      sequence = [
        [
          [copyComponent],
          { opacity: 1, y: [20, 0] },
          { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] },
        ],
        [
          [imageComponent],
          { opacity: 1, x: reverse ? [-400, 0] : [400, 0] },
          { at: 0.15, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] },
        ],
      ];
    } else {
      sequence = [
        [
          [copyComponent],
          { opacity: 1, y: [20, 0] },
          { delay: 0.25, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] },
        ],
      ];
    }

    inView(
      contentContainer,
      () => {
        timeline(sequence, {});
      },
      { amount: 0.2 },
    );
  });
</script>

<Container>
  <div
    bind:this={contentContainer}
    class="overflow-hidden md:grid md:gap-16 {image && image.asset
      ? 'md:grid-cols-2'
      : 'max-w-screen-xl'}"
  >
    <div
      class="mb-12 md:mb-0 self-center {reverse && 'order-2'} opacity-0"
      bind:this={copyComponent}
    >
      <div class="grid gap-6 mb-8">
        <Typography component="p" variant="sub1" uppercase
          >{subtitle}</Typography
        >

        <Typography component="h1" variant="headline1">{@html title}</Typography
        >
      </div>

      <Copy content={copy} />

      {#if linkUrl}
        <div class="mt-12">
          <Button href={linkUrl} label={linkLabel} />
        </div>
      {/if}
    </div>

    {#if image && image.asset}
      <div bind:this={imageComponent} class="opacity-0">
        <Image
          {image}
          altText={image?.asset?.altText
            ? image?.asset?.altText
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
  </div>
</Container>
