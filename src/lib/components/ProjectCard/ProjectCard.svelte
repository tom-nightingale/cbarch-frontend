<script lang="ts">
  import Image from "$lib/components/Image/Image.svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Typography from "$lib/components/Typography/Typography.svelte";

  export let image: ImageType[] | null | undefined;
  export let title: string | null | undefined;
  export let location: string | null | undefined;
  export let slug: string | null | undefined;
</script>

<a href={`/projects/${slug}`} class="relative block">
  {#if image}
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
      pictureClasses="block overflow-hidden"
      imageClasses="object-cover object-center h-full hover:scale-105 transition duration-500"
    />
  {/if}

  <div class="absolute bottom-0 left-0 w-full py-5 bg-white/80 px-7 text-blue">
    <div class="max-w-sm">
      <Typography component="h3" variant="project1" uppercase>
        {@html title && location
          ? `${title}, <span class="block">${location}</span>`
          : `${title}`}
      </Typography>
    </div>
  </div>
</a>
