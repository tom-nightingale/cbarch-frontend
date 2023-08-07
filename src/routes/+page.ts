import { getLanding } from "$lib/groq/queries";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const data = await getLanding();

  if (data) {
    return {
      data: data,
    };
  }

  throw error(404, "Not found");
}) satisfies PageLoad;
