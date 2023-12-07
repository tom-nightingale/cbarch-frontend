<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Testimonial from "./Testimonial.svelte";
</script>

<Meta title="Components/Testimonial" component={Testimonial} />

<Template let:args>
  <Testimonial {...args} />
</Template>

<Story
  name="Default"
  args={{
    testimonial:
      "This is a testimonial by one of your clients. It will explain how pleased they are with your service and entice the reader to learn more about your business...",
    author: "Mr Smith, Company Name",
  }}
/>
