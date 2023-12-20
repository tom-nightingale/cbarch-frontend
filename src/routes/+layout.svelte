<script lang="ts">
  import "$lib/styles/app.css";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import MobileMenu from "$lib/components/MobileMenu/MobileMenu.svelte";

  let mobileMenuOpen: boolean = false;
  let animateItems: boolean = false;

  const toggleMobileMenu = (e: any) => {
    mobileMenuOpen = !mobileMenuOpen;
    window.document.body.classList.toggle("locked");
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
<div class="pt-[107px] md:pt-[119px]">
  <slot />
</div>
<Footer />

<svelte:head>
  <script
    type="text/javascript"
    charset="UTF-8"
    src="//cdn.cookie-script.com/s/efa75847543057db5a836d83dd6179c5.js"
    defer
  ></script>
</svelte:head>
