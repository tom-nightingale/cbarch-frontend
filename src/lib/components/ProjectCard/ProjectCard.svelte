<script lang="ts">
  import Image from "$lib/components/Image/Image.svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Typography from "$lib/components/Typography/Typography.svelte";

  export let image: ImageType[] | null | undefined;
  export let title: string | null | undefined;
  export let location: string | null | undefined;
  export let slug: string | null | undefined;
</script>

<a href={`/projects/${slug}`} class="relative block overflow-hidden group">
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

  <div class="absolute bottom-0 left-0 w-full py-5 transition-all duration-500 group-hover:bg-white/0 bg-white/80 px-7 text-blue">
    <div class="max-w-sm">
      <Typography component="h3" variant="project1 group-hover:text-white transition-all duration-500" uppercase>
        {@html title && location
          ? `${title}, <span class="block transition-all duration-500 group-hover:text-white">${location}</span>`
          : `${title}`}
      </Typography>
    </div>
  </div>
</a>
