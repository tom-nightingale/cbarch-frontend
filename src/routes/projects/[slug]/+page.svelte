<script lang="ts">
  import type { PageData } from "./$types";
  import Seo from "$lib/components/Seo/Seo.svelte";
  import Project from "$lib/layouts/Projects/Single.svelte";

  export let data: PageData;

  $: project = data.data;
</script>

<Seo
  seo={{
    title: project.seo?.metaTitle
      ? `${project.seo.metaTitle} | Projects | Coleflax Bennett Architecture`
      : "",
    description: project.seo?.metaDesc ? project.seo.metaDesc : "",
    keywords: project.seo?.keywords ? project.seo.keywords : undefined,
    shareGraphic: project.seo?.shareGraphic?.asset
      ? project.seo?.shareGraphic?.asset
      : undefined,
  }}
/>

<Project
  heroImages={project.heroImages &&
    project.heroImages.length > 0 &&
    project.heroImages}
  title={`${project.title}`}
  location={project.projectLocation}
  value={project.projectValue}
  involvement={project.projectInvolvement}
  gallery={project.gallery}
  copy={project.projectCopyRaw}
  copyImage={project.projectCopyImage}
/>
