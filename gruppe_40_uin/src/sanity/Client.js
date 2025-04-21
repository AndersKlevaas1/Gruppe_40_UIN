import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "dh82oku8",
  dataset: "production",
  apiVersion: "2025-04-15",
  useCdn: false,
});
