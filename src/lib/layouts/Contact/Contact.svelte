<script lang="ts">
  import { onMount } from "svelte";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import CopyImageSection from "$lib/components/CopyImageSection/CopyImageSection.svelte";
  import Gallery from "$lib/components/Gallery/Gallery.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Form from "$lib/components/Form/Form.svelte";
  import { inView, timeline } from "motion";

  export let introTitle: string | null | undefined;
  export let introSubtitle: string | null | undefined;
  export let introCopy: any[];
  export let images: ImageType[] | null | undefined;
  export let teamMembers: any;

  let contentContainer: HTMLElement;
  let formContainer: HTMLElement;
  let teamContainer: HTMLElement;
  let sequence: any[];

  onMount(() => {
    const team = teamContainer.querySelectorAll(".team-member");
    sequence = [
      [
        formContainer,
        { opacity: 1, y: [20, 0] },
        { at: 0.5, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] },
      ],
      [
        team,
        { opacity: 1, y: [20, 0] },
        { at: 0.8, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] },
      ],
    ];
    inView(contentContainer, () => {
      timeline(sequence, {});
    });
  });
</script>

<div class="px-4 py-12 pb-0 md:py-[70px]" bind:this={contentContainer}>
  <CopyImageSection
    title={introTitle}
    subtitle={introSubtitle}
    copy={introCopy}
    image={undefined}
  />
</div>

<Container>
  <div
    class="grid grid-cols-1 md:grid-cols-2 md:gap-[100px] px-4 mt-12 md:mt-0"
  >
    <div
      class="bg-blue-light p-8 lg:py-[100px] lg:px-[85px] opacity-0"
      bind:this={formContainer}
    >
      <Form />
    </div>

    {#if teamMembers && teamMembers.length > 0}
      <div
        class="mt-10 md:mt-[80px] grid gap-[59px] self-start"
        bind:this={teamContainer}
      >
          <div class="grid gap-2 opacity-0 team-member grid-col-1">
            <Typography component="h2" variant="headline2"
              ><span>Contact Office</span></Typography
            >

            <div class="flex items-center gap-4">
              Telephone:
              <a
                href="tel:01157956707"
                class="hover:text-blue"
              >
                <Typography component="p" variant="sub1">0115 7956707</Typography>
              </a>
            </div>
            
            <div class="flex items-center gap-4 mb-8">
              Email: 
              <a href="mailto:enquiries@cbarch.co.uk" class="hover:text-blue">
                <Typography component="p" variant="sub1">enquiries@cbarch.co.uk</Typography>
              </a>
            </div>

            <Typography component="p" variant="sub1">16 Commerce Square<br />Lace Market<br />Nottingham<br />NG1 1HS</Typography>

          </div>
      </div>
    {/if}
  </div>
</Container>

{#if images && images.length > 0}
  <Gallery {images} removeMarginBottom />
{/if}