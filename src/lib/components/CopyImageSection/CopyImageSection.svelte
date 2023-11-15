<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Copy from "$lib/components/Copy/Copy.svelte";
  import Button from "$lib/components/Button/Button.svelte";

  export let title: string | null | undefined;
  export let subtitle: string | null | undefined;
  export let copy: any[];
  export let image: Image | undefined;
  export let reverse: boolean = false;
  export let linkLabel = "";
  export let linkUrl = "";
</script>

<Container>
  <div
    class="md:grid md:gap-16 {image && image.asset
      ? 'md:grid-cols-2'
      : 'max-w-screen-xl'}"
  >
    <div class="mb-12 md:mb-0 self-center {reverse && 'order-2'}">
      <div class="grid gap-6 mb-8 grid-col">
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
    {/if}
  </div>
</Container>
