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
    <div class="min-h-[490px] bg-white">image</div>
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
