<script lang="ts">
  import { onMount } from "svelte";
  import { animate, timeline } from "motion";

  let image: HTMLElement;
  let logo: HTMLElement;
  let text: HTMLElement;
  let email: HTMLElement;

  onMount(() => {
    console.log("hello motion");
    animate(
      image,
      {
        transform: "scale(1.05)",
      },
      { duration: 1.75 },
    );

    const sequence: any = [
      [
        logo,
        {
          y: -10,
          opacity: 1,
        },
      ],
      [
        text,
        {
          y: -5,
          opacity: 1,
        },
        { at: "-0.25" },
      ],
      [
        email,
        {
          y: -5,
          opacity: 1,
        },
        { at: "-0.225" },
      ],
    ];
    timeline(sequence, { duration: 1.75 });
  });
</script>

<main
  class="flex flex-col items-center overflow-hidden transition-all duration-200 justfiy-center xl:flex-row xl:flex-wrap"
>
  <div
    class="w-full min-h-[25vh] bg-white p-8 flex flex-col justify-center items-center xl:w-1/3 xl:min-h-screen transition-all duration-200 xl:p-20"
  >
    <img
      class="w-full max-w-lg mx-auto opacity-0"
      src="logo.jpg"
      loading="lazy"
      alt="Coleflax Bennett Architecture"
      bind:this={logo}
    />
    <p class="mt-6 opacity-0" bind:this={text}>New website coming soon</p>

    <a
      bind:this={email}
      class="mt-6 opacity-0 text-primary"
      href="mailto:jonathan@cbarch.co.uk">Get in touch</a
    >
  </div>
  <div
    class="relative w-full min-h-[75vh] xl:w-2/3 xl:min-h-screen transition-all duration-200 overflow-hidden"
  >
    <img
      src="landing-image.jpg"
      alt="Coleflax Bennett Architecture"
      loading="lazy"
      class="absolute top-0 bottom-0 left-0 right-0 object-cover object-center w-full h-full"
      bind:this={image}
    />
  </div>
</main>
