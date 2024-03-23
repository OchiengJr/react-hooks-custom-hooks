import { useReducer, useEffect } from "react";

function createAbortableFetch() {
  const controller = new AbortController();
  const { signal } = controller;

  return {
    fetch: (url, options) => fetch(url, { ...options, signal }),
    abort: () => controller.abort(),
  };
}

const cache = {};

function fetchReducer(state, action) {
  switch (action.type) {
    case "pending":
      return { status: "pending", data: null, error: null };
    case "resolved":
      return { status: "resolved", data: action.payload, error: null };
    case "rejected":
      return { status: "rejected", data: null, error: action.payload };
    default:
      throw new Error(`No action defined for type ${action.type}`);
  }
}

function useQuery(url, initialData = null) {
  const [{ status, data, error }, dispatch] = useReducer(fetchReducer, {
    status: "idle",
    data: initialData,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "pending" });

      try {
        const { fetch, abort } = createAbortableFetch();
        const response = await fetch(url);
        const jsonData = await response.json();
        cache[url] = jsonData;
        dispatch({ type: "resolved", payload: jsonData });
      } catch (err) {
        if (err.name !== "AbortError") {
          dispatch({ type: "rejected", payload: err });
        }
      }
    };

    if (cache[url]) {
      dispatch({ type: "resolved", payload: cache[url] });
    } else {
      fetchData();
    }

    return function cleanup() {
      // Cleanup function to abort fetch if component unmounts
      createAbortableFetch().abort();
    };
  }, [url]);

  return {
    data,
    isLoaded: status === "resolved",
    isError: status === "rejected",
    error,
  };
}

export default useQuery;
