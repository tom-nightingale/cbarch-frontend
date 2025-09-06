<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { mockGallery, mockImage } from "$lib/data/mockImage";
  import Default from "./Default.svelte";
</script>

<Meta title="Layouts/Home" component={Default} />

<Template let:args>
  <Default {...args} />
</Template>

<Story
  name="Primary"
  args={{
    heroImages: [mockImage, mockImage, mockImage, mockImage],
    heroTitle: "From inception, to completion",
    testimonial:
      "This is a testimonial by one of your clients. It will explain how pleased they are with your service and entice the reader to learn more about your business...",
    author: "Mr Smith, Company Name",
    featuredProjectImages: [mockImage, mockImage],
    galleryImages: mockGallery,
  }}
/>
