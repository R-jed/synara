// Lightweight UI localization: English source copy is the lookup key and missing entries
// fall back to English. A tiny external store lets only translation consumers re-render
// when the resolved language changes, without a context provider around the application.
import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";

import type { UiLanguagePreference } from "./appSettings";
import {
  readStoredUiLanguagePreference,
  resolveUiLanguage,
  type ResolvedUiLanguage,
} from "./uiLanguagePreference";
import { CHAT_ZH_CN_MESSAGES } from "./uiLanguageMessages/chat";
import { SETTINGS_ROUTE_ZH_CN_MESSAGES } from "./uiLanguageMessages/settingsRoute";
import { SETTINGS_ZH_CN_MESSAGES } from "./uiLanguageMessages/settings";
import { SHELL_ZH_CN_MESSAGES } from "./uiLanguageMessages/shell";
import { WORKSPACE_ZH_CN_MESSAGES } from "./uiLanguageMessages/workspace";

export { resolveUiLanguage, type ResolvedUiLanguage } from "./uiLanguagePreference";

const ZH_CN_MESSAGES: Readonly<Record<string, string>> = {
  Personal: "个人",
  Integrations: "集成",
  Coding: "编码",
  System: "系统",
  Archived: "已归档",
  General: "常规",
  Profile: "个人资料",
  Appearance: "外观",
  Notifications: "通知",
  "Chat behavior": "聊天行为",
  Keybindings: "快捷键",
  "Usage & limits": "用量与限额",
  AppSnap: "AppSnap",
  "MCP connections": "MCP 连接",
  "Agent providers": "Agent 提供商",
  "Models & writing": "模型与写作",
  "Agent skills": "Agent 技能",
  "Managed worktrees": "托管 Worktree",
  "System tools": "系统工具",
  "Archived threads": "已归档对话",
  Studio: "Studio",
  "Build, debug, and ship": "构建、调试和发布",
  "Open-ended agent work": "开放式 Agent 任务",
  "New thread": "新建对话",
  Kanban: "看板",
  "Pull requests": "拉取请求",
  Automations: "自动化",
  Chats: "聊天",
  "New chat": "新建聊天",
  Settings: "设置",
  Search: "搜索",
  "Add project": "添加项目",
  "Import thread from...": "导入对话...",
  "Feedback Synara": "向 Synara 反馈",
  "Usage settings": "用量设置",
  "New space": "新建空间",
  "Open the new chat landing screen.": "打开新聊天首页。",
  "Start a fresh thread in the current or most recently used project.":
    "在当前或最近使用的项目中开始新对话。",
  "Open a repository or folder in the sidebar.": "在边栏中打开仓库或文件夹。",
  "Attach a local thread to an existing provider session.": "把本地对话接入已有的提供商会话。",
  "Send feedback or report an issue to the Synara team.": "向 Synara 团队发送反馈或报告问题。",
  "Open app settings.": "打开应用设置。",
  "Open provider usage and remaining credits.": "查看提供商用量和剩余额度。",
  "Group projects into a focused work context.": "将项目整理到一个专属工作空间。",
  "Show more": "显示更多",
  "Show less": "收起",
  "No chats yet": "还没有聊天",
  "Choose defaults for new chats, navigation, and the Environment panel.":
    "设置新聊天、导航和环境面板的默认行为。",
  "Your local activity, streaks, and a shareable stats card.":
    "查看本地活动、连续使用记录和可分享的统计卡片。",
  "Customize the language, theme, typography, density, and time format.":
    "自定义语言、主题、字体、界面密度和时间格式。",
  "Choose how Synara tells you when work finishes or needs attention.":
    "设置 Synara 在任务完成或需要处理时如何通知你。",
  "Control live responses, follow-ups, review defaults, and safety confirmations.":
    "设置实时回复、后续消息、代码审阅默认项和安全确认。",
  "Capture, customize, and add shortcuts for every Synara command.":
    "查看、自定义和添加 Synara 快捷键。",
  "See remaining quota and credits for every signed-in provider.": "查看各已登录提供商的剩余额度。",
  "Capture another app's frontmost window directly into a task.":
    "把其他应用最前面的窗口直接截取到任务中。",
  "Give Codex, Claude, and other local agents scoped access to Synara tasks.":
    "让 Codex、Claude 等本地 Agent 在限定范围内访问 Synara 任务。",
  "Choose visible coding agents and manage their installed CLI tools.":
    "选择可见的编码 Agent，并管理已安装的命令行工具。",
  "Choose the model used for Git writing and add custom model slugs.":
    "选择 Git 写作使用的模型，并添加自定义模型标识。",
  "Review reusable workflows discovered across all configured providers.":
    "查看从已配置提供商中发现的可复用工作流。",
  "Review and clean up isolated workspaces created by Synara.":
    "查看并清理 Synara 创建的隔离工作区。",
  "Manage sessions, recovery tools, low-level keybindings, and version details.":
    "管理会话、恢复工具、底层快捷键和版本信息。",
  "Find and restore threads you previously archived.": "查找并恢复之前归档的对话。",
  "Back to app": "返回应用",
  "Search settings...": "搜索设置...",
  "Search settings": "搜索设置",
  "No matching settings.": "没有匹配的设置。",
  "Settings search results": "设置搜索结果",
  "Settings sections": "设置分类",
  Theme: "主题",
  Light: "浅色",
  Dark: "深色",
  App: "应用",
  "App icon": "应用图标",
  "Use custom title bar": "使用自定义标题栏",
  "Typography and spacing": "字体与间距",
  "Use system UI font": "使用系统界面字体",
  "UI density": "界面密度",
  "Chat width": "聊天宽度",
  "Base font size": "基础字号",
  "Terminal font size": "终端字号",
  "Terminal font": "终端字体",
  "Font smoothing": "字体平滑",
  "Language and time": "语言与时间",
  Language: "语言",
  "Follow System": "跟随系统",
  English: "English",
  "Simplified Chinese": "简体中文",
  "Use the system language or choose a language for Synara.":
    "跟随系统语言，或为 Synara 指定界面语言。",
  "Time format": "时间格式",
  "System default follows your browser or OS clock preference.":
    "系统默认值会跟随浏览器或操作系统的时间显示设置。",
  "System default": "跟随系统",
  Compact: "紧凑",
  Comfortable: "舒适",
  Spacious: "宽松",
  Standard: "标准",
  Wide: "宽",
  Full: "全宽",
  "Choose the icon Synara uses in the dock or taskbar.":
    "选择 Synara 在程序坞或任务栏中使用的图标。",
  "Restart Synara to apply. Some Linux window managers work better with the system title bar.":
    "重启 Synara 后生效。部分 Linux 窗口管理器使用系统标题栏时效果更好。",
  "Replace the system title bar with Synara's frameless chrome and window controls. Restart required to apply.":
    "使用 Synara 的无边框窗口控件替代系统标题栏。重启后生效。",
  "Restart required": "需要重启",
  Restart: "重启",
  "Ignore the theme's custom UI font and render the interface with the native system font (SF Pro on macOS).":
    "忽略主题自定义界面字体，改用系统原生字体，macOS 上为 SF Pro。",
  "Control spacing in the sidebar, composer, chat gutters, and settings rows without changing font size.":
    "调整边栏、输入区、聊天留白和设置行的间距，不改变字号。",
  "Control how wide the chat column grows. Wide and Full give tables and wide content more room.":
    "调整聊天区域宽度。宽和全宽模式会给表格等宽内容更多空间。",
  "Adjust the app text base in pixels. Chat and UI typography scale proportionally from this value.":
    "按像素调整应用基础字号，聊天和界面文字会按比例缩放。",
  "Adjust terminal text independently from the app and chat font size.":
    "单独调整终端文字大小，不影响应用和聊天字号。",
  "Type any monospace font installed on this device (e.g. Fira Code). Leave empty for the default. Fonts that aren't installed fall back to the system monospace.":
    "输入本机已安装的任意等宽字体，例如 Fira Code。留空使用默认字体，未安装的字体会回退到系统等宽字体。",
  "Default (JetBrains Mono)": "默认（JetBrains Mono）",
  "No matching suggested fonts.": "没有匹配的推荐字体。",
  "Use macOS-style antialiasing for lighter, crisper text rendering.":
    "使用 macOS 风格抗锯齿，让文字显示更轻、更清晰。",
  "Restore defaults": "恢复默认设置",
  "Restore default settings?": "恢复默认设置？",
  "This will reset:": "将重置：",
  "Connecting to Synara server...": "正在连接 Synara 服务端...",
  "This Synara client needs an update.": "Synara 客户端需要更新。",
  "The Synara server needs an update.": "Synara 服务端需要更新。",
  "Synara needs to reconnect with a matching build.": "Synara 需要使用匹配的版本重新连接。",
  "Update or reload this client, then reconnect.": "更新或重新加载客户端，然后重新连接。",
  "Update or restart the server, then reload this client.":
    "更新或重启服务端，然后重新加载客户端。",
  "Reload the app. If this repeats, restart Synara so the client and server use matching builds.":
    "重新加载应用。如果问题再次出现，请重启 Synara，确保客户端和服务端版本一致。",
  Client: "客户端",
  Server: "服务端",
  "Reload app": "重新加载应用",
  ...CHAT_ZH_CN_MESSAGES,
  ...SETTINGS_ROUTE_ZH_CN_MESSAGES,
  ...SETTINGS_ZH_CN_MESSAGES,
  ...SHELL_ZH_CN_MESSAGES,
  ...WORKSPACE_ZH_CN_MESSAGES,
};

