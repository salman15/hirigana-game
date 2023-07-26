import { useRef, useEffect } from "react";

function useDocumentTitle(title: string) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
