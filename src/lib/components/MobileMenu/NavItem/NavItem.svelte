<script lang="ts">
  import { page } from "$app/stores";
  import Typography from "$lib/components/Typography/Typography.svelte";
  import { createEventDispatcher } from "svelte";
  import type { Maybe, NavigationLink } from "$lib/gql/gen/codegen";

  const dispatch = createEventDispatcher();

  export let label: Maybe<string> | string = "Home";
  export let href: Maybe<string> | string = "/";
  // export let children: Maybe<Maybe<NavigationLink>[]>;
  export let classes = "";

  const handleMenuClose = (e) => {
    dispatch("menuClose", e.detail);
  };
</script>

<!-- <div class="relative"> -->
<Typography component="p" variant="nav1" uppercase>
  <a
    on:click={handleMenuClose}
    href={href === "home" ? "/" : `/${href}`}
    class={`text-blue block relative
      ${classes} 
      ${
        ($page.url.pathname === "/" && href === "home") ||
        $page.url.pathname.replace("/", "") === href?.replace("/", "") ||
        ($page.route &&
          $page.route.id &&
          $page.route.id.includes("/projects") &&
          href?.includes("/projects"))
          ? "bg-blue-light lg:bg-transparent lg:after:h-[1px] lg:after:w-1/2 lg:after:absolute lg:after:-bottom-2  lg:after:bg-blue lg:after:left-1/2 lg:after:-translate-x-1/2 lg:after:hover:w-full lg:after:transition-all lg:after:duration-300"
          : "lg:hover:bg-blue-light"
      } `}
  >
    {label}
  </a>
</Typography>
<!-- </div> -->
