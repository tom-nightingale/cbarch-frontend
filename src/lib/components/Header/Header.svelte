<script lang="ts">
  import Container from "$lib/components/Container/Container.svelte";
  import Button from "$lib/components/Button/Button.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import NavItem from "$lib/components/NavItem/NavItem.svelte";
  import Logo from "$lib/components/Logo/Logo.svelte";

  let navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Home",
      href: "/",
    },
  ];
</script>

<div class="bg-white">
  <Container>
    <div class="flex items-center justify-between p-4">
      <div class="">
        <Logo />
      </div>

      <div class="items-center hidden gap-8 lg:flex">
        {#each navItems as item}
          <NavItem label={item.label} href={item.href} />
        {/each}
      </div>

      <div class="hidden lg:block">
        <Button label="Get in touch" theme="primary" href="/contact" />
      </div>

      <div
        class="flex items-center justify-center p-2 border lg:hidden border-blue text-blue"
      >
        <Icon icon="bars" />
      </div>
    </div>
  </Container>
</div>
