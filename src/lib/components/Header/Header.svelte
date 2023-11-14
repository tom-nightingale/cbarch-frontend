<script lang="ts">
  import Container from "$lib/components/Container/Container.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import NavItem from "$lib/components/NavItem/NavItem.svelte";
  import Logo from "$lib/components/Logo/Logo.svelte";
  import { NavItems } from "$lib/data/NavItems";
</script>

<div class="bg-white">
  <Container>
    <div class="flex items-center justify-between p-8 px-4 md:px-8">
      <a class="hover:opacity-90" href="/">
        <Logo />
      </a>

      <div class="items-center hidden gap-8 lg:flex">
        {#each NavItems as item}
          <NavItem label={item.label} href={item.href} />
        {/each}
      </div>

      <div class="hidden lg:block">
        <Button label="Get in touch" theme="primary" href="/contact" />
      </div>

      <button
        class="flex items-center justify-center p-2 border lg:hidden border-blue text-blue"
      >
        <Icon icon="bars" />
      </button>
    </div>
  </Container>
</div>
