<script lang="ts">
  import "$lib/styles/app.css";
  import PageTransition from "$lib/components/PageTransition/PageTransition.svelte";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import MobileMenu from "$lib/components/MobileMenu/MobileMenu.svelte";
  export let data;

  let mobileMenuOpen: boolean = false;
  let animateItems: boolean = false;

  const toggleMobileMenu = (e) => {
    mobileMenuOpen = !mobileMenuOpen;
    window.document.body.classList.toggle("overflow-y-hidden");
    if (mobileMenuOpen) {
      setTimeout(() => {
        animateItems = !animateItems;
      }, 300);
    } else {
      animateItems = false;
    }
  };
</script>

<MobileMenu
  on:menuClose={toggleMobileMenu}
  open={mobileMenuOpen}
  {animateItems}
/>

<Header on:menuOpen={toggleMobileMenu} />
<PageTransition pathname={data.url}>
  <div class="pt-[107px] md:pt-[119px]">
    <slot />
  </div>
</PageTransition>
<Footer />
