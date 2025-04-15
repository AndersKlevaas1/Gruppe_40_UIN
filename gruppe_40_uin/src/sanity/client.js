import SanityClientConstructor from "@sanity/client"

export const client = SanityClientConstructor({
    projectId: "dh82oku8",
    dataset: "production",
    apiVersion: "v2025-04-15",
    useCdn: false,
}); 