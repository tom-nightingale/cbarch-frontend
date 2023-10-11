import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetAboutQuery } from "$lib/gql/gen/codegen";
import { GetAboutDoc } from "$lib/gql/gen/codegen";

export async function load() {
  const data = await client.query<GetAboutQuery>({
    query: GetAboutDoc,
  });

  if (data?.data?.allAbout?.length < 1) {
    throw error(404, "Not found");
  }

  return {
    data: data.data.allAbout[0],
  };
}
