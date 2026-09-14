import type { DesktopUiLanguage } from "@synara/contracts";

const ZH_CN_MESSAGES: Readonly<Record<string, string>> = {
  "Reset Zoom": "重置缩放",
  "Zoom In": "放大",
  "Zoom Out": "缩小",
  "Check for Updates...": "检查更新...",
  "Settings...": "设置...",
  File: "文件",
  View: "视图",
  "New Terminal Tab": "新建终端标签页",
  "Toggle Sidebar": "显示/隐藏边栏",
  "Toggle Browser": "显示/隐藏浏览器",
  "Keyboard Shortcuts": "快捷键",
  "About Synara": "关于 Synara",
  Services: "服务",
  "Hide Synara": "隐藏 Synara",
  "Hide Others": "隐藏其他应用",
  "Show All": "全部显示",
  "Quit Synara": "退出 Synara",
  "Close Window": "关闭窗口",
  Edit: "编辑",
  Undo: "撤销",
  Redo: "重做",
  Cut: "剪切",
  Copy: "复制",
  Paste: "粘贴",
  "Select All": "全选",
  Reload: "重新加载",
  "Force Reload": "强制重新加载",
  "Toggle Developer Tools": "显示/隐藏开发者工具",
  "Toggle Full Screen": "切换全屏",
  Window: "窗口",
  Minimize: "最小化",
  Zoom: "缩放",
  "Bring All to Front": "全部置于前台",
  Help: "帮助",
  "Updates unavailable": "暂时无法更新",
  "Automatic updates are not available right now.": "当前无法使用自动更新。",
  "Automatic updates are not available because no update feed is configured.":
    "未配置更新源，因此无法使用自动更新。",
  "Automatic updates are only available in packaged production builds.":
    "只有正式打包版本支持自动更新。",
  "Automatic updates are disabled by the SYNARA_DISABLE_AUTO_UPDATE setting.":
    "SYNARA_DISABLE_AUTO_UPDATE 设置已关闭自动更新。",
  "Automatic updates on Linux require running the AppImage build.":
    "Linux 上只有 AppImage 版本支持自动更新。",
  "You're up to date!": "已经是最新版本",
  "Update found": "发现新版本",
  "Synara is preparing the update in the background.": "Synara 正在后台准备更新。",
  "Update ready": "更新已就绪",
  "Click Update in the sidebar when you’re ready to restart and install it.":
    "准备好后，在边栏点击“更新”即可重启并安装。",
  "Update check failed": "检查更新失败",
  "Could not check for updates.": "无法检查更新。",
  "An unknown error occurred. Please try again later.": "发生未知错误，请稍后重试。",
  OK: "确定",
  Quit: "退出",
  "Open logs": "打开日志",
  "Try again": "重试",
  "Restart Synara": "重启 Synara",
  "Restart Now": "立即重启",
  Later: "稍后",
  "Back up and continue": "备份并继续",
  "Restart and recover": "重启并恢复",
  "Update Synara and restart": "更新 Synara 并重启",
  "Download latest release": "下载最新版本",
  "Try restore again": "再次尝试恢复",
  "Restore backup and restart": "恢复备份并重启",
  "Synara failed to start": "Synara 启动失败",
  "Synara encountered an error while starting.": "Synara 启动时发生错误。",
  "Synara could not verify its server build": "Synara 无法验证服务端版本",
  "The migration source could not be checked safely.": "无法可靠验证迁移来源。",
  "Synara's server build is stale": "Synara 服务端版本过旧",
  "The built migration code does not match this checkout.": "已构建的迁移代码与当前源码不匹配。",
  "Synara needs to restart": "Synara 需要重启",
  "Synara changed while it was opening.": "Synara 在启动过程中被修改了。",
  "Synara was replaced on disk": "磁盘上的 Synara 已被替换",
  "The installed Synara app changed while it was running.":
    "Synara 运行期间，已安装的应用发生了变化。",
  "Synara's backend didn't start": "Synara 服务端未能启动",
  "The backend failed to start.": "服务端启动失败。",
  "Synara found a different database migration history": "Synara 检测到不同的数据库迁移历史",
  "Synara's server build does not match": "Synara 服务端版本不匹配",
  "The desktop and server migration code came from different builds.":
    "桌面端与服务端的迁移代码来自不同的构建版本。",
  "Synara needs to recover its database": "Synara 需要恢复数据库",
  "A database migration did not finish safely.": "数据库迁移未能安全完成。",
  "Synara is already running elsewhere": "Synara 已在其他位置运行",
  "Your local Synara data is in use by another process.": "本地 Synara 数据正在被另一个进程使用。",
  "Synara's window stopped": "Synara 窗口已停止运行",
  "AppSnap discarded": "AppSnap 截取已丢弃",
  "The AppSnap capture was discarded.": "此次 AppSnap 截取已被丢弃。",
  "AppSnap failed": "AppSnap 截取失败",
  "No suggestions": "没有建议",
  "Copy Image": "复制图片",
  No: "否",
  Yes: "是",
  "Sign in": "登录",
  "The current process cannot safely read the replaced application bundle. Restart Synara to finish opening with one consistent version.":
    "当前进程无法安全读取已被替换的应用文件。请重启 Synara，使用同一版本完成启动。",
  "The interface keeps running from a safeguarded copy, but parts of the app loaded later can still read the replaced file. Restart now to pick up the new version safely.":
    "当前界面会继续使用受保护的副本运行，但稍后加载的部分仍可能读取已被替换的文件。请立即重启，以安全切换到新版本。",
  "Synara paused automatic restarts so a failing backend can't keep respawning in the background.":
    "Synara 已暂停自动重启，避免故障服务端在后台反复启动。",
  "Migration recovery failed": "数据库迁移恢复失败",
  "Synara could not update itself": "Synara 无法完成自我更新",
  "Synara stopped a database migration before it could finish safely.":
    "Synara 在数据库迁移安全完成前停止了迁移。",
  "The saved database backup could not be restored.": "无法恢复已保存的数据库备份。",
  "The newest Synara release could not be installed.": "无法安装最新版本的 Synara。",
  "retry the verified backup restore": "再次尝试恢复已验证的备份",
  "restore the verified pre-migration backup and restart": "恢复迁移前已验证的备份并重启",
  "install the newest Synara release, which may already contain the fix":
    "安装最新版本的 Synara，该版本可能已经包含修复",
  "download that release": "在浏览器中下载该版本",
  "download the latest Synara release": "在浏览器中下载最新版本的 Synara",
  "quit without opening the database": "不打开数据库并退出",
  "This database is newer than Synara": "这个数据库版本高于当前 Synara",
  "Database restore failed": "数据库恢复失败",
  "The verified database backup could not be restored.": "无法恢复已验证的数据库备份。",
  "The backend and provider processes will remain stopped until you update, restore, or quit.":
    "在你选择更新、恢复或退出之前，服务端和提供商进程都会保持停止。",
  "Synara could not verify migration recovery": "Synara 无法验证数据库迁移恢复信息",
  "The backend stopped for database safety, but its recovery details were invalid.":
    "服务端已为保护数据库而停止，但恢复信息无效。",
  "Synara will keep the backend and provider processes stopped. The recovery record is not trusted, so restoring from it is disabled; choose one of the safe actions below.":
    "Synara 会继续停止服务端和提供商进程。由于恢复记录不可信，无法使用它恢复，请从下面的安全操作中选择一项。",
  "Update or reinstall Synara before starting it again. The database was not opened.":
    "再次启动前，请更新或重新安装 Synara。数据库尚未打开。",
  "Rebuild with bun run build:desktop before starting Synara again. The database was not opened.":
    "再次启动 Synara 前，请运行 bun run build:desktop 重新构建。数据库尚未打开。",
  "Rebuild with bun run build:desktop before starting Synara. The database was not opened.":
    "启动 Synara 前，请运行 bun run build:desktop 重新构建。数据库尚未打开。",
  "Restart Synara to open the verified backup recovery flow. Provider and chat processes will remain stopped until recovery completes.":
    "请重启 Synara 进入已验证备份的恢复流程。在恢复完成前，提供商和聊天进程都会保持停止。",
  "Another Synara server is already using this database.":
    "另一个 Synara 服务端正在使用这个数据库。",
  "Stop the other Synara app or development server, then try again. Your data has not been changed.":
    "请停止另一个 Synara 应用或开发服务器后重试。你的数据没有被修改。",
  "Synara's window stopped unexpectedly.": "Synara 窗口意外停止。",
  "Synara paused automatic reloads so a repeating crash can't keep reloading in the background.":
    "Synara 已暂停自动重新加载，避免重复崩溃后在后台不断重载。",
  "This exit reason repeats on reload, so Synara did not retry automatically.":
    "重新加载后仍会出现同样的退出原因，因此 Synara 没有继续自动重试。",
};

