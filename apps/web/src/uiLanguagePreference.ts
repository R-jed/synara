import type { UiLanguagePreference } from "./appSettings";
import { APP_SETTINGS_STORAGE_KEY } from "./appSettingsStorage";

export type ResolvedUiLanguage = "en" | "zh-CN";

function systemLanguages(): readonly string[] {
  if (typeof navigator === "undefined") return [];
  const languages = navigator.languages ?? [];
  if (languages.length > 0) return languages;
  return navigator.language ? [navigator.language] : [];
}

function isSimplifiedChineseLocale(locale: string): boolean {
  const normalized = locale.trim().replaceAll("_", "-").toLowerCase();
  if (!normalized.startsWith("zh")) return false;
  if (normalized.includes("-hans")) return true;
  if (normalized.includes("-hant")) return false;
  return !/(?:^|-)(?:tw|hk|mo)(?:-|$)/.test(normalized);
}

export function resolveUiLanguage(
  preference: UiLanguagePreference,
  languages: readonly string[] = systemLanguages(),
): ResolvedUiLanguage {
  if (preference === "en" || preference === "zh-CN") return preference;
  const primary = languages.find((language) => language.trim().length > 0);
  return primary && isSimplifiedChineseLocale(primary) ? "zh-CN" : "en";
}

export function readStoredUiLanguagePreference(
  storage?: Pick<Storage, "getItem"> | null,
): UiLanguagePreference {
  try {
    const source =
      storage === undefined
        ? typeof window === "undefined"
          ? null
          : window.localStorage
        : storage;
    if (!source) return "system";
    const raw = source.getItem(APP_SETTINGS_STORAGE_KEY);
    if (!raw) return "system";
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return "system";
    const value = (parsed as { uiLanguage?: unknown }).uiLanguage;
    return value === "en" || value === "zh-CN" || value === "system" ? value : "system";
  } catch {
    return "system";
  }
}
