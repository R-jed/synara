import { describe, expect, it } from "vitest";

import { translateUiText } from "~/uiLanguage";
import { formatRateLimitMessage } from "./ComposerSlashStatusDialog";

describe("formatRateLimitMessage", () => {
  const t = (text: string) => translateUiText("zh-CN", text);

  it("formats a complete Simplified Chinese rate-limit sentence", () => {
    expect(
      formatRateLimitMessage(
        {
          status: "allowed_warning",
          utilization: 0.9,
          resetsAt: "2026-09-15T08:30:00.000Z",
        },
        "zh-CN",
        t,
      ),
    ).toMatch(/^即将达到速率限制（已用 90%）。重置时间：.+。$/);
  });

  it("keeps the rejected warning grammatical without a reset time", () => {
    expect(
      formatRateLimitMessage(
        {
          status: "rejected",
        },
        "zh-CN",
        t,
      ),
    ).toBe("已达到速率限制。");
  });

  it("ignores a malformed reset time instead of throwing", () => {
    expect(
      formatRateLimitMessage(
        {
          status: "rejected",
          resetsAt: "not-a-date",
        },
        "zh-CN",
        t,
      ),
    ).toBe("已达到速率限制。");
  });
});
