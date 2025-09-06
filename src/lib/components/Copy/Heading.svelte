<script>
  import Typography from "$lib/components/Typography/Typography.svelte";
  export let heading = "";

  export let portableText;
  export let style = "h1";

  if (portableText) {
    heading = portableText.value.children[0].text;
    style = portableText.value.style;
  }
</script>

<Typography component={style} variant={style}>{heading}</Typography>
