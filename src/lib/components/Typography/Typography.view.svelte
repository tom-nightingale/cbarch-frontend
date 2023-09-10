<script lang="ts">
  import Typography from "./Typography.svelte";
  export let underline = false;
  export let bold = false;
  export let italic = false;
  export let spaced = false;
</script>

<div class="type-preview">
  <Typography
    variant="headline1"
    component="h1"
    {underline}
    {bold}
    {italic}
    {spaced}>headline1</Typography
  >

  <Typography
    variant="headline2"
    component="h2"
    {underline}
    {bold}
    {italic}
    {spaced}>headline2</Typography
  >

  <Typography
    variant="headline3"
    component="h3"
    {underline}
    {bold}
    {italic}
    {spaced}>headline3</Typography
  >

  <Typography
    variant="headline4"
    component="h4"
    {underline}
    {bold}
    {italic}
    {spaced}>headline4</Typography
  >

  <Typography
    variant="headline5"
    component="h5"
    {underline}
    {bold}
    {italic}
    {spaced}>headline5</Typography
  >

  <Typography
    variant="headline6"
    component="h6"
    {underline}
    {bold}
    {italic}
    {spaced}>headline6</Typography
  >

  <Typography variant="body1" component="p" {underline} {bold} {italic} {spaced}
    >body1</Typography
  >

  <Typography variant="body2" component="p" {underline} {bold} {italic} {spaced}
    >body2</Typography
  >

  <Typography
    variant="sub1"
    component="p"
    {underline}
    {bold}
    {italic}
    {spaced}
    uppercase={true}>sub1</Typography
  >
</div>

<style>
  :global(.type-preview > *) {
    padding: 8px;
    display: flex;
    flex-direction: column;
  }
</style>
