<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import Body from "$lib/components/Copy/Body.svelte";
  import Heading from "$lib/components/Copy/Heading.svelte";
  import ListItem from "$lib/components/Copy/ListItem.svelte";

  export let content: any = [];
</script>

<div class="prose">
  <PortableText
    value={content}
    onMissingComponent={false}
    components={{
      types: {
        //@ts-ignore
        normal: Body,
        // linebreak: Break,
        // quote: Quote,
        // imageBlock: SanityImage,
      },
      block: {
        //@ts-ignore
        normal: Body,
        //@ts-ignore
        h1: Heading,
        //@ts-ignore
        h2: Heading,
        //@ts-ignore
        h3: Heading,
        //@ts-ignore
        h4: Heading,
      },
      listItem: {
        normal: ListItem,
      },
    }}
  />
</div>

<style>
  .prose {
    :global(p) {
      @apply mb-8 last:mb-0;
    }

    :global(a) {
      @apply relative text-blue font-bold;

      &:after {
        content: "";
        @apply absolute bottom-0 left-0 w-0 h-[1px] bg-blue/50 transition-all duration-500;
      }
      &:hover:after {
        @apply w-full;
      }
    }
  }
</style>
