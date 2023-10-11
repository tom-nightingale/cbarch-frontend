import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetContactQuery } from "$lib/gql/gen/codegen";
import { GetContactDoc } from "$lib/gql/gen/codegen";

export async function load() {
  const data = await client.query<GetContactQuery>({
    query: GetContactDoc,
  });

  if (data?.data?.allContact?.length < 1) {
    throw error(404, "Not found");
  }

  return {
    data: data.data.allContact[0],
  };
}
