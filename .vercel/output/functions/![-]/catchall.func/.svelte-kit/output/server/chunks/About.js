import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { W as WorkWithUs } from "./WorkWithUs.js";
import { C as ContentBlockDigester } from "./ContentBlockDigester.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contentBlocks } = $$props;
  if ($$props.contentBlocks === void 0 && $$bindings.contentBlocks && contentBlocks !== void 0) $$bindings.contentBlocks(contentBlocks);
  return `${contentBlocks?.contentblocks && contentBlocks?.contentblocks?.length > 0 ? `${validate_component(ContentBlockDigester, "ContentBlockDigester").$$render($$result, { contentBlocks }, {}, {})}` : ``} ${validate_component(WorkWithUs, "WorkWithUs").$$render($$result, {}, {}, {})}`;
});
export {
  About as A
};
