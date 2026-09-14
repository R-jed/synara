// FILE: themeLocalFontFaces.ts
// Purpose: Bind an exact locally-installed font face to a stable CSS family alias.
// Layer: Web theme DOM projection
// Source: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40font-face/src

import type { ThemeFontFaceSelection, ThemeFontSlot, ThemeFonts } from "./theme.logic";

const STYLE_ELEMENT_ID = "synara-theme-local-font-faces";
const FONT_ALIAS_BY_SLOT: Record<ThemeFontSlot, string> = {
  ui: "Synara Selected UI Face",
  content: "Synara Selected Content Face",
  code: "Synara Selected Code Face",
};

const FACE_KEY_BY_SLOT = {
  ui: "uiFace",
  content: "contentFace",
  code: "codeFace",
} as const;

export function quoteCssString(value: string): string {
  return `"${value
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replace(/[\r\n]/g, " ")}"`;
}

export function fontFaceMatchesFamily(face: ThemeFontFaceSelection, family: string): boolean {
  return face.family.trim().toLocaleLowerCase() === family.trim().toLocaleLowerCase();
}

function fontWeightFromStyle(style: string): number {
  const normalized = style.toLocaleLowerCase().replaceAll(/[^a-z0-9]+/g, "");
  if (normalized.includes("thin") || normalized.includes("hairline")) return 100;
  if (normalized.includes("extralight") || normalized.includes("ultralight")) return 200;
  if (normalized.includes("light")) return 300;
  if (normalized.includes("medium")) return 500;
  if (normalized.includes("semibold") || normalized.includes("demibold")) return 600;
  if (normalized.includes("extrabold") || normalized.includes("ultrabold")) return 800;
  if (normalized.includes("black") || normalized.includes("heavy")) return 900;
  if (normalized.includes("bold")) return 700;
  return 400;
}

function fontStyleFromStyle(style: string): "italic" | "oblique" | "normal" {
  const normalized = style.toLocaleLowerCase();
  if (normalized.includes("italic")) return "italic";
  if (normalized.includes("oblique")) return "oblique";
  return "normal";
}

export function buildLocalFontFaceRule(
  alias: string,
  face: ThemeFontFaceSelection,
): { familyCss: string; rule: string } | null {
  const localNames = [...new Set([face.fullName, face.postscriptName].filter(Boolean))];
  if (localNames.length === 0) return null;

  const familyCss = quoteCssString(alias);
  return {
    familyCss,
    rule: `@font-face{font-family:${familyCss};src:${localNames
      .map((name) => `local(${quoteCssString(name)})`)
      .join(
        ",",
      )};font-weight:${fontWeightFromStyle(face.style)};font-style:${fontStyleFromStyle(face.style)};font-display:swap;}`,
  };
}

export function syncThemeLocalFontFaces(fonts: ThemeFonts): Partial<Record<ThemeFontSlot, string>> {
  if (
    typeof document === "undefined" ||
    typeof document.createElement !== "function" ||
    !document.head
  ) {
    return {};
  }

  const rules: string[] = [];
  const aliases: Partial<Record<ThemeFontSlot, string>> = {};

  for (const slot of ["ui", "content", "code"] as const) {
    const family = fonts[slot] ?? null;
    const face = fonts[FACE_KEY_BY_SLOT[slot]] ?? null;
    if (!family || !face || !fontFaceMatchesFamily(face, family)) continue;

    const alias = FONT_ALIAS_BY_SLOT[slot];
    const built = buildLocalFontFaceRule(alias, face);
    if (!built) continue;
    rules.push(built.rule);
    aliases[slot] = built.familyCss;
  }

  let styleElement = document.getElementById(STYLE_ELEMENT_ID) as HTMLStyleElement | null;
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = STYLE_ELEMENT_ID;
    document.head.appendChild(styleElement);
  }
  styleElement.textContent = rules.join("\n");

  return aliases;
}
