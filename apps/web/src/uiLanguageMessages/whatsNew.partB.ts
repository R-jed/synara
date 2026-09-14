export const whatsNewPartBMessages: Readonly<Record<string, string>> = {
  // 0.5.5
  "Antigravity joins Synara": "Antigravity 正式加入 Synara",
  "Connect the Antigravity CLI as a first-class coding agent, with discovered models, reasoning controls, streaming activity, approvals, and resumable conversations.":
    "可将 Antigravity CLI 作为正式支持的编码 Agent 接入，并支持模型发现、推理控制、流式活动、审批和可恢复对话。",
  "The new provider adapter covers installation and authentication guidance, model and effort discovery, session creation and resume, tool and plan events, permission requests, usage reporting, cancellation, and restart recovery. Synara also includes dedicated Antigravity branding throughout provider setup and selection.":
    "新的提供商适配器覆盖安装与认证指引、模型和推理强度发现、会话创建与恢复、工具和计划事件、权限请求、用量报告、取消以及重启恢复。Synara 还在提供商设置和选择界面中加入了完整的 Antigravity 品牌标识。",
  "Live turns settle cleanly": "实时轮次能正常结束",
  "Working indicators and streamed turn chrome no longer linger after the underlying provider session has already finished.":
    "底层提供商会话结束后，工作状态指示和流式轮次界面不会再继续残留。",
  "Turn settlement now follows the owning session lifecycle, while WebSocket RPC requests resolve or reject across close, timeout, send failure, and reconnect paths. This keeps pending UI state from becoming stuck during partial streams or interrupted connections.":
    "轮次收尾现在跟随所属会话的生命周期；WebSocket RPC 请求在关闭、超时、发送失败和重连等路径上都会明确完成或失败，避免部分流式输出或连接中断后界面一直卡在等待状态。",
  "Active chats stay lighter": "活跃聊天更轻量",
  "Conversation updates do less repeated reconciliation work, keeping busy transcripts and sidebar-driven changes more responsive.":
    "对话更新减少了重复的状态协调工作，让高频更新的对话记录和边栏变化响应更快。",
  "Chat state now avoids redundant scans and projections during live updates, bundled theme seeds reset consistently, and common transcript behavior remains on the simpler rendering path without introducing new measurement loops.":
    "实时更新时，聊天状态会避免重复扫描和投影；内置主题种子也会稳定重置。常见的对话记录仍走更简单的渲染路径，没有引入新的测量循环。",
  "Dropped paths become reliable mentions": "拖入路径现在会稳定变成提及",
  "Drop files and folders whose names contain spaces or parentheses into the composer without losing or mangling the path.":
    "即使文件或文件夹名称包含空格或括号，也可以直接拖入输入框，路径不会丢失或被改坏。",
  "Desktop path payloads are parsed and normalized through shared composer logic, then preserved as mentions across chat and Kanban task creation. Focused coverage includes encoded paths, multiple drops, punctuation, send normalization, and unsupported payloads.":
    "桌面端路径数据现在统一通过输入框逻辑解析和规范化，并在聊天及看板任务创建流程中保留为提及。相关覆盖包括编码路径、多项拖放、标点、发送前规范化以及不受支持的数据。",
  "Provider failures stay contained": "提供商故障不会再向外扩散",
  "A failed Cursor model refresh no longer takes down the model picker or discards usable choices from other discovery sources.":
    "Cursor 模型刷新失败时，不会再拖垮模型选择器，也不会丢掉其他发现来源提供的可用选项。",
  "Model-catalog queries retain successful and cached data when one Cursor discovery path fails, while pull-request data is coalesced through shared list logic and picker popups use a unified interaction model. Diff headers now use Synara's own visual chrome for a more consistent workspace.":
    "当某条 Cursor 发现路径失败时，模型目录查询会保留成功结果和缓存数据。拉取请求数据改用共享列表逻辑合并，选择器弹层也统一了交互方式。差异标题现在使用 Synara 自己的界面样式，让工作区更一致。",

  // 0.5.4
  "Review pull requests without leaving Synara": "无需离开 Synara 即可审阅拉取请求",
  "Browse, search, and filter pull requests across your projects, then open a complete review workspace beside the conversation.":
    "可以跨项目浏览、搜索和筛选拉取请求，并在对话旁边打开完整的审阅工作区。",
  "The new GitHub CLI-backed Pull Requests view groups work by involvement and state, supports project-scoped discovery, and opens summary, code, and timeline views with checks, reviewers, commits, file changes, and discussion context.":
    "新的拉取请求视图由 GitHub CLI 提供支持，可按参与情况和状态分组，支持按项目发现，并提供摘要、代码和时间线视图，其中包含检查、审阅者、提交、文件变更和讨论上下文。",
  "Take action from the review workspace": "直接在审阅工作区中处理拉取请求",
  "Comment, merge, close, reopen, and pin pull requests while keeping the latest repository state close at hand.":
    "可以直接评论、合并、关闭、重新打开和置顶拉取请求，同时随时查看仓库最新状态。",
  "Mutations use shared cache coordination, single-flight refreshes, guarded optimistic state, and recovery paths so overlapping actions and refreshes remain predictable. Pinned pull requests stay easy to return to from the project workspace.":
    "写操作现在统一协调缓存、合并并发刷新，并使用受保护的乐观更新和恢复路径，让重叠操作与刷新保持可预期。置顶后的拉取请求也能从项目工作区快速返回。",
  "Repository failures stay contained": "单个仓库故障不会影响其他结果",
  "One unavailable repository no longer prevents useful pull-request results from the rest of your workspace.":
    "某个仓库不可用时，不会再阻止工作区其余仓库返回可用的拉取请求结果。",
  "GitHub CLI availability, authentication, repository discovery, partial-result errors, stale cached data, and retry recovery now have explicit states. Per-repository failures remain visible without discarding successful results.":
    "GitHub CLI 可用性、认证、仓库发现、部分结果错误、过期缓存和重试恢复现在都有明确状态。单个仓库的失败仍会显示，但不会丢弃已成功取得的结果。",
  "Send feedback from anywhere": "随时随地发送反馈",
  "Open the new feedback dialog from the command menu or with /feedback whenever an idea or problem comes up.":
    "有想法或遇到问题时，可从命令菜单打开新的反馈对话框，也可以输入 /feedback。",
  "Feedback is now a global workflow rather than a settings-only destination, with consistent command routing and a focused dialog that keeps the current task in place.":
    "反馈现在是全局流程，不再只藏在设置里。命令路由已经统一，专用对话框也不会打断当前任务。",
  "Desktop windows reopen where you left them": "桌面窗口会在上次位置重新打开",
  "Synara restores the previous desktop window size, position, and maximized state while keeping reopened windows on a visible display.":
    "Synara 会恢复上次的窗口大小、位置和最大化状态，同时确保重新打开的窗口仍位于当前可见显示器上。",
  "Window state is persisted across launches and validated against the current monitor layout, avoiding off-screen restoration when displays have changed.":
    "窗口状态会跨启动保存，并根据当前显示器布局进行校验，避免显示器变化后窗口恢复到屏幕外。",
  "Model and session behavior is more predictable": "模型与会话行为更稳定",
  "Agent sessions, transcript rendering, model discovery, and reasoning controls now stay aligned across more providers.":
    "更多提供商之间的 Agent 会话、对话记录渲染、模型发现和推理控制现在能保持一致。",
  "Session orchestration and transcript rendering share a cleaner lifecycle, Pi custom-provider authentication follows auth.json semantics, Cursor transport-only variants stay out of the picker, and Grok reasoning-effort options match provider capabilities. The interface also adopts the system UI font more consistently.":
    "会话编排与对话记录渲染采用了更清晰的生命周期；Pi 自定义提供商认证遵循 auth.json 语义；Cursor 仅用于传输的变体不会出现在选择器中；Grok 的推理强度选项也与提供商能力一致。界面使用系统界面字体的方式也更加统一。",

  // 0.5.3
  "Capture any Mac app straight into your task": "直接把任意 Mac 应用窗口截进任务",
  "Press both Option keys to capture the window you are using and attach it to the current Synara task.":
    "同时按下两个 Option 键，即可截取当前使用的窗口并附加到当前 Synara 任务。",
  "AppSnap is an opt-in macOS workflow with a dedicated setup panel, permission guidance, capture feedback, app icons, and a first-run introduction. Captures stay tied to the active task without stealing focus, and the desktop helper is included in packaged Mac builds.":
    "AppSnap 是可选启用的 macOS 工作流，配有独立设置面板、权限指引、截图反馈、应用图标和首次使用介绍。截图会绑定到当前任务，同时不会抢走焦点；打包后的 Mac 版本也包含所需的桌面辅助程序。",
  "AppSnaps wait safely until you send": "AppSnap 截图会安全保留到发送时",
  "Captured windows remain available through navigation, restarts, retries, and manual attachment flows.":
    "切换页面、重启、重试或手动添加附件时，已截取的窗口都会继续保留。",
  "Pending image blobs are persisted outside the lightweight draft record, restored into the composer on startup, counted against attachment limits, deduplicated across retry paths, and hydrated immediately before send. Failed or overlapping captures recover without duplicating attachments or replaying feedback sounds.":
    "待发送的图片数据会保存在轻量草稿记录之外，启动后恢复到输入框，并计入附件上限；重试时会去重，发送前再完成加载。截图失败或多次截图重叠时也能恢复，不会重复添加附件或重复播放反馈音。",
  "Long messages are easier to scan": "长消息更容易浏览",
  "Large user messages collapse into a focused preview while rich markdown and attachment chips remain readable.":
    "较长的用户消息现在会折叠成精简预览，同时保留易读的 Markdown 内容和附件标签。",
  "Transcript measurement, overflow detection, markdown chip rendering, and the simple non-virtualized timeline path now work together more predictably, reducing layout churn without losing the full message on demand.":
    "对话记录测量、溢出检测、Markdown 标签渲染和简单的非虚拟化时间线现在配合得更稳定，减少布局抖动，同时仍可按需查看完整消息。",
  "Agent sessions fail more clearly": "Agent 会话失败时信息更清楚",
  "ACP errors preserve more useful detail, and session and transcript state stay steadier during active work.":
    "ACP 错误会保留更多有用细节，工作进行时的会话与对话记录状态也更稳定。",
  "ACP request failures now retain structured provider context, while session orchestration and transcript handling avoid redundant state transitions and keep live output presentation predictable.":
    "ACP 请求失败时会保留结构化的提供商上下文；会话编排和对话记录处理则减少重复状态切换，让实时输出的呈现更稳定。",

  // 0.5.2
  "Factory Droid is now a first-class provider": "Factory Droid 现已成为正式支持的提供商",
  "Droid is now available alongside Synara's other agents, with runtime model discovery, session import, token multipliers, and resilient resume and recovery.":
    "Droid 现在可与 Synara 的其他 Agent 一起使用，并支持运行时模型发现、会话导入、词元倍率以及更可靠的恢复与续接。",
  "Synara now connects to Factory Droid through ACP, discovers models and their switching capabilities at runtime, imports existing Droid sessions, carries context across forks and restarts, and keeps bootstrap, configuration, and turn teardown state coherent. The release also adds the Factory logo and richer Droid token reporting.":
    "Synara 现在通过 ACP 连接 Factory Droid，在运行时发现模型及其切换能力，可导入已有 Droid 会话，并在分叉和重启后延续上下文，同时保持启动、配置和轮次收尾状态一致。本版本还加入了 Factory 标志和更完整的 Droid 词元用量报告。",
  "Large conversation histories start reliably": "大型对话历史也能稳定启动",
  "Synara now upgrades large local histories without leaving the project list stuck on its loading screen.":
    "Synara 现在可以升级大型本地历史数据，不会再让项目列表一直卡在加载界面。",
  "The activity-sequence backfill now builds one indexed lookup instead of repeatedly scanning the entire event history. A database with more than 180,000 activities completes the recovery in seconds while preserving every project, thread, message, and activity.":
    "活动序列回填现在只建立一次索引查询，不再反复扫描全部事件历史。包含 18 万多条活动的数据库也能在数秒内完成恢复，同时保留所有项目、对话、消息和活动记录。",
  "Switch models from the keyboard": "用键盘快速切换模型",
  "Use Alt+] and Alt+[ to cycle through available models without leaving the conversation.":
    "使用 Alt+] 和 Alt+[ 可在可用模型之间循环切换，无需离开当前对话。",
  "The shortcuts use the active provider's available model options and keep model selection quick during an ongoing workflow.":
    "快捷键会使用当前提供商的可用模型选项，让进行中的工作流可以快速切换模型。",
  "Unfinished task lists stay visible": "未完成的任务列表会继续显示",
  "Task lists now remain in the transcript after a turn completes, making follow-up work easier to resume.":
    "轮次结束后，任务列表仍会保留在对话记录中，方便继续后续工作。",
  "Runtime task projections preserve unfinished items after completion while keeping finished and resumed task state consistent.":
    "运行时任务投影会在轮次完成后保留未完成项目，同时确保已完成和恢复后的任务状态一致。",
  "File undo leaves chat history intact": "撤销文件改动不会删除聊天记录",
  "Undoing an agent turn now rolls back its files without deleting the conversation that explains the change.":
    "撤销某个 Agent 轮次时，现在只回退该轮次修改的文件，不会删除用于说明这些改动的对话内容。",
  "Turn-scoped checkpoints restore workspace state while preserving transcript history and provider conversation state.":
    "轮次级检查点会恢复工作区状态，同时保留对话记录历史和提供商会话状态。",
  "Smoother cross-platform agent workflows": "跨平台 Agent 工作流更顺畅",
  "Codex model options, Windows launching, project folder labels, and Git status checks now behave more predictably across platforms.":
    "Codex 模型选项、Windows 启动、项目文件夹标签和 Git 状态检查在不同平台上的行为现在更一致。",
  "Runtime-discovered Codex reasoning efforts map correctly, the Windows CLI path forwards arguments reliably, project picker labels match the host OS, and Git status handles directories outside repositories gracefully.":
    "运行时发现的 Codex 推理强度现在能正确映射；Windows CLI 路径会稳定转发参数；项目选择器标签会匹配当前操作系统；Git 状态检查也能妥善处理仓库外的目录。",
  "File changes are calmer to scan": "文件变更更易浏览",
  "File-change headers use a softer visual treatment, keeping active work readable without competing with the diff itself.":
    "文件变更标题采用更柔和的视觉处理，既能看清当前工作，也不会抢过差异内容本身的注意力。",

  // 0.5.0
  "Synara, all the way through": "从里到外统一为 Synara",
  "The app now uses one identity everywhere, from its desktop installation and command line to packages, settings, diagnostics, and release artifacts.":
    "应用现在在所有地方统一使用同一套 Synara 身份，包括桌面安装、命令行、软件包、设置、诊断信息和发布产物。",
  "The desktop bundle is now com.emanueledipietro.synara, the CLI is @synara/cli with the synara command, and every first-party runtime identifier uses the Synara namespace. The 0.4.2 bridge preserves renderer state during the origin change.":
    "桌面应用包现在使用 com.emanueledipietro.synara，CLI 改为 @synara/cli 并使用 synara 命令，所有第一方运行时标识也统一使用 Synara 命名空间。0.4.2 过渡版本会在来源切换期间保留渲染端状态。",
  "Claude keeps context under control": "Claude 的上下文管理更稳",
  "Claude sessions now report live context usage, warn before compaction, switch model and context settings in place, and resume with their safeguards intact.":
    "Claude 会话现在会实时报告上下文用量，在压缩前发出提醒，并可原地切换模型和上下文设置；恢复会话后相关保护机制也会继续生效。",
  "The adapter combines SDK context controls with accumulated token usage, preserves the effective context window across responses, keeps fallback reroutes pinned until you choose another model, and stores resume state without forcing unnecessary provider restarts.":
    "适配器会结合 SDK 上下文控制与累计词元用量，在多次响应间保留有效上下文窗口；触发备用模型后会保持该路由，直到你主动选择其他模型；恢复状态也可以直接保存，无需为此重启提供商。",
  "Agent task progress stays visible": "Agent 任务进度会持续显示",
  "Claude task tools and Codex task events now appear through one shared progress stream, so resumable work is easier to follow while it runs.":
    "Claude 任务工具和 Codex 任务事件现在会汇入同一条进度流，让可恢复任务在执行过程中更容易跟踪。",
  "Claude TaskCreate, TaskUpdate, TaskGet, TaskList, and TodoWrite results are normalized into the shared runtime task list and persisted in the resume cursor. Codex task events and provider summaries use the same projection, with coverage for reconnects and resumed sessions.":
    "Claude 的 TaskCreate、TaskUpdate、TaskGet、TaskList 和 TodoWrite 结果会统一转换到共享运行时任务列表，并写入恢复游标。Codex 任务事件和提供商摘要使用同一套投影，同时覆盖重连和会话恢复场景。",
  "Codex reasoning and streams are easier to trust": "Codex 的推理与流式输出更可靠",
  "Codex reasoning summaries, context compaction, task updates, and noisy app-server output are handled more reliably, keeping live transcripts clearer during long turns.":
    "Codex 的推理摘要、上下文压缩、任务更新以及杂乱的 app-server 输出现在处理得更稳，让长轮次中的实时对话记录更清晰。",
  "The app-server bridge now ignores non-protocol stdout safely, preserves provider-authored reasoning summaries, normalizes runtime events, and hardens resume and ingestion paths so progress is not lost between streamed updates.":
    "app-server 桥接层现在会安全忽略不属于协议的标准输出，保留提供商生成的推理摘要，并统一运行时事件；恢复与事件接收路径也更稳，避免流式更新之间丢失进度。",
  "Chat startup and recovery are lighter": "聊天启动与恢复更轻量",
  "Chat dock panels load on demand, deleted projects remain safe client tombstones, and browser profile migrations repair database sidecars transactionally instead of leaving partial state behind.":
    "聊天停靠面板改为按需加载；已删除项目会保留安全的客户端删除标记；浏览器配置迁移也会通过事务修复数据库伴随文件，避免留下半完成状态。",
  "The chat route measures LCP while deferring secondary panels, while project deletion and desktop profile repair now preserve predictable local state through reloads, retries, and interrupted migrations.":
    "聊天路由会在延后加载次要面板的同时测量 LCP。项目删除和桌面配置修复也会在重新加载、重试和迁移中断时保持可预期的本地状态。",
  "Desktop updates have stronger guardrails": "桌面更新增加了更严格的保护",
  "Release automation now validates compatibility-feed manifests and protects the packaged desktop from unsafe bundle swaps across update and startup paths.":
    "发布自动化现在会校验兼容更新源清单，并在更新和启动流程中防止打包后的桌面应用发生不安全的包替换。",
  "The release workflow verifies the pinned updater lane, keeps clean releases off the compatibility channel, repairs update-feed metadata, and hardens desktop startup when an app.asar swap is detected.":
    "发布流程会校验固定的更新通道，让正常发布避开兼容通道，修复更新源元数据，并在检测到 app.asar 被替换时加强桌面启动保护。",

  // 0.4.2
  "Synara is preparing a seamless identity upgrade": "Synara 正在为无缝身份升级做准备",
  "Launch this version at least once before installing the next Synara release so your drafts, pins, theme, browser state, and other local interface preferences move with you.":
    "安装下一版 Synara 前，请至少启动一次此版本，这样草稿、置顶内容、主题、浏览器状态和其他本地界面偏好都能顺利迁移。",
  "This bridge writes a validated Synara-only snapshot of renderer state, keeps existing project and thread data intact, and prepares database and checkpoint metadata for the final identity cutover. Earlier command and environment aliases are accepted by this bridge release only and will be removed next.":
    "这个过渡版本会写入经过校验、仅属于 Synara 的渲染端状态快照，保留现有项目和对话数据，并为最终身份切换准备数据库与检查点元数据。旧的命令和环境别名只在这个过渡版本中继续兼容，下一版将移除。",
  "Claude threads use far fewer tokens and restart less": "Claude 对话更省词元，也更少重启",
  "Long Claude conversations now track their 1M-token context window per thread, compact automatically, and switch models without restarting the session — ending runaway usage.":
    "长时间 Claude 对话现在会按对话跟踪 100 万词元上下文窗口，自动压缩，并能在不重启会话的情况下切换模型，避免用量失控。",
  "Each thread tracks its own context window and warns as usage approaches the limit. After a safeguard reroute, the fallback model stays pinned until you explicitly pick another model, and model or context-window changes apply in-session instead of tearing the session down.":
    "每个对话都会单独跟踪自己的上下文窗口，并在接近上限时提醒。触发保护性改路由后，备用模型会保持固定，直到你明确选择其他模型；模型或上下文窗口的变化也会直接在当前会话中生效，无需结束并重建会话。",
  "Desktop updates now verify their own installs": "桌面更新现在会自行验证安装结果",
  "Synara checks that an update actually installed after restart, detects failed installs, and recovers instead of silently staying on the old version.":
    "Synara 会在重启后确认更新是否真正安装成功，检测失败的安装并进行恢复，不会再悄悄停留在旧版本。",
  "A durable install marker survives restarts and tracks handoff state, an install watchdog recovers from hung installs, and on macOS dedicated diagnostics capture updater state to make failures actionable.":
    "持久化安装标记会跨重启保存并跟踪交接状态；安装监控会从卡住的安装中恢复；在 macOS 上，专用诊断还会记录更新器状态，让失败原因更容易处理。",
  "Studio shortcut and migration fixes": "Studio 快捷键与迁移修复",
  "The new-chat keyboard shortcut now routes correctly inside Studio, composer drafts survive the storage migration, and incomplete legacy home imports repair themselves.":
    "新建聊天快捷键现在能在 Studio 中正确跳转；输入框草稿可以完整经过存储迁移；未完成的旧版主页导入也会自动修复。",
  "Renderer storage migration is guaranteed to run before app hydration, the legacy environment identity is restored from the bridge marker, and checkpoint metadata is canonicalized while keeping existing persisted refs readable.":
    "渲染端存储迁移会确保在应用状态加载前完成；旧环境身份会从过渡标记中恢复；检查点元数据也会统一规范，同时继续兼容已有的持久化引用。",

  // 0.4.1
  "A dedicated Studio workspace for agent-led work": "为 Agent 主导的工作提供独立 Studio 工作区",
  "Studio gives long-running, agent-led work its own focused space, keeping it distinct from your regular chats while making it quick to start or revisit.":
    "Studio 为长期运行、由 Agent 主导的工作提供独立空间，与普通聊天分开，同时方便快速开始或重新进入。",
  "Studio projects, threads, routing, sidebar rows, empty-state entry points, and restore behavior now share a clear workspace boundary. The release also hardens cross-kind project ownership so a regular chat and a Studio thread cannot accidentally reuse the same container.":
    "Studio 的项目、对话、路由、边栏条目、空状态入口和恢复行为现在都遵循清晰的工作区边界。不同类型的项目归属也更严格，普通聊天和 Studio 对话不会再意外复用同一个容器。",
  "Studio outputs are collected where you need them": "Studio 输出集中在需要的位置",
  "Files, generated images, and other agent outputs from Studio are surfaced in the Environment panel so finished work is easier to find and open.":
    "Studio 中的文件、生成图片和其他 Agent 输出会集中显示在环境面板中，完成后的结果更容易查找和打开。",
  "The server records Studio output activity and generated-image metadata, then projects it into a dedicated Environment section with resilient display helpers and targeted coverage for output ordering and presentation.":
    "服务端会记录 Studio 输出活动和生成图片的元数据，再投影到环境面板中的专用区域。显示辅助逻辑也更稳，并针对输出顺序和呈现增加了定向覆盖。",
  "Starting work in a worktree is more transparent": "在 Worktree 中开始工作时过程更透明",
  "Project actions now make worktree setup visible, so you can understand what is being prepared before a new workspace-backed thread starts.":
    "项目操作现在会显示 Worktree 的准备过程，让你在新工作区对话启动前就能知道系统正在准备什么。",
  "New setup steps and timeline states expose progress and failure more clearly, while the underlying scaffold path self-heals and keeps project/worktree ownership consistent through retries and restores.":
    "新的准备步骤和时间线状态会更清楚地显示进度与失败；底层脚手架流程也能自动修复，并在重试和恢复过程中保持项目与 Worktree 的归属一致。",
  "Returning to a chat or Studio is more reliable": "返回聊天或 Studio 更可靠",
  "Synara is more careful about restoring the right destination after reloads, segment switches, reconnects, and partially completed project creation.":
    "重新加载、切换区域、重连或项目创建只完成一部分时，Synara 现在会更谨慎地恢复到正确位置。",
  "Routing now prefers canonical containers, waits for snapshot hydration where needed, fails closed on ambiguous thread kinds, and guards against overlapping fresh-chat creation so drafts and active work land in the intended surface.":
    "路由现在优先使用规范容器，并在需要时等待快照加载完成；遇到对话类型不明确时会安全停止，同时防止多个新聊天创建流程互相重叠，确保草稿和当前工作进入正确界面。",
  "Live transcripts stay steadier during active work": "工作进行时，实时对话记录更稳定",
  "Transcript rendering and active-turn behavior have been refined to keep ongoing agent work easier to follow without needless scroll or layout churn.":
    "对话记录渲染和活动轮次行为经过调整，让正在进行的 Agent 工作更容易跟踪，同时减少无意义的滚动和布局变化。",
  "The session orchestration and timeline paths were refactored with focused coverage for worktree setup, transcript rows, sidebar visibility, and workspace handoffs, preserving predictable behavior as sessions stream and reconnect.":
    "会话编排和时间线路径经过整理，并重点覆盖 Worktree 准备、对话记录行、边栏可见性和工作区交接，让会话在流式输出和重连时保持稳定行为。",
  "Safer provider startup and Windows launching": "提供商启动与 Windows 启动更安全",
  "Authentication preparation and provider launch handling are more robust, including a fix for launching Codex on Windows.":
    "认证准备和提供商启动处理更加稳健，其中包括 Windows 上启动 Codex 的修复。",
  "The release prepares the Codex auth overlay before dependent startup paths run, hardens process environment handling, and includes the Windows launcher repair alongside broader orchestration and projection reliability work.":
    "本版本会在相关启动流程执行前准备好 Codex 认证环境，并加强进程环境处理；同时包含 Windows 启动修复，以及更广泛的编排和状态投影可靠性改进。",

  // 0.4.0
  "Prompt history keeps drafts and attachments together": "提示词历史会保留草稿与附件",
  "Browsing your previous prompts no longer strips the attachments from the draft you are building, so history navigation is safer for image- and file-heavy follow-ups.":
    "浏览以前的提示词时，不会再把当前草稿中的附件移除。对于包含大量图片和文件的后续消息，历史导航更安全。",
  "Composer draft history now preserves attachment state while you move through previous prompts, resets stale navigation state more carefully, and avoids duplicate optimistic history entries after sends.":
    "输入框草稿历史会在切换旧提示词时保留附件状态，更谨慎地重置过期的导航状态，并避免发送后出现重复的临时历史记录。",
  "Pull request context is clearer in the Environment panel": "环境面板中的拉取请求上下文更清楚",
  "Threads attached to GitHub pull requests now surface richer PR context, including merged-state handling and more readable review/check previews.":
    "关联 GitHub 拉取请求的对话现在会显示更完整的 PR 上下文，包括合并状态处理，以及更易读的审阅和检查预览。",
  "The PR snapshot path now captures pull request data for the Environment panel, handles merged PRs more predictably, trims long review previews, dedupes GitHub field requests, and tightens merge-head formatting.":
    "PR 快照流程现在会为环境面板采集拉取请求数据，更稳定地处理已合并 PR，缩短过长的审阅预览，去重 GitHub 字段请求，并统一合并头信息的格式。",
  "Claude rate limits fail more gracefully": "Claude 遇到速率限制时处理更友好",
  "When Claude reports usage or rate-limit trouble, Synara now presents the condition more calmly instead of turning it into a generic provider failure.":
    "Claude 报告用量或速率限制问题时，Synara 现在会直接显示对应状态，不再把它当成笼统的提供商故障。",
  "Provider usage handling now narrows usage summary types more safely and treats Claude usage limit responses as a recoverable, user-facing state with focused parser and resilience coverage.":
    "提供商用量处理现在会更安全地收窄用量摘要类型，并把 Claude 用量限制响应作为可恢复、面向用户的状态处理，同时补充了针对解析和恢复能力的覆盖。",
  "Desktop restarts handle broken stderr pipes": "桌面重启可以处理断开的标准错误输出管道",
  "The desktop app is less likely to crash or get noisy when a restarted child process loses its stderr pipe during shutdown or relaunch.":
    "子进程在关闭或重新启动时丢失标准错误输出管道后，桌面应用现在更不容易崩溃，也不会产生大量无用错误。",
  "Desktop process restart handling now tolerates broken stderr writes, including the EPIPE path that could appear while the app was restarting provider or server processes.":
    "桌面进程重启逻辑现在可以容忍标准错误输出写入中断，包括应用重启提供商或服务端进程时可能出现的 EPIPE 情况。",
  "Small reliability fixes across agents and PR flows": "Agent 与 PR 流程的一批小型可靠性修复",
  "This release rounds off recent agent-session and pull-request work with tighter assertions, safer formatting, and cleaner edge-case behavior.":
    "本版本继续收尾近期的 Agent 会话和拉取请求改进，加强断言与格式处理，并清理一些边缘情况。",
  "The release includes automation migration lineage assertion fixes, PR snapshot review follow-up fixes, provider usage type narrowing, and general cleanup from the prompt-history and PR environment-panel review loops.":
    "本版本包含自动化迁移链路的断言修复、PR 快照审阅后续修复、提供商用量类型收窄，以及提示词历史和 PR 环境面板审查过程中发现的一般清理项。",

  // 0.3.9
  "Export a thread as a ZIP": "将对话导出为 ZIP",
  "Type `/export` in a saved, idle chat to download a portable archive with the full thread projection and a readable Markdown transcript.":
    "在已保存且空闲的聊天中输入 `/export`，即可下载便于携带的压缩包，其中包含完整对话数据和可读的 Markdown 对话记录。",
  "The export route streams `thread.json` and `transcript.md` through the server with shared eligibility checks, desktop-friendly CORS/error handling, large-thread history hydration, and browser download support from both typed slash commands and the command menu.":
    "导出路由会通过服务端流式传输 `thread.json` 和 `transcript.md`，并统一进行导出资格检查、适配桌面端的 CORS 与错误处理、大型对话历史加载，以及浏览器下载。无论输入斜杠命令还是从命令菜单触发，都能正常工作。",
  "Archived stats survive cleanup": "清理旧对话后，历史统计仍会保留",
  "Deleting or purging old threads no longer erases their lifetime contribution to profile stats, so cleanup keeps your usage history intact.":
    "删除或彻底清理旧对话后，它们对个人统计的历史贡献不会再被抹掉，因此清理数据也不会破坏长期使用记录。",
  "Thread deletion now snapshots profile aggregates before purging rows, merges archived stats back into profile queries, preserves command receipts, cleans checkpoint refs carefully, and includes a migration plus purge/retention regression coverage.":
    "删除对话时会先保存个人统计汇总，再清理数据行；归档统计会重新合并到个人资料查询中，同时保留命令回执并谨慎清理检查点引用。本版本还包含对应迁移，以及清理和保留逻辑的回归覆盖。",
  "Active turns show steady work timing": "活动轮次会稳定显示工作时长",
  "While an agent is working, the transcript now keeps a stable 'Working for' header at the top of the active turn instead of relying only on a transient shimmer row.":
    "Agent 工作时，对话记录会在当前轮次顶部持续显示“已工作”时长，不再只依赖短暂出现的闪动状态行。",
  "MessagesTimeline now inserts a stable active-turn header for duration display while preserving the existing setup shimmer, making live turns easier to scan and less jumpy during layout updates.":
    "MessagesTimeline 现在会插入稳定的活动轮次标题来显示时长，同时保留原有的准备中闪动效果，让实时轮次更容易查看，布局更新时也更少跳动。",
  "Terminal shutdown is more reliable": "终端关闭更可靠",
  "Synara is better at shutting down stubborn terminal process trees without returning early while child processes are still alive.":
    "Synara 现在能更可靠地关闭顽固的终端进程树，不会在子进程仍存活时提前结束关闭流程。",
  "TerminalManager now routes shutdown through a dedicated process-tree killer with SIGTERM-to-SIGKILL escalation, cancellation when processes exit cleanly, nested process activity coverage, and tests for disposal timing.":
    "TerminalManager 现在通过专用的进程树终止逻辑关闭终端，必要时会从 SIGTERM 升级到 SIGKILL；进程正常退出时会取消后续终止，并覆盖嵌套进程活动和释放时序测试。",
  "Resumed ACP replies stay distinct": "恢复后的 ACP 回复不会再互相覆盖",
  "ACP-backed sessions are less likely to lose assistant replies after a restart or resume because fallback assistant message IDs no longer collide across runtime instances.":
    "ACP 会话在重启或恢复后更不容易丢失助手回复，因为备用助手消息 ID 在不同运行时实例之间不会再发生冲突。",
  "A per-runtime instance ID is included in fallback ACP assistant item IDs, preventing resumed sessions with the same provider session ID and segment index from overwriting earlier transcript messages.":
    "备用 ACP 助手条目 ID 现在包含每个运行时实例自己的 ID，避免恢复后的会话因提供商会话 ID 和片段索引相同而覆盖之前的对话消息。",
  "Git writing respects OpenCode and Kilo models": "Git 文本生成会遵循 OpenCode 和 Kilo 模型设置",
  "Git commit, diff summary, and PR text generation now honor runtime-discovered OpenCode and Kilo model selections from Settings.":
    "Git 提交信息、差异摘要和 PR 文本生成现在会使用设置中通过运行时发现并选择的 OpenCode 或 Kilo 模型。",
  "Settings now persists discovered Git-writing model options, git actions pass the chosen provider/model through the shared contracts, and query cache keys include the text-generation selection so generated commit/PR text routes to the intended backend.":
    "设置现在会保存已发现的 Git 文本生成模型选项；Git 操作会通过共享契约传递所选提供商和模型；查询缓存键也会包含文本生成选择，确保生成的提交或 PR 文本发送到正确后端。",

  // 0.3.8
  "Grok resume handles long sessions more safely": "Grok 恢复长会话时更安全",
  "Grok and other ACP-backed sessions are better at resuming after compaction or reconnects without replaying messages into the wrong runtime or growing memory unexpectedly.":
    "Grok 和其他 ACP 会话在上下文压缩或重连后恢复得更稳，不会把消息重放到错误的运行时，也更不容易出现意外的内存增长。",
  "ACP resume now drops replay before the event consumer is attached, seeds compaction quiet windows from response timing, hardens provider/runtime ingestion, and covers JSON-RPC/session-runtime edge cases that previously made resume replay fragile.":
    "ACP 恢复现在会在事件消费者接入前丢弃重放内容，并根据响应时序建立压缩静默窗口，同时加强提供商与运行时事件接收。此前容易让恢复重放出问题的 JSON-RPC 和会话运行时边缘情况也已覆盖。",
  "Worktree setup failures recover cleanly": "Worktree 准备失败后可以顺利恢复",
  "When a worktree setup step fails, Synara now shows the failed setup state, keeps the timeline from looking stuck, and resets the local dispatch when you send again.":
    "Worktree 准备步骤失败时，Synara 会明确显示失败状态，避免时间线看起来像卡住，并在你再次发送时重置本地派发状态。",
  "ChatView and timeline setup snapshots now carry explicit setup step status, targeted cleanup for failed local dispatches, and focused browser/unit coverage for new-turn reset and setup rows.":
    "ChatView 和时间线准备快照现在会携带明确的步骤状态，并针对失败的本地派发进行定向清理，同时覆盖新轮次重置和准备状态行的浏览器与单元测试。",
  "Automation messages are labeled": "自动化发送的消息会明确标注",
  "Prompts sent by an automation now carry a lightweight 'Sent via Automation' label above the bubble, so you can tell at a glance which turns you typed and which a scheduled or heartbeat run kicked off.":
    "由自动化发送的提示词现在会在气泡上方显示轻量的“由自动化发送”标签，方便一眼区分哪些轮次是你手动输入的，哪些来自定时或心跳运行。",
  "User turns dispatched by the automation engine now persist a `dispatchOrigin` on the message end to end (command → event → projection → snapshot), and the transcript renders a clock-marked chip that mirrors the existing steering label.":
    "自动化引擎派发的用户轮次现在会让 `dispatchOrigin` 从命令、事件、投影一直保留到快照，对话记录则显示带时钟图标的标签，并与现有的引导标签保持一致。",
  "Approval prompts are easier to answer": "审批提示更容易操作",
  "Pending approvals now use a clearer shared choice-row layout, with steadier panel behavior and browser coverage for allow/deny decisions.":
    "待处理审批现在使用更清晰的统一选项行布局，面板行为也更稳定，并覆盖允许和拒绝操作的浏览器测试。",
  "ComposerPendingApprovalPanel now shares ComposerChoiceRow structure with pending inputs, tracks decision actions in browser tests, and trims duplicated action styling.":
    "ComposerPendingApprovalPanel 现在与待输入提示共用 ComposerChoiceRow 结构，浏览器测试会跟踪审批操作，同时移除了重复的操作样式。",
  "Startup does less surprise work": "启动时减少了意外的后台工作",
  "Synara avoids unnecessary provider refresh work during startup and gates Claude keepalive behavior more carefully, so opening the app is calmer and less likely to fight credential checks.":
    "Synara 启动时会避免不必要的提供商刷新，并更谨慎地控制 Claude 保活行为，让应用打开过程更安静，也减少与凭据检查互相干扰的情况。",
  "Server startup no longer runs provider refresh eagerly, Claude keepalive respects auth-state timing, provider usage hooks handle inactive summaries more predictably, and related settings/server query invalidation paths have tests.":
    "服务端启动时不再主动执行提供商刷新；Claude 保活会遵循认证状态时序；提供商用量逻辑也能更稳定地处理非活动摘要。相关设置和服务端查询失效路径均已有测试覆盖。",
  "Folded work rows report time more accurately": "折叠后的工作行会更准确地显示时长",
  "Collapsed transcript segments now show a 'Worked for' duration that spans the whole folded section, not just a single row inside it.":
    "折叠的对话片段现在会显示覆盖整个折叠区域的“工作时长”，不再只计算其中某一行。",
  "Timeline duration grouping now tracks folded row boundaries and tests the aggregate timing behavior so compact transcripts better match what actually happened.":
    "时间线时长分组现在会跟踪折叠行的边界，并验证汇总时长，让紧凑显示的对话记录更准确地反映实际执行时间。",

  // 0.3.7
  "Update downloads show their progress": "更新下载会显示进度",
  "When Synara is downloading a desktop update, the sidebar update button now shows a live percent badge so you can tell whether it is moving or nearly ready.":
    "Synara 下载桌面更新时，边栏更新按钮会实时显示百分比，可以直接看出下载是否在进行或即将完成。",
  "The desktop update helper now clamps reported download percentages, hides them outside active downloads, and covers edge cases for null, negative, oversized, and fractional progress values.":
    "桌面更新辅助逻辑会把下载百分比限制在有效范围内，只在实际下载时显示，并处理空值、负数、超范围数值和小数进度等情况。",
  "Claude auth checks are less jumpy": "Claude 认证检查更稳定",
  "Claude sessions are less likely to be marked logged out during refresh-token races, especially when health checks and the macOS credential keepalive run near the same time.":
    "刷新令牌发生并发竞争时，Claude 会话现在更不容易被误判为已退出登录，尤其是在健康检查和 macOS 凭据保活几乎同时运行时。",
  "`claude auth status` is now serialized through a shared lock, retried once for structured false negatives, and can fall back to verified local credential metadata before showing an unauthenticated state.":
    "`claude auth status` 现在通过共享锁串行执行；遇到结构化的误判结果时会重试一次，并可在显示未认证状态前回退到已验证的本地凭据元数据。",
  "Turn checkpoints are harder to confuse": "轮次检查点更不容易混淆",
  "Synara preserves the first pre-turn snapshot more carefully, so transcript diffs and restore points better match what was on disk when you pressed send.":
    "Synara 现在会更谨慎地保留轮次开始前的首个快照，让对话差异和恢复点更准确地对应你按下发送时磁盘上的真实状态。",
  "Checkpoint capture now has single-flight behavior per repo/ref, a bounded capture timeout, first-writer-wins `skipIfExists` baselines, and extra recovery when a startup or backup path missed the original message baseline.":
    "检查点捕获现在会按仓库和引用合并并发请求，设置有上限的超时时间，并采用先写入者生效的 `skipIfExists` 基线；如果启动或备份流程漏掉原始消息基线，也会额外尝试恢复。",
  "The sidebar chat list behaves more naturally": "边栏聊天列表的行为更自然",
  "The Chats section now lives with the rest of the scrollable sidebar content, has a familiar disclosure chevron, and keeps the footer focused on account/update controls.":
    "聊天区域现在与其他可滚动边栏内容放在一起，并使用常见的展开箭头；底部区域则专注保留账户和更新控制。",
  "Sidebar chat collapse state now exposes `aria-expanded`, reuses the shared disclosure chevron, and separates chat rows from the footer while preserving sort and new-chat actions.":
    "边栏聊天折叠状态现在会提供 `aria-expanded`，复用统一的展开箭头，并把聊天条目与底部区域分开，同时保留排序和新建聊天操作。",
  "First sends keep the workspace calm": "首次发送时工作区不会突然变化",
  "Starting from an empty chat no longer opens the Environment panel by surprise after the first message turns the landing view into a transcript.":
    "从空聊天开始时，发送第一条消息并进入对话记录后，环境面板不会再突然自动打开。",
  "ChatView now records a closed environment-panel preference when sending from the centered empty landing, preventing the default-open policy from popping the panel into a just-started conversation.":
    "从居中的空白起始页发送消息时，ChatView 现在会记录环境面板为关闭状态，避免默认打开策略在刚开始的对话中突然弹出面板。",
  "Provider health parsing is easier to trust": "提供商健康状态解析更可靠",
  "Provider CLI output handling and Claude auth interpretation now have clearer, isolated parsing paths with more focused tests around failure and metadata cases.":
    "提供商 CLI 输出处理和 Claude 认证解析现在采用更清晰、彼此隔离的解析路径，并针对失败和元数据情况增加了更集中的测试。",
  "Generic CLI-output helpers moved out of ProviderHealth, Claude auth parsing moved into a pure module, and new tests cover auth JSON markers, credential summaries, the auth-status lock, checkpoint single-flight behavior, and provider health edge cases.":
    "通用 CLI 输出辅助逻辑已移出 ProviderHealth，Claude 认证解析也拆到纯模块中。新增测试覆盖认证 JSON 标记、凭据摘要、认证状态锁、检查点并发合并行为以及提供商健康状态的边缘情况。",

  // 0.3.6
  "Cursor launch fallback is much sturdier": "Cursor 启动回退机制更稳",
  "Synara now finds Cursor agent commands across more install layouts, including bundled sibling shims and legacy shim locations, while rejecting unsafe fallbacks.":
    "Synara 现在可以在更多安装布局中找到 Cursor Agent 命令，包括随包附带的同级启动脚本和旧版脚本位置，同时拒绝不安全的回退路径。",
  "Cursor ACP command discovery now resolves safer CLI paths, honors bundled sibling launchers, preserves legacy shim coverage, and avoids falling back to paths that do not match the expected Cursor agent shape.":
    "Cursor ACP 命令发现现在会选择更安全的 CLI 路径，优先识别随包附带的同级启动器，同时保留旧版脚本兼容，并避免回退到不符合预期 Cursor Agent 结构的路径。",
  "Muxy can open from Synara": "可以从 Synara 打开 Muxy",
  "Open-in support now recognizes Muxy, so editor/open buttons can hand files to the right desktop target when Muxy is part of your workflow.":
    "“打开方式”现在支持识别 Muxy，因此当工作流中使用 Muxy 时，编辑器和打开按钮可以把文件交给正确的桌面应用。",
  "Editor metadata, open-route handling, and focused coverage were extended so Muxy is treated as a supported external app alongside the existing editor launch targets.":
    "编辑器元数据、打开路由和相关测试都已扩展，Muxy 现在与现有编辑器目标一样被视为受支持的外部应用。",
  "Live chats leave a clearer message trail": "实时聊天的消息记录更清楚",
  "Active replies now expose a calmer live trail through the transcript, making long-running turns easier to follow while new work arrives.":
    "活动回复现在会在对话记录中显示更清晰、稳定的实时活动记录，让长时间运行的轮次在持续收到新内容时更容易跟踪。",
  "The transcript gained MessageTrail rendering, shared message-trail logic, browser coverage, and timeline integration so live assistant activity can stay visible without fighting the normal message rows.":
    "对话记录新增 MessageTrail 渲染、共享消息记录逻辑、浏览器覆盖和时间线集成，让助手的实时活动保持可见，同时不会干扰普通消息行。",
  "Image sharing works better on desktop": "桌面端图片分享更好用",
  "Share cards and exported profile visuals can now use the desktop clipboard image path, making it easier to paste polished snapshots elsewhere.":
    "分享卡片和导出的个人资料图片现在可以直接走桌面剪贴板图片通道，更方便把处理好的截图粘贴到其他应用。",
  "The web share-card export path now cooperates with desktop clipboard IPC, including preload contracts and browser-side helpers for copying generated image blobs.":
    "网页端分享卡导出流程现在会配合桌面剪贴板 IPC，包括预加载契约和用于复制生成图片数据的浏览器端辅助逻辑。",
  "Claude credentials stay fresh longer": "Claude 凭据可持续保持有效",
  "Synara refreshes Claude credential freshness on macOS so long sessions are less likely to hit the familiar stale-token sign-in failure.":
    "Synara 会在 macOS 上定期刷新 Claude 凭据状态，减少长会话因令牌过期而需要重新登录的情况。",
  "A Claude credential keepalive helper, adapter integration, and focused tests now keep the OAuth token file active enough to avoid the roughly eight-hour stale credential path.":
    "新增 Claude 凭据保活辅助逻辑、适配器集成和定向测试，使 OAuth 令牌文件持续更新，避免大约八小时后被判定为过期。",
  "Models, command rows, and status icons got a polish pass": "模型、命令行和状态图标进一步优化",
  "Sonnet 5 variants, sidebar status icons, branded command rows, chat bubble padding, and tool labels were tightened for a more readable daily workspace.":
    "Sonnet 5 变体、边栏状态图标、带品牌标识的命令行、聊天气泡间距和工具标签都经过调整，让日常工作区更易读。",
  "The release adds Sonnet 5 model variant metadata, refines sidebar status presentation, brands command/tool rows more clearly, and trims chat typography spacing in dense transcript areas.":
    "本版本补充 Sonnet 5 模型变体元数据，优化边栏状态显示，让命令和工具行的品牌标识更清楚，并压缩密集对话区域中的文字间距。",

  // 0.3.5
  "Temporary chats graduate more naturally": "临时聊天转为正式聊天时更自然",
  "Draft and temporary threads now promote into the main chat flow more predictably, with clearer naming and steadier routing once work becomes real.":
    "草稿和临时对话现在能更稳定地进入主聊天流程；当工作正式开始后，命名更清楚，路由也更可靠。",
  "Disposable-thread helpers were renamed around temporary-thread behavior, ChatView and sidebar state now share the promotion path, and timeline coverage guards the new handoff from temporary work into durable chat rows.":
    "临时对话相关辅助逻辑已按新的临时线程语义重新命名，ChatView 与边栏状态现在共用同一条转正路径，时间线测试也会保护临时工作转入持久聊天记录的交接过程。",
  "Archived chats are easier to recover": "已归档聊天更容易恢复",
  "Archive actions now use an undo toast instead of an interrupting confirmation dialog, so cleaning up threads is faster while still giving you a quick escape hatch.":
    "归档操作现在使用可撤销提示，不再弹出打断操作的确认对话框。清理对话更快，同时仍可马上撤销。",
  "The sidebar archive flow, shared toast primitive, settings surfaces, environment panel hints, and threadArchive helper now cooperate around immediate archive plus undo behavior.":
    "边栏归档流程、共享提示组件、设置界面、环境面板提示和 threadArchive 辅助逻辑现在统一支持“立即归档 + 可撤销”的行为。",
  "Pending inputs and work rows feel calmer": "待输入提示与工作行更简洁",
  "User-input prompts, queued composer state, work rows, tool details, markdown spacing, and composer preview surfaces were tightened so active sessions scan better.":
    "用户输入提示、排队中的输入框状态、工作行、工具详情、Markdown 间距和输入预览区域都经过整理，让活动会话更容易浏览。",
  "Composer pending-input panels now float more cleanly in the stack, queued headers and work rows have focused coverage, and shared rendering helpers reduce small inconsistencies across tool and diff displays.":
    "输入框中的待输入面板现在能更自然地悬浮在层叠区域中；排队标题和工作行有了定向测试；共享渲染辅助逻辑也减少了工具与差异视图中的小型不一致。",
  "macOS icon refreshes after app updates": "应用更新后会刷新 macOS 图标",
  "The desktop app now refreshes macOS icon caches on startup/update paths so Dock and Finder icons are less likely to stay stale after an icon change.":
    "桌面应用现在会在启动和更新流程中刷新 macOS 图标缓存，图标改动后 Dock 与 Finder 更不容易继续显示旧图标。",
  "A dedicated macOS icon-cache refresh helper was added to the desktop main process with coverage for the app-support marker, cache invalidation command, and platform gating.":
    "桌面主进程新增专用的 macOS 图标缓存刷新逻辑，并覆盖应用支持标记、缓存失效命令和平台限制。",
  "Settings, heatmaps, and labels got a tidy pass": "设置、热力图和标签进一步整理",
  "The settings route, activity heatmap export, share cards, model/traits pickers, sidebar labels, and dark-mode composer border all received small polish fixes.":
    "设置路由、活动热力图导出、分享卡片、模型与特性选择器、边栏标签以及深色模式输入框边框都得到了一轮小幅优化。",
  "This release cleans up settings panel primitives, aligns heatmap and diff-rendering helpers, restores a dark-mode composer input border, simplifies repeated labels, and trims a handful of dense UI edges.":
    "本版本整理了设置面板基础组件，统一热力图与差异渲染辅助逻辑，恢复深色模式下的输入框边框，简化重复标签，并优化一些过于拥挤的界面细节。",

  // 0.3.4
  "Assistant streaming is on by default": "助手流式输出现已默认开启",
  "New installs now start with assistant streaming enabled, so replies feel live immediately without needing a settings pass first.":
    "新安装现在默认启用助手流式输出，无需先修改设置，回复就会直接实时显示。",
  "The default app settings and shared settings schema now agree on streamed assistant output, keeping fresh web and server state aligned.":
    "应用默认设置与共享设置结构现在对助手流式输出采用同一默认值，让新建的网页端和服务端状态保持一致。",
  "Live transcript follow feels smoother": "实时对话跟随更顺滑",
  "Streaming replies, optimistic sends, tool details, and message entry animations now keep the transcript pinned more predictably while work is active.":
    "工作进行时，流式回复、即时发送反馈、工具详情和消息进入动画现在都能更稳定地让对话记录保持跟随。",
  "ChatView, ChatTranscriptPane, MessagesTimeline, smooth streamed text, and browser regression coverage were tightened so live assistant text and tool rows do not fight the scroll position.":
    "ChatView、ChatTranscriptPane、MessagesTimeline、平滑流式文本和浏览器回归覆盖都经过调整，避免助手实时文本与工具行互相争抢滚动位置。",
  "Provider health handles more real-world CLI states": "提供商健康检查可处理更多真实 CLI 状态",
  "Claude, Cursor, and OpenCode status checks are sturdier around credentials, headless environments, model probes, and transient command failures.":
    "Claude、Cursor 和 OpenCode 的状态检查现在能更稳地处理凭据、无界面环境、模型探测以及临时命令失败。",
  "Provider health now detects usable local Claude CLI credentials before passing process env through, runs Cursor ACP probes with a safer headless env, handles model-probe failures without marking an authenticated provider unusable, and expands focused provider-health coverage.":
    "提供商健康检查现在会先确认本地 Claude CLI 凭据可用，再传递进程环境；Cursor ACP 探测会使用更安全的无界面环境；模型探测失败也不会把已认证的提供商误判为不可用，同时增加了定向健康检查覆盖。",
  "OpenCode retry warnings are easier to follow": "OpenCode 重试警告更容易跟踪",
  "Retry warnings from OpenCode now stay in the work-log flow and collapse consistently across turns instead of cluttering the main conversation.":
    "OpenCode 的重试警告现在会留在工作日志流程中，并在不同轮次中统一折叠，不再挤占主对话。",
  "Provider runtime ingestion and session logic now preserve OpenCode retry-warning metadata, keep it attached to work rows, and cover repeated warning behavior in both server and web tests.":
    "提供商运行时事件接收与会话逻辑现在会保留 OpenCode 重试警告元数据，并让它继续附着在工作行上；服务端和网页端测试也覆盖了重复警告的行为。",
  "Tool rows and agent markers are cleaner": "工具行与 Agent 标记更清晰",
  "Agent mentions, task rows, tool labels, file-change rows, chat seams, and switches received a small polish pass that makes dense chats easier to scan.":
    "Agent 提及、任务行、工具标签、文件变更行、聊天分隔和开关都做了小幅优化，让内容密集的聊天更容易浏览。",
  "Synara now reuses the central robot glyph for agent chips, improves file-change and tool-call labels, refines chat card contrast, and tightens shared switch sizing, thumb travel, and animation.":
    "Synara 现在为 Agent 标签统一使用中央机器人图标，并改进文件变更与工具调用标签、聊天卡片对比度，以及通用开关的尺寸、滑块行程和动画。",
  "Release gates tightened browser and provider tests": "发布检查加强了浏览器与提供商测试",
  "The v0.3.4 deep release pass fixed exact-optional type drift in transcript browser coverage and provider health checks before publishing.":
    "v0.3.4 的发布前深度检查修复了对话记录浏览器覆盖和提供商健康检查中的精确可选类型偏差。",
  "The release pass corrected a browser `scrollTo` test helper so it no longer passes explicit `undefined` optional fields, fixed a Claude health env call the same way, and updated a ProviderHealth test to use the Effect platform error tag supported by this workspace.":
    "发布检查修正了浏览器 `scrollTo` 测试辅助逻辑，不再显式传入 `undefined` 可选字段；Claude 健康检查的环境调用也做了同样修复，并更新 ProviderHealth 测试以使用当前工作区支持的 Effect 平台错误标签。",

  // 0.3.3
  "VS Code from the Microsoft Store opens correctly on Windows":
    "Windows 上的 Microsoft Store 版 VS Code 可以正确打开",
  "Synara can now launch VS Code Store installs through the right Windows app identity and URI fallback, so editor buttons work even when the normal `code` command is unavailable.":
    "Synara 现在可以通过正确的 Windows 应用身份和 URI 回退启动 Microsoft Store 安装的 VS Code，即使常规 `code` 命令不可用，编辑器按钮也能正常工作。",
  "Editor launch discovery now understands Windows packaged app metadata, adds VS Code and VS Code Insiders Store coverage, falls back from command launch to URI activation, and keeps file-manager launches isolated from editor-specific behavior.":
    "编辑器启动发现现在能识别 Windows 打包应用元数据，覆盖 VS Code 与 VS Code Insiders 的商店版本，并在命令启动失败时回退到 URI 激活，同时继续将文件管理器启动与编辑器专用逻辑隔离。",
  "Provider update checks are now optional": "提供商更新检查现可关闭",
  "A new settings toggle lets you disable provider update checks when you want Synara to stay quieter about external CLI versions.":
    "设置中新增开关，可以关闭提供商更新检查，让 Synara 不再频繁提示外部 CLI 版本。",
  "Provider health, server settings, app settings migration, settings search, root notifications, and provider update filtering now share the same `enableProviderUpdateChecks` flag so background update notices respect the user's preference.":
    "提供商健康检查、服务端设置、应用设置迁移、设置搜索、根级通知和提供商更新筛选现在统一使用 `enableProviderUpdateChecks` 标记，让后台更新提示真正遵循用户选择。",
  "The app icon and Synara mark look cleaner": "应用图标和 Synara 标志更简洁",
  "The desktop, web, marketing, and release assets were refreshed so the Synara icon renders more consistently across macOS, Windows, browser favicons, and update artifacts.":
    "桌面端、网页端、宣传素材和发布资源都已更新，让 Synara 图标在 macOS、Windows、浏览器图标和更新产物中的显示更加一致。",
  "This release refreshes the inline Synara logo path, replaces generated icon assets from the full source image, corrects macOS bundle icon handling after the rounded-icon Ventura pass, and removes a literal Dock-icon workaround that was not the final direction.":
    "本版本更新了内联 Synara 标志路径，使用完整源图重新生成图标资源，修正 Ventura 圆角图标调整后的 macOS 应用包图标处理，并移除了此前临时使用的 Dock 图标绕过方案。",
  "Workspace browsing feels more unified": "工作区浏览体验更统一",
  "Workspace explorer navigation, file-row presentation, diff stat labels, and shortcut settings now use more shared behavior, making file browsing and review surfaces easier to scan.":
    "工作区资源管理器导航、文件行显示、差异统计标签和快捷键设置现在复用更多统一逻辑，让文件浏览和审阅界面更容易查看。",
  "Explorer keyboard navigation moved into shared logic with coverage, DockExplorerPane and workspaceExplorer were simplified, keyboard shortcut settings gained a clearer panel, and file/diff row styling now lines up with the rest of the workspace UI.":
    "资源管理器键盘导航已移入共享逻辑并增加覆盖；DockExplorerPane 和 workspaceExplorer 得到简化；快捷键设置加入更清晰的面板；文件与差异行样式也与工作区其他界面更一致。",
  "Idle server polling is lighter": "服务端空闲轮询更轻量",
  "Synara polls local server state less aggressively while idle, reducing background work without changing the active-session refresh path.":
    "空闲时，Synara 会降低本地服务端状态的轮询频率，在不改变活动会话刷新路径的情况下减少后台工作。",
  "The server React Query helper now separates active and idle refresh intervals, the sidebar uses the calmer idle cadence, and focused tests cover the interval behavior.":
    "服务端 React Query 辅助逻辑现在会区分活动与空闲刷新间隔，边栏使用更低频的空闲节奏，并通过定向测试覆盖间隔行为。",
  "Release gates caught a few small compatibility fixes": "发布检查发现并修复了几处兼容性问题",
  "The v0.3.3 release pass tightened formatting, settings test coverage, and Effect API compatibility before publishing.":
    "v0.3.3 发布检查在发布前进一步加强了格式校验、设置测试覆盖和 Effect API 兼容性检查。",
  "The release check formatted recent Windows editor-launch and desktop artifact code, updated the web settings push fixture for provider update checks, and switched one editor fallback path from `Effect.catchAll` to the Effect API used by this workspace.":
    "发布检查整理了近期 Windows 编辑器启动和桌面产物相关代码，更新了网页设置推送中关于提供商更新检查的测试数据，并将一条编辑器回退路径从 `Effect.catchAll` 改为当前工作区使用的 Effect API。",

  // 0.3.2
  "Project switching moved closer to your branch work": "项目切换更贴近分支操作",
  "The branch toolbar can now show and change the active project, so project, branch, and worktree context are easier to keep aligned while you move around Synara.":
    "分支工具栏现在可以显示并切换当前项目，让你在 Synara 中移动时更容易保持项目、分支和 Worktree 上下文一致。",
  "This release teaches the branch toolbar about project selection, shared home-chat containers, draft-thread mapping, project creation recovery, and project picker state so navigation does not depend only on the sidebar.":
    "本版本让分支工具栏能够处理项目选择、共享主页聊天容器、草稿对话映射、项目创建恢复和项目选择器状态，因此导航不再只依赖边栏。",
  "Local previews can open more real files": "本地预览可打开更多真实文件",
  "Absolute local file paths now get preview grants, making image, PDF, and workspace previews more reliable when agent output points at files on disk.":
    "绝对本地文件路径现在可以获得预览权限，因此当 Agent 输出指向磁盘文件时，图片、PDF 和工作区预览会更可靠。",
  "The server now grants and validates local preview access more carefully, including trusted-origin checks, local image route coverage, workspace file-system normalization, and web-side preview/download handling for absolute paths.":
    "服务端现在会更谨慎地授予和校验本地预览权限，包括可信来源检查、本地图片路由覆盖、工作区文件系统路径规范化，以及网页端对绝对路径的预览和下载处理。",
  "Review diffs have a collapsible file tree": "差异审阅加入可折叠文件树",
  "The diff panel now has a review file tree, giving larger review batches a clearer outline before you dive into individual patches.":
    "差异面板现在提供审阅文件树，在查看具体补丁前就能先了解大型审阅批次的整体结构。",
  "Synara now builds file diff trees, renders a collapsible review panel with shared disclosure motion, and reuses file-row styling so review navigation feels closer to the rest of the workspace.":
    "Synara 现在会构建文件差异树，使用共享展开动画渲染可折叠审阅面板，并复用文件行样式，让审阅导航与工作区其他部分更一致。",
  "The workspace explorer is tidier": "工作区资源管理器更整洁",
  "The right-side workspace explorer and preview header were split into cleaner pieces, reducing composer chrome churn and making file browsing steadier.":
    "右侧工作区资源管理器与预览标题被拆成更清晰的组件，减少输入区界面反复变化，让文件浏览更稳定。",
  "Workspace browsing now lives behind a reusable dock explorer pane and workspace explorer helpers, with tighter right-dock activation metadata, preview header behavior, and composer measurement boundaries.":
    "工作区浏览现在由可复用的停靠资源管理器面板和工作区资源管理器辅助逻辑承载，同时完善右侧停靠区激活元数据、预览标题行为和输入区测量边界。",
  "Send actions check provider readiness first": "发送前会先检查提供商是否就绪",
  "Starting a chat, Kanban task, or handoff now refreshes provider availability before sending and returns focus to the composer more consistently.":
    "开始聊天、看板任务或交接时，现在会在发送前刷新提供商可用性，并更稳定地把焦点返回输入框。",
  "Provider availability refresh has dedicated helpers and coverage, while ChatView, Kanban submit flows, thread handoff, and route startup paths now share more predictable send-readiness behavior.":
    "提供商可用性刷新现在有独立辅助逻辑和测试覆盖；ChatView、看板提交、对话交接和路由启动路径也统一采用更稳定的发送就绪行为。",
  "Explorer icons and working states feel more coherent": "资源管理器图标与工作状态更统一",
  "File explorer icons, working shimmers, route inset surfaces, composer pickers, and sidebar details received a focused visual cleanup pass.":
    "文件资源管理器图标、工作中闪动效果、路由内嵌界面、输入区选择器和边栏细节都经过一轮集中视觉整理。",
  "This release unifies more icon choices through central icon helpers, refines shimmer styling, tightens compact route surfaces, and keeps repeated explorer/sidebar affordances closer to the same visual language.":
    "本版本通过中央图标辅助逻辑统一更多图标选择，优化闪动样式，优化紧凑路由界面，并让资源管理器和边栏中的重复控件保持更一致的视觉语言。",
  "Long sessions keep their footing better": "长会话更不容易失稳",
  "Transcript scrolling, session state, sidebar routing, and draft equality checks were refactored so active work stays calmer across thread and project changes.":
    "对话记录滚动、会话状态、边栏路由和草稿一致性检查都经过整理，让活动工作在切换对话和项目时更稳定。",
  "ChatView now separates more browser-specific behavior, route inset layout has focused coverage, draft-thread comparisons are stricter, and project/chat container helpers handle exact optional state more safely.":
    "ChatView 现在进一步隔离浏览器专用行为，路由内嵌布局有了定向覆盖，草稿对话比较更严格，项目与聊天容器辅助逻辑也能更安全地处理精确可选状态。",

  // 0.3.1
  "Tool calls are easier to inspect": "工具调用更容易检查",
  "Transcript tool calls now expose clearer detail dialogs for shell commands, patches, file changes, and tool output, so review-heavy chats are easier to audit.":
    "对话记录中的工具调用现在会为命令行指令、补丁、文件变更和工具输出提供更清楚的详情对话框，让需要大量审阅的聊天更容易检查。",
  "Synara now formats tool command transcripts, normalizes patch/change output, labels more tool kinds consistently, preserves structured work metadata through the timeline, and adds focused coverage for tool-call labels and formatting.":
    "Synara 现在会格式化工具命令记录，统一补丁和变更输出，对更多工具类型使用一致标签，并在时间线中保留结构化工作元数据，同时补充工具调用标签和格式化的定向覆盖。",
  "Long chats stay calmer while work is running": "工作运行时，长聊天更稳定",
  "Transcript grouping and scroll behavior were refined so live assistant text, collapsed work rows, sidechat panes, and tool-only activity behave more predictably.":
    "对话记录分组和滚动行为经过调整，让助手实时文本、折叠工作行、侧聊面板和纯工具活动的表现更可预期。",
  "This release tightens message timeline derivation, keeps real assistant text separate from tool/work rows, improves collapsed-turn signatures, preserves assistant selection actions, and adds focused tests for timeline rows and ChatView state.":
    "本版本改进消息时间线生成逻辑，将真实助手文本与工具和工作行分开，改进折叠轮次标识，并保留助手文本选择操作，同时增加时间线行和 ChatView 状态的定向测试。",
  "Multi-pane work is quicker to navigate": "多面板工作切换更快",
  "Recent views, split chats, pinned threads, hover cards, and project sidebar actions received a round of smaller navigation polish.":
    "最近视图、分屏聊天、置顶对话、悬停卡片和项目边栏操作都得到了一轮小型导航优化。",
  "Recent view switching, sidebar hover-card anchors, thread/project hover content, pin toggles, chat header actions, project shortcut targets, and split/sidechat affordances now share more predictable state and keyboard routing.":
    "最近视图切换、边栏悬停卡片锚点、对话与项目悬停内容、置顶开关、聊天标题操作、项目快捷键目标以及分屏与侧聊控件，现在拥有更稳定的状态和键盘路由。",
  "Keyboard shortcuts got stricter": "键盘快捷键规则更严谨",
  "Shortcut defaults and migrations are now safer, with better handling for chat creation, terminal actions, navigation, and stale keybinding rows.":
    "快捷键默认值和迁移现在更安全，并更妥善地处理新建聊天、终端操作、导航以及过期快捷键记录。",
  "Server and web keybinding logic now validates persisted bindings more carefully, avoids carrying conflicting defaults forward, improves new-chat/new-terminal command resolution, and has expanded regression coverage.":
    "服务端和网页端快捷键逻辑现在会更谨慎地校验已保存的按键绑定，避免继续带入冲突默认值，并改进新建聊天与新建终端命令解析，同时扩大回归覆盖。",
  "Providers recover from more edge cases": "提供商可从更多边缘情况中恢复",
  "Codex, Gemini, Grok, Cursor, OpenCode, and provider health paths are sturdier around runtime events, discovery, process cleanup, and idle sessions.":
    "Codex、Gemini、Grok、Cursor、OpenCode 以及提供商健康检查流程在运行时事件、发现、进程清理和空闲会话方面都更加稳健。",
  "Provider runtime ingestion now handles more canonical event shapes, Gemini ACP probing is more defensive, provider service behavior has broader coverage, idle runtime cleanup was tightened, process runner handling is safer, and Codex review/compaction progress is easier to reconcile.":
    "提供商运行时现在能接收更多标准事件格式；Gemini ACP 探测更稳妥；提供商服务覆盖更多场景；空闲运行时清理和进程运行器处理更可靠；Codex 审阅与压缩进度也更容易保持一致。",
  "Automation setup asks for the right approval": "自动化设置会请求正确的审批",
  "Automation creation and updates now separate setup prompts, update-only flows, approval fallbacks, and risk acknowledgement more carefully.":
    "自动化创建与更新现在会更清楚地区分设置提示、仅更新流程、审批回退和风险确认。",
  "This release hardens conversational automation setup, preserves update-only approval paths, restores the approval fallback, strips carried setup filler from prompts, and keeps the risk acknowledgement gate attached to dispatch.":
    "本版本加强对话式自动化设置，保留仅更新场景的审批路径，恢复审批回退，清理提示词中被带入的多余设置内容，并确保风险确认门槛始终绑定在派发流程上。",
  "Desktop updates and startup are quieter": "桌面更新与启动减少无关提示",
  "The desktop shell now suppresses noisy Node warnings in more places and hardens electron-updater command handling on Windows.":
    "桌面外壳现在会在更多位置抑制无关的 Node 警告，并加强 Windows 上 electron-updater 的命令处理。",
  "Desktop startup applies safer warning handling, voice transcription edge cases were tightened, and electron updater command construction now has dedicated security coverage around Windows process spawning.":
    "桌面启动采用更安全的警告处理，语音转写的边缘情况也得到改进；electron 更新器命令构造现在还针对 Windows 进程启动加入了专门的安全覆盖。",
  "The interface has more useful visual signals": "界面提供了更多有用的视觉提示",
  "Provider icons, central icon assets, model pickers, composer controls, automation banners, Kanban cards, preview cards, and tooltips were cleaned up in small but visible ways.":
    "提供商图标、中央图标资源、模型选择器、输入区控件、自动化横幅、看板卡片、预览卡片和工具提示都进行了细小但可见的整理。",
  "Synara now ships a curated central-icons set, improves provider/model picker presentation, refines composer picker and automation banners, adds better project/thread hover details, and keeps repeated UI surfaces closer to the same visual language.":
    "Synara 现在内置整理过的中央图标集，改进提供商与模型选择器显示，优化输入区选择器和自动化横幅，补充更好的项目与对话悬停详情，并让重复出现的界面保持更统一的视觉语言。",

  // 0.3.0
  "Automations are a real workspace surface": "自动化现在拥有完整的工作区界面",
  "Synara now has first-class Automations for scheduled agent work, with sidebar navigation, list/detail pages, run history, triage actions, and inline editing.":
    "Synara 现在为定时 Agent 工作提供完整的自动化功能，包括边栏导航、列表与详情页面、运行历史、结果处理操作和行内编辑。",
  "This release wires automation contracts, persistence, scheduler leases, run tracking, RPC methods, sidebar badges, Current/Paused views, detail routes, editable fields, previous-run history, and result triage so scheduled work lives inside the same thread/provider/worktree pipeline as normal chat work.":
    "本版本打通了自动化契约、持久化、调度器租约、运行跟踪、RPC 方法、边栏徽标、当前与暂停视图、详情路由、可编辑字段、历史运行记录和结果处理，让定时工作与普通聊天共用同一套对话、提供商和 Worktree 流程。",
  "Heartbeat automations can stop when the goal is met": "心跳自动化可在目标达成后自动停止",
  "Heartbeat automations can store an AI-evaluated stop clause, evaluate it after successful runs, and disable themselves with a recorded reason when the condition is satisfied.":
    "心跳自动化现在可以保存由 AI 判断的停止条件，在成功运行后进行评估，并在条件满足时自动停用，同时记录停止原因。",
  "Completion policies now support natural-language stop conditions, dedicated background evaluation, visible completion results, timeout handling, stale-result guards, legacy-row defaults, and archive/read preservation so a stop check cannot silently undo user triage state.":
    "完成策略现在支持自然语言停止条件、独立后台评估、可见的完成结果、超时处理、过期结果保护、旧数据默认值，以及归档和已读状态保留，避免停止检查悄悄覆盖用户已经处理过的状态。",
  "Automation creation understands natural prompts": "自动化创建可以理解自然语言提示",
  "The composer can turn automation-style prompts into scheduled drafts, including intervals, daily/weekly timing, cron-like schedules, heartbeat targets, and review dialogs.":
    "输入框可以把自动化类提示转成定时草稿，包括间隔运行、每日或每周时间、类似 Cron 的计划、心跳目标和审阅对话框。",
  "Automation intent parsing now covers explicit and generated prompts, English and Italian stop/schedule phrasing, bounded fast-loop safety, draft review, source-thread handling, restored plan source metadata, inline editing from composer text, and stricter confirmation for LLM-generated automations.":
    "自动化意图解析现在覆盖明确输入和生成式提示、英语与意大利语的停止或计划表达、受限快速循环保护、草稿审阅、来源对话处理、恢复后的计划来源元数据、直接从输入框文本行内编辑，以及对 LLM 生成自动化更严格的确认。",
  "Scheduled runs are harder to lose or corrupt": "定时运行更不容易丢失或损坏",
  "Automation scheduling, recovery, and run reconciliation were hardened so crashes, duplicate wakes, approval waits, stale cache updates, and cleanup failures are handled more predictably.":
    "自动化调度、恢复和运行协调都得到加强，让崩溃、重复唤醒、等待审批、过期缓存更新和清理失败的处理更可预期。",
  "The automation service now has occurrence dedupe, scheduler leases, crash replay, failed-run rollback, startup recovery, bounded completion-evaluation queues, recovery/lease observability, approval ownership re-checks, standalone worktree cleanup, equal-timestamp cache merging, and DST/long-downtime schedule coverage.":
    "自动化服务现在可去除重复运行，使用调度器租约，恢复崩溃或失败的运行，并限制完成评估队列容量；同时补充恢复与租约状态监测、审批归属复查、独立 Worktree 清理、同时间戳缓存合并，以及夏令时和长时间停机后的调度处理。",
  "Files attach, preview, and download more reliably": "文件附件、预览和下载更可靠",
  "Chat now supports generic file attachments alongside images, with better chips/cards, safer upload normalization, worktree-aware previews, and in-app local image downloads.":
    "聊天现在除了图片外也支持通用文件附件，并提供更好的标签与卡片、更安全的上传规范化、识别 Worktree 的预览，以及应用内本地图片下载。",
  "File attachments now flow through contracts, upload storage, composer paste/drop, provider prompts, Kanban dispatch, recap/bootstrap surfaces, optimistic timeline rendering, caps/rollback, attachment-bearing plan follow-ups, explicit unsupported-file rejection, worktree-backed file preview roots, and blob-based download handling that keeps failed local image downloads inside Synara.":
    "文件附件现在贯穿协议、上传存储、输入框粘贴与拖放、提供商提示、看板发送、摘要与启动界面、时间线即时显示、数量限制与回滚，以及带附件的计划后续消息。对不支持的文件会明确拒绝；文件预览会使用 Worktree 提供的根目录；基于 Blob 的下载流程也会让本地图片下载失败时继续留在 Synara 内处理。",
  "Providers and models stay scoped to the right project": "提供商和模型会保持在正确的项目范围内",
  "OpenCode and Claude startup paths are more careful about cwd, model discovery, config scope, and sticky plan mode so new threads inherit less accidental state.":
    "OpenCode 和 Claude 的启动流程现在会更谨慎地处理 cwd、模型发现、配置范围和持续计划模式，减少新对话意外继承旧状态。",
  "OpenCode model discovery can fall back to `opencode models --verbose`, managed OpenCode/Kilo paths run in the request/session cwd, warm server reuse is scoped, file config is no longer replaced with synthetic empty config, OpenCode resume preserves cwd, and fresh Claude threads avoid inheriting plan mode from the previous active thread.":
    "OpenCode 模型发现可回退到 `opencode models --verbose`；托管的 OpenCode/Kilo 路径会在请求或会话的 cwd 中运行；热服务复用会限制范围；文件配置不再被人工生成的空配置替换；OpenCode 恢复会保留 cwd；新的 Claude 对话也不会继承上一条活动对话的计划模式。",
  "Chats and side panels stay in sync": "聊天与侧边面板保持同步",
  "Deleted chats disappear immediately, the Environment panel behaves better in constrained layouts, automation cards show up in the transcript, and file previews avoid extra full-thread subscriptions.":
    "删除聊天后会立即从界面消失；环境面板在狭窄布局下表现更好；自动化卡片会显示在对话记录中；文件预览也不再额外订阅整条对话。",
  "Client projections now use delete tombstones and responsive archived bulk-delete updates, environment-panel open/close preferences survive chat switches, constrained/floating layouts stay calmer by default, thread automation summaries appear in the environment panel, created automation cards render in chat, and file preview routing avoids unnecessary full thread subscriptions.":
    "客户端投影现在使用删除标记，并及时处理归档批量删除更新；环境面板开关偏好会在切换聊天后保留；受限和浮动布局默认更稳定；对话自动化摘要会出现在环境面板中；新建自动化卡片会渲染到聊天里；文件预览路由也会避免不必要的整条对话订阅。",
  "Profile skill counts reflect more real work": "个人资料中的技能计数更贴近实际使用",
  "Profile stats now count repeated `/skill` and `$skill` usage more accurately, including retained history that should still contribute to your local activity picture.":
    "个人统计现在能更准确地计算重复使用的 `/skill` 和 `$skill`，并把仍应计入本地活动统计的保留历史纳入其中。",
  "Skill aggregation now includes retention-hidden threads while still excluding manually deleted data, counts repeated slash/dollar skill tokens inside one prompt, avoids double-counting structured references, and has regression coverage for retained threads and repeated skill invocation.":
    "技能汇总现在会计入因保留策略而隐藏的对话，同时继续排除手动删除的数据；同一条提示中的多个斜杠或美元符号技能调用也会分别计数，并避免重复计算结构化引用。保留对话和重复技能调用都已有回归覆盖。",
};
