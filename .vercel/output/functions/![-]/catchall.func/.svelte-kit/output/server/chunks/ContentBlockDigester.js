import { c as create_ssr_component, v as validate_component, g as each, f as escape } from "./ssr.js";
import { C as Container, T as Typography, B as Button } from "./Button.js";
import { C as Copy, I as Image } from "./Copy.js";
const TextWithImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle } = $$props;
  let { title } = $$props;
  let { content } = $$props;
  let { image } = $$props;
  let { applyBackground = false } = $$props;
  let { reverseLayout = false } = $$props;
  let { links = [] } = $$props;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.applyBackground === void 0 && $$bindings.applyBackground && applyBackground !== void 0) $$bindings.applyBackground(applyBackground);
  if ($$props.reverseLayout === void 0 && $$bindings.reverseLayout && reverseLayout !== void 0) $$bindings.reverseLayout(reverseLayout);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);
  return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${[
        "grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2",
        applyBackground ? "bg-blue-light" : ""
      ].join(" ").trim()}"><div class="flex flex-col justify-center col-span-1 gap-4"><div><div class="grid gap-6 mb-8">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          component: "p",
          variant: "sub1",
          uppercase: true
        },
        {},
        {
          default: () => {
            return `${escape(subtitle)}`;
          }
        }
      )} ${validate_component(Typography, "Typography").$$render($$result, { component: "h1", variant: "headline1" }, {}, {
        default: () => {
          return `<!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END -->`;
        }
      })}</div> ${validate_component(Copy, "Copy").$$render($$result, { content }, {}, {})} ${links && links.length > 0 ? `<div class="my-12">${each(links, (link) => {
        return `${validate_component(Button, "Button").$$render($$result, { href: link?.href, label: link?.label }, {}, {})}`;
      })}</div>` : ``}</div></div> <div class="${[
        "col-span-1 md:p-4 md:-order-1 " + escape(reverseLayout ? "md:-order-1" : "md:order-2", true),
        reverseLayout ? "order-2" : ""
      ].join(" ").trim()}">${validate_component(Image, "Image").$$render(
        $$result,
        {
          image: image?.image,
          altText: image?.image?.asset?.altText ? image?.image?.asset?.altText : "Coleflax Bennett Architecture",
          lgImg: true,
          lgSizes: {
            lg: { width: 1600, height: 1200 },
            md: { width: 1600, height: 1200 },
            sm: { width: 1280, height: 1280 },
            xs: { width: 768, height: 768 },
            fallback: { width: 389, height: 389 }
          },
          pictureClasses: "block self-center mt-12 md:mt-0 md:sticky md:top-40",
          imageClasses: "w-full"
        },
        {},
        {}
      )}</div></div>`;
    }
  })}`;
});
const ContentBlockDigester = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let blocks;
  let { contentBlocks } = $$props;
  if ($$props.contentBlocks === void 0 && $$bindings.contentBlocks && contentBlocks !== void 0) $$bindings.contentBlocks(contentBlocks);
  blocks = contentBlocks?.contentblocks;
  return `${blocks && blocks.length > 0 ? `${each(blocks, (block, i) => {
    return `${block?.__typename === "TextWithImage" ? `${validate_component(TextWithImage, "TextWithImage").$$render(
      $$result,
      {
        subtitle: block?.subtitle,
        title: block?.title,
        content: block?.contentRaw,
        image: block?.image,
        applyBackground: block?.applyBackground,
        reverseLayout: block?.reverseLayout,
        links: block?.links
      },
      {},
      {}
    )}` : ``}`;
  })}` : ``}`;
});
export {
  ContentBlockDigester as C
};
