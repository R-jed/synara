// FILE: providerUsageLocalization.ts
// Purpose: Localize provider-usage detail strings that originate from provider APIs/server
// fetchers and therefore cannot be translated by static t("...") call sites alone.

import type { ResolvedUiLanguage } from "~/uiLanguage";

const ZH_CN_EXACT_USAGE_TEXT: Readonly<Record<string, string>> = {
  "Live usage is not available for this provider configuration.": "当前提供商配置不支持实时用量。",
  "Usage is currently unavailable.": "当前无法获取用量。",
  "Usage fetch failed unexpectedly.": "获取用量时发生意外错误。",
  "Could not reach the Codex usage endpoint.": "无法连接 Codex 用量接口。",
  "Could not reach the Claude usage endpoint.": "无法连接 Claude 用量接口。",
  "Could not reach the Cursor dashboard.": "无法连接 Cursor 用量页面。",
  "Could not reach Grok billing.": "无法连接 Grok 账单服务。",
  "Could not reach the xAI API.": "无法连接 xAI API。",
  "Could not reach Google Code Assist usage.": "无法连接 Google Code Assist 用量服务。",
  "Could not reach the OpenCode usage API.": "无法连接 OpenCode 用量接口。",
  "Could not reach the Devin usage endpoint.": "无法连接 Devin 用量接口。",
  "Could not refresh the Antigravity Google login.": "无法刷新 Antigravity 的 Google 登录状态。",
  "Devin API server URL is invalid.": "Devin API 服务器地址无效。",
  "Factory credential region is unsupported.": "当前不支持此 Factory 凭据区域。",
  "Factory CLI is signed in, but Synara could not read its local credential.":
    "Factory CLI 已登录，但 Synara 无法读取其本地凭据。",
  "The local Factory token expired — showing the last values. Run Droid to refresh its login.":
    "本地 Factory Token 已过期，当前显示上次获取的数值。请运行 Droid 刷新登录状态。",
  "This OpenCode Go key is valid but has no active Go subscription.":
    "此 OpenCode Go 密钥有效，但当前没有有效的 Go 订阅。",
  "OpenCode usage response contained no usage windows.":
    "OpenCode 用量响应中没有可显示的额度周期。",
  "Grok team usage is unavailable from the current billing surface.":
    "当前账单接口无法提供 Grok 团队用量。",
};

export function localizeProviderUsageText(
  language: ResolvedUiLanguage,
  text: string | null | undefined,
): string | null | undefined {
  if (!text || language !== "zh-CN") return text;

  const exact = ZH_CN_EXACT_USAGE_TEXT[text];
  if (exact) return exact;

  const signIn = /^Sign in with `(.+)` to see usage\.$/u.exec(text);
  if (signIn) return `请使用 \`${signIn[1]}\` 登录以查看用量。`;

  const requestFailed = /^(.+?) usage request failed \((\d+)\)\.$/u.exec(text);
  if (requestFailed) return `${requestFailed[1]} 用量请求失败（${requestFailed[2]}）。`;

  const apiKeyFailed = /^Grok API key request failed \((\d+)\)\.$/u.exec(text);
  if (apiKeyFailed) return `Grok API 密钥请求失败（${apiKeyFailed[1]}）。`;

  const retryLastValues =
    /^(.+?) is temporarily unavailable — showing the last values, retrying in ~(\d+)m\.$/u.exec(
      text,
    );
  if (retryLastValues) {
    return `${retryLastValues[1]} 暂时不可用，当前显示上次获取的数据，约 ${retryLastValues[2]} 分钟后重试。`;
  }

  const retry = /^(.+?) is temporarily unavailable — retrying in ~(\d+)m\.$/u.exec(text);
  if (retry) return `${retry[1]} 暂时不可用，约 ${retry[2]} 分钟后重试。`;

  const anthropicThrottle =
    /^Anthropic is rate-limiting usage checks — showing your last values, retrying in ~(\d+)m\. Manual refreshes only extend the limit\.$/u.exec(
      text,
    );
  if (anthropicThrottle) {
    return `Anthropic 正在限制用量查询频率，当前显示上次获取的数据，约 ${anthropicThrottle[1]} 分钟后重试。手动刷新只会让限流持续更久。`;
  }

  return text;
}
