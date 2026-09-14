import { describe, expect, it } from "vitest";

import { resolveUiLanguage, translateUiErrorText, translateUiText } from "./uiLanguage";
import { readStoredUiLanguagePreference } from "./uiLanguagePreference";
import { WHATS_NEW_ENTRIES } from "./whatsNew/entries";
import { translateWhatsNewText } from "./whatsNew/uiLanguage";

describe("uiLanguage", () => {
  it("resolves explicit and system language preferences", () => {
    expect(resolveUiLanguage("en", ["zh-CN"])).toBe("en");
    expect(resolveUiLanguage("zh-CN", ["en-US"])).toBe("zh-CN");
    expect(resolveUiLanguage("system", ["zh-Hans-CN"])).toBe("zh-CN");
    expect(resolveUiLanguage("system", ["zh-Hans-HK"])).toBe("zh-CN");
    expect(resolveUiLanguage("system", ["zh-TW"])).toBe("en");
    expect(resolveUiLanguage("system", ["en-US", "zh-CN"])).toBe("en");
  });

  it("reads the persisted UI language preference without loading app state", () => {
    const storage = {
      getItem: () => JSON.stringify({ uiLanguage: "zh-CN" }),
    };

    expect(readStoredUiLanguagePreference(storage)).toBe("zh-CN");
  });

  it("falls back to the English source text when a Chinese translation is missing", () => {
    expect(translateUiText("zh-CN", "Appearance")).toBe("外观");
    expect(translateUiText("zh-CN", "Untranslated upstream copy")).toBe(
      "Untranslated upstream copy",
    );
  });

  it("uses the intended Chinese permission labels", () => {
    expect(translateUiText("zh-CN", "Ask for approval")).toBe("操作前询问");
    expect(translateUiText("zh-CN", "Approve for me")).toBe("替我批准");
    expect(translateUiText("zh-CN", "Full access")).toBe("完全访问");
  });

  it("keeps raw diagnostics in English but never leaks unknown English errors into Chinese UI", () => {
    const unknown = new Error("RPC transport exploded");
    expect(translateUiErrorText("en", unknown, "An unexpected error occurred.")).toBe(
      "RPC transport exploded",
    );
    expect(translateUiErrorText("zh-CN", unknown, "Could not save the file.")).toBe(
      "无法保存文件。",
    );
    expect(translateUiErrorText("zh-CN", new Error("Could not save the file."))).toBe(
      "无法保存文件。",
    );
    expect(translateUiErrorText("zh-CN", new Error("磁盘空间不足"))).toBe("磁盘空间不足");
  });

  it("localizes every user-visible What's New text field", () => {
    for (const entry of WHATS_NEW_ENTRIES) {
      for (const feature of entry.features) {
        for (const text of [
          feature.title,
          feature.description,
          feature.details,
          feature.imageAlt,
        ]) {
          if (!text) continue;
          expect(translateWhatsNewText("zh-CN", text), `${entry.version}: ${text}`).not.toBe(text);
        }
      }
    }
  });
});
