<script lang="ts">
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import CopyImageSection from "$lib/components/CopyImageSection/CopyImageSection.svelte";
  import Gallery from "$lib/components/Gallery/Gallery.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Form from "$lib/components/Form/Form.svelte";

  export let introTitle: string | null | undefined;
  export let introSubtitle: string | null | undefined;
  export let introCopy: any[];
  export let images: ImageType[] | null | undefined;
  export let teamMembers: any;
</script>

<div class="px-4 py-12 pb-0 md:py-[70px]">
  <CopyImageSection
    title={introTitle}
    subtitle={introSubtitle}
    copy={introCopy}
  />
</div>

<Container>
  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-[100px] px-4">
    <div class="bg-blue-light p-8 lg:py-[100px] lg:px-[85px]">
      <Form />
    </div>

    {#if teamMembers && teamMembers.length > 0}
      <div class="mt-10 md:mt-[80px] grid gap-[59px] self-start">
        {#each teamMembers as item, i}
          <div class="">
            <Typography component="h2" variant="headline2"
              ><span>Contact {item.name.split(" ")[0]}</span></Typography
            >
            <a href="mailto:{item.email}">
              <Typography component="p" variant="sub1">{item.email}</Typography>
            </a>
            <a href="tel:{item.phone.replaceAll(' ', '')}">
              <Typography component="p" variant="sub1">{item.phone}</Typography>
            </a>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</Container>

{#if images && images.length > 0}
  <Gallery {images} />
{/if}

<WorkWithUs />
