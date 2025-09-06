import { c as create_ssr_component, e as add_attribute, f as escape, v as validate_component, m as missing_component, g as each } from "./ssr.js";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import { a as PUBLIC_SANITY_DATASET, b as PUBLIC_SANITY_PROJECT_ID } from "./public.js";
import { spanToPlainText, isPortableTextToolkitList, isPortableTextListItemBlock, buildMarksTree, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, LIST_NEST_MODE_HTML } from "@portabletext/toolkit";
import { T as Typography } from "./Button.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let description;
  let keywords;
  let shareGraphic;
  let ogType;
  let { seo } = $$props;
  if ($$props.seo === void 0 && $$bindings.seo && seo !== void 0) $$bindings.seo(seo);
  ({ title, description, keywords, shareGraphic, ogType } = seo);
  return `${$$result.head += `<!-- HEAD_svelte-64xlno_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""} <meta name="twitter:title"${add_attribute("content", title, 0)}> <meta property="og:title"${add_attribute("content", title, 0)}>` : ``}${description ? `<meta name="description"${add_attribute("content", description, 0)}> <meta property="og:description"${add_attribute("content", description, 0)}> <meta name="twitter:description"${add_attribute("content", description, 0)}>` : ``}${shareGraphic && shareGraphic.url ? `<meta property="og:image"${add_attribute(
    "content",
    shareGraphic.url ? shareGraphic.url : "https://res.cloudinary.com/thisissoon/default-meta",
    0
  )}> <meta property="og:image:alt"${add_attribute("content", shareGraphic?.alt, 0)}> <meta name="twitter:image"${add_attribute(
    "content",
    shareGraphic.src ? shareGraphic.src : "https://res.cloudinary.com/thisissoon/default-meta",
    0
  )}> <meta name="twitter:image:alt"${add_attribute("content", shareGraphic.alt, 0)}>` : ``}${keywords ? `<meta name="keywords"${add_attribute("content", keywords.join(","), 0)}>` : ``}<meta name="author" content="Coleflax Bennett Architecture"><meta name="twitter:site" content="@soonlondon"><meta name="twitter:creator" content="@soonlondon"><meta property="og:type"${add_attribute("content", ogType || "website", 0)}><meta property="og:site_name" content="Coleflax Bennett Architecture"><!-- HEAD_svelte-64xlno_END -->`, ""}`;
});
const smSizesDefault = {
  lg: {
    width: 744,
    height: 446
  },
  md: {
    width: 792,
    height: 446
  },
  sm: {
    width: 736,
    height: 446
  },
  xs: {
    width: 344,
    height: 344
  },
  fallback: {
    width: 744,
    height: 446
  }
};
const lgSizesDefault = {
  lg: {
    width: 1512,
    height: 851
  },
  md: {
    width: 1200,
    height: 676
  },
  sm: {
    width: 768,
    height: 433
  },
  xs: {
    width: 376,
    height: 376
  },
  fallback: {
    width: 1512,
    height: 851
  }
};
const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false,
  // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20"
  // date of setup
});
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fit = "min" } = $$props;
  let { image } = $$props;
  let { altText = "" } = $$props;
  let { lazyLoad = true } = $$props;
  let { pictureClasses = "" } = $$props;
  let { imageClasses = "" } = $$props;
  let { smSizes = smSizesDefault } = $$props;
  let { lgSizes = lgSizesDefault } = $$props;
  let { lgImg = false } = $$props;
  const xsImageUrl = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.xs.width : smSizes.xs.width, lgImg ? lgSizes.xs.height : smSizes.xs.height).auto("format").url()}`;
  const xsImageUrl2x = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.xs.width * 2 : smSizes.xs.width * 2, lgImg ? lgSizes.xs.height * 2 : smSizes.xs.height * 2).auto("format").url()} 2x`;
  const smImageUrl = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.sm.width : smSizes.sm.width, lgImg ? lgSizes.sm.height : smSizes.sm.height).auto("format").url()}`;
  const smImageUrl2x = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.sm.width * 2 : smSizes.sm.width * 2, lgImg ? lgSizes.sm.height * 2 : smSizes.sm.height * 2).auto("format").url()} 2x`;
  const mdImageUrl = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.md.width : smSizes.md.width, lgImg ? lgSizes.md.height : smSizes.md.height).auto("format").url()}`;
  const mdImageUrl2x = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.md.width * 2 : smSizes.md.width * 2, lgImg ? lgSizes.md.height * 2 : smSizes.md.height * 2).auto("format").url()} 2x`;
  const lgImageUrl = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.lg.width : smSizes.lg.width, lgImg ? lgSizes.lg.height : smSizes.lg.height).auto("format").url()}`;
  const lgImageUrl2x = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.lg.width * 2 : smSizes.lg.width * 2, lgImg ? lgSizes.lg.height * 2 : smSizes.lg.height * 2).auto("format").url()} 2x`;
  const xlImageUrl = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.lg.width : smSizes.lg.width, lgImg ? lgSizes.lg.height : smSizes.lg.height).auto("format").url()}`;
  const xlImageUrl2x = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.lg.width * 2 : smSizes.lg.width * 2, lgImg ? lgSizes.lg.height * 2 : smSizes.lg.height * 2).auto("format").url()} 2x`;
  const fallbackImageUrl = `${urlFor(image).fit(fit).size(lgImg ? lgSizes.fallback.width : smSizes.fallback.width, lgImg ? lgSizes.fallback.height : smSizes.fallback.height).auto("format").url()}`;
  if ($$props.fit === void 0 && $$bindings.fit && fit !== void 0) $$bindings.fit(fit);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0) $$bindings.altText(altText);
  if ($$props.lazyLoad === void 0 && $$bindings.lazyLoad && lazyLoad !== void 0) $$bindings.lazyLoad(lazyLoad);
  if ($$props.pictureClasses === void 0 && $$bindings.pictureClasses && pictureClasses !== void 0) $$bindings.pictureClasses(pictureClasses);
  if ($$props.imageClasses === void 0 && $$bindings.imageClasses && imageClasses !== void 0) $$bindings.imageClasses(imageClasses);
  if ($$props.smSizes === void 0 && $$bindings.smSizes && smSizes !== void 0) $$bindings.smSizes(smSizes);
  if ($$props.lgSizes === void 0 && $$bindings.lgSizes && lgSizes !== void 0) $$bindings.lgSizes(lgSizes);
  if ($$props.lgImg === void 0 && $$bindings.lgImg && lgImg !== void 0) $$bindings.lgImg(lgImg);
  return `<picture${add_attribute("class", pictureClasses, 0)}><source${add_attribute("srcset", `${xlImageUrl}, ${xlImageUrl2x}`, 0)} media="(min-width: 2000px)"> <source${add_attribute("srcset", `${lgImageUrl}, ${lgImageUrl2x}`, 0)} media="(min-width: 1600px)"> <source${add_attribute("srcset", `${mdImageUrl}, ${mdImageUrl2x}`, 0)} media="(min-width: 1280px)"> <source${add_attribute("srcset", `${smImageUrl}, ${smImageUrl2x}`, 0)} media="(min-width: 768px)"> <source${add_attribute("srcset", `${xsImageUrl}, ${xsImageUrl2x}`, 0)} media="(min-width: 376px)"> <img${add_attribute("src", `${fallbackImageUrl}`, 0)}${add_attribute("alt", altText, 0)}${add_attribute("loading", lazyLoad ? "lazy" : "eager", 0)}${add_attribute("width", lgImg ? lgSizes.md.width : smSizes.md.width, 0)}${add_attribute("height", lgImg ? lgSizes.md.height : smSizes.md.height, 0)}${add_attribute("class", imageClasses, 0)}></picture> `;
});
function getRandomKey() {
  return Math.random().toFixed(5).split(".")[1];
}
function assertSpanKey(span) {
  return {
    _key: span._key || getRandomKey(),
    ...span
  };
}
function assertBlockKey(block) {
  return {
    _key: block._key || getRandomKey(),
    ...block,
    ...block._type === "block" && Array.isArray(block.children) ? {
      children: block.children.map(assertSpanKey)
    } : {}
  };
}
const DefaultMark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let markType;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0) $$bindings.portableText(portableText);
  ({ markType } = portableText);
  return `${markType === "strong" ? `<strong>${slots.default ? slots.default({}) : ``}</strong>` : `${markType === "em" ? `<em>${slots.default ? slots.default({}) : ``}</em>` : `${markType === "code" ? `<code>${slots.default ? slots.default({}) : ``}</code>` : `${markType === "underline" ? `<span style="text-decoration:underline;">${slots.default ? slots.default({}) : ``}</span>` : `${markType === "strike-through" ? `<del>${slots.default ? slots.default({}) : ``}</del>` : `${slots.default ? slots.default({}) : ``}`}`}`}`}`}`;
});
const DefaultLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let href;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0) $$bindings.portableText(portableText);
  ({ value } = portableText);
  href = value?.href || value?.url || value?.link || value?.value;
  return `${typeof href === "string" ? `<a${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const DefaultBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let style;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0) $$bindings.portableText(portableText);
  ({ value } = portableText);
  style = value.style || "normal";
  return `${["h1", "h2", "h3", "h4", "h5", "h6", "blockquote"].includes(style) ? `${((tag) => {
    return tag ? `<${style}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(style)}` : `${style === "normal" ? `<p>${slots.default ? slots.default({}) : ``}</p>` : `${slots.default ? slots.default({}) : ``}`}`}`;
});
const DefaultList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value;
  let listItem;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0) $$bindings.portableText(portableText);
  ({ value } = portableText);
  ({ listItem } = value);
  return `${listItem === "number" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const DefaultListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const DefaultHardBreak = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<br>`;
});
const UnknownType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
const defaultComponents = {
  marks: {
    "strike-through": DefaultMark,
    code: DefaultMark,
    em: DefaultMark,
    strong: DefaultMark,
    underline: DefaultMark,
    link: DefaultLink
  },
  block: {
    blockquote: DefaultBlock,
    h1: DefaultBlock,
    h2: DefaultBlock,
    h3: DefaultBlock,
    h4: DefaultBlock,
    h5: DefaultBlock,
    h6: DefaultBlock,
    normal: DefaultBlock
  },
  list: {
    bullet: DefaultList,
    number: DefaultList
  },
  listItem: {
    bullet: DefaultListItem,
    number: DefaultListItem
  },
  types: {},
  hardBreak: DefaultHardBreak,
  unknownBlockStyle: DefaultBlock,
  unknownList: DefaultList,
  unknownListItem: DefaultListItem,
  unknownMark: DefaultMark,
  unknownType: UnknownType
};
function mergeComponents(parent, overrides = {}) {
  return {
    ...parent,
    ...overrides,
    block: mergeDeeply(parent, overrides, "block"),
    list: mergeDeeply(parent, overrides, "list"),
    listItem: mergeDeeply(parent, overrides, "listItem"),
    marks: mergeDeeply(parent, overrides, "marks"),
    types: mergeDeeply(parent, overrides, "types")
  };
}
function mergeDeeply(parent, overrides, key) {
  const override = overrides[key];
  const parentVal = parent[key];
  if (typeof override === "function") {
    return override;
  }
  if (override && typeof parentVal === "function") {
    return override;
  }
  if (override) {
    return { ...parentVal, ...override };
  }
  return parentVal;
}
const RenderBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let style;
  let blockComponent;
  let blockProps;
  let { global } = $$props;
  let { node } = $$props;
  let { indexInParent } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0) $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0) $$bindings.indexInParent(indexInParent);
  ({ components } = global);
  ({ style = "normal" } = node);
  blockComponent = typeof components.block === "function" ? components.block : components.block[style];
  {
    if (!blockComponent) {
      global.missingComponentHandler(style, "blockStyle");
    }
  }
  blockProps = /* @__PURE__ */ (() => {
    return { global, indexInParent, value: node };
  })();
  return `${validate_component(blockComponent || components.unknownBlockStyle || missing_component, "svelte:component").$$render($$result, { portableText: blockProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const RenderCustomBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let _type;
  let customComponent;
  let componentProps;
  let { global } = $$props;
  let { node } = $$props;
  let { parentBlock } = $$props;
  let { indexInParent } = $$props;
  let { isInline = false } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0) $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  if ($$props.parentBlock === void 0 && $$bindings.parentBlock && parentBlock !== void 0) $$bindings.parentBlock(parentBlock);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0) $$bindings.indexInParent(indexInParent);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0) $$bindings.isInline(isInline);
  ({ components } = global);
  ({ _type } = node);
  customComponent = components.types[_type];
  {
    if (!customComponent) {
      global.missingComponentHandler(_type, "block");
    }
  }
  componentProps = /* @__PURE__ */ (() => {
    return {
      global,
      value: node,
      indexInParent,
      parentBlock,
      isInline
    };
  })();
  return `${validate_component(customComponent || components.unknownType || missing_component, "svelte:component").$$render($$result, { portableText: componentProps }, {}, {})}`;
});
const RenderList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let listItem;
  let handler;
  let listComponent;
  let listProps;
  let { global } = $$props;
  let { indexInParent } = $$props;
  let { node } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0) $$bindings.global(global);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0) $$bindings.indexInParent(indexInParent);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  ({ components } = global);
  ({ listItem } = node);
  handler = typeof components.list === "function" ? components.list : components.list[listItem];
  listComponent = handler;
  {
    if (!listComponent) {
      global.missingComponentHandler(listItem, "listStyle");
    }
  }
  listProps = /* @__PURE__ */ (() => {
    return { global, value: node, indexInParent };
  })();
  return `${validate_component(listComponent || components.unknownList || missing_component, "svelte:component").$$render($$result, { portableText: listProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const RenderListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let style;
  let listItemComponent;
  let styleComponent;
  let listItemProps;
  let { global } = $$props;
  let { indexInParent } = $$props;
  let { node } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0) $$bindings.global(global);
  if ($$props.indexInParent === void 0 && $$bindings.indexInParent && indexInParent !== void 0) $$bindings.indexInParent(indexInParent);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  ({ components } = global);
  ({ style = "normal" } = node);
  listItemComponent = typeof components.listItem === "function" ? components.listItem : components.listItem[style];
  {
    if (!listItemComponent) {
      global.missingComponentHandler(style, "listItemStyle");
    }
  }
  styleComponent = style !== "normal" ? components.block[style] : void 0;
  listItemProps = /* @__PURE__ */ (() => {
    return { global, value: node, indexInParent };
  })();
  return `${validate_component(listItemComponent || components.unknownListItem || missing_component, "svelte:component").$$render($$result, { portableText: listItemProps }, {}, {
    default: () => {
      return `${styleComponent ? `${validate_component(styleComponent || missing_component, "svelte:component").$$render(
        $$result,
        {
          portableText: {
            // Different props for the block that will hold this list
            ...listItemProps,
            value: {
              ...node,
              // BlockComponentProps shouldn't receive a listItem
              listItem: void 0
            }
          }
        },
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })}`;
});
const RenderSpan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let markType;
  let markComponent;
  let markProps;
  let { global } = $$props;
  let { node } = $$props;
  let { parentBlock } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0) $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  if ($$props.parentBlock === void 0 && $$bindings.parentBlock && parentBlock !== void 0) $$bindings.parentBlock(parentBlock);
  ({ components } = global);
  ({ markType } = node);
  markComponent = components.marks[markType];
  {
    if (!markComponent) {
      global.missingComponentHandler(markType, "mark");
    }
  }
  markProps = (() => {
    return {
      global,
      parentBlock,
      markType,
      value: node.markDef,
      markKey: node.markKey,
      plainTextContent: spanToPlainText(node)
    };
  })();
  return `${validate_component(markComponent || components.unknownMark || missing_component, "svelte:component").$$render($$result, { portableText: markProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const RenderText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let text;
  let { global } = $$props;
  let { node } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0) $$bindings.global(global);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  ({ components } = global);
  ({ text } = node);
  return `${text === "\n" ? `${typeof components.hardBreak === "function" ? `${validate_component(components.hardBreak || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${escape(text)}`}` : `${escape(text)}`}`;
});
const RenderNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let node;
  let indexInParent;
  let parentBlock;
  let isInline;
  let { global } = $$props;
  let { options } = $$props;
  if ($$props.global === void 0 && $$bindings.global && global !== void 0) $$bindings.global(global);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  ({ node, indexInParent, parentBlock, isInline } = options);
  return `${isPortableTextToolkitList(node) ? `${validate_component(RenderList, "RenderList").$$render($$result, { node, indexInParent, global }, {}, {
    default: () => {
      return `${each(node.children, (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              node: child,
              indexInParent: childIndex,
              // The list's children will be parsed as PortableTextListItem, which will pass the proper parentBlock & isInline
              parentBlock: void 0,
              isInline: void 0
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextListItemBlock(node) ? `${validate_component(RenderListItem, "RenderListItem").$$render($$result, { node, indexInParent, global }, {}, {
    default: () => {
      return `${each(buildMarksTree(node), (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              // Pass the current listItem as a parentBlock
              parentBlock: node,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextToolkitSpan(node) ? `${validate_component(RenderSpan, "RenderSpan").$$render($$result, { node, parentBlock, global }, {}, {
    default: () => {
      return `${each(node.children, (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              parentBlock,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextBlock(node) ? `${validate_component(RenderBlock, "RenderBlock").$$render($$result, { node, indexInParent, global }, {}, {
    default: () => {
      return `${each(buildMarksTree(node), (child, childIndex) => {
        return `${validate_component(RenderNode, "svelte:self").$$render(
          $$result,
          {
            options: {
              parentBlock: node,
              node: child,
              isInline: true,
              indexInParent: childIndex
            },
            global
          },
          {},
          {}
        )}`;
      })}`;
    }
  })}` : `${isPortableTextToolkitTextNode(node) ? `${validate_component(RenderText, "RenderText").$$render($$result, { node, global }, {}, {})}` : `${node ? `${validate_component(RenderCustomBlock, "RenderCustomBlock").$$render(
    $$result,
    {
      node,
      parentBlock,
      indexInParent,
      isInline,
      global
    },
    {},
    {}
  )}` : ``}`}`}`}`}`}`;
});
const getTemplate = (type, prop) => `Unknown ${type}, specify a component for it in the \`components${prop ? "." : ""}${prop}\` prop`;
const getWarningMessage = (type, nodeType) => {
  switch (nodeType) {
    case "block":
      return getTemplate(`block type "${type}"`, "types");
    case "blockStyle":
      return getTemplate(`block style "${type}"`, "block");
    case "listItemStyle":
      return getTemplate(`list item style "${type}"`, "listItem");
    case "listStyle":
      return getTemplate(`list style "${type}"`, "list");
    case "mark":
      return getTemplate(`mark type "${type}"`, "marks");
    default:
      return getTemplate("type");
  }
};
function printWarning(message) {
  console.warn(message);
}
const PortableText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mergedComponents;
  let keyedBlocks;
  let blocks;
  let missingComponentHandler;
  let { value = [] } = $$props;
  let { components } = $$props;
  let { context = {} } = $$props;
  let { onMissingComponent = true } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0) $$bindings.context(context);
  if ($$props.onMissingComponent === void 0 && $$bindings.onMissingComponent && onMissingComponent !== void 0) $$bindings.onMissingComponent(onMissingComponent);
  mergedComponents = mergeComponents(defaultComponents, components);
  keyedBlocks = (Array.isArray(value) ? value : [value]).map(assertBlockKey);
  blocks = nestLists(keyedBlocks, LIST_NEST_MODE_HTML);
  missingComponentHandler = (type, nodeType) => {
    if (onMissingComponent === false) {
      return;
    }
    const message = getWarningMessage(type, nodeType);
    if (typeof onMissingComponent === "function") {
      onMissingComponent(message, { type, nodeType });
      return;
    }
    printWarning(message);
  };
  return `${each(blocks, (node, index) => {
    return `${validate_component(RenderNode, "RenderNode").$$render(
      $$result,
      {
        global: {
          components: mergedComponents,
          missingComponentHandler,
          context,
          ptBlocks: blocks,
          ptRawValue: value
        },
        options: {
          node,
          isInline: false,
          indexInParent: index
        }
      },
      {},
      {}
    )}`;
  })}`;
});
const extractMarks = (markDefs, child) => {
  let content = "";
  if (child.marks.length < 1) content = child.text;
  child.marks.map((mark) => {
    if (mark === "strong" || mark === "em") {
      content = `<${mark}>${child.text}</${mark}>`;
      return;
    }
    markDefs.map((def) => {
      if (def._type === "link" && def._key === mark) {
        content = `<a href="${def.href}" target="${def.blank ? "_blank" : ""}">${child.text}</a>`;
        return;
      }
    });
  });
  return content;
};
const Body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { portableText } = $$props;
  if (portableText) {
    let blockContent = [];
    portableText.value.children.map((child) => {
      blockContent.push(extractMarks(portableText.value.markDefs, child));
    });
    let blockContentJoined = blockContent.join("");
    text = blockContentJoined;
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0) $$bindings.portableText(portableText);
  return `${validate_component(Typography, "Typography").$$render($$result, { component: "p", variant: "body1" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
    }
  })}`;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  let { portableText } = $$props;
  let { style = "h1" } = $$props;
  let { component = "h1" } = $$props;
  if (portableText) {
    heading = portableText.value.children[0].text;
    style = portableText.value.style;
  }
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0) $$bindings.heading(heading);
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0) $$bindings.portableText(portableText);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  return `${validate_component(Typography, "Typography").$$render($$result, { component, variant: style }, {}, {
    default: () => {
      return `${escape(heading)}`;
    }
  })}`;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { portableText } = $$props;
  if (portableText) {
    let blockContent = [];
    portableText.value.children.map((child) => {
      blockContent.push(extractMarks(portableText.value.markDefs, child));
    });
    let blockContentJoined = blockContent.join("");
    text = blockContentJoined;
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0) $$bindings.portableText(portableText);
  return `<li class="relative pl-4 before:w-[5px] before:h-[5px] before:rotate-45 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-blue before:content-[' ']">${validate_component(Typography, "Typography").$$render($$result, { component: "p", variant: "body1" }, {}, {
    default: () => {
      return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
    }
  })}</li>`;
});
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content = [] } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  return `<div class="prose">${validate_component(PortableText, "PortableText").$$render(
    $$result,
    {
      value: content,
      onMissingComponent: false,
      components: {
        types: {
          //@ts-ignore
          normal: Body
        },
        // linebreak: Break,
        // quote: Quote,
        // imageBlock: SanityImage,
        block: {
          //@ts-ignore
          normal: Body,
          //@ts-ignore
          h1: Heading,
          //@ts-ignore
          h2: Heading,
          //@ts-ignore
          h3: Heading,
          //@ts-ignore
          h4: Heading
        },
        listItem: { normal: ListItem }
      }
    },
    {},
    {}
  )}</div>`;
});
export {
  Copy as C,
  Image as I,
  Seo as S
};
