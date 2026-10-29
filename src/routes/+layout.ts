// Prerender everything
export const prerender = true;
import { PUBLIC_PRIMARY_NAV_ID } from "$env/static/public";

import client from "$lib/gql/apolloClient";
import type { GetNavigationByIdQuery } from "$lib/gql/gen/codegen";
import { GetNavigationByIdDoc } from "$lib/gql/gen/codegen";

export async function load() {
  try {
    const data = await client.query<GetNavigationByIdQuery>({
      query: GetNavigationByIdDoc,
      variables: {
        id: PUBLIC_PRIMARY_NAV_ID,
      },
    });

    return {
      navSections: data?.data?.Navigation?.sections ?? [],
    };
  } catch (e) {
    console.error("Failed to load navigation", e);

    return {
      navSections: [],
    };
  }
}
