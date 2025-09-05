// Prerender everything
export const prerender = true;
import { PUBLIC_PRIMARY_NAV_ID } from "$env/static/public";

import { error } from "@sveltejs/kit";
import client from "$lib/gql/apolloClient";
import type { GetNavigationByIdQuery } from "$lib/gql/gen/codegen";
import { GetNavigationByIdDoc } from "$lib/gql/gen/codegen";

export async function load() {
  const data = await client.query<GetNavigationByIdQuery>({
    query: GetNavigationByIdDoc,
    variables: {
      id: PUBLIC_PRIMARY_NAV_ID,
    },
  });

  if (!data?.data?.Navigation) {
    throw error(404, "Not found");
  }

  return {
    navSections: data?.data?.Navigation?.sections,
  };
}
