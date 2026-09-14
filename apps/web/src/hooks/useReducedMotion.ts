import { useSyncExternalStore } from "react";
import { useMediaQuery } from "./useMediaQuery";

const REDUCE_MOTION_ATTRIBUTE = "data-reduce-motion";

function subscribeToLocalPreference(callback: () => void): () => void {
  if (typeof document === "undefined" || typeof MutationObserver === "undefined") {
    return () => {};
  }
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [REDUCE_MOTION_ATTRIBUTE],
  });
  return () => observer.disconnect();
}

function getLocalPreference(): boolean {
  return (
    typeof document !== "undefined" &&
    document.documentElement.getAttribute(REDUCE_MOTION_ATTRIBUTE) === "true"
  );
}

export function useReducedMotion(): boolean {
  const systemPrefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const localPreference = useSyncExternalStore(
    subscribeToLocalPreference,
    getLocalPreference,
    () => false,
  );
  return localPreference || systemPrefersReducedMotion;
}
