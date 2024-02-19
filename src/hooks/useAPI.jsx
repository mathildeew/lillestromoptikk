import { useState } from "react";

export default function useAPI() {
  const [instagramFeed, setInstagramFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function fetchAPI(url) {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const json = await response.json();
      setInstagramFeed(json);
      return response;
    } catch (error) {
      setIsError(true);

      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { fetchAPI, instagramFeed, isLoading, isError };
}
