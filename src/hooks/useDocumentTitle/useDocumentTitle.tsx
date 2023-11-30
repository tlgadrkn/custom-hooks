/**
 * useDocumentTitle
   Dynamically update the title of a webpage with useDocumentTitle.

   * The useDocumentTitle hook is useful for dynamically updating the title of a webpage based on the current state or data. This hook proves beneficial in scenarios where the title needs to be dynamically updated, such as displaying the name of the currently selected item or reflecting changes in application state.
   */

import { useEffect } from 'react';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    if (window.document) {
      window.document.title = title;
    }
  }, [title]);
}
