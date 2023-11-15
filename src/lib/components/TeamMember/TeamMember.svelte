<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Copy from "$lib/components/Copy/Copy.svelte";

  export let image: Image | undefined;
  export let name: string | null | undefined;
  export let email: string | null | undefined;
  export let phone: string | null | undefined;
  export let bio: any[];
</script>

<div class="bg-blue-light p-[30px]">
  <div class="grid lg:grid-cols-2">
    <div class="bg-white">
      {#if image && image.asset}
        <Image
          {image}
          altText={image?.asset?.altText
            ? image?.asset?.altText
            : "Coleflax Bennett Architecture"}
          lgImg={true}
          lgSizes={{
            lg: {
              width: 1000,
              height: 1200,
            },
            md: {
              width: 800,
              height: 1200,
            },
            sm: {
              width: 800,
              height: 1000,
            },
            xs: {
              width: 768,
              height: 500,
            },
            fallback: {
              width: 768,
              height: 768,
            },
          }}
          pictureClasses="block object-center object-cover self-center"
        />
      {/if}
    </div>

    <div class="bg-blue p-[25px] text-white grid">
      <div class="mt-auto">
        <Typography component="h1" variant="headline1" theme="mb-2"
          >{name}</Typography
        >
        <a href="mailto:{email}">
          <Typography component="p" variant="sub1">{email}</Typography>
        </a>
        <a href="tel:{phone && phone.replaceAll(' ', '')}">
          <Typography component="p" variant="sub1">{phone}</Typography>
        </a>
      </div>
    </div>
  </div>
  <div class="mt-[43px]">
    <Copy content={bio} />
  </div>
</div>
