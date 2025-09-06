import { c as create_ssr_component, v as validate_component, e as add_attribute, g as each, f as escape, i as null_to_empty } from "../../../../chunks/ssr.js";
import { I as Image, C as Copy, S as Seo } from "../../../../chunks/Copy.js";
import { H as Hero } from "../../../../chunks/Hero.js";
import { C as Container, T as Typography } from "../../../../chunks/Button.js";
import "@glidejs/glide";
import { I as Icon } from "../../../../chunks/Icon.js";
import { W as WorkWithUs } from "../../../../chunks/WorkWithUs.js";
import { C as ContentBlockDigester } from "../../../../chunks/ContentBlockDigester.js";
const css = {
  code: ".glide__arrow--disabled.svelte-kz8q8o{opacity:0.5}",
  map: '{"version":3,"file":"GlideGallery.svelte","sources":["GlideGallery.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport Container from \\"$lib/components/Container/Container.svelte\\";\\nimport Image from \\"$lib/components/Image/Image.svelte\\";\\nimport { inView, animate } from \\"motion\\";\\nimport Glide from \\"@glidejs/glide\\";\\nimport Icon from \\"$lib/components/Icon/Icon.svelte\\";\\nexport let images = [];\\nexport let square = false;\\nexport let removeMarginBottom = false;\\nconst primaryImageSizes = {\\n    lg: {\\n        width: 1600,\\n        height: 1265,\\n    },\\n    md: {\\n        width: 1600,\\n        height: 1265,\\n    },\\n    sm: {\\n        width: 1280,\\n        height: 1010,\\n    },\\n    xs: {\\n        width: 768,\\n        height: 448,\\n    },\\n    fallback: {\\n        width: 768,\\n        height: 448,\\n    },\\n};\\nconst secondaryImageSizes = {\\n    lg: {\\n        width: 630,\\n        height: 1004,\\n    },\\n    md: {\\n        width: 640,\\n        height: 1020,\\n    },\\n    sm: {\\n        width: 310,\\n        height: 500,\\n    },\\n    xs: {\\n        width: 448,\\n        height: 768,\\n    },\\n    fallback: {\\n        width: 448,\\n        height: 768,\\n    },\\n};\\nconst squareImageSizes = {\\n    lg: {\\n        width: 600,\\n        height: 600,\\n    },\\n    md: {\\n        width: 600,\\n        height: 600,\\n    },\\n    sm: {\\n        width: 500,\\n        height: 500,\\n    },\\n    xs: {\\n        width: 500,\\n        height: 500,\\n    },\\n    fallback: {\\n        width: 600,\\n        height: 600,\\n    },\\n};\\nlet imageContainer;\\nonMount(async () => {\\n    // @ts-ignore\\n    const lightbox = new FsLightbox();\\n    inView(imageContainer, () => {\\n        animate(imageContainer, { opacity: 1, y: [20, 0] }, {\\n            duration: 1,\\n            easing: [0.17, 0.55, 0.55, 1],\\n        });\\n    }, { amount: 0.15 });\\n    //Initialise glide slider.\\n    new Glide(\\".glide-gallery\\", {\\n        perView: 4,\\n        gap: 10,\\n        autoplay: false,\\n        bound: true,\\n        rewind: false,\\n        breakpoints: {\\n            768: {\\n                perView: 2,\\n            },\\n            1200: {\\n                perView: 4,\\n            },\\n        },\\n    }).mount();\\n});\\n<\/script>\\n\\n<svelte:head>\\n  <script\\n    src=\\"https://cdnjs.cloudflare.com/ajax/libs/fslightbox/3.0.9/index.js\\"\\n    defer\\n  ><\/script>\\n</svelte:head>\\n\\n<Container>\\n  <div\\n    class=\\"px-4 py-14 opacity-0 transform translate-y-[20px] {removeMarginBottom &&\\n      \'pb-0\'}\\"\\n    bind:this={imageContainer}\\n  >\\n    <div class=\\"relative glide-gallery\\">\\n      <div data-glide-el=\\"track\\" class=\\"glide__track\\">\\n        <div class=\\"glide__slides\\">\\n          {#each images as image, i}\\n            <a\\n              data-fslightbox\\n              class={`block overflow-hidden glide__slide\\n            ${\\n              !square &&\\n              i === 0 &&\\n              \\"aspect-[12/7] col-span-2  md:col-span-6 md:aspect-auto\\"\\n            }\\n            ${\\n              !square &&\\n              i !== 0 &&\\n              \\"aspect-[7/11] md:col-span-3 md:aspect-[128/205] w-full\\"\\n            }\\n\\n            ${square && \\"aspect-square col-span-1 md:col-span-3 w-full\\"}\\n          `}\\n              href={image?.asset?.url}\\n            >\\n              <Image\\n                {image}\\n                altText={image?.asset?.altText\\n                  ? image?.asset?.altText\\n                  : \\"Coleflax Bennett Architecture\\"}\\n                lgImg={true}\\n                lgSizes={square\\n                  ? squareImageSizes\\n                  : i === 0\\n                  ? primaryImageSizes\\n                  : secondaryImageSizes}\\n                pictureClasses=\\"block h-full transition-all duration-300 hover:scale-[1.05]\\"\\n                imageClasses=\\"object-cover object-center h-full\\"\\n              />\\n            </a>\\n          {/each}\\n        </div>\\n      </div>\\n\\n      {#if images && images.length > 4}\\n        <div class=\\"glide__arrows\\" data-glide-el=\\"controls\\">\\n          <button\\n            class=\\"absolute flex items-center justify-center p-2 translate-y-[-15%] bg-white rounded-full top-1/2 left-4 transition-all duration-500\\"\\n            data-glide-dir=\\"<\\"\\n            ><Icon icon=\\"angle-left\\" width={16} height={16} /></button\\n          >\\n          <button\\n            class=\\"absolute flex items-center justify-center p-2 translate-y-[-15%] bg-white rounded-full top-1/2 right-4 transition-all duration-500\\"\\n            data-glide-dir=\\">\\"\\n            ><Icon icon=\\"angle-right\\" width={16} height={16} /></button\\n          >\\n        </div>\\n      {/if}\\n    </div>\\n  </div>\\n</Container>\\n\\n<style>\\n  .glide__arrow--disabled {\\n    opacity: 0.5;\\n  }</style>\\n"],"names":[],"mappings":"AAiLE,qCAAwB,CACtB,OAAO,CAAE,GACX"}'
};
const GlideGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let { square = false } = $$props;
  let { removeMarginBottom = false } = $$props;
  const primaryImageSizes = {
    lg: { width: 1600, height: 1265 },
    md: { width: 1600, height: 1265 },
    sm: { width: 1280, height: 1010 },
    xs: { width: 768, height: 448 },
    fallback: { width: 768, height: 448 }
  };
  const secondaryImageSizes = {
    lg: { width: 630, height: 1004 },
    md: { width: 640, height: 1020 },
    sm: { width: 310, height: 500 },
    xs: { width: 448, height: 768 },
    fallback: { width: 448, height: 768 }
  };
  const squareImageSizes = {
    lg: { width: 600, height: 600 },
    md: { width: 600, height: 600 },
    sm: { width: 500, height: 500 },
    xs: { width: 500, height: 500 },
    fallback: { width: 600, height: 600 }
  };
  let imageContainer;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0) $$bindings.square(square);
  if ($$props.removeMarginBottom === void 0 && $$bindings.removeMarginBottom && removeMarginBottom !== void 0) $$bindings.removeMarginBottom(removeMarginBottom);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1mq8nv7_START --><script src="https://cdnjs.cloudflare.com/ajax/libs/fslightbox/3.0.9/index.js" defer data-svelte-h="svelte-1lvt8au"><\/script><!-- HEAD_svelte-1mq8nv7_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"px-4 py-14 opacity-0 transform translate-y-[20px] " + escape(removeMarginBottom && "pb-0", true) + " svelte-kz8q8o"}"${add_attribute("this", imageContainer, 0)}><div class="relative glide-gallery"><div data-glide-el="track" class="glide__track"><div class="glide__slides">${each(images, (image, i) => {
        return `<a data-fslightbox class="${escape(
          null_to_empty(`block overflow-hidden glide__slide
            ${!square && i === 0 && "aspect-[12/7] col-span-2  md:col-span-6 md:aspect-auto"}
            ${!square && i !== 0 && "aspect-[7/11] md:col-span-3 md:aspect-[128/205] w-full"}

            ${square && "aspect-square col-span-1 md:col-span-3 w-full"}
          `),
          true
        ) + " svelte-kz8q8o"}"${add_attribute("href", image?.asset?.url, 0)}>${validate_component(Image, "Image").$$render(
          $$result,
          {
            image,
            altText: image?.asset?.altText ? image?.asset?.altText : "Coleflax Bennett Architecture",
            lgImg: true,
            lgSizes: square ? squareImageSizes : i === 0 ? primaryImageSizes : secondaryImageSizes,
            pictureClasses: "block h-full transition-all duration-300 hover:scale-[1.05]",
            imageClasses: "object-cover object-center h-full"
          },
          {},
          {}
        )} </a>`;
      })}</div></div> ${images && images.length > 4 ? `<div class="glide__arrows" data-glide-el="controls"><button class="absolute flex items-center justify-center p-2 translate-y-[-15%] bg-white rounded-full top-1/2 left-4 transition-all duration-500" data-glide-dir="&lt;">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "angle-left",
          width: 16,
          height: 16
        },
        {},
        {}
      )}</button> <button class="absolute flex items-center justify-center p-2 translate-y-[-15%] bg-white rounded-full top-1/2 right-4 transition-all duration-500" data-glide-dir=">">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "angle-right",
          width: 16,
          height: 16
        },
        {},
        {}
      )}</button></div>` : ``}</div></div>`;
    }
  })}`;
});
const Single = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentBlocks } = $$props;
  let { heroImages } = $$props;
  let { title } = $$props;
  let { location } = $$props;
  let { value } = $$props;
  let { copy } = $$props;
  let { copyImage } = $$props;
  let { involvement } = $$props;
  let { gallery } = $$props;
  let imageContainer;
  let contentContainer;
  if ($$props.contentBlocks === void 0 && $$bindings.contentBlocks && contentBlocks !== void 0) $$bindings.contentBlocks(contentBlocks);
  if ($$props.heroImages === void 0 && $$bindings.heroImages && heroImages !== void 0) $$bindings.heroImages(heroImages);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0) $$bindings.location(location);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.copy === void 0 && $$bindings.copy && copy !== void 0) $$bindings.copy(copy);
  if ($$props.copyImage === void 0 && $$bindings.copyImage && copyImage !== void 0) $$bindings.copyImage(copyImage);
  if ($$props.involvement === void 0 && $$bindings.involvement && involvement !== void 0) $$bindings.involvement(involvement);
  if ($$props.gallery === void 0 && $$bindings.gallery && gallery !== void 0) $$bindings.gallery(gallery);
  return `${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      images: heroImages && heroImages.length > 0 && [heroImages[0]],
      title: `${title}${location && location !== null ? `, ${location}` : ``}`
    },
    {},
    {}
  )} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="md:grid md:grid-cols-2 md:mb-12"><div class="relative p-9 opacity-0 transform translate-y-[20px]"${add_attribute("this", imageContainer, 0)}>${copyImage && copyImage.asset ? `${validate_component(Image, "Image").$$render(
        $$result,
        {
          image: copyImage,
          altText: copyImage?.asset?.altText ? copyImage?.asset?.altText : "Coleflax Bennett Architecture",
          lgImg: true,
          lgSizes: {
            lg: { width: 1600, height: 1200 },
            md: { width: 800, height: 700 },
            sm: { width: 650, height: 1e3 },
            xs: { width: 768, height: 768 },
            fallback: { width: 768, height: 768 }
          },
          pictureClasses: "block md:sticky md:top-40",
          imageClasses: "object-cover object-center h-full w-full"
        },
        {},
        {}
      )}` : ``}</div> <div class="flex flex-col justify-center gap-8 px-4 py-12 bg-blue-light md:py-20 lg:px-8 2xl:px-10 3xl:px-16 opacity-0 transform translate-y-[20px]"${add_attribute("this", contentContainer, 0)}>${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          component: "h1",
          variant: "headline1",
          theme: "text-blue"
        },
        {},
        {
          default: () => {
            return `Project Details`;
          }
        }
      )} <div class="grid gap-2 p-4 bg-white lg:p-8">${location ? `<div class="flex flex-wrap">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          component: "p",
          variant: "body1",
          theme: "w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3 3xl:w-1/5",
          uppercase: true
        },
        {},
        {
          default: () => {
            return `Location`;
          }
        }
      )} ${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          component: "p",
          variant: "body1",
          theme: "w-1/2 sm:w-2/3  md:w-1/2 lg:w-2/3 3xl:w-4/5 pl-4"
        },
        {},
        {
          default: () => {
            return `${escape(location)}`;
          }
        }
      )}</div>` : ``} ${value ? `<div class="flex flex-wrap">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          component: "p",
          variant: "body1",
          theme: "w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3 3xl:w-1/5",
          uppercase: true
        },
        {},
        {
          default: () => {
            return `Project Value`;
          }
        }
      )} ${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          component: "p",
          variant: "body1",
          theme: "w-1/2 sm:w-2/3 md:w-1/2 lg:w-2/3 3xl:w-4/5 pl-4"
        },
        {},
        {
          default: () => {
            return `${escape(value)}`;
          }
        }
      )}</div>` : ``} ${involvement ? `<div class="flex flex-wrap">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          component: "p",
          variant: "body1",
          theme: "w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3 3xl:w-1/5",
          uppercase: true
        },
        {},
        {
          default: () => {
            return `Involvement`;
          }
        }
      )} ${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          component: "p",
          variant: "body1",
          theme: "w-1/2 sm:w-2/3 md:w-1/2 lg:w-2/3 3xl:w-4/5 pl-4"
        },
        {},
        {
          default: () => {
            return `${escape(involvement)}`;
          }
        }
      )}</div>` : ``}</div> ${validate_component(Copy, "Copy").$$render($$result, { content: copy }, {}, {})}</div></div>`;
    }
  })} ${gallery && gallery.length > 3 ? `${validate_component(GlideGallery, "GlideGallery").$$render($$result, { images: gallery, square: true }, {}, {})}` : ``} ${contentBlocks?.contentblocks && contentBlocks?.contentblocks?.length > 0 ? `${validate_component(ContentBlockDigester, "ContentBlockDigester").$$render($$result, { contentBlocks }, {}, {})}` : ``} ${validate_component(WorkWithUs, "WorkWithUs").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let project;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  project = data.data;
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      seo: {
        title: project.seo?.metaTitle ? `${project.seo.metaTitle} | Projects | Coleflax Bennett Architecture` : "",
        description: project.seo?.metaDesc ? project.seo.metaDesc : "",
        keywords: project.seo?.keywords ? project.seo.keywords : void 0,
        shareGraphic: project.seo?.shareGraphic?.asset ? project.seo?.shareGraphic?.asset : void 0
      }
    },
    {},
    {}
  )} ${validate_component(Single, "Project").$$render(
    $$result,
    {
      heroImages: project.heroImages && project.heroImages.length > 0 && project.heroImages,
      title: `${project.title}`,
      location: project.projectLocation,
      value: project.projectValue,
      involvement: project.projectInvolvement,
      gallery: project.gallery,
      copy: project.projectCopyRaw,
      copyImage: project.projectCopyImage,
      contentBlocks: project?.contentBlocks
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
