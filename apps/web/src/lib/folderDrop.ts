// FILE: folderDrop.ts
// Purpose: Pure helpers for accepting an OS folder drop (Create Project dialog, onboarding).
// Layer: Web domain helper (no React)
// Exports: isFileDrag, resolveDroppedFolder, DroppedFolderResult

import { isDroppedComposerDirectory, resolveDroppedFileAbsolutePath } from "./composerDropPaths";

export type DroppedFolderError = "not-folder" | "path-unavailable";
export type DroppedFolderResult =
  | { readonly path: string }
  | { readonly error: DroppedFolderError };

export function isFileDrag(event: globalThis.DragEvent): boolean {
  return Array.from(event.dataTransfer?.types ?? []).includes("Files");
}

/** Resolves the first dropped item to an absolute folder path, or a typed UI error reason. */
export function resolveDroppedFolder(dataTransfer: DataTransfer): DroppedFolderResult | null {
  const item = Array.from(dataTransfer.items).find((entry) => entry.kind === "file");
  const file = item?.getAsFile() ?? dataTransfer.files[0] ?? null;
  if (!item || !file) return null;
  if (!isDroppedComposerDirectory(item)) {
    return { error: "not-folder" };
  }
  const absolutePath = resolveDroppedFileAbsolutePath(file);
  if (!absolutePath) {
    return { error: "path-unavailable" };
  }
  return { path: absolutePath };
}
