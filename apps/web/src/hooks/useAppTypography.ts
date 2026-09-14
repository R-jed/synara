import { useLayoutEffect } from "react";
import { resolveTerminalFontFamilyStack, useAppSettings } from "../appSettings";
import { getAppTypographyScale } from "../lib/appTypography";
import { buildLocalFontFaceRule, fontFaceMatchesFamily } from "../theme/themeLocalFontFaces";
import { useMediaQuery } from "./useMediaQuery";

const TERMINAL_FONT_FAMILY_CSS_VARIABLE = "--terminal-font-family";
const TERMINAL_FONT_FACE_STYLE_ELEMENT_ID = "synara-terminal-local-font-face";

const TYPOGRAPHY_CSS_VARIABLES = [
  "--app-font-size-base",
  "--app-font-size-ui",
  "--app-font-size-ui-lg",
  "--app-font-size-ui-sm",
  "--app-font-size-ui-xs",
  "--app-font-size-ui-2xs",
  "--app-font-size-ui-meta",
  "--app-font-size-ui-timestamp",
  "--app-font-size-chat",
  "--app-font-size-chat-code",
  "--app-font-size-chat-meta",
  "--app-font-size-chat-tiny",
  "--app-font-size-terminal",
] as const;

export function useAppTypography() {
  const { settings } = useAppSettings();
  const systemPrefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useLayoutEffect(() => {
    const scale = getAppTypographyScale(settings.chatFontSizePx);
    const rootStyle = document.documentElement.style;
    const variableValues: Record<(typeof TYPOGRAPHY_CSS_VARIABLES)[number], string> = {
      "--app-font-size-base": `${scale.basePx}px`,
      "--app-font-size-ui": `${scale.uiPx}px`,
      "--app-font-size-ui-lg": `${scale.uiLgPx}px`,
      "--app-font-size-ui-sm": `${scale.uiSmPx}px`,
      "--app-font-size-ui-xs": `${scale.uiXsPx}px`,
      "--app-font-size-ui-2xs": `${scale.ui2XsPx}px`,
      "--app-font-size-ui-meta": `${scale.uiMetaPx}px`,
      "--app-font-size-ui-timestamp": `${scale.uiTimestampPx}px`,
      "--app-font-size-chat": `${scale.chatPx}px`,
      "--app-font-size-chat-code": `${scale.chatCodePx}px`,
      "--app-font-size-chat-meta": `${scale.chatMetaPx}px`,
      "--app-font-size-chat-tiny": `${scale.chatTinyPx}px`,
      "--app-font-size-terminal": `${settings.terminalFontSizePx}px`,
    };

    for (const cssVariable of TYPOGRAPHY_CSS_VARIABLES) {
      rootStyle.setProperty(cssVariable, variableValues[cssVariable]);
    }
    if (settings.reduceMotion || systemPrefersReducedMotion) {
      document.documentElement.setAttribute("data-reduce-motion", "true");
    } else {
      document.documentElement.removeAttribute("data-reduce-motion");
    }

    // Terminal font family overrides the bundled default only when a non-default
    // font is chosen; otherwise leave the index.css value in place. The terminal
    // runtime observes inline `style` mutations and re-applies the font live.
    let terminalFontFamilyStack = resolveTerminalFontFamilyStack(settings.terminalFontFamily);
    let terminalFontFaceStyleElement = document.getElementById(
      TERMINAL_FONT_FACE_STYLE_ELEMENT_ID,
    ) as HTMLStyleElement | null;
    const terminalFontFace = settings.terminalFontFace;
    if (
      terminalFontFamilyStack &&
      terminalFontFace &&
      fontFaceMatchesFamily(terminalFontFace, settings.terminalFontFamily)
    ) {
      const builtFace = buildLocalFontFaceRule(
        `Synara Selected Terminal Face ${terminalFontFace.postscriptName}`,
        terminalFontFace,
      );
      if (builtFace) {
        terminalFontFaceStyleElement ??= document.createElement("style");
        terminalFontFaceStyleElement.id = TERMINAL_FONT_FACE_STYLE_ELEMENT_ID;
        if (!terminalFontFaceStyleElement.isConnected) {
          document.head.appendChild(terminalFontFaceStyleElement);
        }
        terminalFontFaceStyleElement.textContent = builtFace.rule;
        terminalFontFamilyStack = `${builtFace.familyCss}, ${terminalFontFamilyStack}`;
      }
    } else {
      terminalFontFaceStyleElement?.remove();
    }
    if (terminalFontFamilyStack) {
      rootStyle.setProperty(TERMINAL_FONT_FAMILY_CSS_VARIABLE, terminalFontFamilyStack);
    } else {
      rootStyle.removeProperty(TERMINAL_FONT_FAMILY_CSS_VARIABLE);
    }

    return () => {
      for (const cssVariable of TYPOGRAPHY_CSS_VARIABLES) {
        rootStyle.removeProperty(cssVariable);
      }
      rootStyle.removeProperty(TERMINAL_FONT_FAMILY_CSS_VARIABLE);
      document.getElementById(TERMINAL_FONT_FACE_STYLE_ELEMENT_ID)?.remove();
      document.documentElement.removeAttribute("data-reduce-motion");
    };
  }, [
    settings.chatFontSizePx,
    settings.reduceMotion,
    settings.terminalFontFace,
    settings.terminalFontSizePx,
    settings.terminalFontFamily,
    systemPrefersReducedMotion,
  ]);
}
