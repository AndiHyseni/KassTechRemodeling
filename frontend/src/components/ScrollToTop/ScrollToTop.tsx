import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash, try scrolling to the anchored element first.
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Delay to ensure the next screen has rendered.
      window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: prefersReducedMotion() ? "auto" : "smooth",
            block: "start",
          });
          return;
        }
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      }, 0);
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [location.pathname, location.hash]);

  return null;
}
