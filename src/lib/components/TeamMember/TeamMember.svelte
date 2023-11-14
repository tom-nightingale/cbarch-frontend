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
  <div class="grid grid-cols-2">
    <div class="">image</div>
    <div class="">
      <Typography component="h1" variant="headline1">{name}</Typography>
      <Typography component="p" variant="sub1">{name}</Typography>
      <Typography component="p" variant="sub1">{name}</Typography>
    </div>
  </div>
</div>
