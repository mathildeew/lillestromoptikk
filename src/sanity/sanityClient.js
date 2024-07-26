import { createClient } from "@sanity/client";

export default createClient({
  projectId: "mabzg02x",
  dataset: "production",
  apiVersion: "2024-07-26",
  useCdn: true,
});
