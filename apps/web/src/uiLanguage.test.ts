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
    expect(translateUiText("zh-CN", "Ask for approval")).toBe("请求批准");
    expect(translateUiText("zh-CN", "Approve for me")).toBe("帮我批准");
    expect(translateUiText("zh-CN", "Full access")).toBe("完全访问权限");
  });

  it("localizes reviewed workspace and settings fallback copy", () => {
    expect(translateUiText("zh-CN", "No projects yet")).toBe("暂无项目");
    expect(translateUiText("zh-CN", "No matching projects")).toBe("没有匹配的项目");
    expect(translateUiText("zh-CN", "Shared skills")).toBe("共享技能");
    expect(translateUiText("zh-CN", "No matching files")).toBe("没有匹配的文件");
    expect(translateUiText("zh-CN", "File search failed. Try again.")).toBe(
      "文件搜索失败，请重试。",
    );
    expect(translateUiText("zh-CN", "Code search failed. Try again.")).toBe(
      "代码搜索失败，请重试。",
    );
    expect(translateUiText("zh-CN", "Large files are read-only.")).toBe("大文件仅支持只读。");
    expect(
      translateUiText(
        "zh-CN",
        "Files with mixed line endings are read-only to preserve their exact format.",
      ),
    ).toBe("为保留原始格式，使用混合换行符的文件仅支持只读。");
    expect(translateUiText("zh-CN", "Only files inside the project can be edited.")).toBe(
      "只能编辑项目内的文件。",
    );
    expect(translateUiText("zh-CN", "Git writing model")).toBe("Git 文本生成模型");
    expect(
      translateUiText("zh-CN", "Use macOS-style antialiasing for lighter, crisper text rendering."),
    ).toBe("使用 macOS 风格抗锯齿，让文字显示更纤细、更清晰。");
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
