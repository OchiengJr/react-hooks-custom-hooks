import { useEffect, useState } from "react";

/**
 * Custom hook to fetch data from the provided URL.
 * @param {string} url - The URL from which to fetch data.
 * @returns {{ data: any, isLoaded: boolean, error: string }} - Object containing fetched data, loading state, and error message.
 */
function useQuery(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoaded(true);
      } catch (error) {
        setError(error.message || "Failed to fetch data");
        setIsLoaded(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoaded, error };
}

export default useQuery;
