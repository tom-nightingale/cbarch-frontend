<script lang="ts">
  import { page } from "$app/stores";
  import Container from "$lib/components/Container/Container.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";

  $: console.log($page.error);
</script>

<Container>
  <div class="flex flex-col gap-8 p-4 prose md:w-1/2 md:p-8 md:mx-auto">
    <Typography component="h2" variant="headline2" theme="text-blue"
      >{$page && $page.error && $page.error.message}</Typography
    >

    {#if $page && $page?.error?.message === "Not Found"}
      <Typography component="p">
        It looks like the page your are looking for no longer exists. Please go
        back to the <a href="/">homepage.</a>
      </Typography>
    {/if}
  </div>
</Container>

<WorkWithUs />
