import { useState, useEffect } from "react";
import { apiQuieries } from "../sanity/apiQuieries";
import sanityClient from "../sanity/sanityClient";

export default function getMetadata(query, defaultMetadata) {
  const [metadata, setMetadata] = useState(defaultMetadata);

  useEffect(() => {
    async function fetchAPI() {
      const data = await sanityClient.fetch(apiQuieries(query).metadata);
      setMetadata(data);
    }
    fetchAPI();
  }, [query]);

  return metadata;
}
