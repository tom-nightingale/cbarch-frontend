import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetHomeQuery } from "$lib/gql/gen/codegen";
import { GetHomeDoc } from "$lib/gql/gen/codegen";

export async function load() {
  const data = await client.query<GetHomeQuery>({
    query: GetHomeDoc,
  });

  if (data?.data?.allHome?.length < 1) {
    throw error(404, "Not found");
  }

  return {
    home: data.data.allHome[0],
    testimonials: data.data.testimonials,
  };
}
