<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Gallery from "./Gallery.svelte";
  import { mockGallery } from "$lib/data/mockImage";
</script>

<Meta title="Components/Gallery" component={Gallery} />

<Template let:args>
  <Gallery {...args} />
</Template>

<Story
  name="Default"
  args={{
    images: mockGallery,
  }}
/>
