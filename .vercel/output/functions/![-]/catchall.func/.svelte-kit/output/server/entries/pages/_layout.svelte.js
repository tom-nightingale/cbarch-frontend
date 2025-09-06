import { c as create_ssr_component, b as subscribe, d as createEventDispatcher, v as validate_component, e as add_attribute, f as escape, g as each } from "../../chunks/ssr.js";
import { T as Typography, C as Container, B as Button } from "../../chunks/Button.js";
import { I as Icon } from "../../chunks/Icon.js";
import { p as page } from "../../chunks/stores.js";
const NavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  let { label = "Home" } = $$props;
  let { href = "/" } = $$props;
  let { classes = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0) $$bindings.classes(classes);
  $$unsubscribe_page();
  return ` ${validate_component(Typography, "Typography").$$render(
    $$result,
    {
      component: "p",
      variant: "nav1",
      uppercase: true
    },
    {},
    {
      default: () => {
        return `<a${add_attribute("href", href === "home" ? "/" : `/${href}`, 0)}${add_attribute(
          "class",
          `text-blue block relative
      ${classes} 
      ${$page.url.pathname === "/" && href === "home" || $page.url.pathname.replace("/", "") === href?.replace("/", "") || $page.route && $page.route.id && $page.route.id.includes("/projects") && href?.includes("/projects") ? "bg-blue-light lg:bg-transparent lg:after:h-[1px] lg:after:w-1/2 lg:after:absolute lg:after:-bottom-2  lg:after:bg-blue lg:after:left-1/2 lg:after:-translate-x-1/2 lg:after:hover:w-full lg:after:transition-all lg:after:duration-300" : "lg:hover:bg-blue-light"} `,
          0
        )}>${escape(label)}</a>`;
      }
    }
  )} `;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { navSections = [] } = $$props;
  if ($$props.navSections === void 0 && $$bindings.navSections && navSections !== void 0) $$bindings.navSections(navSections);
  return `<div class="fixed top-0 left-0 z-50 w-full bg-white shadow-sm header">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex items-center justify-between p-8 px-4 transition-all duration-300 md:px-8"><a class="hover:opacity-90 block w-[255px] max-w-[200px] md:max-w-[255px]" href="/" data-svelte-h="svelte-1yf4qbg"><span class="sr-only">Go to home</span> <img src="/logo.webp" alt="Coleflax Bennett Logo" width="349" height="75"></a> ${navSections ? `<div class="items-center hidden gap-4 lg:flex">${each(navSections, (section) => {
        return `<div class="relative group">${validate_component(NavItem, "NavItem").$$render(
          $$result,
          {
            label: section?.target?.title,
            href: section?.target?.slug?.current,
            classes: "p-2"
          },
          {},
          {}
        )} ${section?.children && section.children.length > 0 ? `<span class="absolute tracking-wide -translate-x-1/2 pointer-events-none -bottom-2 left-1/2 text-blue" data-svelte-h="svelte-xwmz4k">…</span> <div class="absolute left-0 invisible overflow-hidden transition-all duration-200 bg-white border opacity-0 pointer-events-none top-full border-blue/20 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible">${each(section?.children, (child) => {
          return `${validate_component(NavItem, "NavItem").$$render(
            $$result,
            {
              label: child?.target?.title,
              href: child?.target?.slug?.current,
              classes: "p-2"
            },
            {},
            {}
          )}`;
        })} </div>` : ``} </div>`;
      })}</div>` : ``} <div class="hidden lg:block">${validate_component(Button, "Button").$$render(
        $$result,
        {
          label: "Get in touch",
          theme: "primary",
          href: "/contact"
        },
        {},
        {}
      )}</div> <button class="flex items-center justify-center p-2 border lg:hidden border-blue text-blue"><span class="sr-only" data-svelte-h="svelte-abby7u">Open mobile menu</span> ${validate_component(Icon, "Icon").$$render($$result, { icon: "bars" }, {}, {})}</button></div>`;
    }
  })}</div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { regNumber = "13263042" } = $$props;
  let { email = "enquiries@cbarch.co.uk" } = $$props;
  let year = (/* @__PURE__ */ new Date()).getFullYear();
  if ($$props.regNumber === void 0 && $$bindings.regNumber && regNumber !== void 0) $$bindings.regNumber(regNumber);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0) $$bindings.email(email);
  return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="py-[40px] px-[30px] bg-white text-center md:flex md:flex-wrap md:justify-between"><div class="mb-4 lg:mb-0 md:flex md:flex-wrap md:items-center md:gap-2">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub1", component: "p" }, {}, {
        default: () => {
          return `© Coleflax Bennett Architecture ${escape(year)}.`;
        }
      })} ${validate_component(Typography, "Typography").$$render($$result, { variant: "sub1", component: "p" }, {}, {
        default: () => {
          return `All rights reserved.`;
        }
      })} ${validate_component(Typography, "Typography").$$render($$result, { variant: "sub1", component: "p" }, {}, {
        default: () => {
          return `Company Registered Number: ${escape(regNumber)}`;
        }
      })}</div> <div class="flex flex-col flex-wrap items-center justify-center gap-4 xs:flex-row">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub1", component: "p" }, {}, {
        default: () => {
          return `<a class="hover:text-blue"${add_attribute("href", `mailto:${email}`, 0)}>${escape(email)}</a>`;
        }
      })} <span class="hidden xs:inline-block w-[4px] h-[4px] rounded-full bg-blue" data-svelte-h="svelte-a7hqxt"> </span> ${validate_component(Typography, "Typography").$$render($$result, { variant: "sub1", component: "p" }, {}, {
        default: () => {
          return `<a class="hover:text-blue" href="/privacy-policy" data-svelte-h="svelte-1vra6pz">Privacy Policy</a>`;
        }
      })}</div></div>`;
    }
  })}`;
});
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { animateItems = false } = $$props;
  let { navSections = [] } = $$props;
  createEventDispatcher();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.animateItems === void 0 && $$bindings.animateItems && animateItems !== void 0) $$bindings.animateItems(animateItems);
  if ($$props.navSections === void 0 && $$bindings.navSections && navSections !== void 0) $$bindings.navSections(navSections);
  return `<div class="${"fixed top-0 z-[90] bg-white w-full h-screen lg:hidden lg:pointer-events-none transition-all duration-[350ms] ease-in-out overflow-y-scroll " + escape(open ? "left-0" : "left-full", true)}"><div class="flex flex-col justify-between min-h-screen overflow-scroll"><button class="absolute p-2 transition-all duration-200 border top-5 right-5 lg:hidden border-blue text-blue hover:text-white hover:bg-blue cursor:pointer"><span class="sr-only" data-svelte-h="svelte-1hufx4k">Close menu</span> ${validate_component(Icon, "Icon").$$render($$result, { icon: "times" }, {}, {})}</button> ${navSections ? `<div class="flex flex-col py-20 overflow-auto">${each(navSections, (section) => {
    return `${validate_component(NavItem, "NavItem").$$render(
      $$result,
      {
        label: section?.target?.title,
        href: section?.target?.slug?.current,
        classes: "relative block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px] duration-300"
      },
      {},
      {}
    )} ${section?.children && section.children.length > 0 ? `${each(section?.children, (child) => {
      return `<div class="relative block py-[15px] px-10 border-b border-b-[#F5F5F5] hover:pl-12 duration-300">${validate_component(NavItem, "NavItem").$$render(
        $$result,
        {
          label: child?.target?.title,
          href: child?.target?.slug?.current
        },
        {},
        {}
      )} </div>`;
    })}` : ``}`;
  })} ${validate_component(NavItem, "NavItem").$$render(
    $$result,
    {
      label: "Contact Us",
      href: "contact",
      classes: "block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px] duration-300"
    },
    {},
    {}
  )}</div>` : ``} ${open ? `<a class="flex justify-center w-full mt-auto text-white hover:opacity-90 bg-blue-light" href="/">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "cb-initials",
      classNames: "m-auto text-white",
      width: 200,
      height: 190
    },
    {},
    {}
  )}</a>` : ``}</div></div>`;
});
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-TPDS6QKTJT", {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1fbetkq_START --><script async${add_attribute("src", `https://www.googletagmanager.com/gtag/js?id=G-TPDS6QKTJT`, 0)} data-svelte-h="svelte-23k1tq"><\/script><script data-svelte-h="svelte-1wli5ja">window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-TPDS6QKTJT");<\/script><!-- HEAD_svelte-1fbetkq_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mobileMenuOpen = false;
  let animateItems = false;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render(
    $$result,
    {
      open: mobileMenuOpen,
      animateItems,
      navSections: data.navSections
    },
    {},
    {}
  )} ${validate_component(Header, "Header").$$render($$result, { navSections: data.navSections }, {}, {})} <div class="pt-[107px] md:pt-[119px]">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${$$result.head += `<!-- HEAD_svelte-6xms6p_START --><script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/efa75847543057db5a836d83dd6179c5.js" defer data-svelte-h="svelte-fkkvwo"><\/script><!-- HEAD_svelte-6xms6p_END -->`, ""}`;
});
export {
  Layout as default
};
