import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetPageBySlugQuery } from "$lib/gql/gen/codegen";
import { GetPageBySlugDoc } from "$lib/gql/gen/codegen";

export const prerender = "auto";

export async function load({ params }) {
  const data = await client.query<GetPageBySlugQuery>({
    query: GetPageBySlugDoc,
    variables: {
      slug: params.slug,
    },
  });

  //   console.log("data query", data);

  if (data?.data?.page.length < 1) {
    throw error(404, "Not found");
  }

  return {
    data: data?.data?.page[0],
  };

  //   if (data?.data?.allAbout?.length < 1) {
  //     throw error(404, "Not found");
  //   }

  //   return {
  //     data: data.data.allAbout[0],
  //   };
}