const translateEnglish = (text: string): string => text;
const translateSimplifiedChinese = (text: string): string => ZH_CN_MESSAGES[text] ?? text;

const TRANSLATORS: Readonly<Record<ResolvedUiLanguage, (text: string) => string>> = {
  en: translateEnglish,
  "zh-CN": translateSimplifiedChinese,
};

export function translateUiText(language: ResolvedUiLanguage, text: string): string {
  return TRANSLATORS[language](text);
}

export function translateUiErrorText(
  language: ResolvedUiLanguage,
  error: unknown,
  fallback = "An unexpected error occurred.",
): string {
  const rawMessage =
    error instanceof Error ? error.message.trim() : typeof error === "string" ? error.trim() : "";
  const translatedFallback = translateUiText(language, fallback);
  if (!rawMessage) return translatedFallback;
  if (language === "en") return rawMessage;
  const translatedMessage = translateUiText(language, rawMessage);
  return translatedMessage !== rawMessage || !/[A-Za-z]/.test(rawMessage)
    ? translatedMessage
    : translatedFallback;
}

const ERROR_TRANSLATORS: Readonly<
  Record<ResolvedUiLanguage, (error: unknown, fallback?: string) => string>
> = {
  en: (error, fallback) => translateUiErrorText("en", error, fallback),
  "zh-CN": (error, fallback) => translateUiErrorText("zh-CN", error, fallback),
};

