<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Container from "$lib/components/Container/Container.svelte";

  export let regNumber = "13263042";
  export let email = "enquiries@cbarch.co.uk";

  let year = new Date().getFullYear();
</script>

<Container>
  <div
    class="py-[40px] px-[30px] bg-white text-center md:flex md:flex-wrap md:justify-between"
  >
    <div class="mb-4 lg:mb-0 md:flex md:flex-wrap md:items-center md:gap-2">
      <Typography variant="sub1" component="p"
        >&copy; Coleflax Bennett Architecture {year}.
      </Typography>

      <Typography variant="sub1" component="p">All rights reserved.</Typography>

      <Typography variant="sub1" component="p"
        >Company Registered Number: {regNumber}
      </Typography>
    </div>

    <div
      class="flex flex-col flex-wrap items-center justify-center gap-4 xs:flex-row"
    >
      <Typography variant="sub1" component="p"
        ><a class="hover:text-blue" href={`mailto:${email}`}>{email}</a>
      </Typography>
      <span class="hidden xs:inline-block w-[4px] h-[4px] rounded-full bg-blue"
        >&nbsp;</span
      >
      <Typography variant="sub1" component="p"
        ><a class="hover:text-blue" href="/">Privacy Policy</a>
      </Typography>
    </div>
  </div>
</Container>
