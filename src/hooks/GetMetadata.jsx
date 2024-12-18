import { useState, useEffect } from "react";
import { apiQuieries } from "../sanity/apiQuieries";
import sanityClient from "../sanity/sanityClient";

/**
 * A React hook-based function for fetching metadata using a given Sanity query.
 *
 * @param {string} query - The query string used to fetch metadata from the Sanity database.
 * @param {Object} defaultMetadata - The default metadata to initialize the state with before the API call.
 * @returns {Object} - The fetched metadata from the Sanity database.
 *
 * @example
 * import GetMetadata from './GetMetadata';
 *
 * const metadata = GetMetadata('myQuery', { title: 'Default Title' });
 * console.log(metadata.title); // Logs fetched metadata title after API call.
 */
export default function GetMetadata(query, defaultMetadata) {
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
