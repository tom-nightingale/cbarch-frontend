<script lang="ts">
  import { page } from "$app/stores";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import { createEventDispatcher } from "svelte";
  import type { Maybe } from "$lib/gql/gen/codegen";

  const dispatch = createEventDispatcher();

  export let label: Maybe<string> | string = "Home";
  export let href: Maybe<string> | string = "/";
  export let classes = "";

  $: resolvedHref =
    !href || href === "home" ? "/" : href.startsWith("/") ? href : `/${href}`;

  $: isActive =
    $page.url.pathname === resolvedHref ||
    $page.url.pathname.replace(/\/$/, "") === resolvedHref.replace(/\/$/, "") ||
    ($page.route?.id?.includes("/projects") &&
      resolvedHref.startsWith("/projects"));

  const handleMenuClose = (e: Event) => {
    dispatch("menuClose", e);
  };
</script>

<Typography component="p" variant="nav1" uppercase>
  <a
    on:click={handleMenuClose}
    href={resolvedHref}
    class={`text-blue block relative
      ${classes} 
      ${
        isActive
          ? "bg-blue-light lg:bg-transparent lg:after:h-[1px] lg:after:w-1/2 lg:after:absolute lg:after:-bottom-2  lg:after:bg-blue lg:after:left-1/2 lg:after:-translate-x-1/2 lg:after:hover:w-full lg:after:transition-all lg:after:duration-300"
          : "lg:hover:bg-blue-light"
      } `}
  >
    {label}
  </a>
</Typography>
