import { useState, useCallback } from "react";
import sanityClient from "../sanity/sanityClient";

/**
 * Custom hook for making API request to Sanity
 *
 * @returns {{
 * fetchApi: function,
 * data: any,
 * isLoading: boolean,
 * isSuccess: boolean,
 * isError: boolean,
 * errorMsg: string | null
 * }}
 */
export default function useAPI() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMessage] = useState(null);

  /**
   * Function for making the API request
   *
   * @param {string} query - The GROQ query to be executed
   * @returns {Promise<any>} - The API response or null if an error occurs
   */
  const fetchAPI = useCallback(async (query) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage(null);

    try {
      const json = await sanityClient.fetch(query);
      setIsSuccess(true);
      return json;
    } catch (error) {
      setErrorMessage(error.message);
      setIsError(true);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    fetchAPI,
    isLoading,
    isSuccess,
    isError,
    errorMsg,
  };
}
