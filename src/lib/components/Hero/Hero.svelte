<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  export let image;
  export let altText = "";
  export let title = "From inception, to completion.";
</script>

<div class="relative w-full min-h-screen">
  <div class="relative min-h-screen bg-gray-100">
    <img
      class="absolute top-0 bottom-0 left-0 right-0 object-cover object-center w-full h-full"
      src="http://placedog.net/1000"
      alt={altText}
    />
  </div>
  <div class="absolute bottom-0 left-0 w-full py-[35px] px-[25px] bg-white/80">
    <Typography component="p" variant="title1" theme="text-blue"
      >{title}</Typography
    >

    <div class="mt-[18px]">
      <Button label="Our Projects" theme="secondary" href="/projects" />
    </div>
  </div>
</div>
