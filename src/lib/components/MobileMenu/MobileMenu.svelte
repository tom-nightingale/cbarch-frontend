<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { NavItems } from "$lib/data/NavItems";
  import NavItem from "$lib/components/MobileMenu/NavItem/NavItem.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import type { Maybe, NavigationSection } from "$lib/gql/gen/codegen";

  export let open: boolean = false;
  export let animateItems: boolean = false;
  export let navSections: Maybe<Array<Maybe<NavigationSection>>> = [];

  const dispatch = createEventDispatcher();

  const handleMenuClose = (e) => {
    open = !open;
    dispatch("menuClose", e.detail);
  };
</script>

<div
  class="fixed top-0 z-[90] bg-white w-full h-screen lg:hidden lg:pointer-events-none transition-all duration-[350ms] ease-in-out
  {open ? 'left-0' : 'left-full'}"
>
  <div class="pt-[20px]">
    {#if open}
      <a
        class="absolute bottom-0 left-0 flex justify-center w-full text-white hover:opacity-90 bg-blue-light"
        href="/"
      >
        <Icon
          icon="cb-initials"
          classNames="m-auto text-white"
          width={200}
          height={190}
        />
      </a>
    {/if}
    <div class="flex justify-end px-[20px]">
      <button
        class="p-2 transition-all duration-200 border lg:hidden border-blue text-blue hover:text-white hover:bg-blue cursor:pointer"
        on:click={handleMenuClose}
      >
        <span class="sr-only">Close menu</span>
        <Icon icon="times" />
      </button>
    </div>

    {#if navSections}
      <div class="flex flex-col py-[33px]">
        {#each navSections as section}
          <NavItem
            label={section?.target?.title}
            href={section?.target?.slug?.current}
            classes="block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px] duration-300"
          />
        {/each}
        <NavItem
          label="Contact Us"
          href="contact"
          classes="block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px] duration-300"
        />
      </div>
    {/if}
  </div>
</div>
