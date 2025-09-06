import { c as create_ssr_component, v as validate_component, e as add_attribute, f as escape } from "./ssr.js";
import { C as Container, T as Typography, B as Button } from "./Button.js";
const WorkWithUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle = "Get in touch" } = $$props;
  let { title = "Interested in working with us?" } = $$props;
  let { text = "If you would like to experience the difference that thoughtful, innovative, and client centric design can make, then please get in touch to discuss your project." } = $$props;
  let contentContainer;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  return `<div class="text-white bg-blue">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="p-[60px] text-center max-w-[610px] md:px-0 md:py-[136px] mx-auto opacity-0 translate-y-[20px]"${add_attribute("this", contentContainer, 0)}><div class="mb-4">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          variant: "sub1",
          uppercase: true,
          component: "p"
        },
        {},
        {
          default: () => {
            return `${escape(subtitle)}`;
          }
        }
      )}</div> ${validate_component(Typography, "Typography").$$render($$result, { variant: "headline2", component: "p" }, {}, {
        default: () => {
          return `${escape(title)}`;
        }
      })} <div class="mt-[40px]">${validate_component(Typography, "Typography").$$render($$result, { variant: "body2", component: "p" }, {}, {
        default: () => {
          return `${escape(text)}`;
        }
      })}</div> <div class="mt-12">${validate_component(Button, "Button").$$render(
        $$result,
        {
          theme: "tertiary",
          label: "Get in touch",
          href: "/contact"
        },
        {},
        {}
      )}</div></div>`;
    }
  })}</div>`;
});
export {
  WorkWithUs as W
};
