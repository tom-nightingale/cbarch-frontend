<script>
  import "$lib/styles/app.css";
  import PageTransition from "$lib/components/PageTransition/PageTransition.svelte";
  import Header from "$lib/components/Header/Header.svelte";
  import MobileMenu from "$lib/components/MobileMenu/MobileMenu.svelte";
  export let data;
</script>

<Header />
<MobileMenu />
<PageTransition pathname={data.url}>
  <slot />
</PageTransition>
