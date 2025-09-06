import { c as create_ssr_component, j as spread, k as escape_attribute_value, l as escape_object, d as createEventDispatcher, e as add_attribute, v as validate_component, f as escape, i as null_to_empty } from "./ssr.js";
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full max-w-[2560px] mx-auto">${slots.default ? slots.default({}) : ``}</div>`;
});
const css$1 = {
  code: ".heading.svelte-lql1kn{line-height:41px;text-wrap:balance\n}.heading.svelte-lql1kn span{--tw-text-opacity:1;color:rgb(77 134 160 / var(--tw-text-opacity, 1))\n}.title1.svelte-lql1kn{font-family:Lexend, sans-serif;font-size:25px;line-height:45px\n}@media(min-width: 600px){.title1.svelte-lql1kn{font-size:40px\n    }}@media(min-width: 768px){.title1.svelte-lql1kn{line-height:1.5\n    }}.title2.svelte-lql1kn{font-family:Lexend, sans-serif;font-size:40px;line-height:45px\n}@media(min-width: 768px){.title2.svelte-lql1kn{line-height:1.5\n    }}@media(min-width: 1024px){.title2.svelte-lql1kn{font-size:50px\n    }}.headline1.svelte-lql1kn,.h1.svelte-lql1kn{font-family:Lexend, sans-serif;font-size:30px;font-weight:700\n}.headline2.svelte-lql1kn,.h2.svelte-lql1kn{font-family:Lexend, sans-serif;font-size:26px;font-weight:700\n}.headline3.svelte-lql1kn,.h3.svelte-lql1kn{font-family:Lexend, sans-serif;font-size:22px;font-weight:700;line-height:1.375\n}.headline4.svelte-lql1kn,.h4.svelte-lql1kn{font-family:Lexend, sans-serif;font-size:18px;font-weight:700\n}.body1.svelte-lql1kn{font-size:18px;font-weight:400;line-height:35px\n}.body2.svelte-lql1kn{font-size:22px;line-height:38px\n}.project1.svelte-lql1kn{font-family:Lexend, sans-serif;font-size:20px;font-weight:700;text-transform:uppercase;line-height:1.375\n}.sub1.svelte-lql1kn{font-size:16px;line-height:24px;letter-spacing:0.025em\n}.testimonial1.svelte-lql1kn{font-family:Lexend, sans-serif;font-size:24px;font-weight:200;line-height:1.5\n}@media(min-width: 1024px){.testimonial1.svelte-lql1kn{font-size:30px\n    }}.button1.svelte-lql1kn{font-family:Karla, sans-serif;font-weight:700;text-transform:uppercase\n}.nav1.svelte-lql1kn{font-size:18px;letter-spacing:0.025em\n}",
  map: '{"version":3,"file":"Typography.svelte","sources":["Typography.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let variant = \\"body1\\";\\nexport let component = \\"\\";\\nexport let theme = \\"\\";\\nexport let uppercase = false;\\nexport let underline = false;\\nexport let bold = false;\\nexport let italic = false;\\nexport let spaced = false;\\n<\/script>\\n\\n{#if component === \\"h1\\"}\\n  <h1\\n    class={`heading ${variant} ${uppercase && \\"uppercase\\"} ${\\n      underline && \\"underline\\"\\n    } ${bold && \\"bold\\"} ${italic && \\"italic\\"} ${\\n      spaced && \\"tracking-wide\\"\\n    } ${theme}`}\\n    {...$$props}\\n  >\\n    <slot />\\n  </h1>\\n{:else if component === \\"h2\\"}\\n  <h2\\n    class={`heading ${variant} ${uppercase && \\"uppercase\\"} ${\\n      underline && \\"underline\\"\\n    } ${bold && \\"bold\\"} ${italic && \\"italic\\"} ${\\n      spaced && \\"tracking-wide\\"\\n    } ${theme}`}\\n    {...$$props}\\n  >\\n    <slot />\\n  </h2>\\n{:else if component === \\"h3\\"}\\n  <h3\\n    class={`heading ${variant} ${uppercase && \\"uppercase\\"}\\n    ${underline && \\"underline\\"} ${bold && \\"bold\\"} ${italic && \\"italic\\"} ${\\n      spaced && \\"tracking-wide\\"\\n    } ${theme}`}\\n    {...$$props}\\n  >\\n    <slot />\\n  </h3>\\n{:else if component === \\"h4\\"}\\n  <h4\\n    class={`heading ${variant} ${uppercase && \\"uppercase\\"}\\n    ${underline && \\"underline\\"} ${bold && \\"bold\\"} ${italic && \\"italic\\"} ${\\n      spaced && \\"tracking-wide\\"\\n    } ${theme}`}\\n    {...$$props}\\n  >\\n    <slot />\\n  </h4>\\n{:else if component === \\"h5\\"}\\n  <h5\\n    class={`heading ${variant} ${uppercase && \\"uppercase\\"}\\n    ${underline && \\"underline\\"} ${bold && \\"bold\\"} ${italic && \\"italic\\"} ${\\n      spaced && \\"tracking-wide\\"\\n    } ${theme}`}\\n    {...$$props}\\n  >\\n    <slot />\\n  </h5>\\n{:else if component === \\"h6\\"}\\n  <h6\\n    class={`heading ${variant} ${uppercase && \\"uppercase\\"}\\n    ${underline && \\"underline\\"} ${bold && \\"bold\\"} ${italic && \\"italic\\"} ${\\n      spaced && \\"tracking-wide\\"\\n    } ${theme}`}\\n    {...$$props}\\n  >\\n    <slot />\\n  </h6>\\n{:else if component === \\"p\\"}\\n  <p\\n    class={`${variant} ${uppercase && \\"uppercase\\"}\\n    ${underline && \\"underline\\"} ${bold && \\"bold\\"} ${italic && \\"italic\\"} ${\\n      spaced && \\"tracking-wide\\"\\n    } ${theme}`}\\n    {...$$props}\\n  >\\n    <slot />\\n  </p>\\n{:else if component === \\"span\\"}\\n  <span\\n    class={`${variant} ${uppercase && \\"uppercase\\"}\\n    ${underline && \\"underline\\"} ${bold && \\"bold\\"} ${italic && \\"italic\\"} ${\\n      spaced && \\"tracking-wide\\"\\n    } ${theme}`}\\n    {...$$props}\\n  >\\n    <slot />\\n  </span>\\n{/if}\\n\\n<style>\\n  .heading {\\n    line-height: 41px;\\n    text-wrap: balance\\n}\\n\\n    .heading :global(span) {\\n    --tw-text-opacity: 1;\\n    color: rgb(77 134 160 / var(--tw-text-opacity, 1))\\n}\\n\\n  .title1 {\\n    font-family: Lexend, sans-serif;\\n    font-size: 25px;\\n    line-height: 45px\\n}\\n\\n  @media (min-width: 600px) {\\n\\n    .title1 {\\n        font-size: 40px\\n    }\\n}\\n\\n  @media (min-width: 768px) {\\n\\n    .title1 {\\n        line-height: 1.5\\n    }\\n}\\n\\n  .title2 {\\n    font-family: Lexend, sans-serif;\\n    font-size: 40px;\\n    line-height: 45px\\n}\\n\\n  @media (min-width: 768px) {\\n\\n    .title2 {\\n        line-height: 1.5\\n    }\\n}\\n\\n  @media (min-width: 1024px) {\\n\\n    .title2 {\\n        font-size: 50px\\n    }\\n}\\n\\n  .headline1,\\n  .h1 {\\n    font-family: Lexend, sans-serif;\\n    font-size: 30px;\\n    font-weight: 700\\n}\\n\\n  .headline2,\\n  .h2 {\\n    font-family: Lexend, sans-serif;\\n    font-size: 26px;\\n    font-weight: 700\\n}\\n\\n  .headline3,\\n  .h3 {\\n    font-family: Lexend, sans-serif;\\n    font-size: 22px;\\n    font-weight: 700;\\n    line-height: 1.375\\n}\\n\\n  .headline4,\\n  .h4 {\\n    font-family: Lexend, sans-serif;\\n    font-size: 18px;\\n    font-weight: 700\\n}\\n\\n  .body1 {\\n    font-size: 18px;\\n    font-weight: 400;\\n    line-height: 35px\\n}\\n\\n  .body2 {\\n    font-size: 22px;\\n    line-height: 38px\\n}\\n\\n  .project1 {\\n    font-family: Lexend, sans-serif;\\n    font-size: 20px;\\n    font-weight: 700;\\n    text-transform: uppercase;\\n    line-height: 1.375\\n}\\n\\n  .sub1 {\\n    font-size: 16px;\\n    line-height: 24px;\\n    letter-spacing: 0.025em\\n}\\n\\n  .testimonial1 {\\n    font-family: Lexend, sans-serif;\\n    font-size: 24px;\\n    font-weight: 200;\\n    line-height: 1.5\\n}\\n\\n  @media (min-width: 1024px) {\\n\\n    .testimonial1 {\\n        font-size: 30px\\n    }\\n}\\n\\n  .button1 {\\n    font-family: Karla, sans-serif;\\n    font-weight: 700;\\n    text-transform: uppercase\\n}\\n\\n  .nav1 {\\n    font-size: 18px;\\n    letter-spacing: 0.025em\\n}</style>\\n"],"names":[],"mappings":"AA+FE,sBAAS,CACP,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE;AACf,CAEI,sBAAQ,CAAS,IAAM,CACvB,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACrD,CAEE,qBAAQ,CACN,WAAW,CAAE,MAAM,CAAC,CAAC,UAAU,CAC/B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE;AACjB,CAEE,MAAO,YAAY,KAAK,CAAE,CAExB,qBAAQ,CACJ,SAAS,CAAE;AACnB,IAAI,CACJ,CAEE,MAAO,YAAY,KAAK,CAAE,CAExB,qBAAQ,CACJ,WAAW,CAAE;AACrB,IAAI,CACJ,CAEE,qBAAQ,CACN,WAAW,CAAE,MAAM,CAAC,CAAC,UAAU,CAC/B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE;AACjB,CAEE,MAAO,YAAY,KAAK,CAAE,CAExB,qBAAQ,CACJ,WAAW,CAAE;AACrB,IAAI,CACJ,CAEE,MAAO,YAAY,MAAM,CAAE,CAEzB,qBAAQ,CACJ,SAAS,CAAE;AACnB,IAAI,CACJ,CAEE,wBAAU,CACV,iBAAI,CACF,WAAW,CAAE,MAAM,CAAC,CAAC,UAAU,CAC/B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE;AACjB,CAEE,wBAAU,CACV,iBAAI,CACF,WAAW,CAAE,MAAM,CAAC,CAAC,UAAU,CAC/B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE;AACjB,CAEE,wBAAU,CACV,iBAAI,CACF,WAAW,CAAE,MAAM,CAAC,CAAC,UAAU,CAC/B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE;AACjB,CAEE,wBAAU,CACV,iBAAI,CACF,WAAW,CAAE,MAAM,CAAC,CAAC,UAAU,CAC/B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE;AACjB,CAEE,oBAAO,CACL,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE;AACjB,CAEE,oBAAO,CACL,SAAS,CAAE,IAAI,CACf,WAAW,CAAE;AACjB,CAEE,uBAAU,CACR,WAAW,CAAE,MAAM,CAAC,CAAC,UAAU,CAC/B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE;AACjB,CAEE,mBAAM,CACJ,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE;AACpB,CAEE,2BAAc,CACZ,WAAW,CAAE,MAAM,CAAC,CAAC,UAAU,CAC/B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE;AACjB,CAEE,MAAO,YAAY,MAAM,CAAE,CAEzB,2BAAc,CACV,SAAS,CAAE;AACnB,IAAI,CACJ,CAEE,sBAAS,CACP,WAAW,CAAE,KAAK,CAAC,CAAC,UAAU,CAC9B,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE;AACpB,CAEE,mBAAM,CACJ,SAAS,CAAE,IAAI,CACf,cAAc,CAAE;AACpB"}'
};
const Typography = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "body1" } = $$props;
  let { component = "" } = $$props;
  let { theme = "" } = $$props;
  let { uppercase = false } = $$props;
  let { underline = false } = $$props;
  let { bold = false } = $$props;
  let { italic = false } = $$props;
  let { spaced = false } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
  if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0) $$bindings.uppercase(uppercase);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0) $$bindings.underline(underline);
  if ($$props.bold === void 0 && $$bindings.bold && bold !== void 0) $$bindings.bold(bold);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0) $$bindings.italic(italic);
  if ($$props.spaced === void 0 && $$bindings.spaced && spaced !== void 0) $$bindings.spaced(spaced);
  $$result.css.add(css$1);
  return `${component === "h1" ? `<h1${spread(
    [
      {
        class: escape_attribute_value(`heading ${variant} ${uppercase && "uppercase"} ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${spaced && "tracking-wide"} ${theme}`)
      },
      escape_object($$props)
    ],
    { classes: "svelte-lql1kn" }
  )}>${slots.default ? slots.default({}) : ``}</h1>` : `${component === "h2" ? `<h2${spread(
    [
      {
        class: escape_attribute_value(`heading ${variant} ${uppercase && "uppercase"} ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${spaced && "tracking-wide"} ${theme}`)
      },
      escape_object($$props)
    ],
    { classes: "svelte-lql1kn" }
  )}>${slots.default ? slots.default({}) : ``}</h2>` : `${component === "h3" ? `<h3${spread(
    [
      {
        class: escape_attribute_value(`heading ${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${spaced && "tracking-wide"} ${theme}`)
      },
      escape_object($$props)
    ],
    { classes: "svelte-lql1kn" }
  )}>${slots.default ? slots.default({}) : ``}</h3>` : `${component === "h4" ? `<h4${spread(
    [
      {
        class: escape_attribute_value(`heading ${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${spaced && "tracking-wide"} ${theme}`)
      },
      escape_object($$props)
    ],
    { classes: "svelte-lql1kn" }
  )}>${slots.default ? slots.default({}) : ``}</h4>` : `${component === "h5" ? `<h5${spread(
    [
      {
        class: escape_attribute_value(`heading ${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${spaced && "tracking-wide"} ${theme}`)
      },
      escape_object($$props)
    ],
    { classes: "svelte-lql1kn" }
  )}>${slots.default ? slots.default({}) : ``}</h5>` : `${component === "h6" ? `<h6${spread(
    [
      {
        class: escape_attribute_value(`heading ${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${spaced && "tracking-wide"} ${theme}`)
      },
      escape_object($$props)
    ],
    { classes: "svelte-lql1kn" }
  )}>${slots.default ? slots.default({}) : ``}</h6>` : `${component === "p" ? `<p${spread(
    [
      {
        class: escape_attribute_value(`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${spaced && "tracking-wide"} ${theme}`)
      },
      escape_object($$props)
    ],
    { classes: "svelte-lql1kn" }
  )}>${slots.default ? slots.default({}) : ``}</p>` : `${component === "span" ? `<span${spread(
    [
      {
        class: escape_attribute_value(`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${spaced && "tracking-wide"} ${theme}`)
      },
      escape_object($$props)
    ],
    { classes: "svelte-lql1kn" }
  )}>${slots.default ? slots.default({}) : ``}</span>` : ``}`}`}`}`}`}`}`}`;
});
const css = {
  code: ".button.svelte-xw5zp2{display:inline-block;border-width:1px;--tw-border-opacity:1;border-color:rgb(77 134 160 / var(--tw-border-opacity, 1));padding-top:5px;padding-bottom:5px;padding-left:30px;padding-right:30px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}.primary.svelte-xw5zp2{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity:1;color:rgb(77 134 160 / var(--tw-text-opacity, 1))\n}.primary.svelte-xw5zp2:hover{--tw-bg-opacity:1;background-color:rgb(77 134 160 / var(--tw-bg-opacity, 1));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))\n}.secondary.svelte-xw5zp2{--tw-bg-opacity:1;background-color:rgb(77 134 160 / var(--tw-bg-opacity, 1));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))\n}.secondary.svelte-xw5zp2:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity:1;color:rgb(77 134 160 / var(--tw-text-opacity, 1))\n}.tertiary.svelte-xw5zp2{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity, 1));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))\n}.tertiary.svelte-xw5zp2:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity:1;color:rgb(77 134 160 / var(--tw-text-opacity, 1))\n}",
  map: '{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Typography from \\"$lib/components/Typography/Typography.svelte\\";\\nimport { createEventDispatcher } from \\"svelte\\";\\nconst dispatch = createEventDispatcher();\\nexport let href = \\"\\";\\nexport let newTab = false;\\nexport let label = \\"\\";\\nexport let theme = \\"primary\\";\\n/**\\n * Optional click handler\\n */\\nfunction onClick(event) {\\n    dispatch(\\"click\\", event);\\n}\\n<\/script>\\n\\n{#if href}\\n  <a\\n    class={`button ${theme}`}\\n    {href}\\n    target={newTab ? \\"_blank\\" : null}\\n    rel=\\"noopener noreferrer\\"\\n  >\\n    <Typography component=\\"span\\" variant=\\"button1\\">\\n      {label}\\n    </Typography>\\n  </a>\\n{:else}\\n  <button class={`button ${theme}`} on:click={onClick}>\\n    <Typography component=\\"span\\" variant=\\"button1\\">\\n      {label}\\n    </Typography>\\n  </button>\\n{/if}\\n\\n<style>\\n  .button {\\n\\n    display: inline-block;\\n\\n    border-width: 1px;\\n\\n    --tw-border-opacity: 1;\\n\\n    border-color: rgb(77 134 160 / var(--tw-border-opacity, 1));\\n\\n    padding-top: 5px;\\n\\n    padding-bottom: 5px;\\n\\n    padding-left: 30px;\\n\\n    padding-right: 30px;\\n\\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\\n\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n\\n    transition-duration: 200ms\\n}\\n\\n  .primary {\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(77 134 160 / var(--tw-text-opacity, 1))\\n}\\n\\n  .primary:hover {\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(77 134 160 / var(--tw-bg-opacity, 1));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1))\\n}\\n\\n  .secondary {\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(77 134 160 / var(--tw-bg-opacity, 1));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1))\\n}\\n\\n  .secondary:hover {\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(77 134 160 / var(--tw-text-opacity, 1))\\n}\\n\\n  .tertiary {\\n\\n    --tw-border-opacity: 1;\\n\\n    border-color: rgb(255 255 255 / var(--tw-border-opacity, 1));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1))\\n}\\n\\n  .tertiary:hover {\\n\\n    --tw-bg-opacity: 1;\\n\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\\n\\n    --tw-text-opacity: 1;\\n\\n    color: rgb(77 134 160 / var(--tw-text-opacity, 1))\\n}</style>\\n"],"names":[],"mappings":"AAmCE,qBAAQ,CAEN,OAAO,CAAE,YAAY,CAErB,YAAY,CAAE,GAAG,CAEjB,mBAAmB,CAAE,CAAC,CAEtB,YAAY,CAAE,IAAI,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,EAAE,CAAC,CAAC,CAE3D,WAAW,CAAE,GAAG,CAEhB,cAAc,CAAE,GAAG,CAEnB,YAAY,CAAE,IAAI,CAElB,aAAa,CAAE,IAAI,CAEnB,mBAAmB,CAAE,KAAK,CAAC,CAAC,gBAAgB,CAAC,CAAC,YAAY,CAAC,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,OAAO,CAAC,CAAC,UAAU,CAAC,CAAC,SAAS,CAAC,CAAC,MAAM,CAAC,CAAC,eAAe,CAExJ,0BAA0B,CAAE,aAAa,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAExD,mBAAmB,CAAE;AACzB,CAEE,sBAAS,CAEP,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE5D,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACrD,CAEE,sBAAQ,MAAO,CAEb,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE3D,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACtD,CAEE,wBAAW,CAET,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE3D,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACtD,CAEE,wBAAU,MAAO,CAEf,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE5D,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACrD,CAEE,uBAAU,CAER,mBAAmB,CAAE,CAAC,CAEtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,EAAE,CAAC,CAAC,CAE5D,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACtD,CAEE,uBAAS,MAAO,CAEd,eAAe,CAAE,CAAC,CAElB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,EAAE,CAAC,CAAC,CAE5D,iBAAiB,CAAE,CAAC,CAEpB,KAAK,CAAE,IAAI,EAAE,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,EAAE,CAAC;AACrD"}'
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { href = "" } = $$props;
  let { newTab = false } = $$props;
  let { label = "" } = $$props;
  let { theme = "primary" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.newTab === void 0 && $$bindings.newTab && newTab !== void 0) $$bindings.newTab(newTab);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
  $$result.css.add(css);
  return `${href ? `<a class="${escape(null_to_empty(`button ${theme}`), true) + " svelte-xw5zp2"}"${add_attribute("href", href, 0)}${add_attribute("target", newTab ? "_blank" : null, 0)} rel="noopener noreferrer">${validate_component(Typography, "Typography").$$render($$result, { component: "span", variant: "button1" }, {}, {
    default: () => {
      return `${escape(label)}`;
    }
  })}</a>` : `<button class="${escape(null_to_empty(`button ${theme}`), true) + " svelte-xw5zp2"}">${validate_component(Typography, "Typography").$$render($$result, { component: "span", variant: "button1" }, {}, {
    default: () => {
      return `${escape(label)}`;
    }
  })}</button>`}`;
});
export {
  Button as B,
  Container as C,
  Typography as T
};
