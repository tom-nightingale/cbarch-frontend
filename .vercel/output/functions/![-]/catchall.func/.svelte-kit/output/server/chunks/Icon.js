import { c as create_ssr_component, e as add_attribute, f as escape, i as null_to_empty } from "./ssr.js";
const css = {
  code: ".icon.svelte-1ax0rdf{display:inline-block;stroke-width:0;stroke:currentColor;fill:currentColor}",
  map: '{"version":3,"file":"Icon.svelte","sources":["Icon.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let icon = \\"\\";\\nexport let classNames = \\"\\";\\nexport let width = 24;\\nexport let height = 24;\\n<\/script>\\n\\n<svg\\n  class={`icon icon-${icon} ${classNames}`}\\n  style={`width: ${width}px; height: ${height}px;`}\\n>\\n  <use href={`/icons/icon-sprite.svg#icon-${icon}`} />\\n</svg>\\n\\n<style>\\n  .icon {\\n    display: inline-block;\\n    stroke-width: 0;\\n    stroke: currentColor;\\n    fill: currentColor;\\n  }</style>\\n"],"names":[],"mappings":"AAcE,oBAAM,CACJ,OAAO,CAAE,YAAY,CACrB,YAAY,CAAE,CAAC,CACf,MAAM,CAAE,YAAY,CACpB,IAAI,CAAE,YACR"}'
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "" } = $$props;
  let { classNames = "" } = $$props;
  let { width = 24 } = $$props;
  let { height = 24 } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0) $$bindings.classNames(classNames);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  $$result.css.add(css);
  return `<svg class="${escape(null_to_empty(`icon icon-${icon} ${classNames}`), true) + " svelte-1ax0rdf"}"${add_attribute("style", `width: ${width}px; height: ${height}px;`, 0)}><use${add_attribute("href", `/icons/icon-sprite.svg#icon-${icon}`, 0)}></use></svg>`;
});
export {
  Icon as I
};
