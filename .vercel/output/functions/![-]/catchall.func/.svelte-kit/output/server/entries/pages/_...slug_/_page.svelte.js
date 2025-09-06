import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as Seo } from "../../../chunks/Copy.js";
import { A as About } from "../../../chunks/About.js";
import "../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let page;
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  page = data.data;
  {
    console.log(page);
  }
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      seo: {
        title: page.seo?.metaTitle ? page.seo.metaTitle : "",
        description: page.seo?.metaDesc ? page.seo.metaDesc : "",
        keywords: page.seo?.keywords ? page.seo.keywords : void 0,
        shareGraphic: page.seo?.shareGraphic?.asset ? page.seo?.shareGraphic?.asset : void 0
      }
    },
    {},
    {}
  )} ${validate_component(About, "About").$$render($$result, { contentBlocks: page?.contentBlocks }, {}, {})}`;
});
export {
  Page as default
};
