<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import FeaturedProject from "./FeaturedProject.svelte";
  import { mockImage } from "$lib/data/mockImage";
</script>

<Meta title="Components/FeaturedProject" component={FeaturedProject} />

<Template let:args>
  <FeaturedProject {...args} />
</Template>

<Story
  name="Default"
  args={{
    images: [mockImage, mockImage],
  }}
/>
