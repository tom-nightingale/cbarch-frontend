import { c as create_ssr_component, e as add_attribute, g as each, v as validate_component, f as escape } from "./ssr.js";
import { I as Image } from "./Copy.js";
import { T as Typography, B as Button } from "./Button.js";
import "@glidejs/glide";
const css = {
  code: ".hero-container.svelte-8h9qst{min-height:110vh;width:100%}@media(min-width: 768px){.hero-container.svelte-8h9qst{min-height:calc(100vh - 119px)}}@supports (-webkit-touch-callout: none){.hero-container.svelte-8h9qst{height:-webkit-fill-available}}@supports not (-webkit-touch-callout: none){.hero-container.svelte-8h9qst{height:-webkit-fill-available}}",
  map: '{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport Image from \\"$lib/components/Image/Image.svelte\\";\\nimport Typography from \\"$lib/components/Typography/Typography.svelte\\";\\nimport Button from \\"$lib/components/Button/Button.svelte\\";\\nimport Glide from \\"@glidejs/glide\\";\\nimport { inView, animate } from \\"motion\\";\\nexport let mobileImages = undefined;\\nexport let images;\\nexport let title;\\nexport let isHome = false;\\nlet viewportWidth;\\nlet isMobile = true;\\nlet mdWidth = 600;\\nlet gallery;\\nlet imageContainer;\\nonMount(() => {\\n    if (images && images.length > 1) {\\n        gallery = new Glide(\\".glide-hero\\", {\\n            perView: 1,\\n            gap: 0,\\n            autoplay: false,\\n            bound: true,\\n            rewind: false,\\n        });\\n        gallery.mount();\\n        gallery.on(\\"resize\\", () => {\\n            gallery.update();\\n        });\\n        setTimeout(() => {\\n            gallery.update();\\n        }, 0);\\n    }\\n    // animate the image container\\n    animate(imageContainer, { opacity: 1 }, {\\n        duration: 0.5,\\n        easing: [0.17, 0.55, 0.55, 1],\\n    });\\n});\\n$: randomImages =\\n    isMobile && mobileImages && mobileImages.length > 0\\n        ? mobileImages\\n        : images &&\\n            images\\n                .map((value) => ({ value, sort: Math.random() }))\\n                .sort((a, b) => a.sort - b.sort)\\n                .map(({ value }) => value);\\n$: isMobile = viewportWidth < mdWidth;\\n<\/script>\\n\\n<svelte:window bind:innerWidth={viewportWidth} />\\n\\n<div class=\\"relative w-full\\">\\n  <div\\n    class=\\"relative overflow-hidden transition duration-500 bg-gray-100 opacity-0\\"\\n    bind:this={imageContainer}\\n  >\\n    {#if randomImages && randomImages.length > 1}\\n      <div class=\\"relative glide-hero\\">\\n        <div data-glide-el=\\"track\\" class=\\"glide__track\\">\\n          <div class=\\" glide__slides\\">\\n            {#if isMobile}\\n              {#each randomImages as image, i}\\n                <div class=\\"relative overflow-y-hidden bg-gray-100\\">\\n                  <Image\\n                    lazyLoad={false}\\n                    {image}\\n                    altText={image?.asset?.altText\\n                      ? image?.asset?.altText\\n                      : \\"Coleflax Bennett Architecture\\"}\\n                    lgImg={true}\\n                    lgSizes={{\\n                      lg: {\\n                        width: 600,\\n                        height: 1000,\\n                      },\\n                      md: {\\n                        width: 600,\\n                        height: 1000,\\n                      },\\n                      sm: {\\n                        width: 600,\\n                        height: 1000,\\n                      },\\n                      xs: {\\n                        width: 600,\\n                        height: 1000,\\n                      },\\n                      fallback: {\\n                        width: 600,\\n                        height: 1000,\\n                      },\\n                    }}\\n                    pictureClasses=\\"block\\"\\n                  />\\n                </div>\\n              {/each}\\n            {:else}\\n              {#each randomImages as image, i}\\n                <div\\n                  class=\\"relative overflow-y-hidden bg-gray-100 hero-container\\"\\n                >\\n                  <Image\\n                    lazyLoad={false}\\n                    {image}\\n                    altText={image?.asset?.altText\\n                      ? image?.asset?.altText\\n                      : \\"Coleflax Bennett Architecture\\"}\\n                    lgImg={true}\\n                    lgSizes={{\\n                      lg: {\\n                        width: 2560,\\n                        height: 1400,\\n                      },\\n                      md: {\\n                        width: 1600,\\n                        height: 760,\\n                      },\\n                      sm: {\\n                        width: 1280,\\n                        height: 1000,\\n                      },\\n                      xs: {\\n                        width: 768,\\n                        height: 1000,\\n                      },\\n                      fallback: {\\n                        width: 768,\\n                        height: 1622,\\n                      },\\n                    }}\\n                    pictureClasses=\\"block\\"\\n                    imageClasses=\\"absolute top-0 left-0 w-full h-full object-cover object-center w-full\\"\\n                  />\\n                </div>\\n              {/each}\\n            {/if}\\n          </div>\\n        </div>\\n      </div>\\n    {:else if images && images[0] && images[0].asset}\\n      <div class=\\"relative overflow-y-hidden bg-gray-100 hero-container\\">\\n        <Image\\n          lazyLoad={false}\\n          image={images[0]}\\n          altText={images[0]?.asset?.altText\\n            ? images[0]?.asset?.altText\\n            : \\"Coleflax Bennett Architecture\\"}\\n          lgImg={true}\\n          lgSizes={{\\n            lg: {\\n              width: 2560,\\n              height: 1440,\\n            },\\n            md: {\\n              width: 1600,\\n              height: 760,\\n            },\\n            sm: {\\n              width: 1280,\\n              height: 1000,\\n            },\\n            xs: {\\n              width: 768,\\n              height: 1000,\\n            },\\n            fallback: {\\n              width: 768,\\n              height: 1622,\\n            },\\n          }}\\n          pictureClasses=\\"block\\"\\n          imageClasses=\\"absolute top-0 left-0 w-full h-full object-cover object-center w-full\\"\\n        />\\n      </div>\\n    {/if}\\n  </div>\\n  <div\\n    class=\\"absolute bottom-0 left-0 w-full py-[25px] px-4 md:px-8 bg-white/80 z-20 md:flex items-center justify-betwee\\"\\n  >\\n    <Typography component=\\"p\\" variant=\\"title1\\" theme=\\"text-blue\\"\\n      >{title}</Typography\\n    >\\n    {#if isHome}\\n      <div class=\\"ml-auto mt-[18px] md:mt-0\\">\\n        <Button label=\\"Our Projects\\" theme=\\"secondary\\" href=\\"/projects\\" />\\n      </div>\\n    {/if}\\n  </div>\\n</div>\\n\\n<style>\\n  .hero-container {\\n    /* @apply min-h-[calc(88vh-120px)]; */\\n    min-height: 110vh;\\n    width: 100%;\\n  }\\n  @media (min-width: 768px) {\\n    .hero-container {\\n        min-height: calc(100vh - 119px);\\n    }\\n}\\n  .hero-container {\\n    /* @apply landscape:min-h-[150vh]; */\\n  }\\n\\n  @supports (-webkit-touch-callout: none) {\\n    /* CSS specific to iOS devices */\\n    .hero-container {\\n      height: -webkit-fill-available;\\n    }\\n  }\\n\\n  @supports not (-webkit-touch-callout: none) {\\n    /* CSS for other than iOS devices */\\n    .hero-container {\\n      height: -webkit-fill-available;\\n    }\\n  }</style>\\n"],"names":[],"mappings":"AA+LE,6BAAgB,CAEd,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IACT,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,6BAAgB,CACZ,UAAU,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,KAAK,CAClC,CACJ,CAKE,UAAU,CAAC,uBAAuB,IAAI,CAAE,CAEtC,6BAAgB,CACd,MAAM,CAAE,sBACV,CACF,CAEA,UAAU,GAAG,CAAC,CAAC,uBAAuB,IAAI,CAAE,CAE1C,6BAAgB,CACd,MAAM,CAAE,sBACV,CACF"}'
};
let mdWidth = 600;
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let randomImages;
  let { mobileImages = void 0 } = $$props;
  let { images } = $$props;
  let { title } = $$props;
  let { isHome = false } = $$props;
  let viewportWidth;
  let isMobile = true;
  let imageContainer;
  if ($$props.mobileImages === void 0 && $$bindings.mobileImages && mobileImages !== void 0) $$bindings.mobileImages(mobileImages);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.isHome === void 0 && $$bindings.isHome && isHome !== void 0) $$bindings.isHome(isHome);
  $$result.css.add(css);
  isMobile = viewportWidth < mdWidth;
  randomImages = isMobile && mobileImages && mobileImages.length > 0 ? mobileImages : images && images.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
  return ` <div class="relative w-full"><div class="relative overflow-hidden transition duration-500 bg-gray-100 opacity-0"${add_attribute("this", imageContainer, 0)}>${randomImages && randomImages.length > 1 ? `<div class="relative glide-hero"><div data-glide-el="track" class="glide__track"><div class="glide__slides">${isMobile ? `${each(randomImages, (image, i) => {
    return `<div class="relative overflow-y-hidden bg-gray-100">${validate_component(Image, "Image").$$render(
      $$result,
      {
        lazyLoad: false,
        image,
        altText: image?.asset?.altText ? image?.asset?.altText : "Coleflax Bennett Architecture",
        lgImg: true,
        lgSizes: {
          lg: { width: 600, height: 1e3 },
          md: { width: 600, height: 1e3 },
          sm: { width: 600, height: 1e3 },
          xs: { width: 600, height: 1e3 },
          fallback: { width: 600, height: 1e3 }
        },
        pictureClasses: "block"
      },
      {},
      {}
    )} </div>`;
  })}` : `${each(randomImages, (image, i) => {
    return `<div class="relative overflow-y-hidden bg-gray-100 hero-container svelte-8h9qst">${validate_component(Image, "Image").$$render(
      $$result,
      {
        lazyLoad: false,
        image,
        altText: image?.asset?.altText ? image?.asset?.altText : "Coleflax Bennett Architecture",
        lgImg: true,
        lgSizes: {
          lg: { width: 2560, height: 1400 },
          md: { width: 1600, height: 760 },
          sm: { width: 1280, height: 1e3 },
          xs: { width: 768, height: 1e3 },
          fallback: { width: 768, height: 1622 }
        },
        pictureClasses: "block",
        imageClasses: "absolute top-0 left-0 w-full h-full object-cover object-center w-full"
      },
      {},
      {}
    )} </div>`;
  })}`}</div></div></div>` : `${images && images[0] && images[0].asset ? `<div class="relative overflow-y-hidden bg-gray-100 hero-container svelte-8h9qst">${validate_component(Image, "Image").$$render(
    $$result,
    {
      lazyLoad: false,
      image: images[0],
      altText: images[0]?.asset?.altText ? images[0]?.asset?.altText : "Coleflax Bennett Architecture",
      lgImg: true,
      lgSizes: {
        lg: { width: 2560, height: 1440 },
        md: { width: 1600, height: 760 },
        sm: { width: 1280, height: 1e3 },
        xs: { width: 768, height: 1e3 },
        fallback: { width: 768, height: 1622 }
      },
      pictureClasses: "block",
      imageClasses: "absolute top-0 left-0 w-full h-full object-cover object-center w-full"
    },
    {},
    {}
  )}</div>` : ``}`}</div> <div class="absolute bottom-0 left-0 w-full py-[25px] px-4 md:px-8 bg-white/80 z-20 md:flex items-center justify-betwee">${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      component: "p",
      variant: "title1",
      theme: "text-blue"
    },
    {},
    {
      default: () => {
        return `${escape(title)}`;
      }
    }
  )} ${isHome ? `<div class="ml-auto mt-[18px] md:mt-0">${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Our Projects",
      theme: "secondary",
      href: "/projects"
    },
    {},
    {}
  )}</div>` : ``}</div> </div>`;
});
export {
  Hero as H
};
