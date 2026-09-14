export const WHATS_NEW_PART_D_ZH_CN_MESSAGES: Readonly<Record<string, string>> = {
  "Grok Build models stay current": "Grok Build 模型保持最新",
  "Grok model discovery now combines the CLI with xAI language-model metadata, including API aliases, so Grok Build and code-fast variants appear in the picker without waiting for another manual app update.":
    "Grok 模型发现现在会结合 CLI 与 xAI 语言模型元数据，包括 API 别名。Grok Build 和 code-fast 变体可直接出现在模型选择器中，无需等待下一次应用手动更新。",
  "Provider choices wait for real readiness": "提供商确认就绪后才可选择",
  "The provider picker no longer treats unknown provider status as usable. Providers stay in a checking state until Synara has confirmed that the local runtime is available and authenticated.":
    "提供商选择器不会再把状态未知的提供商视为可用。只有 Synara 确认本地运行环境可用且已完成身份验证后，提供商才会结束检查状态。",
  "Desktop shutdown is calmer": "桌面端退出更平稳",
  "The desktop backend now shuts down more deliberately on quit, reducing noisy restarts and preserving a cleaner thread sync path when the app is closing.":
    "退出应用时，桌面后端现在会按更明确的流程关闭，减少多余的重启，并让应用关闭期间的对话同步流程更简洁。",
  "Large histories sync with less work": "大型历史记录同步更轻量",
  "Snapshot queries, checkpoint reads, and transcript updates picked up more focused data paths, keeping busy workspaces lighter when sessions reconnect or histories grow.":
    "快照查询、检查点读取和对话记录更新采用了更精简的数据路径。会话重连或历史记录变长时，繁忙工作区的额外开销更少。",
  "Diffs and transcripts feel steadier": "差异与对话记录更稳定",
  "Whitespace diff controls, thread title updates, copy metadata, and live transcript rows received targeted fixes so common review and resume flows update more predictably.":
    "空白字符差异控制、对话标题更新、复制元数据和实时对话记录行都做了针对性修复，让常见的审阅和恢复流程更新更稳定。",
  "Grok joins Synara": "Grok 加入 Synara",
  "Pick Grok as a first-class coding provider with ACP-backed sessions, model selection, approval handling, resume support, provider health checks, settings, icons, and handoff wired through the same app surfaces as the rest of your agents.":
    "现在可以把 Grok 作为正式支持的代码提供商使用。它支持基于 ACP 的会话、模型选择、审批处理、会话恢复、健康检查、设置、图标和任务转交，并与其他 Agent 共用同一套应用界面。",
  "Provider fallbacks and desktop menus behave better": "提供商回退与桌面菜单更可靠",
  "Provider startup and recovery paths are more forgiving when preferred runtimes are unavailable, and desktop menu shortcuts now line up more reliably with the active workspace.":
    "首选运行环境不可用时，提供商启动和恢复流程现在能更稳妥地回退；桌面菜单快捷键也会更准确地对应当前工作区。",
  "Large histories stay lighter": "大型历史记录占用更低",
  "Snapshot hydration, diagnostics, and capped history paths now do less unnecessary work, reducing memory pressure when busy sessions or large workspaces reconnect.":
    "快照恢复、诊断和历史记录上限处理现在减少了不必要的工作，在繁忙会话或大型工作区重连时可降低内存压力。",
  "Pi and OpenCode edge cases are smoother": "Pi 与 OpenCode 的边缘情况更稳定",
  "Pi aborts now read as interruptions, thinking levels are clamped more safely, live sidebar updates are steadier, and OpenCode/provider update handling picked up targeted reliability fixes.":
    "Pi 中止现在会明确显示为中断，思考级别会被严格限制在有效范围内，边栏实时更新更稳定，OpenCode 和提供商更新流程也加入了针对性的可靠性修复。",
  "Answers survive the RPC hop": "回答经过 RPC 后仍会保留",
  "User-input answers are preserved through the JSON-RPC codec, which keeps pending provider questions from losing their payload as they move between the app and server.":
    "用户输入的回答现在会完整经过 JSON-RPC 编解码流程，待处理的提供商问题在应用与服务端之间传递时不会再丢失内容。",
  "Pi gets a much sturdier seat at the table": "Pi 的集成更加稳固",
  "Pi provider sessions now benefit from tighter lifecycle handling, clearer extension-limit warnings, and provider probes that respect the binaries configured in settings.":
    "Pi 提供商会话现在有更严谨的生命周期管理、更清楚的扩展限制提示，提供商探测也会正确使用设置中指定的可执行文件。",
  "Providers can keep themselves fresher": "提供商可以自动保持更新",
  "Provider auto-update plumbing landed across the app, making it easier to keep agent runtimes current without turning setup and maintenance into a separate chore.":
    "应用已接入提供商自动更新机制，可以更轻松地让 Agent 运行环境保持最新，无需把安装和维护变成额外工作。",
  "Create PR only appears when it can actually work": "仓库可创建 PR 时才显示相关操作",
  "Create-PR actions now check upstream branch and availability state more carefully, so the UI is quieter until the repository is ready for a real pull request.":
    "创建 PR 的操作现在会更仔细地检查上游分支和可用状态。仓库真正具备创建拉取请求的条件前，界面不会提前显示无效操作。",
  "Pending questions stop advancing at the wrong time": "待处理问题不会再错误自动推进",
  "Pending user-input auto-advance now cancels on question changes and in-flight responses, reducing stale answers and empty submissions in interrupted provider flows.":
    "问题发生变化或回答仍在发送时，待处理用户输入会取消自动推进，减少提供商流程中断后出现旧回答或空提交的情况。",
  "Git status and provider transcripts read cleaner": "Git 状态与提供商对话记录更清晰",
  "Git status refreshes, pull-error messaging, Kilo/OpenCode transcript handling, repo diff scopes, and provider install docs links all picked up focused reliability polish.":
    "Git 状态刷新、拉取错误提示、Kilo/OpenCode 对话记录处理、仓库差异范围以及提供商安装文档链接都做了针对性的可靠性改进。",
  "Image attachments stay visible after sending": "图片附件发送后仍能正常显示",
  "Persisted image previews now load through the same reliable byte-serving path as local generated images, fixing the brief preview flash followed by broken attachment thumbnails.":
    "已保存的图片预览现在与本地生成图片共用可靠的字节读取路径，修复了预览短暂出现后附件缩略图失效的问题。",
  "Kilo Code joins the provider lineup": "Kilo Code 加入提供商阵容",
  "Synara can now launch and monitor Kilo Code sessions alongside Codex, Claude, Cursor, OpenCode, and Gemini, with health checks, settings, mentions, handoff, and model compatibility wired through the app.":
    "Synara 现在可以像管理 Codex、Claude、Cursor、OpenCode 和 Gemini 一样启动并监控 Kilo Code 会话，并已接入健康检查、设置、提及、任务转交和模型兼容支持。",
  "Provider order is now yours to arrange": "提供商顺序现在可自行调整",
  "The settings screen now lets you drag providers into the order that fits your workflow, and the composer, sidebar, search palette, and plugin surfaces follow the same custom ordering.":
    "现在可以在设置中拖动提供商，按自己的工作习惯排序。输入区、边栏、搜索面板和插件界面都会沿用同一顺序。",
  "Cleaner OpenCode and Kilo transcript updates": "OpenCode 与 Kilo 的对话记录更新更清晰",
  "Synthetic snapshot progress is filtered more carefully, so restored or refreshed provider output avoids repeating internal progress text while keeping real assistant activity intact.":
    "系统会更仔细地过滤快照生成的进度信息。恢复或刷新提供商输出时，不会重复显示内部进度文字，同时保留真实的助手活动。",
  "Diff totals are easier to trust at a glance": "差异统计一眼就能看准",
  "The chat header now owns unified diff totals, keeping added and removed line counts consistent between the header and diff panel as content refreshes.":
    "聊天顶部栏现在统一负责差异统计。内容刷新时，新增和删除行数会在顶部栏与差异面板之间保持一致。",
  "OpenCode sessions understand the latest event stream": "OpenCode 会话支持最新事件流",
  "Synara now tracks the newer OpenCode SDK session events, keeps titles fresher, and has much deeper coverage around OpenCode startup, output, and recovery flows.":
    "Synara 现在会跟踪新版 OpenCode SDK 会话事件，及时更新标题，并为 OpenCode 启动、输出和恢复流程补充了更深入的测试覆盖。",
  "Interrupted turns recover more predictably": "中断的轮次恢复更稳定",
  "Ready and idle transitions now clear or restore turn state more carefully, reducing stuck busy states after reconnects, restarts, and partial provider streams.":
    "进入就绪或空闲状态时，会更谨慎地清理或恢复轮次状态，减少重连、重启或提供商输出中断后一直卡在忙碌状态的问题。",
  "Cursor model choices follow live ACP metadata": "Cursor 模型选项跟随实时 ACP 元数据",
  "Cursor model selection now normalizes against the provider's current ACP options instead of relying on stale context traits, so the composer better matches what Cursor can actually run.":
    "Cursor 模型选择现在会根据提供商当前的 ACP 选项校准，不再依赖过期的上下文属性，让输入区显示的选项更贴合 Cursor 实际可运行的模型。",
  "Diff and pinned-thread state stay in sync": "差异与置顶对话状态保持同步",
  "Projection, sidebar, and store updates now carry pinned-thread metadata through the app, while the diff panel handles refreshed content with fewer display glitches.":
    "状态数据、边栏和状态存储更新现在都会携带置顶对话元数据，差异面板刷新内容时也减少了显示异常。",
  "Small workflow polish for Git and keybindings": "Git 与快捷键工作流细节优化",
  "Git summaries are clearer for rename-like moves into untracked folders, and routine keybinding reloads no longer pop a success toast every time they quietly refresh.":
    "文件移动到未跟踪文件夹、看起来类似重命名时，Git 摘要会更清楚；快捷键常规重载也不会再每次静默刷新都弹出成功通知。",
  "Codex image generation now renders in chat": "Codex 生成的图片现在可直接显示在聊天中",
  "Generated images from Codex are captured as local artifacts, rendered inline in assistant messages, and include expand and download controls without dragging bulky base64 payloads through the transcript.":
    "Codex 生成的图片现在会保存为本地文件并直接显示在助手消息中，同时提供放大和下载操作，无需在对话记录里传递庞大的 Base64 数据。",
  "Generated images use a safer local route": "生成图片使用更安全的本地访问路径",
  "Synara now serves generated files through a dedicated local-image endpoint with MIME checks, workspace-aware path resolution, and Codex generated_images allowlists for both the normal home and desktop overlay home.":
    "Synara 现在通过专用的本地图片端点提供生成文件，并加入 MIME 检查、按工作区解析路径，以及针对普通主目录和桌面覆盖层主目录的 Codex generated_images 允许列表。",
  "Provider favorites are quicker to manage": "提供商模型收藏更好管理",
  "The provider model picker gained native favorite toggles and cleaner context-menu separators, making large Codex, Cursor, and OpenCode model lists easier to shape around the models you actually use.":
    "提供商模型选择器加入原生收藏开关和更清晰的右键菜单分隔线。面对较长的 Codex、Cursor 和 OpenCode 模型列表时，可以更快整理出常用模型。",
  "Old inactive threads hide after seven days": "长期未活动的对话会在七天后隐藏",
  "The retention job now hides stale inactive threads from the app in batches, publishes maintenance progress, and protects running work and approvals while keeping database history available for long-term stats.":
    "清理任务现在会分批隐藏长期未活动的对话，并同步维护进度，同时保护正在运行的任务和待审批内容。数据库中的历史记录仍会保留，用于长期统计。",
  "Transport and server edges are steadier": "传输与服务端边界更稳定",
  "WebSocket HTTP URL helpers, lifecycle events, provider runtime ingestion, and chat-route plumbing were tightened so generated artifacts and cleanup events move through the app more predictably.":
    "WebSocket HTTP URL 辅助逻辑、生命周期事件、提供商运行数据接入和聊天路由都做了加固，让生成文件和清理事件在应用中的传递更稳定。",
  "Cursor is now a first-class Synara provider": "Cursor 现在是 Synara 正式支持的提供商",
  "Run Cursor CLI sessions directly from Synara with ACP-backed startup, model discovery, existing-chat resume, handoff, and provider health checks alongside Codex and OpenCode.":
    "现在可以直接在 Synara 中运行 Cursor CLI 会话，并像 Codex 和 OpenCode 一样使用基于 ACP 的启动、模型发现、已有聊天恢复、任务转交和提供商健康检查。",
  "New Effect TS ACP runtime": "全新的 Effect TS ACP 运行环境",
  "The new Effect TS ACP package owns generated schemas, JSON-RPC transport, client and agent helpers, terminal release handling, and protocol tests so provider integrations have a sturdier core.":
    "新的 Effect TS ACP 包统一负责自动生成的模式定义、JSON-RPC 传输、客户端与 Agent 辅助工具、终端资源释放和协议测试，让提供商集成的底层更稳固。",
  "The server moved onto Effect RPC": "服务端已迁移到 Effect RPC",
  "WebSocket routing, auth, readiness, settings, environment, git status, and orchestration flows were rebuilt around Effect services so reconnects and failure paths stay more predictable.":
    "WebSocket 路由、身份验证、就绪状态、设置、环境、Git 状态和会话协调流程都围绕 Effect 服务重构，让重连与故障处理更稳定。",
  "Cursor output is easier to read and resume": "Cursor 输出更易阅读和恢复",
  "Cursor reasoning, tool progress, usage events, plan updates, composer behavior, and model-selection compatibility now render more consistently across fresh and resumed threads.":
    "无论新建还是恢复对话，Cursor 的推理、工具进度、用量事件、计划更新、输入区行为和模型选择兼容性现在都会更一致地显示。",
  "Busy sessions stay calmer": "繁忙会话更稳定",
  "Sidebar project recovery, visible-thread PR lookups, task banner resizing, stale target repair, sidechat split handling, and compact chat controls were tightened for heavier day-to-day use.":
    "边栏项目恢复、可见对话的 PR 查询、任务横幅尺寸调整、过期目标修复、侧边聊天分屏处理和紧凑聊天控件都做了加固，更适合高频日常使用。",
  "Sidechat threads are easier to track": "侧边聊天对话更容易区分",
  "Sidechat source metadata now flows through projections, filters, and snapshots so secondary threads stay easier to separate from the main conversation.":
    "侧边聊天的来源元数据现在会贯穿状态同步、筛选和快照流程，让辅助对话更容易与主对话区分。",
  "Desktop startup feels faster": "桌面端启动体感更快",
  "Packaged desktop builds now open the app window before backend readiness finishes, reducing the blank-start feeling while services come online.":
    "打包后的桌面应用现在会在后端完全就绪前先打开窗口，服务启动期间不再长时间停留在空白画面。",
  "Git gained commit and push": "Git 新增提交并推送",
  "The Git actions menu can now commit current work and push it from Synara, keeping the common release and handoff flow closer to the chat.":
    "Git 操作菜单现在可以直接在 Synara 中提交当前更改并推送，让常用的发布和任务转交流程更接近聊天界面。",
  "Task controls are clearer": "任务控制更清晰",
  "Active task controls were tightened, and approval counts are now separated from user input requests so pending work is easier to read at a glance.":
    "进行中任务的控制项经过整理，审批数量也与用户输入请求分开显示，待处理工作更容易一眼看清。",
  "Browser-use now drives the visible browser": "browser-use 现在直接操作可见浏览器",
  "The desktop browser and browser-use tools now share the same visible webview, so automation, screenshots, navigation, and manual browsing stay in sync instead of racing separate hidden pages.":
    "桌面浏览器与 browser-use 工具现在共用同一个可见 WebView。自动化、截图、导航和手动浏览会保持同步，不再由各自独立的隐藏页面同时运行而互相干扰。",
  "The browser panel is steadier": "浏览器面板更稳定",
  "Browser resizing, overlay handling, tab controls, screenshot actions, and browser-use panel requests were tightened while keeping the browser from reopening by default.":
    "浏览器尺寸调整、浮层处理、标签页控制、截图操作和 browser-use 面板请求都做了加固，同时继续保持浏览器默认不会自动重新打开。",
  "Plans are easier to export": "计划导出更方便",
  "Proposed plans now share one compact action set for copying markdown, saving into a `.plan` workspace folder, or exporting a markdown file through the desktop save dialog.":
    "计划提案现在共用一组简洁操作，可复制 Markdown、保存到工作区的 `.plan` 文件夹，或通过桌面保存对话框导出 Markdown 文件。",
  "Split panes expand predictably": "分屏面板展开行为更稳定",
  "Expanding a chat pane now opens that selected chat as the single full-screen surface, closing the rest of the split layout.":
    "展开某个聊天面板时，现在会将所选聊天作为唯一的全屏界面打开，并关闭其余分屏布局。",
  "Git flows are smoother": "Git 流程更顺畅",
  "The Git menu now includes branch creation with Synara-style names, and PR creation can recover from GitHub duplicate-PR responses by reusing the existing open pull request.":
    "Git 菜单现在支持按 Synara 命名规则创建分支。创建 PR 时，如果 GitHub 返回重复 PR，也可以直接复用已有的未关闭拉取请求。",
  "Legacy imports heal themselves": "旧版导入数据可自动修复",
  "A new migration reconciles older imported databases whose migration history skipped required schema changes, preventing missing-column crashes after import.":
    "新的迁移会修复旧版导入数据库中遗漏必要结构变更的迁移记录，避免导入后因缺少数据库列而崩溃。",
  "Idle sessions clean up after themselves": "空闲会话会自动清理",
  "Provider runtimes and Codex discovery sessions now stop after idle periods, while active turns and pending approvals remain protected from premature shutdown.":
    "提供商运行环境和 Codex 发现会话会在空闲一段时间后自动停止，同时保护进行中的轮次和待审批内容，避免被过早关闭。",
  "Streaming output lands in the right message": "流式输出会进入正确的消息",
  "Assistant turn ingestion now prefers existing completed item IDs when possible, reducing placeholder duplication and keeping streamed assistant text attached to the intended message.":
    "接收助手轮次时会尽量复用已有已完成条目的 ID，减少占位消息重复，并确保流式助手文本归到正确的消息中。",
  "Small workflow polish landed": "一些工作流细节得到优化",
  "Diff views can copy the full patch directly, terminal-started chats get a clearer header icon, sidebar titles truncate more cleanly, and long transcripts cap normalized messages for lighter rendering.":
    "差异视图现在可直接复制完整补丁；从终端启动的聊天有更清楚的顶部图标；边栏标题截断更整齐；较长的对话记录也会限制标准化消息数量，减轻渲染负担。",
  "Split chats are easier to arrange": "分屏聊天更容易整理",
  "Split chat panes now support direct drag-and-drop, cross-project drops, and safer orphan handling so multi-chat layouts stay easier to build and recover.":
    "分屏聊天面板现在支持直接拖放、跨项目拖放，并能更稳妥地处理孤立项，多聊天布局更容易搭建和恢复。",
  "Split chat navigation is steadier": "分屏聊天导航更稳定",
  "Split chat activation, route restore, sidebar grouping, and thread subscriptions were tightened so opening and switching chats feels more predictable.":
    "分屏聊天激活、路由恢复、边栏分组和对话订阅都做了加固，打开和切换聊天时的行为更稳定。",
  "OpenCode tasks show live progress": "OpenCode 任务显示实时进度",
  "OpenCode todo events now flow into Synara as active task updates, with a compact banner option for keeping current work visible without taking over the chat.":
    "OpenCode 待办事件现在会作为进行中任务更新传入 Synara，并可用紧凑横幅持续显示当前工作，不会占据整个聊天区域。",
  "OpenCode models can be favourited": "OpenCode 模型可以收藏",
  "The model picker now supports OpenCode favourites, making preferred models quicker to find across larger provider model lists.":
    "模型选择器现在支持收藏 OpenCode 模型，在较长的提供商模型列表中可以更快找到常用模型。",
  "OpenCode context usage is tracked": "OpenCode 上下文用量可追踪",
  "OpenCode sessions now report context usage more consistently, giving Synara better runtime visibility as conversations grow.":
    "OpenCode 会话现在会更稳定地报告上下文用量。随着对话变长，Synara 能更准确地了解运行状态。",
  "Debug controls stay out of production": "调试控件不会出现在正式版本中",
  "Debug feature flags are now hidden behind local opt-in behavior, keeping production sidebars cleaner while preserving developer-only controls.":
    "调试功能开关现在只在本地明确启用后显示，正式版本的边栏更简洁，同时保留开发者专用控制项。",
  "Cursor CLI support landed": "已支持 Cursor CLI",
  "Cursor is now available as a provider, with ACP sessions, model discovery, existing chats, handoff, shortcuts, and git text generation wired into Synara.":
    "Cursor 现在可作为提供商使用，ACP 会话、模型发现、已有聊天、任务转交、快捷键和 Git 文本生成功能均已接入 Synara。",
  "Voice transcription is scoped more carefully": "语音转写的适用范围更准确",
  "Voice transcription now stays on ChatGPT sessions, avoiding confusing provider mismatches while keeping dictation available where it is supported.":
    "语音转写现在仅用于 ChatGPT 会话，避免出现提供商不匹配，同时在受支持的场景中继续提供听写功能。",
  "Voice transcription setup is smoother": "语音转写设置更顺畅",
  "Voice transcription setup was tightened so spoken prompts can flow into the composer more reliably in supported ChatGPT sessions.":
    "语音转写设置经过改进，在受支持的 ChatGPT 会话中，口述提示词可以更稳定地进入输入区。",
  "Mentions keep their names": "提及内容会保留名称",
  "Composer replacements now preserve mention labels, so referenced files, apps, and tools remain readable after the prompt text is normalized.":
    "输入区替换内容时会保留提及标签。提示词文本标准化后，被引用的文件、应用和工具仍能保持清楚可读。",
  "Plugin mentions are handled in prompts": "提示词可正确处理插件提及",
  "Plugin references can now flow through composer prompts cleanly, making connected-tool context less brittle when you hand work to an agent.":
    "插件引用现在可以完整地随输入区提示词传递。把任务交给 Agent 时，已连接工具的上下文不易再因提及处理而出错。",
  "Toast behavior can be feature-flagged": "通知行为可通过功能开关控制",
  "Toast notifications picked up feature-flag wiring, giving Synara a safer way to roll notification changes forward or back.":
    "浮动通知已接入功能开关，Synara 可以更稳妥地启用或回退通知相关改动。",
  "Desktop reconnects are steadier": "桌面端重连更稳定",
  "The desktop bridge now refreshes reconnects more reliably and preserves the workspace home directory, reducing drift after desktop runtime restarts.":
    "桌面桥接现在能更可靠地重新建立连接，并保留工作区主目录，减少桌面运行环境重启后的状态偏移。",
  "Branch switching is much safer": "分支切换更稳妥",
  "Synara now handles messy branch switches with clearer recovery actions, recreated stashes, unpublished branch publishing, and stronger checks around conflicts and local work.":
    "遇到复杂的分支切换情况时，Synara 现在会提供更清楚的恢复操作，必要时重新创建储藏，支持发布未推送分支，并加强对冲突和本地更改的检查。",
  "Plan mode proposals show up properly": "计划模式提案会正确显示",
  "Proposed plans from providers are now parsed and surfaced as first-class UI state, so planning turns feel more predictable instead of blending into ordinary assistant output.":
    "提供商给出的计划现在会被解析并作为独立界面状态显示。计划轮次会更清楚，不会再混进普通的助手输出中。",
  "Desktop navigation controls landed": "桌面端新增导航控制",
  "The desktop app now has app-level back and forward navigation controls, making it easier to move around Synara without losing your place.":
    "桌面应用现在提供应用级后退和前进控制，在 Synara 中切换位置时更容易保持当前上下文。",
  "Sidebar ordering stays put": "边栏排序会保持不变",
  "Stored sidebar sort preferences are preserved on load, fixing cases where project and thread ordering could unexpectedly reset.":
    "加载时会保留已保存的边栏排序偏好，修复项目和对话顺序偶尔意外重置的问题。",
  "Fonts are more consistent": "字体表现更一致",
  "Theme and chat font handling now share one normalization path, tightening up typography across the chat UI, model controls, and theme settings.":
    "主题和聊天字体现在共用同一套标准化处理，让聊天界面、模型控件和主题设置中的字体表现更一致。",
  "GPT-5.5 is available": "GPT-5.5 已可用",
  "GPT-5.5 is now in the model picker with the right default reasoning behavior, so you can move new Codex sessions onto the latest model directly from Synara.":
    "GPT-5.5 现已加入模型选择器，并带有正确的默认推理设置。新建 Codex 会话时，可以直接在 Synara 中切换到这一模型。",
  "OpenCode support is here": "现已支持 OpenCode",
  "OpenCode is now available as a provider, with runtime model discovery, session handling, provider settings, model search, variants, agents, and git text generation wired into the app.":
    "OpenCode 现在可作为提供商使用，运行时模型发现、会话处理、提供商设置、模型搜索、变体、Agent 和 Git 文本生成均已接入应用。",
  "Model search feels faster": "模型搜索更快更顺手",
  "Large OpenCode model lists now get provider-aware search, clearer labels, automatic search focus, arrow-key navigation, and tighter picker clipping.":
    "较长的 OpenCode 模型列表现在支持按提供商优化的搜索、更清楚的标签、自动聚焦搜索框、方向键导航，以及更合理的选择器裁切。",
  "Diffs now start from the turn": "差异现在以当前轮次起点为基准",
  "Turn diffs use turn-start checkpoints, making changed-file views line up more closely with what the agent actually changed in the current turn.":
    "轮次差异现在使用轮次开始时的检查点，让已更改文件视图更准确地对应 Agent 在当前轮次真正做出的修改。",
  "Chat markdown is smarter": "聊天 Markdown 更智能",
  "Math rendering was added to chat markdown, while literal dollar amounts stay intact so normal prices and currency snippets do not get misread as formulas.":
    "聊天 Markdown 现在支持数学公式渲染，同时会保留普通金额中的美元符号，避免价格和货币文本被误识别成公式。",
  "More polish around search and releases": "搜索与发布流程继续优化",
  "Sidebar theme search, release verification, Windows signing config, and a handful of provider/model edge cases were tightened up for a smoother build and update path.":
    "边栏主题搜索、发布校验、Windows 签名配置以及若干提供商和模型边缘情况都做了改进，让构建和更新流程更顺畅。",
  "🗂️ Project import browsing got smarter": "🗂️ 项目导入浏览更智能",
  "The import palette can now browse nearby paths more directly, helping you find and open the right project location with less guesswork.":
    "导入面板现在可以更直接地浏览相邻路径，更容易找到并打开正确的项目位置。",
  "📊 Provider usage is visible in-context": "📊 当前界面即可查看提供商用量",
  "The branch toolbar now surfaces provider usage snapshots, making it easier to keep an eye on current usage without leaving your working view.":
    "分支工具栏现在会显示提供商用量快照，无需离开当前工作界面就能查看用量。",
  "🚀 Desktop startup feels clearer": "🚀 桌面端启动过程更清楚",
  "Synara now shows a proper splash screen while the desktop backend spins up, so launch feels intentional instead of looking briefly stalled.":
    "桌面后端启动期间，Synara 现在会显示正式的启动画面，避免应用看起来像短暂卡住。",
  "🎛️ Better provider and theme polish": "🎛️ 提供商与主题体验继续优化",
  "Model capability handling, theme editing, and related picker behavior were tightened up so settings feel more consistent and trustworthy.":
    "模型能力处理、主题编辑和相关选择器行为都做了改进，让设置项的表现更一致、更可靠。",
  "🛠️ Desktop release plumbing is sturdier": "🛠️ 桌面版发布流程更稳固",
  "Startup readiness checks, desktop packaging config, and platform entitlements were refined to make desktop builds and app boot more reliable.":
    "启动就绪检查、桌面打包配置和平台权限配置都经过完善，让桌面构建和应用启动更可靠。",
  "🎨 Theme packs are editable": "🎨 主题包现在可以编辑",
  "The new theme pack editor lets you tune UI colors directly in Synara, with shared theme tokens keeping the sidebar, composer, transcript, and controls in sync.":
    "新的主题包编辑器可直接在 Synara 中调整界面颜色。共享主题变量会让边栏、输入区、对话记录和控件保持一致。",
  "🔔 Sidebar notifications are easier to read": "🔔 边栏通知更清楚",
  "Thread activity now surfaces more clearly in the sidebar, so updates, background work, and attention states are easier to spot without opening every conversation.":
    "对话活动现在会更清楚地显示在边栏中，无需逐个打开对话，也能发现更新、后台任务和需要关注的状态。",
  "🧵 Steadier transcripts under load": "🧵 高负载时对话记录更稳定",
  "Transcript rendering and sidebar-owned state were separated more cleanly, reducing unnecessary churn while long conversations and live agent output are moving.":
    "对话记录渲染与边栏状态进一步分离，长对话和 Agent 实时输出持续更新时，可以减少不必要的重复处理。",
  "🛡️ Safer runtime-mode recovery": "🛡️ 运行模式恢复更可靠",
  "Codex runtime permissions now propagate more reliably across resumed sessions and provider restarts, keeping the app closer to the mode you actually selected.":
    "恢复会话或重启提供商后，Codex 运行权限现在会更可靠地传递，让应用保持在你实际选择的运行模式。",
  "✨ Cleaner composer and picker styling": "✨ 输入区和选择器样式更整洁",
  "Composer chrome, picker hover states, runtime controls, and changed-file rows picked up a more consistent visual pass across light and dark themes.":
    "输入区外观、选择器悬停状态、运行控制和已更改文件行在浅色与深色主题下都采用了更一致的视觉样式。",
  "📂 Browse local folders right from the composer": "📂 直接从输入区浏览本地文件夹",
  "Folder mentions now open a real local directory picker, so you can drill into nearby files and attach the right path without leaving the chat flow.":
    "提及文件夹时现在会打开真正的本地目录选择器。无需离开聊天流程，就能继续浏览附近文件并附加正确路径。",
  "🗂️ Cleaner file and folder mentions": "🗂️ 文件和文件夹提及更清爽",
  "Mention chips, file trees, and changed-file rows now use a lighter shared icon system that keeps paths easier to scan across the app.":
    "提及标签、文件树和已更改文件行现在共用更轻量的图标体系，让应用中的路径更容易浏览。",
  "🌐 Stronger desktop browser runtime": "🌐 桌面浏览器运行环境更强",
  "The desktop browser path picked up better IPC plumbing, screenshots, clipboard support, and more efficient state syncing for browser-driven tasks.":
    "桌面浏览器增加了更完善的 IPC 通信、截图与剪贴板支持，并提高状态同步效率，更适合由浏览器驱动的任务。",
  "🛟 Smoother startup and provider recovery": "🛟 启动与提供商恢复更顺畅",
  "Project hydration, desktop startup, auth visibility, and aborted-turn cleanup were tightened up so sessions recover more predictably after interruptions.":
    "项目状态恢复、桌面启动、身份验证状态显示和中止轮次清理都做了改进，让会话在中断后恢复得更稳定。",
  "↪︎ Steering messages are clearly marked": "↪︎ 调整消息现在有清晰标记",
  "Messages sent with steering now keep a lightweight 'Steering conversation' label above the bubble, even after the app reconciles with the server.":
    "调整对话时发送的消息现在会在气泡上方保留简洁的“正在调整对话”标签，即使应用与服务端完成状态同步后也不会消失。",
  "🚦 Less aggressive background return checks": "🚦 从后台返回时减少过度检查",
  "Desktop update checks now wait for a real background return instead of reacting to every tiny blur/focus bounce.":
    "桌面更新检查现在只会在应用真正从后台返回时触发，不再因每次短暂的失焦和重新聚焦而反复检查。",
  "🛟 No more stuck checking state": "🛟 检查状态不会再一直卡住",
  "If the updater never answers, Synara now times out and recovers instead of hanging on a permanent Checking status.":
    "如果更新程序一直没有响应，Synara 现在会在超时后恢复，不会永久停留在“正在检查”状态。",
  "♊ Gemini support is here": "♊ 现已支持 Gemini",
  "Use Gemini alongside Codex and Claude Agent, with provider-aware models and handoff support built into the app.":
    "现在可以与 Codex 和 Claude Agent 一起使用 Gemini，应用内置按提供商区分的模型支持和任务转交功能。",
  "🛠️ Custom binary paths for every provider": "🛠️ 每个提供商都可自定义可执行文件路径",
  "Point Synara at your own Codex, Claude, or Gemini binary when your setup lives outside the default install path.":
    "如果 Codex、Claude 或 Gemini 安装在默认路径之外，可以在 Synara 中指定自己的可执行文件路径。",
  "📎 Reuse assistant replies as attachments": "📎 将助手回复作为附件重复使用",
  "Select parts of an assistant response and send them back as structured context in your next prompt.":
    "可以选中助手回复中的部分内容，并在下一条提示词中以结构化上下文重新发送。",
  "🧵 Better thread continuity": "🧵 对话衔接更稳定",
  "The app now remembers your last open thread, carries pull request context into draft threads, and keeps sidebar state more stable.":
    "应用现在会记住上次打开的对话，把拉取请求上下文带入草稿对话，并让边栏状态保持得更稳定。",
  "🩹 Smoother recovery and update checks": "🩹 恢复与更新检查更顺畅",
  "Project creation recovery, foreground update checks, and a few rough edges around long messages and download state have been tightened up.":
    "项目创建恢复、前台更新检查，以及长消息和下载状态中的一些细节问题都做了改进。",
  "💬 Chats are now available!": "💬 现在可以直接聊天了！",
  "Write without a selected project, or create threads from there.":
    "无需选择项目即可直接输入，也可以从这里创建对话。",
  "⌨️ New shortcuts": "⌨️ 新增快捷键",
  "Quickly open a new chat or jump to your latest project thread with dedicated shortcuts.":
    "使用专用快捷键，可以快速新建聊天或跳转到最近的项目对话。",
  "🧠 Claude 1M context support": "🧠 支持 Claude 1M 上下文",
  "Take full advantage of Claude's 1M-token context window for long conversations and large codebases.":
    "充分利用 Claude 的 100 万词元上下文窗口，处理长对话和大型代码库。",
  "📁 Bulk thread actions": "📁 批量对话操作",
  "Select multiple threads at once and act on them together.":
    "可以一次选择多个对话并批量执行操作。",
  "✨ Cleaner reasoning picker order": "✨ 推理选项排序更合理",
  "The reasoning picker has been reordered to make the most common choices quicker to reach.":
    "推理选项已重新排序，常用选项可以更快找到。",
  "💻 New polished UI/UX": "💻 全新优化的界面与交互体验",
  "A round of visual and interaction polish across the app.":
    "对整个应用的视觉和交互进行了新一轮优化。",
  "🆕 What's new, inline": "🆕 应用内直接查看新功能",
  "Every update now opens a one-time dialog highlighting the latest changes, so you don't have to hunt through a changelog to know what shipped.":
    "每次更新后都会弹出一次对话框，集中展示最新变化，无需再翻找更新日志才能知道本次新增了什么。",
  "The dialog only shows up once per release — dismiss it and it stays out of your way until the next version.":
    "每个版本只会显示一次这个对话框。关闭后，它会保持隐藏，直到下一个版本发布。",
  "📚 Release history in Settings": "📚 在设置中查看版本记录",
  "A full changelog lives under Settings → Release history, grouped by version in a collapsible accordion.":
    "完整更新日志位于“设置 → 版本记录”，按版本分组，并可折叠展开。",
  "Revisit any past release at any time. The same notes as the post-update dialog, nothing to hunt for.":
    "随时都可以回看任何历史版本。这里包含与更新后对话框相同的说明，无需再到别处查找。",
};
