<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Header from "./Header.svelte";
</script>

<Meta title="Components/Header" component={Header} />

<Template let:args>
  <Header {...args} />
</Template>

<Story name="Default" />
