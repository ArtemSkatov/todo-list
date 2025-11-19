import { useEffect } from "react";

export function useBeforeUnload(callback: () => void) {
  useEffect(() => {
    const handler = () => {
      console.log("useBeforeUnload");
      callback();
    };

    window.addEventListener("beforeunload", handler);

    return () => {
      window.removeEventListener("beforeunload", handler);
    };
  }, [callback]);
}
