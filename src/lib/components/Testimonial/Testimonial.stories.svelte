<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Testimonial from "./Testimonial.svelte";
</script>

<Meta title="Components/Testimonial" component={Testimonial} />

<Template let:args>
  <Testimonial {...args} />
</Template>

<Story name="Default" args={{}} />