let activeLanguage = resolveUiLanguage("system");
const languageListeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  languageListeners.add(listener);
  return () => languageListeners.delete(listener);
}

function getSnapshot(): ResolvedUiLanguage {
  return activeLanguage;
}

function getServerSnapshot(): ResolvedUiLanguage {
  return "en";
}

export function getActiveUiLanguage(): ResolvedUiLanguage {
  return activeLanguage;
}

function setActiveLanguage(language: ResolvedUiLanguage): void {
  if (activeLanguage === language) return;
  activeLanguage = language;
  for (const listener of languageListeners) listener();
}

function syncDesktopUiLanguage(language: ResolvedUiLanguage): void {
  if (typeof window === "undefined") return;
  void window.desktopBridge?.setUiLanguage?.(language).catch(() => undefined);
}

const useBrowserLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function useUiLanguageBootstrap(): void {
  useBrowserLayoutEffect(() => {
    const language = resolveUiLanguage(readStoredUiLanguagePreference());
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
    syncDesktopUiLanguage(language);
    setActiveLanguage(language);
  }, []);
}

export function useUiLanguageRuntime(preference: UiLanguagePreference): void {
  useBrowserLayoutEffect(() => {
    const sync = () => {
      const language = resolveUiLanguage(preference);
      if (typeof document !== "undefined") {
        document.documentElement.lang = language;
      }
      syncDesktopUiLanguage(language);
      setActiveLanguage(language);
    };

    sync();
    if (preference !== "system" || typeof window === "undefined") return;

    window.addEventListener("languagechange", sync);
    return () => window.removeEventListener("languagechange", sync);
  }, [preference]);
}

export function useUiLanguage() {
  const language = useSyncExternalStore<ResolvedUiLanguage>(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  return {
    language,
    t: TRANSLATORS[language],
    tError: ERROR_TRANSLATORS[language],
  } as const;
}
