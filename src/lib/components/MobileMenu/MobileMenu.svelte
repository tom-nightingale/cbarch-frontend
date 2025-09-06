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
  class="fixed top-0 z-[90] bg-white w-full h-screen lg:hidden lg:pointer-events-none transition-all duration-[350ms] ease-in-out overflow-y-scroll
  {open ? 'left-0' : 'left-full'}"
>
  <div class="flex flex-col justify-between min-h-screen overflow-scroll">
    <button
      class="absolute p-2 transition-all duration-200 border top-5 right-5 lg:hidden border-blue text-blue hover:text-white hover:bg-blue cursor:pointer"
      on:click={handleMenuClose}
    >
      <span class="sr-only">Close menu</span>
      <Icon icon="times" />
    </button>

    {#if navSections}
      <div class="flex flex-col py-20 overflow-auto">
        {#each navSections as section}
          <NavItem
            label={section?.target?.title}
            href={section?.target?.slug?.current}
            classes="relative block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px] duration-300"
          />

          {#if section?.children && section.children.length > 0}
            {#each section?.children as child}
              <div
                class="relative block py-[15px] px-10 border-b border-b-[#F5F5F5] hover:pl-12 duration-300"
              >
                <NavItem
                  label={child?.target?.title}
                  href={child?.target?.slug?.current}
                />
              </div>
            {/each}
          {/if}
        {/each}
        <NavItem
          label="Contact Us"
          href="contact"
          classes="block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px] duration-300"
        />
      </div>
    {/if}

    {#if open}
      <a
        class="flex justify-center w-full mt-auto text-white hover:opacity-90 bg-blue-light"
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
  </div>
</div>
