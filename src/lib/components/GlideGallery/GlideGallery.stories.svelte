<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import GlideGallery from "./GlideGallery.svelte";
  import { mockGallery } from "$lib/data/mockImage";
</script>

<Meta title="Components/GlideGallery" component={GlideGallery} />

<Template let:args>
  <GlideGallery {...args} />
</Template>

<Story
  name="Default"
  args={{
    images: mockGallery,
  }}
/>
