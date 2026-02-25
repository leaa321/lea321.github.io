import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function locId(loc: { pathname: string; search: string }) {
  return loc.pathname + loc.search; // optional + loc.hash
}

export function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType(); // PUSH | POP | REPLACE
  const positions = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const id = locId(location);
    return () => {
      positions.current.set(id, window.scrollY);
    };
  }, [location.pathname, location.search]);

  useEffect(() => {
    const id = locId(location);

    if (navType === "POP") {
      const y = positions.current.get(id);
      window.scrollTo({ top: y ?? 0, left: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname, location.search, navType]);

  return null;
}