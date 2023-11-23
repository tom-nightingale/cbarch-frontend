<script lang="ts">
  import { onMount } from "svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import { inView, animate, stagger } from "motion";

  export let testimonial: string | null | undefined;
  export let author: string | null | undefined;

  let textContainer: HTMLElement;

  onMount(() => {
    inView(textContainer, () => {
      animate(
        textContainer,
        { opacity: 1, y: [20, 0] },
        {
          duration: 1,
          easing: [0.17, 0.55, 0.55, 1],
        },
      );
    });
  });
</script>

<div
  class="relative bg-blue py-[60px] px-[30px] md:px-[40px] text-white overflow-hidden"
>
  <Container>
    <div
      class="max-w-[1100px] opacity-0 transform translate-y-[20px]"
      bind:this={textContainer}
    >
      <Typography variant="testimonial1" component="p">
        <blockquote class="indent-[-0.45em]">
          {testimonial}
        </blockquote>
      </Typography>
      <div class="mt-4">
        <Typography variant="sub1" component="p" uppercase>{author}</Typography>
      </div>

      <div class="mt-[52px]">
        <Button theme="tertiary" href="/about" label="Our testimonials" />
      </div>
    </div>
  </Container>

  <div
    class="absolute bottom-0 right-0 w-full pointer-events-none sm:w-auto opacity-20"
  >
    <Icon icon="cb-initials" width={400} height={385} />
  </div>
</div>