let activeLanguage: DesktopUiLanguage = resolveDesktopUiLanguage(
  Intl.DateTimeFormat().resolvedOptions().locale,
);

export function resolveDesktopUiLanguage(locale: string | null | undefined): DesktopUiLanguage {
  const normalized = (locale ?? "").trim().replaceAll("_", "-").toLowerCase();
  if (!normalized.startsWith("zh")) return "en";
  if (normalized.includes("-hans")) return "zh-CN";
  if (normalized.includes("-hant")) return "en";
  if (/(?:^|-)(?:tw|hk|mo)(?:-|$)/.test(normalized)) return "en";
  return "zh-CN";
}

export function getDesktopUiLanguage(): DesktopUiLanguage {
  return activeLanguage;
}

export function setDesktopUiLanguage(language: DesktopUiLanguage): boolean {
  if (activeLanguage === language) return false;
  activeLanguage = language;
  return true;
}

export function translateDesktopText(text: string): string {
  return activeLanguage === "zh-CN" ? (ZH_CN_MESSAGES[text] ?? text) : text;
}

export function translateDesktopErrorText(
  error: unknown,
  fallback = "An unknown error occurred. Please try again later.",
): string {
  const message =
    error instanceof Error ? error.message.trim() : typeof error === "string" ? error.trim() : "";
  if (activeLanguage !== "zh-CN") {
    return message || fallback;
  }
  if (!message) {
    return translateDesktopText(fallback);
  }
  const translated = translateDesktopText(message);
  if (translated !== message || !/[A-Za-z]/.test(message)) {
    return translated;
  }
  return translateDesktopText(fallback);
}
