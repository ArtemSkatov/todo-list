import { useEffect } from "react";

export function useBeforeUnload(callback: () => void) {
  useEffect(() => {
    const handler = () => {
      callback();
    };

    window.addEventListener("beforeunload", handler);

    return () => {
      window.removeEventListener("beforeunload", handler);
    };
  }, [callback]);
}
