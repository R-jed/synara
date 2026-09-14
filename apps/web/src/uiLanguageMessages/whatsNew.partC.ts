export const WHATS_NEW_PART_C_ZH_CN_MESSAGES: Readonly<Record<string, string>> = {
  "Hand off chats from the header again": "顶部栏重新支持转交聊天",
  "The chat header now has a compact Hand off menu, so you can start a provider handoff without hunting through the rest of the workspace.":
    "聊天顶部栏新增精简的“转交”菜单，无需再到工作区其他位置寻找入口，即可发起提供商转交。",
  "The header handoff action now offers only usable target providers, checks provider availability before creating the handoff thread, and keeps the action disabled while the current thread is busy or waiting on approvals/input.":
    "顶部栏的转交操作只显示可用的目标提供商；创建转交对话前会检查提供商是否可用；当前对话忙碌或等待审批/输入时，该操作会保持禁用。",
  "Project scripts stay out of the way": "项目脚本不再挤占界面",
  "Project action dialogs remain available, but the old inline script runner no longer crowds the chat header controls.":
    "项目操作对话框仍可使用，旧的行内脚本运行器不再占用聊天顶部栏空间。",
  "Project script controls stay mounted for the shared Open-in/project-action dialog path, while the visible header play/chevron runner is hidden to keep the top bar focused.":
    "项目脚本控件仍保留在共用的“打开方式”/项目操作对话框流程中；顶部栏可见的播放/箭头运行入口已隐藏，让顶部栏更简洁。",
  "Restarts bring you back to the right chat": "重启后会回到正确的聊天",
  "Synara now waits for one fresh server snapshot before giving up on a remembered chat route, so app restarts are less likely to dump you onto an empty fallback screen.":
    "Synara 现在会等待一次新的服务端快照，再决定是否放弃记住的聊天路由，因此应用重启后更少跳到空白的备用页面。",
  "Chat route restore now validates remembered thread/split routes against refreshed orchestration state, holds fallback while startup data is still empty, and has focused coverage for missing-thread and empty-startup recovery paths.":
    "恢复聊天路由时，现在会用更新后的会话状态校验记住的对话/分屏路由；启动数据仍为空时会暂缓进入备用页面，并为对话缺失和启动数据为空的恢复路径加入针对性测试。",
  "Disabled providers recover more predictably": "已禁用的提供商恢复更稳定",
  "Provider health refreshes now have regression coverage around re-enabling disabled providers, making settings changes less likely to leave stale unavailable states behind.":
    "提供商健康状态刷新现在覆盖了重新启用已禁用提供商的回归场景，设置变更后更不容易残留过期的“不可用”状态。",
  "Provider health and Pi adapter paths were tightened with coverage for disabled-provider re-enable behavior, while provider badges and menu icons were kept aligned with the refreshed availability state.":
    "提供商健康状态和 Pi 适配器流程补强了“禁用后重新启用”的覆盖；提供商徽标和菜单图标也会与刷新后的可用状态保持一致。",
  "The chat header is quieter": "聊天顶部栏更简洁",
  "The old handoff shortcut has been removed from the chat header, leaving the main conversation controls easier to scan during active work.":
    "聊天顶部栏已移除旧的转交快捷入口，进行中的工作里，主要对话控件更容易看清。",
  "The chat header no longer renders the handoff action path, reducing duplicate top-bar controls and keeping project/thread actions focused on the surfaces that still own them.":
    "聊天顶部栏不再渲染转交流程，减少重复的顶部栏控件，并让项目/对话操作继续由各自对应的界面负责。",
  "Your profile understands more of your work": "你的个人资料更懂你的使用习惯",
  "Synara now tracks richer local profile stats, including your most worked project, skill and agent usage, active hours, provider/model mix, and prompt activity.":
    "Synara 现在会记录更丰富的本地个人统计，包括最常使用的项目、技能和 Agent 使用情况、活跃时段、提供商/模型分布，以及提示词活动。",
  "Profile stats now derive more signal from Synara's local projection database: most-worked project, prompt/thread activity, skill and agent usage, provider/model usage, reasoning patterns, active-hour windows, and token heatmap data are all represented in the profile contract and settings panel.":
    "个人资料统计现在会从 Synara 的本地状态数据库提取更多信息：最常使用的项目、提示词/对话活动、技能和 Agent 使用、提供商/模型使用、推理模式、活跃时段和词元热力图数据，都会进入个人资料协议和设置面板。",
  "Large pastes become cleaner composer cards": "大段粘贴内容会变成更整洁的输入卡片",
  "Big pasted blocks now collapse into tidy attachment-style cards, keeping the composer readable while still letting you restore or remove the full text.":
    "大段粘贴内容现在会折叠为整洁的附件式卡片，输入区更清楚，同时仍可恢复或删除完整文本。",
  "Large pasted text blocks are serialized separately from the visible prompt, shown as compact cards in the composer, expandable in sent messages, and counted with line/character metadata so long prompts are easier to review.":
    "大段粘贴文本会与可见提示词分开序列化，在输入区显示为紧凑卡片，发送后可展开查看，并记录行数/字符数，便于检查长提示词。",
  "Pasted text survives message edits": "编辑消息时不会丢失粘贴文本",
  "Editing a message now preserves pasted text blocks instead of dropping or flattening them, so larger prompts stay intact when you refine them.":
    "现在编辑消息会保留粘贴文本块，不会将其丢弃或压平；修改较长提示词时，原内容能保持完整。",
  "The composer draft, edit, assistant-selection, terminal-context, and WebSocket send paths now preserve structured pasted text blocks instead of folding them into fragile plain text. Focused tests cover pasted text, draft persistence, terminal context, timeline height, and edit behavior.":
    "输入区草稿、编辑、助手选择、终端上下文和 WebSocket 发送流程现在都会保留结构化的粘贴文本块，不再把它们合并成脆弱的纯文本。针对性测试覆盖粘贴文本、草稿持久化、终端上下文、时间线高度和编辑行为。",
  "Your Synara profile has more personality": "你的 Synara 个人资料更有个性",
  "Profile settings now include richer identity details, activity stats, and a cleaner editing flow so Synara feels more like your own workspace.":
    "个人资料设置现在包含更丰富的身份信息、活动统计和更清晰的编辑流程，让 Synara 更贴合你的工作空间。",
  "This release adds profile stats aggregation, profile settings UI polish, activity heatmap refinements, avatar/profile editing updates, and focused coverage for the new profile data paths.":
    "本版本加入个人资料统计汇总、个人资料设置界面优化、活动热力图调整、头像/个人资料编辑更新，并为新的个人资料数据流程增加针对性测试。",
  "Deleted threads get a safer recovery window": "已删除对话有更充足的恢复时间",
  "Thread deletion now keeps soft-deleted data around long enough to avoid accidental loss while still letting cleanup happen predictably.":
    "删除对话后，软删除数据现在会保留足够时间，降低误删风险，同时仍会按预期清理。",
  "Synara now tracks thread retention state explicitly, covers soft-delete cleanup behavior with server tests, and keeps deletion/recovery semantics more predictable for early WIP data.":
    "Synara 现在会明确记录对话保留状态，用服务端测试覆盖软删除清理行为，让早期开发数据的删除/恢复规则更稳定。",
  "Live composer edits stay visible per turn": "运行中的输入修改会留在对应轮次",
  "Composer changes made while a turn is running now stay attached to the right turn, reducing confusing stale text or hidden edits during active work.":
    "某一轮运行期间修改输入区内容时，这些更改现在会绑定到正确轮次，减少进行中工作里出现旧文本或隐藏修改的情况。",
  "The chat route and composer state handling were tightened so live edits remain visible in the correct turn lifecycle without bleeding into unrelated transcript updates.":
    "聊天路由和输入区状态处理已改进，实时编辑会在正确的轮次生命周期中保持可见，不会混入无关的聊天记录更新。",
  "Release checks are steadier": "发布检查更稳定",
  "The release test path now avoids known teardown and child-process timing traps, making full validation less likely to stall after tests have passed.":
    "发布测试流程现在会避开已知的清理和子进程时序问题，完整验证在测试通过后更不容易卡住。",
  "Effect ACP child-process fixture tests now have explicit timeouts, and the server test script runs its Vitest files serially so the root Turbo test gate exits cleanly during release validation.":
    "Effect ACP 子进程测试现在设置了明确超时；服务端测试脚本会串行运行 Vitest 文件，使根目录的 Turbo 测试检查在发布验证期间能够正常退出。",
  "File comments can ride along with your next message": "文件行评论可以随下一条消息一起发送",
  "You can now leave focused line comments from composer and preview surfaces, then send them with the prompt so agents get clearer file-specific context.":
    "现在可以从输入区和预览界面对具体文件行添加评论，再随提示词一起发送，让 Agent 获得更明确的文件上下文。",
  "This release adds file-line comment boxes, summary chips, draft persistence, reference attachment handling, preview/editor entry points, chat timeline support, and focused tests for comment parsing, composer drafts, terminal context, kanban dispatch, and chat-view logic.":
    "本版本加入文件行评论框、摘要标签、草稿持久化、引用附件处理、预览/编辑器入口和聊天时间线支持，并为评论解析、输入区草稿、终端上下文、看板任务发送和聊天视图逻辑增加针对性测试。",
  "Live file changes stay scoped to the active turn": "实时文件变更只跟随当前轮次",
  "The live changed-files panel now follows the turn that is actually running, avoiding stale or unrelated file edits when sessions overlap or recover.":
    "实时文件变更面板现在会跟随真正正在运行的轮次，多个会话重叠或恢复时，不再混入过期或无关的文件编辑。",
  "Provider runtime ingestion now carries active turn identity through Codex, Claude, checkpoint, and live-change paths. Chat selectors and composer change headers were tightened so tool/file rows from older turns do not masquerade as current live output.":
    "提供商运行时事件现在会在 Codex、Claude、检查点和实时变更流程中携带当前轮次标识。聊天选择器和输入区变更标题也已改进，旧轮次的工具/文件行不会再伪装成当前实时输出。",
  "Partial workspace file references resolve more reliably":
    "不完整的工作区文件引用也能更可靠地解析",
  "Opening files from shortened or partial references is more forgiving, especially when assistant output mentions a file path without the full workspace prefix.":
    "从缩短或不完整的引用打开文件时更宽容，特别是助手输出只提到文件路径、没有完整工作区前缀的情况。",
  "Workspace file-system lookup now searches entries more deliberately, exposes shared server helpers, improves opener behavior, and adds coverage around partial references so previewing referenced files lands on the intended workspace item.":
    "工作区文件系统查找现在会更有针对性地搜索条目，提供共用服务端辅助函数，改进打开行为，并补充不完整引用的测试，使引用文件预览更稳定地落到目标工作区条目。",
  "Restarted sessions are less likely to leave turns hanging": "重启后的会话更少让轮次一直挂起",
  "After provider restarts, reconnects, or quiet ACP sessions, Synara does a better job of reconciling active turns and finishing idle work instead of getting stuck.":
    "提供商重启、重新连接或 ACP 会话长时间没有活动后，Synara 现在能更好地校准活动轮次并结束空闲工作，减少卡住。",
  "Startup turn reconciliation, ACP idle watchdog handling, provider runtime ingestion, Cursor/Grok/OpenCode adapter event paths, command reactor cleanup, and shared thread summaries now work together to recover unfinished turns and surface stale runtime state more predictably.":
    "启动时轮次校准、ACP 空闲看门狗、提供商运行时事件、Cursor/Grok/OpenCode 适配器事件流程、命令反应器清理和共用对话摘要现在会协同恢复未完成轮次，并更稳定地显示过期运行时状态。",
  "PDFs open safely inside Synara": "PDF 可在 Synara 内安全打开",
  "Local PDFs can now be previewed directly in the workspace pane with page navigation, zoom controls, selection-safe rendering, and hardened link handling.":
    "本地 PDF 现在可以直接在工作区面板预览，支持翻页、缩放、安全选取文本，并加强了链接处理。",
  "This release replaces browser iframe PDF handling with a pdf.js-powered viewer, authenticated local preview routes, workspace/scratch allowlists, sanitized annotation links, page reset behavior when switching files, fresh page proxies per document, and focused server/web tests for local image/PDF access and PDF navigation helpers.":
    "本版本以基于 pdf.js 的查看器替代浏览器 iframe PDF 方案，加入需认证的本地预览路由、工作区/临时目录白名单、经过清理的注释链接、切换文件时页码重置、每个文档使用新的页面代理，并为本地图片/PDF 访问和 PDF 导航辅助函数补充服务端/网页测试。",
  "File preview is shared across chat and editor workspaces": "聊天和编辑器工作区共用文件预览",
  "The right dock and editor workspace now use the same richer file preview surface, so browsing files, images, markdown, and PDFs feels more consistent.":
    "右侧停靠栏和编辑器工作区现在使用同一套更完整的文件预览界面，浏览文件、图片、Markdown 和 PDF 时体验更一致。",
  "Synara now routes file preview through `WorkspaceFilePreview`, `PdfFilePreview`, shared preview headers, markdown/source selection references, workspace file openers, dock pane activation metadata, local preview URL helpers, and tighter file reference context-menu behavior.":
    "Synara 现在通过 `WorkspaceFilePreview`、`PdfFilePreview`、共用预览标题栏、Markdown/源码选取引用、工作区文件打开器、停靠面板激活元数据、本地预览 URL 辅助函数，以及更严格的文件引用右键菜单来统一文件预览。",
  "Pi plugin sessions start in the right place": "Pi 插件会话会从正确位置启动",
  "Pi-backed plugin flows now route through Synara more reliably, discover model support better, and keep startup prompts attached to the correct provider session.":
    "基于 Pi 的插件流程现在能更稳定地接入 Synara，更好地发现模型支持，并让启动提示词绑定到正确的提供商会话。",
  "The Pi adapter gained richer ACP handling, extension model discovery, cwd/session wiring, startup prompt routing, provider command reactor coverage, provider service safeguards, and an ACP mock agent so plugin startup, prompt forwarding, and provider state transitions are covered more directly.":
    "Pi 适配器增强了 ACP 处理、扩展模型发现、cwd/会话连接、启动提示词路由、提供商命令反应器覆盖和提供商服务保护，并加入 ACP 模拟 Agent，让插件启动、提示词转发和提供商状态转换得到更直接的测试。",
  "Chat startup and timelines do less unnecessary work": "聊天启动和时间线减少了不必要的工作",
  "Opening busy chats should feel calmer: timeline ordering, transcript selection, collapsed turns, and sidebar-driven updates were tightened for the common path.":
    "打开繁忙聊天时界面更清爽：常用流程中的时间线排序、聊天记录选择、已折叠轮次和边栏驱动更新都已优化。",
  "This release optimizes chat view startup selectors, timeline ordering, settled-turn collapse fallback, message timeline height logic, transcript tail behavior, right-dock runtime activation, and route-level chat restoration with additional selector, timeline, and browser coverage.":
    "本版本优化聊天视图启动选择器、时间线排序、已结束轮次折叠回退、消息时间线高度逻辑、聊天记录尾部行为、右侧停靠栏运行时激活和路由级聊天恢复，并补充选择器、时间线和浏览器测试。",
  "Composer and markdown interactions picked up useful polish": "输入区和 Markdown 交互更顺手",
  "Cmd+L now focuses the composer, markdown task lists render cleanly, inline mentions behave more predictably, and pending user-input panels are easier to scan.":
    "Cmd+L 现在会聚焦输入区；Markdown 任务列表显示更清晰；行内提及更稳定；待处理用户输入面板也更容易查看。",
  "New keybinding metadata and tests cover the composer focus shortcut, while markdown task-list parsing, chat references, inline mention chips, composer banners, pending user-input panels, and shortcut-sheet entries received focused fixes.":
    "新的快捷键元数据和测试覆盖输入区聚焦快捷键；Markdown 任务列表解析、聊天引用、行内提及标签、输入区横幅、待处理用户输入面板和快捷键面板条目也得到针对性修复。",
  "Cursor and changed-file views are easier to trust": "Cursor 和文件变更视图更可靠",
  "Cursor message ids are handled more carefully, changed files moved to a flatter UI path, and stale plan/sidebar indicators were cleaned up.":
    "Cursor 消息 ID 处理更谨慎，文件变更改用更扁平的界面流程，并清理了过期的计划/边栏指示状态。",
  "Synara now preserves Cursor message identity more reliably, removes the older turn diff tree path, refines changed-file file-list rendering, fixes duplicate plan-mode icons and stale plan sidebar state, and hides inline project actions from the chat header where they created noise.":
    "Synara 现在更可靠地保留 Cursor 消息标识，移除旧的轮次差异树流程，优化文件变更列表渲染，修复重复的计划模式图标和过期的计划边栏状态，并隐藏会造成干扰的聊天顶部栏行内项目操作。",
  "Local previews have tighter safety rails": "本地预览的安全边界更严格",
  "Local image/PDF preview routes are more explicit about what can be opened, how auth applies, and when unsafe paths or URLs should be rejected.":
    "本地图片/PDF 预览路由现在更明确地规定哪些内容可打开、如何应用认证，以及何时拒绝不安全路径或 URL。",
  "Server-side local preview handling now shares local preview file helpers, narrows CORS behavior for preview responses, covers local image routes, hardens scratch workspace path generation, and keeps external PDF links on an allowlisted path instead of trusting unsafe annotation URLs.":
    "服务端本地预览现在共用本地预览文件辅助函数，加强预览响应的 CORS 限制，覆盖本地图片路由，加强临时工作区路径生成，并通过白名单处理外部 PDF 链接，不再信任不安全的注释 URL。",
  "Chats get Codex-style workspace folders": "聊天使用 Codex 风格的工作区文件夹",
  "Project chats now keep their generated files in clearer chat-specific workspace folders, making it easier to understand what belongs to each conversation.":
    "项目聊天现在会把生成的文件放进更清晰的聊天专属工作区文件夹，更容易看出哪些文件属于哪段对话。",
  "This release adds Codex-like workspace folder creation, associated worktree metadata handling, file-only workspace search, settings search deep links, and harder Gemini probe handling so workspace state stays more predictable across chat and editor surfaces.":
    "本版本加入类似 Codex 的工作区文件夹创建、关联 Worktree 元数据处理、仅文件的工作区搜索、设置搜索深层链接，并加强 Gemini 探测处理，让聊天和编辑器界面的工作区状态更稳定。",
  "Transcript turns collapse more reliably": "聊天记录轮次折叠更可靠",
  "Long-running assistant work, collapsed turn rows, and transcript tail-follow behavior are steadier during active output and after reconnects.":
    "长时间运行的助手工作、折叠轮次行和聊天记录尾随行为，在实时输出和重新连接后都更稳定。",
  "The timeline now falls back to the latest turn when visible turn ids are empty, fixes collapsed-turn and tail-jitter edge cases, and keeps scroll-follow logic scoped to real transcript messages instead of tool-only churn.":
    "当可见轮次 ID 为空时，时间线现在会回退到最近轮次；并修复折叠轮次和尾部抖动边缘情况，让滚动跟随只响应真实聊天消息，避免被纯工具活动干扰。",
  "Browser sessions and copy links feel smoother": "浏览器会话和复制链接更顺畅",
  "In-app browser sessions recover better, and copy-link flows now have cleaner behavior when moving between browser and chat contexts.":
    "应用内浏览器会话恢复更稳定，在浏览器和聊天上下文之间切换时，复制链接流程也更清晰。",
  "Browser session handling, copy-link actions, local image preview state, and shared error-card behavior were tightened so browsing, previewing, and moving references into prompts produce fewer stale or duplicated states.":
    "浏览器会话处理、复制链接操作、本地图片预览状态和共用错误卡片行为均已改进，减少浏览、预览和把引用加入提示词时出现过期或重复状态。",
  "Settings open faster and density is easier to tune": "设置打开更快，界面密度也更好调",
  "Settings navigation, sidebar search, and UI density controls picked up polish so repeated configuration work feels lighter.":
    "设置导航、边栏搜索和界面密度控件得到优化，反复调整配置时更省事。",
  "Settings page open avoids extra streaming-tick re-renders, sidebar search deep links can jump directly to matching settings, UI density follow-ups refine sidebar and composer spacing, and shared project menus replace older bespoke editor picker code.":
    "设置页面打开时会避免额外的流式更新重渲染；边栏搜索深层链接可直接跳到匹配设置；界面密度后续调整细化边栏和输入区间距；共用项目菜单替代旧的定制编辑器选择器代码。",
  "Editor and kanban workflows are cleaner": "编辑器和看板工作流更整洁",
  "Editor mode feedback, project picker reuse, kanban composer menus, and image preview handling all received focused follow-ups.":
    "编辑器模式反馈、项目选择器复用、看板输入菜单和图片预览处理都得到针对性调整。",
  "This release fixes editor-mode production feedback, shares project menu picker behavior, splits kanban composer menu discovery from editor logic, and consolidates local image preview state across chat and editor views.":
    "本版本修复编辑器模式在生产环境中的反馈问题，统一使用项目菜单选择器，将看板输入菜单发现与编辑器逻辑拆开，并统一聊天和编辑器视图的本地图片预览状态。",
  "Editor workspace is built into chat": "编辑器工作区现已内置到聊天中",
  "You can now keep a project file workspace beside the conversation, inspect files, and move references into prompts without bouncing between tools.":
    "现在可以把项目文件工作区放在对话旁边，查看文件并把引用加入提示词，无需在不同工具之间来回切换。",
  "This release adds the editor workspace view, file reference selection state, syntax highlighting, project file-system APIs, and focused coverage for workspace entries, path containment, editor view state, and chat reference parsing.":
    "本版本加入编辑器工作区视图、文件引用选择状态、语法高亮、项目文件系统 API，并为工作区条目、路径边界、编辑器视图状态和聊天引用解析增加针对性测试。",
  "Open-in editor support is broader and prettier": "“打开方式”支持更多编辑器，显示也更美观",
  "Ghostty, Terminal, JetBrains, Xcode, Zed, Cursor, VS Code, and other editor launchers now have better discovery, icons, and platform-specific launch behavior.":
    "Ghostty、Terminal、JetBrains、Xcode、Zed、Cursor、VS Code 等编辑器现在能被更准确地发现，显示合适的图标，并按平台采用对应的启动方式。",
  "Synara now discovers native editor apps and icons, caches icon assets server-side, exposes authenticated icon routes, and tightens macOS/Linux/Windows launcher handling, including Ghostty working-directory behavior and Linux desktop-entry matching.":
    "Synara 现在会发现原生编辑器应用和图标，在服务端缓存图标资源，提供需认证的图标路由，并加强 macOS/Linux/Windows 启动处理，包括 Ghostty 工作目录行为和 Linux 桌面项匹配。",
  "Skills are unified across providers": "技能已在各提供商之间统一",
  "The settings skill catalog now understands provider roots and shared skill copies, so Codex, Claude, Cursor, and compatible providers show cleaner ownership instead of duplicate noise.":
    "设置中的技能目录现在理解提供商根目录和共用技能副本，因此 Codex、Claude、Cursor 等兼容提供商会显示更清楚的归属，减少重复项。",
  "A shared server-side skills catalog, provider prompt injection, provider discovery service updates, settings model, and provider icon chips now keep provider-specific and portable skills aligned across the UI.":
    "共用的服务端技能目录、提供商提示词注入、提供商发现服务更新、设置数据模型和提供商图标标签，现在会让提供商专属和可移植技能在整个界面保持一致。",
  "Composer, references, and diffs feel steadier": "输入区、引用和差异视图更稳定",
  "Composer controls, inline chips, file references, markdown rendering, and diff navigation picked up tighter layout and interaction polish.":
    "输入区控件、行内标签、文件引用、Markdown 渲染和差异导航都优化了布局与交互。",
  "The chat view now shares composer footer layout helpers, richer file-entry icons, code-selection actions, syntax highlighting, diff route search, improved diff toolbar/list behavior, and cleaner picker layout for model, trait, and open-in controls.":
    "聊天视图现在共用输入区底部布局辅助函数、更丰富的文件条目图标、代码选取操作、语法高亮、差异路由搜索、改进的差异工具栏/列表行为，并统一模型、特性和“打开方式”控件的选择器布局。",
  "Provider status refreshes are less stale": "提供商状态刷新更及时",
  "Codex auth overlays, provider status refreshes, and provider discovery invalidation now recover better after focus changes, settings updates, and native provider checks.":
    "Codex 认证浮层、提供商状态刷新和提供商发现缓存失效，现在能在焦点变化、设置更新和原生提供商检查后更快恢复到正确状态。",
  "The web app now refreshes provider auth/status on focus and root events, while the server-side provider discovery layer handles native skill and capability fallbacks more predictably.":
    "网页应用现在会在获得焦点和收到根级事件时刷新提供商认证/状态；服务端提供商发现层也会更稳定地处理原生技能和能力回退。",
  "Older data and terminals recover more predictably": "旧数据和终端恢复更稳定",
  "Legacy migration trackers, pinned/sidechat reconciliation, terminal environment handling, and workspace path checks were tightened for early-WIP installs.":
    "针对早期开发版本安装，旧迁移记录、固定/侧边聊天校准、终端环境处理和工作区路径检查都已加强。",
  "Synara now reconciles legacy migration bookkeeping before running migrations, expands migration coverage, validates workspace real-path containment, and carries terminal environment updates through shared server and web contracts.":
    "Synara 现在会在执行迁移前校准旧迁移记录，扩大迁移覆盖范围，验证工作区真实路径边界，并通过共用服务端和网页协议传递终端环境更新。",
  "Claude Fable 5 available to Claude and Cursor": "Claude Fable 5 已支持 Claude 和 Cursor",
  "Claude Fable 5 now appears across the Claude and Cursor model paths, so you can pick the new model without hand-editing provider settings.":
    "Claude Fable 5 现在会出现在 Claude 和 Cursor 的模型流程中，无需手动编辑提供商设置即可选择新模型。",
  "The shared model contract, Cursor variant list, keybinding metadata, provider discovery invalidation, and model-picker coverage were updated so Claude and Cursor stay in sync when new supported models land.":
    "共用模型协议、Cursor 变体列表、快捷键元数据、提供商发现缓存失效和模型选择器测试均已更新，让 Claude 与 Cursor 在新增支持模型时保持同步。",
  "Cursor model discovery is smarter": "Cursor 模型发现更智能",
  "Cursor-backed sessions now discover ACP model support more reliably, refresh stale model lists, and recover better when the provider reports partial or invalid state.":
    "基于 Cursor 的会话现在能更可靠地发现 ACP 模型支持，刷新过期模型列表，并在提供商返回不完整或无效状态时更好地恢复。",
  "Cursor ACP support now has stronger parsing, refresh, health, and adapter handling, with tests for discovery fallbacks, stale cache invalidation, and provider health behavior.":
    "Cursor ACP 的解析、刷新、健康检查和适配器处理现在更稳健，并加入发现回退、过期缓存失效和提供商健康状态的测试。",
  "Provider usage is visible where you work": "在工作界面就能看到提供商用量",
  "Usage limits and pace now show up in the chat environment, settings, and compact controls for Codex, Claude, Cursor, and Gemini.":
    "Codex、Claude、Cursor 和 Gemini 的用量限制及消耗速度现在会显示在聊天环境、设置和紧凑控件中。",
  "Synara now reads provider credentials and usage data through shared server parsers, normalizes snapshots, stores cached values in SQLite, and renders reusable usage rows, progress tracks, line lists, and settings panels in the web app.":
    "Synara 现在通过共用服务端解析器读取提供商凭据和用量数据，统一快照格式，把缓存值存入 SQLite，并在网页应用中渲染可复用的用量行、进度条、明细列表和设置面板。",
  "Composer controls are easier to scan": "输入区控件更容易看清",
  "Model and options pickers are split more cleanly, empty threads keep the focused picker layout, and stacked composer panels have steadier sizing.":
    "模型与选项选择器分得更清楚；空对话保留聚焦的选择器布局；堆叠输入面板的尺寸也更稳定。",
  "The composer stack now uses shared panel content and sizing helpers, refreshed trait-picker behavior, tighter queued/live-change headers, and extra browser/unit coverage for compact controls and panel styles.":
    "堆叠输入区现在使用共用面板内容和尺寸辅助函数、更新后的特性选择器行为、更紧凑的排队/实时变更标题，并补充紧凑控件和面板样式的浏览器/单元测试。",
  "Desktop chrome and installers got sturdier": "桌面窗口和安装包更稳固",
  "Windows desktop builds now use a more reliable custom titlebar path, and Linux download metadata matches the current AppImage asset naming.":
    "Windows 桌面构建现在使用更可靠的自定义标题栏流程，Linux 下载元数据也与当前 AppImage 资源命名一致。",
  "The desktop app gained centralized Windows caption controls, top-bar gutter handling, preload IPC support, font-family cleanup, and backend Node option tests, while the marketing download page now points at the `-x64` AppImage naming used by current releases.":
    "桌面应用加入集中式 Windows 标题栏控件、顶部栏边距处理、预加载 IPC 支持、字体族清理和后端 Node 选项测试；官网下载安装页也已改用当前版本使用的 `-x64` AppImage 命名。",
  "Long-running sessions recover under pressure": "长时间会话在高负载下恢复更稳定",
  "Backend memory diagnostics, WebSocket backpressure handling, and live stream recovery were tightened so heavy sessions stay predictable.":
    "后端内存诊断、WebSocket 背压处理和实时流恢复都已加强，让高负载会话的状态更稳定。",
  "This release adds memory diagnostics, stream backpressure guards, buffered provider-runtime ingestion coverage, and Codex app-server recovery fixes to keep partial streams and reconnects from leaving the UI stale.":
    "本版本加入内存诊断、流背压保护、提供商运行时缓冲接入测试和 Codex 应用服务恢复修复，避免流数据不完整或重新连接时界面停留在旧状态。",
  "Small UI fixes landed across chat and navigation": "聊天和导航修复了一批小问题",
  "Plugin mention icons stay correct after sending, sidebars and search palettes have sharper state, and chat/task rows picked up focused polish.":
    "插件提及图标在发送后会保持正确；边栏和搜索面板状态更准确；聊天/任务行也得到针对性优化。",
  "Mention-chip icon logic, composer mention parsing, sidebar route metadata, search palette tests, active task cards, right-dock layout, root route chrome, and settings navigation all received focused fixes.":
    "提及标签图标逻辑、输入区提及解析、边栏路由元数据、搜索面板测试、活动任务卡片、右侧停靠栏布局、根路由界面和设置导航都得到针对性修复。",
  "Transcript markers make long chats easier to navigate": "聊天记录标记让长对话更容易导航",
  "You can now mark important transcript moments, jump back to them, and manage them from the Environment panel without losing your place in busy threads.":
    "现在可以标记聊天记录中的重要位置、快速跳回，并在环境面板中管理它们，浏览繁忙对话时不会丢失当前位置。",
  "Markers now round-trip through orchestration events, projection storage, migrations, shared validation helpers, transcript selection actions, highlighted markdown spans, marker-aware scrolling, and focused browser/unit coverage.":
    "标记现在会贯穿会话事件、状态存储、迁移、共用校验辅助函数、聊天记录选择操作、高亮 Markdown 片段和标记感知滚动，并有针对性的浏览器/单元测试覆盖。",
  "Links show real site identity": "链接会显示真实网站标识",
  "AI response links, source lists, composer chips, and sent user bubbles now share the same link parsing path with website favicons instead of generic globe icons.":
    "AI 回答中的链接、来源列表、输入区标签和已发送的用户气泡现在共用同一套链接解析流程，并显示网站图标，不再使用通用地球图标。",
  "Synara now caches site favicons server-side, serves authenticated favicon image URLs, recognizes bare domains in composer text, and keeps markdown link text aligned with the same medium-weight chip styling used while composing.":
    "Synara 现在会在服务端缓存网站图标，提供需认证的网站图标 URL，识别输入文本中的裸域名，并让 Markdown 链接文本与输入时使用的中等字重标签样式保持一致。",
  "Local dev servers are easier to spot": "本地开发服务器更容易识别",
  "The Environment panel can now show local servers tied to the current project, with clearer browser/terminal identity and controls for tracked project runs.":
    "环境面板现在可以显示与当前项目关联的本地服务器，并以更清楚的方式标识浏览器/终端，同时提供已跟踪项目运行的控制项。",
  "The server now monitors listening processes with address-family metadata, tracks project-run ownership, syncs local server state over WebSocket/RPC contracts, and adds sidebar/project-run affordances for starting, viewing, and stopping dev servers.":
    "服务端现在会监控监听中的进程并记录地址族元数据，跟踪项目运行归属，通过 WebSocket/RPC 协议同步本地服务器状态，并在边栏/项目运行界面提供启动、查看和停止开发服务器的操作。",
  "Transcript scrolling is calmer": "聊天记录滚动更稳定",
  "Collapsed work sections no longer drag the transcript tail, marker navigation is more predictable, and thread rendering does less surprising work while sessions update.":
    "已折叠的工作区段不再拖动聊天记录尾部；标记导航更稳定；会话更新时，对话渲染也减少了意外变化。",
  "The timeline path now separates marker scroll behavior from live-output sticking, avoids retriggering tail scrolls for collapsed work disclosure changes, and has extra coverage around marker selection, rendering, and scrolling.":
    "时间线逻辑现在把标记滚动与实时输出跟随分开，不会因已折叠工作区段的展开状态变化反复触发尾部滚动，并补充标记选择、渲染和滚动测试。",
  "Small orchestration and shortcut fixes landed too": "会话处理和快捷键也修复了一批小问题",
  "Thread orchestration, terminal identity, recent view switching, retired-model shortcuts, and local-server cleanup picked up focused reliability fixes.":
    "对话处理、终端标识、最近视图切换、已退役模型快捷键和本地服务器清理都做了针对性的稳定性修复。",
  "This release tightens provider/runtime event projection, terminal visual identity, local-server process cleanup, recent-view key handling, and retired model picker shortcuts, with new tests for the affected contracts and stores.":
    "本版本改进提供商和运行时事件处理、终端视觉标识、本地服务器进程清理、最近视图按键处理和已退役模型选择器快捷键，并为相关协议和存储加入新测试。",
  "Desktop updates are packaged more reliably": "桌面更新打包更可靠",
  "The macOS release path now has stronger artifact smoke checks, zip finalization helpers, and updater download coverage so new builds are easier to trust before they ship.":
    "macOS 发布流程现在增加了更严格的产物冒烟检查、ZIP 收尾辅助函数和更新器下载测试，新构建在发布前更容易验证。",
  "Release tooling now validates Mac update artifacts, parses boolean environment flags consistently, and tests the resumable update downloader without the older update-feed cache layer. The README and release docs were refreshed around the current Synara desktop flow too.":
    "发布工具现在会校验 Mac 更新产物，统一解析布尔环境标志，并在不依赖旧更新源缓存层的情况下测试可续传更新下载器。README 和发布文档也已按当前 Synara 桌面流程更新。",
  "The diff panel is easier to navigate": "差异面板更容易浏览",
  "Diff review now has a cleaner toolbar, file list, jump menu, and patch viewport so repository and turn changes are easier to scan without losing context.":
    "差异审阅现在提供更清楚的工具栏、文件列表、跳转菜单和补丁视图，查看仓库或轮次变更时更容易定位，也不易丢失上下文。",
  "The large diff panel was split into focused components with explicit repo-vs-turn view logic, shared selectors, searchable file filtering, and tests for the new source-resolution behavior.":
    "大型差异面板已拆成职责明确的组件，清楚区分仓库差异和轮次差异，复用选择器并支持文件搜索筛选，同时为新的来源解析行为加入测试。",
  "Queued chat turns stay chat turns": "排队的聊天轮次会保留聊天模式",
  "Queued follow-ups now preserve their own mode and attachments even when the live composer is sitting in a plan follow-up state.":
    "即使实时输入区处于计划后续状态，排队的后续消息现在也会保留自己的模式和附件。",
  "Queue draining now dispatches the queued turn payload directly, keeps in-progress composer drafts intact, and has browser coverage for plan-mode threads with pending follow-ups and image attachments.":
    "队列发送会直接使用排队时保存的轮次内容，不改动用户当前正在编辑的输入草稿；浏览器测试也覆盖了计划模式对话中存在待发送后续消息和图片附件的场景。",
  "Composer panels line up cleanly": "输入区面板对齐更统一",
  "Plan activity, queued follow-ups, and live file-change panels now share one frame style above the composer, with consistent width, borders, radius, and dark-mode opacity.":
    "计划活动、排队的后续消息和实时文件变更面板现在共用输入区上方同一套框架样式，宽度、边框、圆角和深色模式透明度保持一致。",
  "The stacked composer chrome now flows through a shared panel wrapper and rail sizing token, while the file-change strip only appears for active turns that actually contain provider file edits.":
    "堆叠输入区现在统一使用共用面板容器和轨道尺寸变量；文件变更条只会在当前活动轮次确实包含提供商文件编辑时显示。",
  "Markdown and mention menus got sharper": "Markdown 和提及菜单更利落",
  "Chat markdown spacing, composer command selection, plugin discovery, file icons, and mention rendering were tightened so selected references look the same before and after sending.":
    "聊天 Markdown 间距、输入区命令选择、插件发现、文件图标和提及渲染都已优化，让选中的引用在发送前后保持一致。",
  "Provider discovery now normalizes aliases and built-in metadata more carefully, command menu grouping is simpler, markdown blocks have better visual rhythm, and sent user bubbles preserve the selected file/plugin icon instead of falling back to generic text.":
    "提供商发现现在更谨慎地规范化别名和内置元数据；命令菜单分组更简单；Markdown 块的视觉节奏更合理；已发送的用户气泡会保留所选文件/插件图标，不再回退成通用文本图标。",
  "Important work can stay pinned": "重要工作可以固定保留",
  "Projects, threads, and specific transcript messages can now be pinned so the context you keep returning to stays close at hand across sessions.":
    "现在可以固定项目、对话和具体聊天记录消息，让经常返回的上下文在多次会话之间一直触手可及。",
  "Pin state is now projected through the orchestration model, stored in dedicated persistence columns, reconciled for older databases, and shared with focused client stores so sidebar ordering, project rows, and thread detail all agree after reloads.":
    "置顶状态现在会通过会话状态模型同步，存入专用持久化列，为旧数据库执行校准，并与专用客户端存储共享，因此重新加载后边栏排序、项目行和对话详情会保持一致。",
  "Thread context has a memory shelf": "对话上下文有了长期记忆区",
  "The environment panel now carries pinned messages and editable notes, giving long-running chats a durable place for decisions, constraints, and useful references.":
    "环境面板现在会保存已置顶消息和可编辑备注，为长期聊天提供一个持久位置，用来记录决策、约束和重要引用。",
  "Pinned message actions round-trip through server commands and snapshots, while thread notes autosave through the same projected thread detail path. This keeps the side panel useful without turning the transcript itself into a scratchpad.":
    "置顶消息操作会通过服务端命令和快照往返同步；对话备注则通过同一套对话详情同步流程自动保存。这样可以让侧面板承载长期信息，而不用把聊天记录本身变成草稿区。",
  "Jump between recent views faster": "更快切换最近视图",
  "A new recent-view switcher lets you move through recent chats, terminals, and workspace surfaces with keyboard-first navigation and visible keycap hints.":
    "新的最近视图切换器可用键盘快速在最近的聊天、终端和工作区界面之间移动，并显示按键提示。",
  "Recent views are tracked in a dedicated store, activated through shared route logic, and covered by browser and unit tests so switching does not lose terminal state or collide with existing global shortcuts.":
    "最近视图会记录在独立存储中，通过共用路由逻辑激活，并有浏览器和单元测试覆盖，确保切换时不丢失终端状态，也不与现有全局快捷键冲突。",
  "Composer references behave better": "输入区引用更稳定",
  "Mention chips, draft restoration, queued composer headers, picker sizing, and empty-chat controls were cleaned up so references stay readable while you build prompts.":
    "提及标签、草稿恢复、排队输入区标题、选择器尺寸和空聊天控件都已清理，组织提示词时引用更易读。",
  "Mention parsing now has shared helpers and tests, composer drafts keep stronger thread/project references, and compact controls use consistent iconography across the empty state and active chat surface.":
    "提及解析现在使用共用辅助函数和测试；输入区草稿会保留更可靠的对话/项目引用；紧凑控件在空状态和活动聊天界面使用一致图标。",
  "Desktop updates can resume": "桌面更新支持断点续传",
  "The desktop updater now has resumable download infrastructure with coverage for partial files, retries, checksum-style state, and release browser test fixes.":
    "桌面更新器现在具备可续传下载基础设施，并覆盖部分文件、重试、校验状态及发布浏览器测试修复。",
  "The update downloader writes through a dedicated resumable path, validates persisted metadata, handles interrupted ranges, and is tested separately from the Electron main process wiring so future updater changes have a sturdier base.":
    "更新下载器通过专用可续传流程写入文件，校验持久化元数据，处理中断后的分段下载，并与 Electron 主进程集成分开测试，为后续更新器改动提供更稳固的基础。",
  "Git actions know when pull is available": "Git 操作会准确判断是否可拉取",
  "Git action controls now surface pull availability more accurately and avoid offering branch actions that cannot safely run for the current repository state.":
    "Git 操作控件现在会更准确地显示拉取是否可用，并避免在当前仓库状态无法安全执行时提供相关分支操作。",
  "The Git core contract, broadcaster, React query helpers, and UI control logic now carry pull availability together, so action buttons line up with upstream/behind checks instead of guessing locally in the component.":
    "Git 核心协议、广播器、React Query 辅助函数和界面控制逻辑现在会一起传递“可拉取”状态，让操作按钮依据上游分支和落后状态的检查结果显示，不再由组件本地猜测。",
  "Runtime failures are easier to survive": "运行时故障后更容易恢复",
  "External Claude shutdowns, terminal cleanup, websocket RPC errors, and provider session recovery picked up extra guards for reconnects and interrupted work.":
    "Claude 被外部关闭、终端清理、WebSocket RPC 错误和提供商会话恢复都加入了更多保护，以应对重新连接和工作中断。",
  "Claude SIGTERM from outside Synara is treated as a benign suspend path, terminal process cleanup has stronger tests, and websocket RPC failure handling is less likely to leave the UI believing a request is still in flight.":
    "Claude 收到来自 Synara 外部的 SIGTERM 时，现在会按正常挂起处理；终端进程清理增加更强测试；WebSocket RPC 失败处理也更少让界面误以为请求仍在进行。",
  "Migrations and release checks got sharper": "迁移和发布检查更严谨",
  "Pinned-state migrations, snapshot projection tests, browser release tests, shortcut tests, and shared pinning logic were expanded to keep this deeper state model predictable.":
    "扩展了置顶状态迁移、快照状态同步、浏览器发布、快捷键以及共用置顶逻辑的测试覆盖，使这些更复杂的状态变化保持稳定。",
  "New migrations cover pinned messages, thread notes, and project pins; legacy pinned-thread reconciliation was tightened; and the release suite now exercises the new state through contracts, server projection, shared helpers, and web UI logic.":
    "新迁移覆盖置顶消息、对话备注和项目置顶；旧版置顶对话状态的校准更严格；发布测试套件现在会从协议、服务端状态同步、共用辅助函数和网页界面多层验证这些状态。",
  "The chat side panel is clearer": "聊天侧面板更清楚",
  "Thread activity, agent detail rows, environment controls, Git actions, branch controls, and queued composer state were tightened so the main chat and side panel stay easier to scan during busy sessions.":
    "对话活动、Agent 详情行、环境控件、Git 操作、分支控件和排队输入状态均已优化，让繁忙会话中主聊天和侧面板更容易查看。",
  "Long chats can be recapped in place": "长对话可直接生成摘要",
  "Synara can now generate and cache thread recaps, show current-state context in the chat environment, and reuse provider-backed recap generation without making the transcript harder to follow.":
    "Synara 现在可以生成并缓存对话摘要，在聊天环境中显示当前状态上下文，并复用提供商支持的摘要生成流程，同时不让聊天记录变得更难阅读。",
  "Large diffs do less duplicate work": "大型差异减少重复计算",
  "Repo diff totals are computed once for the active chat and shared between the header and environment panel, with memoized patch stats to avoid re-parsing the same large diff during live updates.":
    "仓库差异总量现在只为当前聊天计算一次，并在顶部栏和环境面板之间共享；补丁统计也会缓存，避免实时更新时反复解析同一份大型差异。",
  "Archived cleanup is more immediate": "已归档内容清理更即时",
  "Deleting archived threads now goes through one shared client path, removes rows optimistically, batches worktree-linked deletes, and reconciles once with the latest server snapshot.":
    "删除已归档对话现在统一走一条客户端路径，会先在界面中乐观删除条目，批量处理关联 Worktree 的删除，再用最新服务端快照统一校准一次。",
  "Terminals and transcripts are safer under load": "高负载下终端和聊天记录更稳定",
  "Terminal runtime cleanup, provider activity ingestion, transcript rendering, and session handoff logic picked up extra safeguards for reconnects, shell summaries, agent activity, and active task rendering.":
    "终端运行时清理、提供商活动接入、聊天记录渲染和会话转交逻辑都加入更多保护，覆盖重新连接、命令行摘要、Agent 活动和活动任务渲染。",
  "Desktop update prompts are quieter": "桌面更新提示减少打扰",
  "Background update polling no longer exposes a manual check button at the wrong time, update state is restored more predictably, and production builds keep source maps off unless a diagnostic release opts in.":
    "后台更新轮询不再在不合适的时机显示手动检查按钮；更新状态恢复更稳定；生产构建默认关闭源映射，除非诊断版本明确启用。",
  "Small release-readiness fixes landed too": "还加入了一批发布前的小修复",
  "Image attachment expectations, optional callback typing, recap test doubles, composer spacing, reference chips, and queued row styling were aligned with the current UI so the final check suite stays green.":
    "图片附件预期、可选回调类型、摘要测试替身、输入区间距、引用标签和排队行样式都已与当前界面对齐，让最终检查套件保持通过。",
  "Terminals are lighter": "终端运行更轻",
  "Terminal output now does less work end-to-end: batching, renderer acknowledgements, smarter backpressure, cheaper history updates, and more faithful reconnect replay keep busy terminals lighter under noisy commands and long-running TUIs.":
    "终端输出从头到尾减少了处理量：批处理、渲染器确认、更智能的背压、更低成本的历史更新和更忠实的重连回放，让高噪声命令和长时间运行的 TUI 给终端带来的负担更小。",
  "Terminal workspaces feel cleaner": "终端工作区更整洁",
  "Terminal-only workspaces skip hidden chat work, panes move between layouts without remount churn, close prompts only appear when a tab is active or needs attention, and terminal font/color settings now follow the active theme.":
    "仅终端工作区会跳过隐藏的聊天处理；面板可在不同布局间移动而不反复重新挂载；只有标签页处于活动状态或需要处理时才显示关闭提示；终端字体/颜色设置也会跟随当前主题。",
  "OpenCode starts faster and fails louder": "OpenCode 启动更快，失败信息更明确",
  "Local OpenCode servers are pooled for recent sessions, startup waits longer before timing out, session creation runs alongside inventory discovery, and failure details now include redacted command output instead of vague startup errors.":
    "本地 OpenCode 服务实例会在近期会话间复用；启动超时时间更长；会话创建会与资源清单发现并行；失败详情会显示已脱敏的命令输出，不再只有模糊的启动错误。",
  "Provider health checks are less jumpy": "提供商健康检查更稳定",
  "Slow Claude and OpenCode probes get longer timeouts, transient command timeouts no longer make a previously ready provider look broken, and Claude auth refreshes invalidate cached subscription state.":
    "较慢的 Claude 和 OpenCode 探测现在会获得更长的超时时间；临时命令超时不会再把此前正常的提供商误判为故障；Claude 认证刷新也会使缓存的订阅状态失效。",
  "Claude resumes recover from stale native sessions": "Claude 恢复可处理过期的原生会话",
  "When Claude reports a missing conversation id, Synara clears the stale resume cursor, recreates the provider session, and retries with transcript context instead of leaving the turn failed.":
    "当 Claude 报告会话 ID 不存在时，Synara 会清除过期的恢复游标，重新创建提供商会话，并带着聊天记录上下文重试，不再让该轮直接失败。",
  "Desktop updates now have a manual escape hatch": "桌面更新现在有手动兜底",
  "If an in-app install silently fails, Synara restarts the backend, resumes update polling, deduplicates error toasts, and points you at the exact GitHub release page for a manual download.":
    "如果应用内安装静默失败，Synara 会重启后端、恢复更新轮询、合并重复错误提示，并提供对应 GitHub 发布页，方便手动下载。",
  "macOS desktop chrome stays aligned": "macOS 桌面窗口布局保持对齐",
  "Traffic-light placement and renderer gutter spacing now share one geometry helper and react to Electron zoom changes, keeping top-bar controls lined up across chat, settings, and workspace views.":
    "红绿灯按钮位置和渲染区域边距现在共用同一套几何辅助函数，并响应 Electron 缩放变化，让聊天、设置和工作区视图中的顶部栏控件始终对齐。",
  "Settings and appearance controls are easier to scan": "设置和外观控件更容易查看",
  "Theme selection moved to a segmented control, settings rows share tighter typography, provider update failures can expose a copyable manual command, and custom binary-path confirmations survive restarts.":
    "主题选择改为分段控件；设置行使用更紧凑的排版；提供商更新失败时可显示可复制的手动命令；对自定义二进制路径的确认在重启后也会保留。",
  "Agent task activity is easier to follow": "Agent 任务活动更容易跟踪",
  "OpenCode task child sessions and newer shell-step events now flow into Synara's activity timeline, while generic agent task rows keep their useful prompt and result text instead of disappearing or showing wrapper noise.":
    "OpenCode 任务子会话和更新的命令行步骤事件现在会进入 Synara 的活动时间线；通用 Agent 任务行也会保留有用的提示词和结果文本，不会消失或只显示包装层噪声。",
  "Reconnect state is visible to UI runtimes": "界面运行时可直接感知重连状态",
  "The web transport now publishes local WebSocket state changes, giving terminal recovery and other renderer code a cleaner signal when the server reconnects or closes.":
    "网页传输层现在会发出本地 WebSocket 状态变化，让终端恢复和其他渲染器代码在服务端重连或关闭时获得更清楚的信号。",
  "OpenCode support is much deeper": "OpenCode 支持大幅增强",
  "OpenCode startup, model discovery, command discovery, server connection options, and experimental WebSocket mode now flow through the same settings and runtime paths as the rest of Synara.":
    "OpenCode 的启动、模型发现、命令发现、服务端连接选项和实验性 WebSocket 模式，现在都接入 Synara 其余部分使用的设置和运行时流程。",
  "Slash commands respect your OpenCode setup": "斜杠命令会遵循你的 OpenCode 配置",
  "Composer slash-command discovery now uses the configured OpenCode binary, server URL, password state, and WebSocket mode, so command lists match the runtime you actually selected.":
    "输入区斜杠命令发现现在会使用已配置的 OpenCode 二进制文件、服务端 URL、密码状态和 WebSocket 模式，因此命令列表会与实际选择的运行时一致。",
  "Desktop updates are harder to get stuck": "桌面更新更不容易卡住",
  "The updater now caches GitHub release metadata, preserves actionable update state across transient failures, detects stalled downloads, and clears stale same-version update payloads more deliberately.":
    "更新器现在会缓存 GitHub 发布元数据，在临时故障后保留可操作的更新状态，检测停滞下载，并更明确地清理过期的同版本更新数据。",
  "The chat surface feels tighter": "聊天界面更紧凑",
  "Composer padding, button spacing, picker sizing, panel headers, banners, dock surfaces, and chat chrome were tuned so the main workspace reads cleaner without losing controls.":
    "输入区内边距、按钮间距、选择器尺寸、面板标题、横幅、停靠界面和聊天界面框架都已调整，让主要工作区更清楚，同时保留全部控件。",
  "Desktop chrome fits the OS better": "桌面窗口更贴合系统",
  "macOS traffic-light spacing, sidebar seams, Electron card borders, motion, and titlebar controls were refined so the app frame feels more native on desktop.":
    "macOS 红绿灯按钮间距、边栏接缝、Electron 卡片边框、动效和标题栏控件均已优化，让桌面应用外框更贴近原生系统。",
  "Large chats do less unnecessary work": "大型聊天减少不必要的处理",
  "Markdown parsing is deferred more carefully, pending-interaction state is derived in one place, and transcript/session rendering avoids extra churn during busy or long-running chats.":
    "Markdown 解析会更谨慎地延后；待处理交互状态统一在一处计算；繁忙或长期聊天中的聊天记录和会话渲染也减少了额外刷新。",
  "Settings back navigation lands in the right place": "设置返回按钮会回到正确位置",
  "The Settings sidebar back button now restores the last valid chat route, falls back to the newest live thread when needed, and drops stale split-view routes before navigating.":
    "设置边栏的返回按钮现在会恢复上一个有效聊天路由；必要时回退到最新的活动对话；导航前还会清理过期的分屏路由。",
  "Chats can be hidden": "聊天列表可以隐藏",
  "A new sidebar section toggle lets you hide the standalone Chats footer list while keeping Projects available.":
    "新的边栏分区开关可隐藏独立的“聊天”底部列表，同时继续显示“项目”。",
  "Imported legacy databases recover missing columns": "导入的旧数据库可补齐缺失字段",
  "Fresh repair migrations reconcile older imported migration trackers that skipped Synara's sidechat-source or pinned-thread columns, preventing startup crashes in those upgraded histories.":
    "新增修复迁移会校准旧版导入的迁移记录，这些记录可能跳过 Synara 的侧边聊天来源或固定对话字段，从而避免升级后的历史数据库在启动时崩溃。",
  "OpenCode looks better in dark mode": "OpenCode 深色模式显示更清楚",
  "The OpenCode provider icon now switches to a clearer reversed asset in dark mode, with sidebar and provider picker styling adjusted around it.":
    "OpenCode 提供商图标现在会在深色模式切换到更清晰的反色资源，边栏和提供商选择器样式也做了相应调整。",
  "Settings are easier to scan": "设置更容易浏览",
  "Repeated boolean settings were consolidated into a shared row pattern, provider install rows got cleaner reset behavior, and OpenCode-specific controls sit with the rest of provider tools.":
    "重复的布尔设置统一为共用行样式；提供商安装行的重置行为更清楚；OpenCode 专用控件也归入其他提供商工具所在位置。",
  "Synara is now the default home": "Synara 现在是默认主目录",
  "The app now starts from `~/.synara`, carries the Synara environment variables through the desktop and server runtime, and safely imports data from previous installations on first launch.":
    "应用现在默认从 `~/.synara` 启动，桌面端和服务端运行时会传递 Synara 环境变量，并在首次启动时安全导入旧安装的数据。",
  "Desktop startup feels more native": "桌面启动更接近原生体验",
  "Windows now hydrates the desktop environment from the registry so provider CLIs are found reliably, macOS keeps Liquid Glass styling only where it belongs, and older Macs get a rounded dock icon without breaking Tahoe.":
    "Windows 现在从注册表加载桌面环境，让系统能更可靠地找到提供商 CLI；macOS 只在合适位置保留 Liquid Glass 样式；较老的 Mac 也会使用圆角 Dock 图标，同时不影响 Tahoe。",
  "Right dock and saved UI state are sturdier": "右侧停靠栏和已保存界面状态更稳固",
  "Recovered browser, dock, sidechat, split-view, and panel state is now validated before use, preventing stale or corrupted localStorage from crashing the workspace.":
    "恢复的浏览器、停靠栏、侧边聊天、分屏和面板状态现在会在使用前校验，避免损坏或过期的 localStorage 让工作区崩溃。",
  "Composer pickers are cleaner": "输入区选择器更整洁",
  "The traits picker and shared menu styling were refreshed with a tighter layout, clearer selection states, and a calmer feel across model and composer controls.":
    "特性选择器和共用菜单样式已更新，布局更紧凑、选中状态更清楚，模型和输入控件整体看起来更清爽。",
  "Provider runtime noise is reduced": "提供商运行时噪声减少",
  "Claude thinking-token telemetry no longer floods the timeline, provider task warnings are deduplicated more carefully, and Codex home overlays avoid stale SQLite sidecar files during startup.":
    "Claude 思考词元遥测数据不再刷满时间线；提供商任务警告会更谨慎地去重；Codex 主目录覆盖层在启动时也会避开过期的 SQLite 辅助文件。",
  "Small workflow details got sharper": "工作流细节更利落",
  "Context meter labels, edit actions, completion separators, Git controls, diff routing, desktop update retry state, and shortcut handling all picked up focused fixes for smoother day-to-day sessions.":
    "上下文计量标签、编辑操作、完成分隔线、Git 控件、差异路由、桌面更新重试状态和快捷键处理都得到针对性修复，让日常使用更顺畅。",
  "Claude Opus 4.8 is available": "Claude Opus 4.8 现已可用",
  "Synara now includes Claude Opus 4.8 in the Claude model picker.":
    "Synara 现在已在 Claude 模型选择器中加入 Claude Opus 4.8。",
};
