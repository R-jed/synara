import { describe, expect, it } from "vitest";

import { translateUiText } from "~/uiLanguage";
import { browserVaultErrorMessage } from "./BrowserVault";

describe("browserVaultErrorMessage", () => {
  it("maps protocol error codes to localized UI copy", () => {
    expect(
      browserVaultErrorMessage("password-saving-unavailable", (text) =>
        translateUiText("zh-CN", text),
      ),
    ).toBe("密码保存暂不可用。请重新打开浏览器后重试。");
  });
});
