import client from "$lib/gql/apolloClient";
import type { GetLandingQuery } from "$lib/gql/gen/codegen";
import { GetLandingDoc } from "$lib/gql/gen/codegen";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const data = await client.query<GetLandingQuery>({
    query: GetLandingDoc,
  });

  if (data) {
    return data.data.allLanding[0];
  }

  throw error(404, "Not found");
}) satisfies PageLoad;
