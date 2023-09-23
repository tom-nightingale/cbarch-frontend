<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Button from "$lib/components/Button/Button.svelte";

  export let subtitle = "Get in touch";
  export let title = "Interested in working with us?";
  export let text =
    "We are dedicated to bringing your ideas to fruition through meticulous planning, innovative concepts and expert craftsmanship. Let's embark on this exciting journey together and create spaces that inspire and endure. Contact us today to start the conversation - your dream project awaits our transformative touch.";
</script>

<div class="text-white bg-blue">
  <Container>
    <div
      class="p-[40px] text-center max-w-[730px] md:px-0 md:py-[136px] mx-auto"
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
