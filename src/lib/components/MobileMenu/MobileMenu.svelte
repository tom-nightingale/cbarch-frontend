<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { NavItems } from "$lib/data/NavItems";
  import NavItem from "$lib/components/NavItem/NavItem.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import Logo from "$lib/components/Logo/Logo.svelte";
  import { quintOut } from "svelte/easing";

  export let open: boolean = false;
  export let animateItems: boolean = false;

  const dispatch = createEventDispatcher();

  const handleMenuClose = (e) => {
    open = !open;
    dispatch("menuClose", e.detail);
  };
</script>

<div
  class="fixed top-0 z-[90] bg-white w-full h-screen lg:hidden lg:pointer-events-none transition-all duration-500 ease-in-out
  {open ? 'left-0' : 'left-full'}"
>
  <div class="pt-[20px]">
    {#if open}
      <a
        in:fade={{ delay: 500, duration: 250 }}
        class="absolute opacity-50 bottom-4 left-4 hover:opacity-90 text-blue"
        href="/"
      >
        <Logo />
      </a>
    {/if}
    <div class="flex justify-end px-[20px]">
      <button
        class="p-2 transition-all duration-200 border lg:hidden border-blue text-blue hover:text-white hover:bg-blue cursor:pointer"
        on:click={handleMenuClose}
      >
        <Icon icon="times" />
      </button>
    </div>

    <div class="flex flex-col py-[33px]">
      {#each NavItems as item, i}
        {#if animateItems}
          <div
            in:fly={{
              delay: 250 * i,
              duration: 300,
              x: 0,
              y: 20,
              opacity: 0,
              easing: quintOut,
            }}
          >
            <NavItem
              on:menuClose={handleMenuClose}
              label={item.label}
              href={item.href}
              classes="block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px]"
            />
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
