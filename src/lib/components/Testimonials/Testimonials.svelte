<script lang="ts">
  import { onMount } from "svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import { inView, animate } from "motion";
  import Glide from "@glidejs/glide";

  export let testimonials: any[] = [];

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

    //Initialise glide slider.
    new Glide(".testimonial-glide", {
      type: "carousel",
      animationDuration: 1000,
      perView: 1,
      gap: 20,
      autoplay: false,
    }).mount();
  });

  let randomTestimonials = testimonials
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
</script>

<div
  class="relative bg-blue py-[60px] mt-[45px] lg:mt-[100px] px-[30px] md:px-[40px] text-white overflow-hidden"
>
  <Container>
    <div
      class="opacity-0 transform translate-y-[20px]"
      bind:this={textContainer}
    >
      <div class="relative testimonial-glide">
        <div data-glide-el="track" class="glide__track">
          <div class="glide__slides">
            {#each randomTestimonials as item, i}
              <div class="m-auto glide__slide">
                <div class="max-w-[900px] 2xl:max-w-[1100px]">
                  <Typography variant="testimonial1" component="p">
                    <blockquote class="indent-[-0.45em]">
                      {item.testimonial}
                    </blockquote>
                  </Typography>
                  <div class="mt-4">
                    <Typography variant="sub1" component="p" uppercase
                      >{item.testimonialAuthor}</Typography
                    >
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </Container>

  <div
    class="absolute bottom-0 right-0 w-40 pointer-events-none sm:w-80 opacity-20"
  >
    <img
      loading="lazy"
      src="cb-initials.png"
      alt="Coleflax Bennett Architecture"
      class="object-cover object-center w-full h-full"
    />
  </div>
</div>
