<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/Seo/Seo.svelte";
  import Team from "$lib/layouts/Team/Team.svelte";

  export let data: PageData;
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

<Team
  teamTitle={page.teamTitle}
  teamSubtitle={page.teamSubtitle}
  team={page.team}
/>
