import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager() {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}