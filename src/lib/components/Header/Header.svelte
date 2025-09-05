<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Container from "$lib/components/Container/Container.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import NavItem from "$lib/components/MobileMenu/NavItem/NavItem.svelte";
  import type { Maybe, NavigationSection } from "$lib/gql/gen/codegen";

  const dispatch = createEventDispatcher();

  const handleMenuOpen = (e: any) => {
    dispatch("menuOpen", e.detail);
  };

  export let navSections: Maybe<Array<Maybe<NavigationSection>>> = [];
</script>

<div class="fixed top-0 left-0 z-50 w-full bg-white shadow-sm header">
  <Container>
    <div
      class="flex items-center justify-between p-8 px-4 transition-all duration-300 md:px-8"
    >
      <a
        class="hover:opacity-90 block w-[255px] max-w-[200px] md:max-w-[255px]"
        href="/"
      >
        <span class="sr-only">Go to home</span>
        <img
          src="/logo.webp"
          alt="Coleflax Bennett Logo"
          width="349"
          height="75"
        />
      </a>

      {#if navSections}
        <div class="items-center hidden gap-4 lg:flex">
          {#each navSections as section}
            <NavItem
              label={section?.target?.title}
              href={section?.target?.slug?.current}
              classes={"p-2"}
            />
          {/each}
        </div>
      {/if}

      <div class="hidden lg:block">
        <Button label="Get in touch" theme="primary" href="/contact" />
      </div>

      <button
        class="flex items-center justify-center p-2 border lg:hidden border-blue text-blue"
        on:click={handleMenuOpen}
      >
        <span class="sr-only">Open mobile menu</span>
        <Icon icon="bars" />
      </button>
    </div>
  </Container>
</div>
