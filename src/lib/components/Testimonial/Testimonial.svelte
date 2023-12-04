<script lang="ts">
  import { onMount } from "svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import { inView, animate } from "motion";

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
  class="relative bg-blue py-[60px] mt-[45px] lg:mt-[100px] px-[30px] md:px-[40px] text-white overflow-hidden"
>
  <Container>
    <div
      class="max-w-[1100px] 2xl:max-w-[1300px] opacity-0 transform translate-y-[20px]"
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
    </div>
  </Container>

  <div
    class="absolute bottom-0 right-0 w-full pointer-events-none sm:w-auto opacity-20"
  >
    <img
      loading="lazy"
      src="cb-initials.png"
      alt="Coleflax Bennett Architecture"
      class="object-cover object-center w-full h-full"
    />
  </div>
</div>
