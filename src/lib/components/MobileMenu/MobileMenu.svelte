<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import NavItem from "$lib/components/NavItem/NavItem.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import type { Maybe, NavigationSection } from "$lib/gql/gen/codegen";

  export let open: boolean = false;
  export let animateItems: boolean = false;
  export let navSections: Maybe<Array<Maybe<NavigationSection>>> = [];

  const dispatch = createEventDispatcher();

  const handleMenuClose = (e: Event) => {
    open = !open;
    dispatch("menuClose", e);
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

    {#if navSections && navSections.length > 0}
      <div class="flex flex-col py-[33px]">
        {#each navSections as section}
          {#if animateItems}
            <NavItem
              on:menuClose={handleMenuClose}
              label={section?.target?.title}
              href={section?.target?.slug?.current}
              classes="block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px] duration-300"
            />
          {/if}

          {#if section?.children && section.children.length > 0}
            {#each section.children as child}
              {#if animateItems}
                <div
                  class="relative block py-[15px] px-10 border-b border-b-[#F5F5F5] hover:pl-12 duration-300"
                >
                  <NavItem
                    on:menuClose={handleMenuClose}
                    label={child?.target?.title}
                    href={child?.target?.slug?.current}
                  />
                </div>
              {/if}
            {/each}
          {/if}
        {/each}

        {#if animateItems}
          <NavItem
            on:menuClose={handleMenuClose}
            label="Contact Us"
            href="contact"
            classes="block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px] duration-300"
          />
        {/if}
      </div>
    {/if}
  </div>
</div>
