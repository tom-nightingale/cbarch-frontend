import { c as create_ssr_component, b as subscribe, v as validate_component, f as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { C as Container, T as Typography } from "../../chunks/Button.js";
import { W as WorkWithUs } from "../../chunks/WorkWithUs.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col gap-8 p-4 prose md:w-1/2 md:p-8 md:mx-auto">${validate_component(Typography, "Typography").$$render(
        $$result,
        {
          component: "h2",
          variant: "headline2",
          theme: "text-blue"
        },
        {},
        {
          default: () => {
            return `${escape($page && $page.error && $page.error.message)}`;
          }
        }
      )} ${$page && $page?.error?.message === "Not Found" ? `${validate_component(Typography, "Typography").$$render($$result, { component: "p" }, {}, {
        default: () => {
          return `It looks like the page your are looking for no longer exists. Please go
        back to the <a href="/" data-svelte-h="svelte-7jj9f7">homepage.</a>`;
        }
      })}` : ``}</div>`;
    }
  })} ${validate_component(WorkWithUs, "WorkWithUs").$$render($$result, {}, {}, {})}`;
});
export {
  Error as default
};
