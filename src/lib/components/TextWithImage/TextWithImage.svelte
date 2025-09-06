<script lang="ts">
  import Container from "$lib/components/Container/Container.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import type { Maybe, ImageBlock, Link } from "$lib/gql/gen/codegen";
  import Copy from "$lib/components/Copy/Copy.svelte";
  import Button from "$lib/components/Button/Button.svelte";

  export let subtitle: Maybe<string>;
  export let title: Maybe<string>;
  export let content: any;
  export let image: Maybe<ImageBlock>;
  export let applyBackground: Maybe<boolean> = false;
  export let reverseLayout: Maybe<boolean> = false;
  export let links: Maybe<Maybe<Link>[]> = [];
  export let titleLevel: Maybe<string> = "h1";
</script>

<Container>
  <div
    class="grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2"
    class:bg-blue-light={applyBackground}
  >
    <div class="flex flex-col justify-center col-span-1 gap-4">
      <div>
        <div class="grid gap-6 mb-8">
          <Typography component="p" variant="sub1" uppercase
            >{subtitle}</Typography
          >

          <Typography component={titleLevel} variant="headline1"
            >{@html title}</Typography
          >
        </div>

        <Copy {content} />

        {#if links && links.length > 0}
          <div class="my-12">
            {#each links as link}
              <Button href={link?.href} label={link?.label} />
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <div
      class="col-span-1 md:p-4 md:-order-1 {reverseLayout
        ? 'md:-order-1'
        : 'md:order-2'}"
      class:order-2={reverseLayout}
    >
      <Image
        image={image?.image}
        altText={image?.image?.asset?.altText
          ? image?.image?.asset?.altText
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
            width: 389,
            height: 389,
          },
        }}
        pictureClasses="block self-center mt-12 md:mt-0 md:sticky md:top-40"
        imageClasses="w-full"
      />
    </div>
  </div>
</Container>
