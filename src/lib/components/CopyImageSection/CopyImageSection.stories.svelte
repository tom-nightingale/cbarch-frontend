<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import CopyImageSection from "./CopyImageSection.svelte";
  import { mockImage } from "$lib/data/mockImage";
</script>

<Meta title="Components/FeaturedProject" component={CopyImageSection} />

<Template let:args>
  <CopyImageSection {...args} />
</Template>

<Story
  name="Default"
  args={{
    images: [mockImage, mockImage],
  }}
/>
