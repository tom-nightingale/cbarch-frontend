import { error } from "@sveltejs/kit";
import { c as client, b as GetPageBySlugDoc } from "../../../chunks/codegen.js";
const prerender = "auto";
async function load({ params }) {
  const data = await client.query({
    query: GetPageBySlugDoc,
    variables: {
      slug: params.slug
    }
  });
  if (data?.data?.page.length < 1) {
    error(404, "Not found");
  }
  return {
    data: data?.data?.page[0]
  };
}
export {
  load,
  prerender
};
