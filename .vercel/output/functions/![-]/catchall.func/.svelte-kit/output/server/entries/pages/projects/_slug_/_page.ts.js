import { error } from "@sveltejs/kit";
import { c as client, g as GetProjectDoc } from "../../../../chunks/codegen.js";
const prerender = "auto";
async function load({ params }) {
  const data = await client.query({
    query: GetProjectDoc,
    variables: {
      slug: params.slug
    }
  });
  if (data?.data?.project?.length < 1) {
    error(404, "Not found");
  }
  return {
    data: data.data.project[0]
  };
}
export {
  load,
  prerender
};
