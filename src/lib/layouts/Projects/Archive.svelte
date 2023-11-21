<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import ProjectCard from "$lib/components/ProjectCard/ProjectCard.svelte";

  export let title: string | null | undefined;
  export let projects: any;
</script>

<Container>
  <div class="px-4 py-[55px]">
    <Typography component="h1" variant="title1" theme="text-blue"
      >{title}</Typography
    >
  </div>
</Container>

<div class="px-4 py-16 bg-blue-light mb-14">
  {#if projects && projects.length > 0}
    <Container>
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        {#each projects as item, i}
          <ProjectCard
            title={item.title}
            location={item.projectLocation && item.projectLocation}
            image={item.heroImages &&
              item.heroImages.length > 0 &&
              item.heroImages[0]}
            slug={item.slug.current}
          />
        {/each}
      </div>
    </Container>
  {/if}
</div>

<WorkWithUs />
