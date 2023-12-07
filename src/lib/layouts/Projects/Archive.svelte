<script lang="ts">
  import { onMount } from "svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";
  import ProjectCard from "$lib/components/ProjectCard/ProjectCard.svelte";
  import { inView, animate } from "motion";

  export let title: string | null | undefined;
  export let projects: any;

  let projectContainer: HTMLElement;

  onMount(() => {
    const projects = projectContainer.querySelectorAll(".project");

    projects.forEach((project) => {
      inView(
        project,
        (item) => {
          animate(
            item.target,
            { opacity: 1, y: [20, 0] },
            {
              duration: 1,
            },
          );
        },
        { amount: 0.15 },
      );
    });
  });
</script>

<div class="px-4 py-16 bg-blue-light mb-14">
  {#if projects && projects.length > 0}
    <Container>
      <div
        class="grid grid-cols-1 gap-3 md:grid-cols-2"
        bind:this={projectContainer}
      >
        {#each projects as item, i}
          <div class="opacity-0 translate-y-[20px] project transition-none">
            <ProjectCard
              title={item.title}
              location={item.projectLocation && item.projectLocation}
              image={item.heroImages &&
                item.heroImages.length > 0 &&
                item.heroImages[0]}
              slug={item.slug.current}
            />
          </div>
        {/each}
      </div>
    </Container>
  {/if}
</div>

<WorkWithUs />
