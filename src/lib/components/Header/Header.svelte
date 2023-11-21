<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import NavItem from "$lib/components/NavItem/NavItem.svelte";
  import Logo from "$lib/components/Logo/Logo.svelte";
  import { NavItems } from "$lib/data/NavItems";

  let y: number = 0;

  const dispatch = createEventDispatcher();

  const handleMenuOpen = (e) => {
    dispatch("menuOpen", e.detail);
  };
</script>

<svelte:window bind:scrollY={y} />

<div class="fixed top-0 left-0 z-50 w-full bg-white shadow-sm header">
  <Container>
    <div
      class="flex items-center justify-between p-8 px-4 md:px-8 transition-all duration-300 {y >
      50
        ? 'py-4'
        : ''}"
    >
      <a
        class="hover:opacity-90 block w-[255px] max-w-[200px] md:max-w-[255px]"
        href="/"
      >
        <Logo />
      </a>

      <div class="items-center hidden gap-4 lg:flex">
        {#each NavItems as item}
          <NavItem
            label={item.label}
            href={item.href}
            classes={item.mobileOnly ? "hidden" : "hover:bg-blue-light p-2"}
          />
        {/each}
      </div>

      <div class="hidden lg:block">
        <Button label="Get in touch" theme="primary" href="/contact" />
      </div>

      <button
        class="flex items-center justify-center p-2 border lg:hidden border-blue text-blue"
        on:click={handleMenuOpen}
      >
        <Icon icon="bars" />
      </button>
    </div>
  </Container>
</div>
