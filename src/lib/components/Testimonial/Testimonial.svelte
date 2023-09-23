<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import logo from "$lib/assets/cb-initials.png";
  import Button from "$lib/components/Button/Button.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";

  export let testimonial: string = "";
  export let author: string = "";
</script>

<div
  class="relative bg-blue py-[60px] px-[30px] md:px-[40px] text-white overflow-hidden"
>
  <Container>
    <div class="max-w-[1100px]">
      <Typography variant="testimonial1" component="p">
        <blockquote class="indent-[-0.45em]">
          {testimonial}
        </blockquote>
      </Typography>
      <div class="mt-4">
        <Typography variant="sub1" component="p" uppercase>{author}</Typography>
      </div>

      <div class="mt-[52px]">
        <Button theme="tertiary" href="/about-us" label="Our testimonials" />
      </div>
    </div>
  </Container>

  <div
    class="absolute bottom-0 right-0 w-full pointer-events-none sm:w-auto opacity-20"
  >
    <Icon icon="cb-initials" width={400} height={385} />
  </div>
</div>
