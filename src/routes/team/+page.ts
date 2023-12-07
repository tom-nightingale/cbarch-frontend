import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetTeamQuery } from "$lib/gql/gen/codegen";
import { GetTeamDoc } from "$lib/gql/gen/codegen";

export async function load() {
  const data = await client.query<GetTeamQuery>({
    query: GetTeamDoc,
  });

  if (data?.data?.allTeam?.length < 1) {
    throw error(404, "Not found");
  }

  return {
    data: data.data.allTeam[0],
  };
}
