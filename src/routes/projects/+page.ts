import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetProjectSingletonQuery } from "$lib/gql/gen/codegen";
import { GetProjectSingletonDoc } from "$lib/gql/gen/codegen";

export async function load() {
  const data = await client.query<GetProjectSingletonQuery>({
    query: GetProjectSingletonDoc,
  });

  if (data?.data?.page?.length < 1) {
    throw error(404, "Not found");
  }

  return {
    page: data.data.page[0],
    projects: data.data.projects,
  };
}
