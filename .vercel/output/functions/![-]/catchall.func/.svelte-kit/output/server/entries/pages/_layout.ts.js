import { P as PUBLIC_PRIMARY_NAV_ID } from "../../chunks/public.js";
import { error } from "@sveltejs/kit";
import { c as client, G as GetNavigationByIdDoc } from "../../chunks/codegen.js";
const prerender = true;
async function load() {
  const data = await client.query({
    query: GetNavigationByIdDoc,
    variables: {
      id: PUBLIC_PRIMARY_NAV_ID
    }
  });
  if (!data?.data?.Navigation) {
    error(404, "Not found");
  }
  return {
    navSections: data?.data?.Navigation?.sections
  };
}
export {
  load,
  prerender
};
