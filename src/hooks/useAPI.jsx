import { useState } from "react";

export default function useAPI() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function fetchAPI(url) {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setIsError(true);
      return null;
    } finally {
      setIsLoading(false);
      setIsError(true);
    }
  }

  return { fetchAPI, data, isLoading, isError };
}
