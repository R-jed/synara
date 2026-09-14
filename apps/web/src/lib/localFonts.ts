// FILE: localFonts.ts
// Purpose: Query and normalize locally installed font faces for Appearance controls.
// Layer: Web appearance support
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/queryLocalFonts

import type { ThemeFontFaceSelection } from "../theme/theme.logic";
import type { DesktopLocalFontFace } from "@synara/contracts";

type BrowserFontData = DesktopLocalFontFace;

type WindowWithLocalFonts = Window & {
  queryLocalFonts?: () => Promise<ReadonlyArray<BrowserFontData>>;
};

export interface LocalFontFamily {
  family: string;
  faces: ReadonlyArray<ThemeFontFaceSelection>;
}

let cachedLocalFontFamilies: ReadonlyArray<LocalFontFamily> | null = null;
let pendingLocalFontFamilies: Promise<ReadonlyArray<LocalFontFamily>> | null = null;

export function normalizeLocalFontFamilies(
  fontFaces: ReadonlyArray<BrowserFontData>,
): ReadonlyArray<LocalFontFamily> {
  const byFamily = new Map<string, Map<string, ThemeFontFaceSelection>>();

  for (const fontFace of fontFaces) {
    const family = fontFace.family.trim();
    const fullName = fontFace.fullName.trim();
    const postscriptName = fontFace.postscriptName.trim();
    const style = fontFace.style.trim();
    if (!family || !fullName || !postscriptName || !style) continue;

    const familyKey = family.toLocaleLowerCase();
    const faces = byFamily.get(familyKey) ?? new Map<string, ThemeFontFaceSelection>();
    faces.set(postscriptName.toLocaleLowerCase(), {
      family,
      fullName,
      postscriptName,
      style,
    });
    byFamily.set(familyKey, faces);
  }

  return [...byFamily.values()]
    .map((faces) => {
      const sortedFaces = [...faces.values()].toSorted((left, right) => {
        const leftRegular = left.style.toLocaleLowerCase() === "regular";
        const rightRegular = right.style.toLocaleLowerCase() === "regular";
        if (leftRegular !== rightRegular) return leftRegular ? -1 : 1;
        return left.style.localeCompare(right.style, undefined, { sensitivity: "base" });
      });
      return {
        family: sortedFaces[0]!.family,
        faces: sortedFaces,
      };
    })
    .toSorted((left, right) =>
      left.family.localeCompare(right.family, undefined, { sensitivity: "base" }),
    );
}

async function queryLocalFontFamiliesUncached(): Promise<ReadonlyArray<LocalFontFamily>> {
  if (typeof window === "undefined") return [];

  // Electron 43 exposes queryLocalFonts() on synara:// pages but denies the
  // Local Font Access permission before the request reaches Electron's session
  // handlers. Prefer Synara's narrow desktop bridge there instead of paying for
  // a known-failing browser round trip on every Appearance mount.
  const listDesktopFonts = window.desktopBridge?.localFonts?.list;
  if (typeof listDesktopFonts === "function") {
    const desktopFamilies = normalizeLocalFontFamilies(await listDesktopFonts());
    if (desktopFamilies.length > 0) {
      return desktopFamilies;
    }
  }

  const queryLocalFonts = (window as WindowWithLocalFonts).queryLocalFonts;
  if (typeof queryLocalFonts === "function") {
    // Web builds still use the standards-based API. It can reject when the
    // browser requires user activation; callers keep failures retryable.
    const fontFaces = await queryLocalFonts.call(window);
    return normalizeLocalFontFamilies(fontFaces);
  }

  return [];
}

export function queryLocalFontFamilies(): Promise<ReadonlyArray<LocalFontFamily>> {
  if (cachedLocalFontFamilies !== null) {
    return Promise.resolve(cachedLocalFontFamilies);
  }
  if (pendingLocalFontFamilies !== null) {
    return pendingLocalFontFamilies;
  }

  pendingLocalFontFamilies = queryLocalFontFamiliesUncached().then(
    (families) => {
      if (families.length > 0) {
        cachedLocalFontFamilies = families;
      }
      pendingLocalFontFamilies = null;
      return families;
    },
    (error) => {
      pendingLocalFontFamilies = null;
      throw error;
    },
  );
  return pendingLocalFontFamilies;
}
