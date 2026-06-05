"use client";

import { useMemo, useSyncExternalStore } from "react";

/**
 * SSR-safe media query hook built on useSyncExternalStore — returns the
 * correct value on first client render (no effect, no hydration flash)
 * and avoids setState-in-effect entirely.
 */
export function useMediaQuery(query: string): boolean {
  const store = useMemo(() => {
    return {
      subscribe(callback: () => void) {
        if (typeof window === "undefined") return () => {};
        const mql = window.matchMedia(query);
        mql.addEventListener("change", callback);
        return () => mql.removeEventListener("change", callback);
      },
      getSnapshot() {
        if (typeof window === "undefined") return false;
        return window.matchMedia(query).matches;
      },
      getServerSnapshot() {
        return false;
      },
    };
  }, [query]);

  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
}

/** True when the user has requested reduced motion. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/** True on phone-sized viewports (<768px). */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}
