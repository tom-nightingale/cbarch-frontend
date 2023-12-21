import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetProjectQuery } from "$lib/gql/gen/codegen";
import { GetProjectDoc } from "$lib/gql/gen/codegen";

export const prerender = "auto";

export async function load({ params }) {
  const data = await client.query<GetProjectQuery>({
    query: GetProjectDoc,
    variables: {
      slug: params.slug,
    },
  });

  if (data?.data?.project?.length < 1) {
    throw error(404, "Not found");
  }

  return {
    data: data.data.project[0],
  };
}
