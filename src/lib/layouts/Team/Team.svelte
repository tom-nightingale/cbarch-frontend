<script lang="ts">
  import { onMount } from "svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import { inView, animate } from "motion";
  import TeamMember from "$lib/components/TeamMember/TeamMember.svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";

  export let team: any;
  export let teamTitle: string | null | undefined = "Meet the team";
  export let teamSubtitle: string | null | null = "Our people.";

  let teamContainer: HTMLElement;

  onMount(() => {
    const members = teamContainer.querySelectorAll(".team-member");
    members.forEach((team) => {
      inView(
        team,
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

<div>
  {#if team && team.length > 0}
    <Container>
      <div class="px-4 py-10">
        <div class="grid gap-6 mb-8 grid-col">
          <Typography component="p" variant="sub1" uppercase
            >{teamSubtitle}</Typography
          >

          <Typography component="h1" variant="headline1">{teamTitle}</Typography
          >
        </div>
        <div
          class="grid grid-col-1 md:grid-cols-2 md:gap-[42px] mb-[109px]"
          bind:this={teamContainer}
        >
          {#each team as item, i}
            <TeamMember
              name={item.name}
              email={item.email}
              bio={item.bioRaw}
              image={item.image}
            />
          {/each}
        </div>
      </div>
    </Container>
  {/if}
</div>

<WorkWithUs />
