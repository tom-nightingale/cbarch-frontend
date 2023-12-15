<script lang="ts">
  export let variant = "body1";
  export let component = "";
  export let theme = "";
  export let uppercase = false;
  export let underline = false;
  export let bold = false;
  export let italic = false;
  export let spaced = false;
</script>

{#if component === "h1"}
  <h1
    class={`heading ${variant} ${uppercase && "uppercase"} ${
      underline && "underline"
    } ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h1>
{:else if component === "h2"}
  <h2
    class={`heading ${variant} ${uppercase && "uppercase"} ${
      underline && "underline"
    } ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h2>
{:else if component === "h3"}
  <h3
    class={`heading ${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h3>
{:else if component === "h4"}
  <h4
    class={`heading ${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h4>
{:else if component === "h5"}
  <h5
    class={`heading ${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h5>
{:else if component === "h6"}
  <h6
    class={`heading ${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </h6>
{:else if component === "p"}
  <p
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </p>
{:else if component === "span"}
  <span
    class={`${variant} ${uppercase && "uppercase"}
    ${underline && "underline"} ${bold && "bold"} ${italic && "italic"} ${
      spaced && "tracking-wide"
    } ${theme}`}
    {...$$props}
  >
    <slot />
  </span>
{/if}

<style>
  .heading {
    @apply leading-[41px];
    text-wrap: balance;

    :global(span) {
      @apply text-blue;
    }
  }

  .title1 {
    @apply text-[25px] leading-[45px] font-heading;
    @apply sm:text-[40px];
    @apply md:leading-normal;
    @apply 3xl:text-[65px];
  }

  .title2 {
    @apply text-[40px] leading-[45px] font-heading;
    @apply md:leading-normal;
    @apply lg:text-[50px];
  }

  .headline1,
  .h1 {
    @apply text-[30px] font-heading font-bold;
  }

  .headline2,
  .h2 {
    @apply text-[26px] font-heading font-bold;
  }

  .headline3,
  .h3 {
    @apply text-[22px] leading-snug font-heading font-bold;
  }

  .headline4,
  .h4 {
    @apply text-[18px] font-heading font-bold;
  }

  .body1 {
    @apply leading-[35px] text-[18px] font-normal;
  }

  .body2 {
    @apply leading-[38px] text-[22px];
  }

  .project1 {
    @apply text-[20px] leading-snug font-heading font-bold uppercase;
  }

  .sub1 {
    @apply text-[16px] leading-[24px] tracking-wide;
  }

  .testimonial1 {
    @apply text-[24px] font-extralight font-heading leading-normal;
    @apply lg:text-[30px];
  }

  .button1 {
    @apply uppercase font-sans font-bold;
  }

  .nav1 {
    @apply text-[18px] tracking-wide;
  }
</style>
