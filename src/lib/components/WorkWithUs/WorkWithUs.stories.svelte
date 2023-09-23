<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import WorkWithUs from "./WorkWithUs.svelte";
</script>

<Meta title="Components/WorkWithUs" component={WorkWithUs} />

<Template let:args>
  <WorkWithUs {...args} />
</Template>

<Story
  name="Default"
  args={{
    subtitle: "Get in touch",
    title: "Interested in working with us?",
    text: "We are dedicated to bringing your ideas to fruition through meticulous planning, innovative concepts and expert craftsmanship. Let's embark on this exciting journey together and create spaces that inspire and endure. Contact us today to start the conversation - your dream project awaits our transformative touch.",
  }}
/>
