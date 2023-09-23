<script lang="ts">
  import type { Image as ImageType } from "$lib/gql/gen/codegen";

  import Hero from "$lib/components/Hero/Hero.svelte";
  import FeaturedProject from "$lib/components/FeaturedProject/FeaturedProject.svelte";
  import Testimonial from "$lib/components/Testimonial/Testimonial.svelte";
  import Gallery from "$lib/components/Gallery/Gallery.svelte";
  import WorkWithUs from "$lib/components/WorkWithUs/WorkWithUs.svelte";

  export let heroImages: ImageType[];
  export let heroTitle: string;
  export let featuredProjectImages: ImageType[];
  export let testimonial: string = "";
  export let author: string = "";
  export let galleryImages: ImageType[];
</script>

<Hero images={heroImages} title={heroTitle} />
<FeaturedProject images={featuredProjectImages} />
<Testimonial {testimonial} {author} />
<Gallery images={galleryImages} />
<WorkWithUs />
