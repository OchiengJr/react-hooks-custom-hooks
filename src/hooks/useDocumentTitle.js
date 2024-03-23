import { useEffect } from "react";

/**
 * Custom hook to set the document title.
 * @param {string} pageTitle - The title to set for the document.
 */
function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default useDocumentTitle;
