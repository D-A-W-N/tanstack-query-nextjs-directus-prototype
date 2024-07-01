import { createDirectus } from "@directus/sdk";

export const directus = () => {
  const directus_url =
    process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

  const client = createDirectus(directus_url);

  return client;
};
