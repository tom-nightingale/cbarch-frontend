<script lang="ts">
  import { onMount } from "svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import { inView, animate, stagger } from "motion";

  export let subtitle = "Get in touch";
  export let title = "Interested in working with us?";
  export let text =
    "If you would like to experience the difference that thoughtful, innovative, and client centric design can make, then please get in touch to discuss your project.";

  let contentContainer: HTMLElement;

  onMount(() => {
    inView(
      contentContainer,
      () => {
        animate(
          contentContainer,
          { opacity: 1, y: [20, 0] },
          {
            delay: stagger(0.2),
            duration: 1,
            easing: [0.17, 0.55, 0.55, 1],
          },
        );
      },
      { amount: 0.15 },
    );
  });
</script>

<div class="text-white bg-blue">
  <Container>
    <div
      class="p-[40px] text-center max-w-[610px] md:px-0 md:py-[136px] mx-auto opacity-0 translate-y-[20px]"
      bind:this={contentContainer}
    >
      <div class="mb-4">
        <Typography variant="sub1" uppercase component="p"
          >{subtitle}</Typography
        >
      </div>

      <Typography variant="headline2" component="p">{title}</Typography>

      <div class="mt-[40px]">
        <Typography variant="body2" component="p">{text}</Typography>
      </div>

      <div class="mt-12">
        <Button theme="tertiary" label="Get in touch" href="/contact" />
      </div>
    </div>
  </Container>
</div>
