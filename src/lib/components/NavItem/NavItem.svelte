<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  export let label = "Home";
  export let href = "/";
</script>

<Typography component="p" theme="nav1">
  <a {href} class="text-blue">
    {label}
  </a>
</Typography>
