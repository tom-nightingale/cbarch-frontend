<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/Seo/Seo.svelte";
  import Contact from "$lib/layouts/Contact/Contact.svelte";

  export let data: PageData;

  $: console.log("data", data);

  $: page = data.data;
</script>

<Seo
  seo={{
    title: page.seo?.metaTitle ? page.seo.metaTitle : "",
    description: page.seo?.metaDesc ? page.seo.metaDesc : "",
    keywords: page.seo?.keywords ? page.seo.keywords : undefined,
    shareGraphic: page.seo?.shareGraphic?.asset
      ? page.seo?.shareGraphic?.asset
      : undefined,
  }}
/>

<Contact
  introTitle={page.introTitle}
  introSubtitle={page.introSubtitle}
  introCopy={page.introCopyRaw}
  images={page.gallery}
  teamMembers={page.team}
/>
