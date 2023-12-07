<script lang="ts">
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import CopyImageSection from "$lib/components/CopyImageSection/CopyImageSection.svelte";
  import type Image from "$lib/components/Image/Image.svelte";

  export let introTitle: string | null | undefined;
  export let introSubtitle: string | null | undefined;
  export let introCopy: any[];
  export let copyTitle: string | null | undefined;
  export let copySubtitle: string | null | undefined;
  export let copyImage: Image | undefined;
  export let copy: any[];
</script>

<div class="px-4 py-12 md:py-[70px]">
  <CopyImageSection
    title={introTitle}
    subtitle={introSubtitle}
    copy={introCopy}
  />
</div>

<div class="px-4 mb-[70px]">
  <CopyImageSection
    title={copyTitle}
    subtitle={copySubtitle}
    {copy}
    image={copyImage}
    reverse
  />
</div>

<WorkWithUs />
