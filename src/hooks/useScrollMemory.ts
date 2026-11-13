import { useEffect } from "react";

const storageKey = (entryKey: string) => `scroll-memory:${entryKey}`;

export const readScrollMemory = (entryKey: string): number | null => {
  try {
    const value = sessionStorage.getItem(storageKey(entryKey));
    return value === null ? null : Number(value);
  } catch {
    return null;
  }
};

/** Persists the window scroll position for the given history entry key. */
export const useScrollMemory = (entryKey: string) => {
  useEffect(() => {
    let latest = window.scrollY;
    let timer = 0;

    const persist = () => {
      try {
        sessionStorage.setItem(storageKey(entryKey), String(Math.round(latest)));
      } catch {
        // Storage unavailable (private mode / quota) — restoring is best effort.
      }
    };

    const onScroll = () => {
      latest = window.scrollY;
      window.clearTimeout(timer);
      timer = window.setTimeout(persist, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      persist();
    };
  }, [entryKey]);
};
