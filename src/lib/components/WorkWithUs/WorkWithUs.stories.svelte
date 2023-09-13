<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import WorkWithUs from "./WorkWithUs.svelte";
</script>

<Meta title="Components/WorkWithUs" component={WorkWithUs} />

<Template let:args>
  <WorkWithUs {...args} />
</Template>

<Story name="Default" />
