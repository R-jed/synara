// FILE: authSignedOut.ts
// Purpose: Replaces authenticated application state after the current browser session logs out.

import { readStoredUiLanguagePreference, resolveUiLanguage } from "./uiLanguagePreference";

export const AUTH_SIGNED_OUT_PATH = "/signed-out";

function renderSignedOutScreen(): void {
  const root = document.getElementById("root");
  if (!root) return;

  const language = resolveUiLanguage(readStoredUiLanguagePreference());
  const copy =
    language === "zh-CN"
      ? {
          title: "已退出 · Synara",
          eyebrow: "会话已关闭",
          heading: "此浏览器已无法控制 Synara。",
          body: "此会话及其实时连接已被撤销。若要重新连接，请在仍有效的所有者会话中生成新的配对链接，并在此浏览器中打开。",
        }
      : {
          title: "Signed out · Synara",
          eyebrow: "Session closed",
          heading: "This browser no longer controls Synara.",
          body: "The session and its live connections were revoked. To reconnect, generate a fresh pairing link from an active owner session and open it in this browser.",
        };

  document.documentElement.lang = language;
  document.title = copy.title;
  root.innerHTML = `
    <main aria-labelledby="signed-out-title" style="min-height:100vh;box-sizing:border-box;display:grid;place-items:center;padding:32px;background:#10110f;color:#f3f0e8;font-family:'DM Sans',sans-serif">
      <section style="position:relative;width:min(100%,560px);overflow:hidden;border:1px solid #373a34;background:#171915;padding:clamp(30px,6vw,56px);box-shadow:12px 12px 0 #080907">
        <div aria-hidden="true" style="position:absolute;inset:0 0 auto auto;width:128px;height:8px;background:#d6ff55"></div>
        <p style="margin:0 0 22px;color:#d6ff55;font:600 12px/1.2 'JetBrains Mono',monospace;letter-spacing:.16em;text-transform:uppercase">${copy.eyebrow}</p>
        <h1 id="signed-out-title" tabindex="-1" style="max-width:470px;margin:0;color:#fffdf7;font-size:clamp(36px,7vw,58px);font-weight:600;line-height:.96;letter-spacing:-.05em">${copy.heading}</h1>
        <p style="max-width:440px;margin:26px 0 0;color:#b8bbb2;font-size:16px;line-height:1.65">${copy.body}</p>
      </section>
    </main>`;
  root.querySelector<HTMLElement>("h1")?.focus();
}

export function bootstrapSignedOutScreen(
  input: {
    readonly pathname: string;
    readonly render: () => void;
  } = {
    pathname: window.location.pathname,
    render: renderSignedOutScreen,
  },
): boolean {
  if (input.pathname !== AUTH_SIGNED_OUT_PATH) return false;
  input.render();
  return true;
}
