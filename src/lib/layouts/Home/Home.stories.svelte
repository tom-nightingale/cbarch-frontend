<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Home from "./Home.svelte";
</script>

<Meta title="Layouts/Home" component={Home} />

<Template let:args>
  <Home {...args} />
</Template>

<Story name="Primary" args={{}} />
