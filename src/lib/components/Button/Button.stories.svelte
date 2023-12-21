<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
  <Button {...args} />
</Template>

<Story
  name="Primary"
  args={{
    label: "Primary button",
    theme: "primary",
  }}
/>

<Story
  name="Secondary"
  args={{
    label: "Secondary button",
    theme: "secondary",
  }}
/>
