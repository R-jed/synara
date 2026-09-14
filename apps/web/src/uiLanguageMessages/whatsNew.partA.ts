export const WHATS_NEW_PART_A_ZH_CN_MESSAGES: Readonly<Record<string, string>> = {
  "Fix provider startup after the 0.8.2 update": "修复 0.8.2 更新后的提供商启动问题",
  "The desktop app now includes the missing dependency that could prevent ACP providers from starting.":
    "桌面应用现已包含此前缺失、可能导致 ACP 提供商无法启动的依赖。",
  "Fixes the Cannot find package 'zod' error in the packaged app. Release verification now loads provider SDKs and other lazy runtime dependencies from the packaged application before publication.":
    "修复打包应用中的 Cannot find package 'zod' 错误。发布验证现在会在发布前从打包后的应用中加载提供商 SDK 以及其他按需加载的运行时依赖。",
  "Remember your preferred diff layout": "记住你偏好的差异布局",
  "Your Split or Stacked diff choice stays selected when you close and reopen the panel.":
    "关闭并重新打开面板后，你选择的左右对照或上下对照差异布局会继续保留。",
  "The diff layout is saved locally and restored across panel remounts and app restarts. Split remains the default when no preference has been saved.":
    "差异布局会保存在本地，并在面板重新挂载或应用重启后恢复。未保存偏好时，默认仍使用左右对照布局。",
  "Smoother conversations while other tasks run": "其他任务运行时，对话更流畅",
  "Streaming code blocks keep their state, and background conversations trigger less rendering work.":
    "流式代码块会保留状态，后台对话触发的渲染工作更少。",
  "In the checked-in production component benchmark with five concurrent streams and one visible code message, total Chromium CPU time fell from 3.597 to 2.858 seconds (20.5%), renderer CPU from 3.196 to 2.187 seconds (31.6%), and frame-interval p95 from 25.0 to 9.6 ms. With ten streams, renderer CPU fell 20.7% and frame-interval p95 reached 9.7 ms. Unchanged code blocks remounted zero times instead of 60; the closed automation hook rendered zero times instead of 120. These short synthetic component samples exclude the complete Electron app and real providers.":
    "在已提交的生产组件基准测试中，同时运行五个流并显示一条代码消息时，Chromium 总 CPU 时间从 3.597 秒降至 2.858 秒（20.5%），渲染进程 CPU 时间从 3.196 秒降至 2.187 秒（31.6%），帧间隔 p95 从 25.0 ms 降至 9.6 ms。十个流同时运行时，渲染进程 CPU 时间降低 20.7%，帧间隔 p95 为 9.7 ms。未变化的代码块重挂载次数从 60 次降为 0，关闭状态的自动化钩子渲染次数从 120 次降为 0。这些是短时的合成组件测试，不包含完整 Electron 应用和真实提供商。",
  "Less waiting for large diffs and tool output": "大型差异和工具输出等待更少",
  "Natural file sorting, read summaries, and tool-output parsing do less repeated work.":
    "文件自然排序、读取摘要和工具输出解析减少了重复计算。",
  "Isolated production-function benchmarks reduced sorting 2,048 file paths from 36.45 to 2.59 ms (92.9%) and tree construction from 18.89 to 1.91 ms (89.9%). A normal 24 KB multiline work log improved 38%; a deliberately adverse whitespace-heavy case dropped from 2,287 ms to 0.053 ms. Counting a 2,000-line read summary improved 57.9%. Ordering, raw content, indentation, and exit codes are preserved. These are operation timings, not whole-app speedup percentages.":
    "独立的生产函数基准测试中，2,048 个文件路径的排序耗时从 36.45 ms 降至 2.59 ms（92.9%），目录树构建从 18.89 ms 降至 1.91 ms（89.9%）。普通的 24 KB 多行工作日志提升 38%；刻意构造的大量空白字符极端案例从 2,287 ms 降至 0.053 ms。统计 2,000 行读取摘要的耗时改善 57.9%。排序结果、原始内容、缩进和退出码均保持不变。这些数字只代表单项操作耗时，并非整款应用的加速比例。",
  "Cheaper diagnostics and conversation preparation": "诊断和对话准备开销更低",
  "Large browser-log reads and selecting previous messages avoid repeated serialization and text normalization.":
    "读取大型浏览器日志和选择历史消息时，减少了重复的序列化与文本规范化。",
  "Reading 200 large browser-log entries fell from 80.06 to 0.964 ms (98.8%), returning the same bounded result. Selecting prior messages from 2,000 messages of 2 KiB each fell from 1.833 to 0.0195 ms (98.9%). Turn scheduling also wakes when a blocking claim settles, and startup diagnostics expose phase durations. The percentages describe isolated measured operations.":
    "读取 200 条大型浏览器日志的耗时从 80.06 ms 降至 0.964 ms（98.8%），返回结果的范围保持一致。从 2,000 条、每条 2 KiB 的消息中选择历史消息，耗时从 1.833 ms 降至 0.0195 ms（98.9%）。阻塞占用解除时，轮次调度也会及时唤醒；启动诊断现在会显示各阶段耗时。这些百分比只描述单独测量的操作。",
  "Keep your place during live output": "实时输出时保持当前位置",
  "Scrolling up stays under your control, and provider status better reflects what is actually happening.":
    "向上滚动时由你掌控位置，提供商状态也更准确地反映实际情况。",
  "Tool activity, buffering, and reconnects no longer masquerade as live assistant text for scroll following. First-send transitions avoid an empty-home flash, elapsed durations remain stable, read conversations stay read after restart, and orchestrator approval cards are restored. Routine Codex startup messages no longer clutter the transcript; actual errors stay visible.":
    "工具活动、缓冲和重连不会再被滚动跟随逻辑误当成实时助手文本。首次发送时不再短暂闪过空白主页，已用时显示保持稳定，已读对话在重启后仍保持已读，审批卡也会恢复。常规 Codex 启动消息不再塞进对话记录，真正的错误仍会显示。",
  "See file changes without reopening the viewer": "无需重新打开查看器即可看到文件变化",
  "Open file previews and diffs revalidate when workspace files change.":
    "工作区文件变化后，已打开的文件预览和差异会重新校验。",
  "Text, image, and PDF previews refresh through project file-change subscriptions, while dirty text edits remain protected. Rendered Markdown selections now offer Add to chat, and compaction tool rows have a dedicated icon. Chat card seams are softer.":
    "文本、图片和 PDF 预览会通过项目文件变更订阅自动刷新，同时保护尚未保存的文本修改。渲染后的 Markdown 选区现在提供“添加到对话”，压缩工具行也有了专用图标。对话卡片之间的衔接更自然。",
  "Rename tasks directly from the composer": "直接在输入框中重命名任务",
  "Use /rename with a title, or let Synara generate a title from the conversation.":
    "使用带标题的 /rename，或让 Synara 根据对话生成标题。",
  "/rename My task sets the title directly. Bare /rename generates a title once the task has conversation context, preserving a newer title if another rename wins the race. New chats restore the last-used model and options, and expanded or collapsed sidebar projects stay that way across restarts.":
    "/rename My task 会直接设置标题。单独输入 /rename 时，会在任务已有对话上下文后生成标题；如果同时发生另一次重命名并先完成，则会保留较新的标题。新对话会恢复上次使用的模型和选项，侧边栏项目的展开或折叠状态也会在重启后保留。",
  "Keep simulator activity with its task": "让模拟器活动留在对应任务中",
  "Background simulator work no longer takes focus from the conversation you are using.":
    "后台模拟器工作不会再抢走当前对话的焦点。",
  "The Automatically open simulator setting lets you disable mirrored-pane auto-opening while continuing to use Simulator.app. Manual opening remains available, and manually closing the pane is respected. Deferred open requests remain associated with their owning task.":
    "“自动打开模拟器”设置现在可以关闭镜像面板的自动打开，同时继续使用 Simulator.app。仍可手动打开，手动关闭面板后也不会被强行再次打开。延后执行的打开请求会继续绑定到原本所属的任务。",
  "More reliable model lists across providers": "不同提供商的模型列表更可靠",
  "Model discovery shares cached results, bounds retries, and makes failures visible instead of silently falling back.":
    "模型发现会共享缓存结果、限制重试次数，并明确显示失败，而不是静默回退。",
  "Active model selection takes priority over background prefetch. Server discovery deduplicates concurrent requests and isolates catalogs by project and runtime. Pi discovers executable OpenRouter models using native authentication, refreshes OpenCode Zen models with the right protocols and capabilities, and updates its SDK for GLM 5.3 Flash and GPT-6 Astra. Factory Droid usage can read Factory credentials, including supported secure storage.":
    "主动选择模型的请求优先于后台预取。服务端发现会合并并发请求，并按项目和运行时隔离模型目录。Pi 通过原生认证发现可执行的 OpenRouter 模型，以正确的协议和能力刷新 OpenCode Zen 模型，并更新 SDK 以支持 GLM 5.3 Flash 和 GPT-6 Astra。Factory Droid 的用量读取也可使用 Factory 凭据，包括受支持的安全存储。",
  "Let Claude Code choose automatic compaction": "让 Claude Code 决定自动压缩方式",
  "Auto (Claude Code) is distinct from explicit 200k and 1M overrides.":
    "自动（Claude Code）与明确指定的 200k 和 1M 覆盖选项现在区分开来。",
  "Automatic mode leaves compaction resolution to Claude Code; choosing 200k or 1M pins the requested window. Model switches and gateway metadata report the effective context. Claude context usage uses SDK summary mode, avoiding per-turn token-count requests. Shared harness instructions and browser tool schemas are slimmer, and Pi/OpenCode gateway calls accept the corrected schemas.":
    "自动模式会把压缩窗口交给 Claude Code 决定；选择 200k 或 1M 则固定使用对应窗口。切换模型时以及网关元数据中都会报告实际生效的上下文。Claude 上下文用量改用 SDK 摘要模式，避免每轮单独请求词元计数。共享执行框架指令和浏览器工具定义更精简，Pi/OpenCode 网关调用也会接受修正后的定义。",
  "Recover stalled providers and noisy Git refreshes": "恢复卡住的提供商并减少 Git 刷新干扰",
  "Devin recovery, Windows launches, and checkpoint capture handle more failure cases.":
    "Devin 恢复、Windows 启动和检查点捕获现在能处理更多失败情况。",
  "Stale Devin sessions recover before dispatch, and wedged children can be restarted instead of leaving turns waiting for the full idle budget. Windows Cursor and Devin detection accepts their launch shims; Effect child processes stay hidden and process snapshots accept PID zero. Failed Git remote refreshes back off. A task that initializes a Git repository no longer reports the absent pre-initialization baseline as a capture failure.":
    "过期的 Devin 会话会在发送前恢复，卡死的子进程可以重启，不会再让轮次一直等到完整的空闲超时。Windows 上的 Cursor 和 Devin 检测现在接受各自的启动兼容脚本；Effect 子进程保持隐藏，进程快照也接受 PID 0。Git 远程刷新失败后会退避重试。任务刚初始化 Git 仓库时，不会再把初始化前本就不存在的基线误报为捕获失败。",
  "Faster development checks and less idle website work": "开发检查更快，网站空闲开销更低",
  "Bun 1.4.2 and TypeScript 7 are now the default toolchain, with more parallel CI checks.":
    "Bun 1.4.2 和 TypeScript 7 现已成为默认工具链，更多 CI 检查也会并行运行。",
  "On the recorded seven-workspace comparison using Bun 1.4.2, median typechecking fell from 56.339 to 12.528 seconds cold (77.8%) and from 12.451 to 3.170 seconds incrementally (74.5%). The legacy checker remains available because one Effect barrel-import diagnostic is not covered by the native checker. The website now lives in the monorepo, and its theme synchronization stops an idle observer loop: 427\u2013430 callbacks per 1.1 seconds fell to zero in the isolated browser probe. CI shards unit and browser tests and caches dependency installation; no CI speedup percentage is claimed.":
    "在使用 Bun 1.4.2 记录的七工作区对比中，冷启动类型检查中位数从 56.339 秒降至 12.528 秒（77.8%），增量检查从 12.451 秒降至 3.170 秒（74.5%）。旧版检查器仍会保留，因为原生检查器尚未覆盖一条 Effect 聚合导入诊断。网站现已纳入单体仓库，主题同步也停止了空闲观察循环：在独立浏览器探针中，每 1.1 秒 427\u2013430 次回调降为 0。CI 会拆分单元测试和浏览器测试，并缓存依赖安装；这里不宣称 CI 有具体百分比的提速。",

  "Use Claude Fable 5.1 across Claude and Pi": "在 Claude 和 Pi 中使用 Claude Fable 5.1",
  "Claude Fable 5.1 is now a first-class model with the right thinking controls, aliases, context variants, and usage reporting.":
    "Claude Fable 5.1 现已作为完整支持的模型，提供正确的思考控制、别名、上下文变体和用量报告。",
  "Synara lists Fable 5.1 at the top of the Claude catalog and repairs older Pi Anthropic catalogs so the model remains selectable there too. The plain `fable` alias now resolves to 5.1 while explicit Fable 5 selections keep working. Its always-on thinking model exposes Low through Max effort without a fast-mode lane, compatible Cursor context variants are recognized, and Claude usage surfaces now show Fable's dedicated weekly allowance from Anthropic's current scoped-limit response.":
    "Synara 会把 Fable 5.1 放在 Claude 模型目录顶部，并修复旧版 Pi Anthropic 目录，让该模型在 Pi 中也能继续选择。普通 `fable` 别名现在解析到 5.1，明确选择 Fable 5 的配置仍可正常使用。其常开思考模型提供从低到最高的推理强度，不带快速模式；兼容的 Cursor 上下文变体也会被识别。Claude 用量界面现在还能从 Anthropic 当前的 scoped-limit 响应中显示 Fable 独立的每周额度。",
  "Open large workspaces with less startup work": "打开大型工作区时减少启动工作",
  "Synara avoids redundant sidebar snapshots, dead-turn replay, and oversized SQLite memory budgets during launch.":
    "Synara 启动时会避免重复的侧边栏快照、无效轮次重放和过大的 SQLite 内存预算。",
  "The browser now accepts the live shell snapshot and only falls back when one is genuinely missing, including after reconnects. The server prunes unrecoverable open-turn rows instead of replaying and logging them on every boot, stops a failed replay once, and scales SQLite cache and mmap budgets to the machine. On the measured 1.7 GB database, shell snapshot requests fell from three to one and warm server boot-to-listen time fell from 1.06 seconds to 0.53 seconds.":
    "浏览器现在会直接接受实时命令行环境快照，只有确实缺失时才回退，重连后也一样。服务器会清理无法恢复的开放轮次记录，不再每次启动都重放并记录；失败的重放只停止一次，同时根据机器情况调整 SQLite 缓存和 mmap 预算。在测得的 1.7 GB 数据库上，命令行环境快照请求从 3 次降为 1 次，服务器热启动到开始监听的时间从 1.06 秒降至 0.53 秒。",
  "Keep long-running Devin tools alive": "让长时间运行的 Devin 工具保持活动",
  "Quiet but active Devin tools no longer look like abandoned turns, and malformed tool-output requests recover safely.":
    "安静但仍在运行的 Devin 工具不会再被误判为已放弃的轮次，格式异常的工具输出请求也能安全恢复。",
  "A current in-progress tool call now receives its own one-hour idle budget instead of sharing the ordinary 30-minute turn watchdog, with stale events prevented from refreshing the active clock. Synara also normalizes Devin's unexpected boolean `get_output.block` field without weakening other ACP messages, and project creation waits for a real task before navigation so superseded routes cannot overwrite newer work.":
    "当前正在执行的工具调用现在有独立的 1 小时空闲预算，不再与普通的 30 分钟轮次看门狗共用；过期事件也不能刷新活动计时。Synara 还会规范化 Devin 意外返回的布尔型 `get_output.block` 字段，同时不放宽其他 ACP 消息的校验。创建项目时会等到真实任务出现后再导航，已被替代的路由不会覆盖更新的工作。",
  "Run and stop providers more predictably on Windows": "在 Windows 上更可靠地启动和停止提供商",
  "Provider, Git, updater, voice, terminal, native Windows, and WSL process handling now share one hardened runtime boundary.":
    "提供商、Git、更新器、语音、终端、原生 Windows 和 WSL 的进程处理现在共用同一套强化后的运行时边界。",
  "Executable lookup, PATH and PATHEXT handling, `.cmd` and PowerShell launches, WSL working directories, lifecycle diagnostics, and process-tree teardown now follow one implementation. Startup failures retain a typed phase and cause, stop operations reverify process identity before escalation, migration and lock durability use platform-aware filesystem rules, and failure to prove process exit stays visible instead of being reported as success.":
    "可执行文件查找、PATH 和 PATHEXT 处理、`.cmd` 与 PowerShell 启动、WSL 工作目录、生命周期诊断和进程树清理现在统一走同一套实现。启动失败会保留带类型的阶段和原因；停止操作在升级处理前会重新确认进程身份；迁移和锁持久性使用平台感知的文件系统规则；如果无法证明进程已经退出，界面会明确显示，而不会误报成功。",
  "Keep Git writing and project picking focused": "让 Git 文案生成和项目选择更聚焦",
  "Git copy is generated only through dedicated backends, while project and composer controls share a cleaner interaction style.":
    "Git 文案只通过专用后端生成，项目和输入框控件也采用更统一的交互方式。",
  "The Git-writing picker now includes Cursor alongside Codex, OpenCode, and Droid while excluding chat-only agents that lack a safe one-shot generation path. The composer is slightly tighter, picker capsules use consistent hover treatment, and the project reset affordance now matches the folder control without losing its highlighted reset state.":
    "Git 文案生成选择器现在除了 Codex、OpenCode 和 Droid，也支持 Cursor；仅支持对话、缺少安全单次生成路径的 Agent 会被排除。输入框布局更紧凑，选择器胶囊按钮的悬停效果保持一致，项目重置控件也与文件夹控件统一，同时保留醒目的重置状态。",

  "Work with Devin from the same Synara workspace": "在同一个 Synara 工作区中使用 Devin",
  "Devin CLI joins Synara as a first-class ACP provider with its own models, commands, modes, usage, attachments, and MCP configuration.":
    "Devin CLI 现已作为完整支持的 ACP 提供商接入 Synara，拥有独立的模型、命令、模式、用量、附件和 MCP 配置。",
  "Synara can start and resume Devin ACP sessions, discover the models and slash commands exposed by the installed CLI, switch Plan mode, compact long conversations, attach files and images, pass compatible MCP servers, and show account usage. Authentication remains owned by Devin through `devin auth login` or its supported API-key environment variables, and provider capabilities are gated so unsupported active-turn steering is never implied.":
    "Synara 可以启动和恢复 Devin ACP 会话，发现已安装 CLI 提供的模型和斜杠命令，切换计划模式，压缩长对话，附加文件和图片，传入兼容的 MCP 服务器，并显示账户用量。认证仍由 Devin 负责，可通过 `devin auth login` 或其支持的 API 密钥环境变量完成；提供商能力会按实际支持情况开放，不会让人误以为不支持的活动轮次引导功能可用。",
  "Give any capable provider the live browser tools": "让所有支持的提供商都能使用实时浏览器工具",
  "WebMCP browser tools are now provider-neutral instead of being tied to one agent runtime.":
    "WebMCP 浏览器工具现在与具体提供商无关，不再绑定某一种 Agent 运行时。",
  "Browser sessions expose the same bounded, task-owned WebMCP surface to supported providers, with consistent tool discovery, invocation, timeouts, result shaping, tab ownership, and lifecycle cleanup. This keeps browser work attached to the correct task while allowing more agents to inspect and operate the page Synara is already showing.":
    "浏览器会话会向支持的提供商开放同一套受限、归属于任务的 WebMCP 能力，工具发现、调用、超时、结果整形、标签页归属和生命周期清理都保持一致。这样，浏览器工作会一直绑定到正确任务，同时让更多 Agent 能检查和操作 Synara 当前显示的页面。",
  "Find anything inside a long conversation": "在长对话中查找任意内容",
  "Press Cmd/Ctrl+F to search the current transcript from a compact floating panel.":
    "按 Cmd/Ctrl+F，即可通过紧凑的悬浮面板搜索当前对话记录。",
  "The search walks real transcript messages, highlights matching text, reports the active result and total count, supports previous/next navigation and keyboard shortcuts, and follows matches without confusing tool-only rows with new assistant output. Closing the panel clears the temporary highlights without changing the conversation.":
    "搜索会遍历真实的对话消息，高亮匹配文本，显示当前结果和总数，并支持上一条、下一条以及键盘快捷键。跳转匹配项时，不会把仅含工具内容的行误当成新的助手输出。关闭面板只会清除临时高亮，不会改动对话。",
  "Models, sidebars, and live replies react faster": "模型、侧边栏和实时回复响应更快",
  "A focused performance pass reduces model-loading delay, sidebar work, toggle churn, and streaming update cost.":
    "本轮性能优化减少了模型加载延迟、侧边栏计算、开关状态抖动和流式更新开销。",
  "Available models are ready sooner, sidebar projections do less repeated work, visibility changes avoid unnecessary updates, and assistant text follows a simpler live-output path. Auto-scroll now responds to real transcript messages rather than buffering, reconnecting, approvals, or tool-only activity, which avoids feedback loops and unwanted jumps while work is merely pending.":
    "可用模型会更早准备好，侧边栏状态计算减少重复工作，可见性变化不会再触发不必要的更新，助手文本也走更简单的实时输出路径。自动滚动现在只响应真实对话消息，不会因缓冲、重连、审批或纯工具活动而动作，从而避免工作只是等待时出现反馈循环和意外跳动。",
  "Queued follow-ups wait, dispatch, and recover predictably":
    "排队中的后续消息会稳定等待、发送和恢复",
  "Follow-ups no longer race the turn ahead of them or strand work when a task is in the background.":
    "后续消息不会再与前一个轮次抢跑，任务在后台时也不会把工作卡住。",
  "Synara holds a queued follow-up until the previous turn has actually started, promotes work for backgrounded tasks, preserves preview contents while capacity is constrained, resumes from the durable cursor after an idle stop, and prevents duplicated streamed replies. Reconnect and settlement paths converge on the same turn instead of replaying visible text twice.":
    "Synara 会等前一轮真正开始后再放行排队中的后续消息；后台任务会被提升以继续工作；容量受限时会保留预览内容；空闲停止后会从持久化游标继续；同时防止流式回复重复。重连和结束处理会汇合到同一轮次，不会把可见文本重放两遍。",
  "Database upgrades fail safely and explain recovery":
    "数据库升级失败时会安全中止，并提供恢复指引",
  "Schema migrations now verify runtime identity, ask before risky recovery, and keep source builds isolated from installed app data.":
    "数据库结构迁移现在会验证运行时身份，在高风险恢复前询问用户，并让源码构建与已安装应用的数据保持隔离。",
  "A source checkout uses its own development home by default instead of silently opening Stable or Canary state. Migration startup verifies that the launcher and database belong together, creates recoverable backups, records recovery state, and presents deliberate restore or retry choices when an upgrade cannot complete. Existing Stable, Canary, and explicit home-directory behavior remains intact.":
    "源码检出目录默认使用自己的开发数据目录，不会静默打开 Stable 或 Canary 的状态。迁移启动时会确认启动器与数据库匹配，创建可恢复备份，记录恢复状态；升级无法完成时，会明确提供恢复或重试选项。现有 Stable、Canary 和显式指定主目录的行为保持不变。",
  "Provider state is controlled by the server and visible in context":
    "提供商状态由服务器控制，并在上下文中可见",
  "Settings, usage, context changes, update notices, and enabled-provider behavior now agree on what the runtime can actually do.":
    "设置、用量、上下文变化、更新提示和已启用提供商的行为，现在都会与运行时真实能力保持一致。",
  "Disabling a provider now prevents server lifecycle execution instead of only hiding it in the interface. Usage is available for every enabled provider Synara can verify, provider-driven context changes appear in the conversation, routine lifecycle hooks stay out of the transcript, and update notices recover when availability checks overlap or temporarily fail.":
    "禁用提供商后，服务器不会再执行其生命周期逻辑，而不只是把它从界面里隐藏。Synara 能验证的每个已启用提供商都会显示用量；由提供商触发的上下文变化会出现在对话中；常规生命周期钩子不会进入对话记录；可用性检查重叠或暂时失败后，更新提示也能恢复。",
  "Side chats keep their place and relationship": "侧边对话会保留位置和关联关系",
  "Parent-linked side chats now survive refreshes and expiry without losing the pane you were working in.":
    "与父任务关联的侧边对话现在能跨刷新和过期继续存在，不会丢失正在使用的面板。",
  "Side-chat leases and parent relationships are stored durably, docked panes restore against the correct task, and archiving or unarchiving no longer discards an active lease. Expired transient state is reclaimed without confusing a regular child task for a disposable side chat.":
    "侧边对话的租约和父级关系会持久保存，停靠面板会恢复到正确任务，归档或取消归档也不会再丢弃仍有效的租约。过期的临时状态会被回收，同时不会把普通子任务误当成可丢弃的侧边对话。",
  "Arrange the sidebar around your workflow": "按自己的工作方式排列侧边栏",
  "The main navigation groups can now be reordered and keep that order across windows and restarts.":
    "主导航分组现在可以重新排序，并会在不同窗口和重启后保留顺序。",
  "Drag the configurable sidebar destinations into the order that suits you. The preference synchronizes through shared local storage, tolerates additions and older saved values, and preserves sensible defaults when stored data is incomplete or invalid.":
    "把可配置的侧边栏入口拖到适合自己的顺序即可。该偏好会通过共享本地存储同步，能兼容新增项目和旧版保存值；当已存数据不完整或无效时，会保留合理的默认顺序。",
  "Files open, reveal, copy, and preview more reliably": "文件打开、定位、复制和预览更可靠",
  "Edited-file cards and workspace references have clearer actions and better path handling.":
    "已编辑文件卡片和工作区引用提供更清晰的操作，路径处理也更可靠。",
  "macOS users can reveal a file in Finder, every platform can copy its path, and Open actions are separated from file management. Missing relative references no longer become misleading chips, valid absolute paths render as badges, dot-prefixed images and attachments are accepted, preview contents survive constrained queues, and numeric PDF destinations resolve to the intended page.":
    "macOS 用户可以在 Finder 中定位文件，所有平台都能复制文件路径，“打开”操作也与文件管理操作分开。缺失的相对路径引用不会再显示成误导性的标签，有效绝对路径会显示为徽标，以点开头的图片和附件可以正常使用，队列容量受限时预览内容仍会保留，数字形式的 PDF 目标也会正确跳到对应页面。",
  "Kilo Code data moves safely to OpenCode": "Kilo Code 数据安全迁移到 OpenCode",
  "The retired Kilo Code provider has been removed, with existing Kilo tasks and preferences migrated to OpenCode.":
    "已停用的 Kilo Code 提供商已移除，现有 Kilo 任务和偏好会迁移到 OpenCode。",
  "The database migration preserves provider sessions and task history while translating the provider kind. Follow-up compatibility handling also moves favorite providers and saved editor-tab state, so older installations do not retain broken Kilo selections after upgrading.":
    "数据库迁移会在转换提供商类型的同时保留提供商会话和任务历史。后续兼容处理还会迁移收藏的提供商以及已保存的编辑器标签页状态，因此旧版安装升级后不会残留失效的 Kilo 选择。",
  "Git, terminal shortcuts, and task metadata stay attached":
    "Git、终端快捷键和任务元数据始终对应正确任务",
  "Pull-request attribution, creation time, terminal numbering, and final replies now resolve against the correct task.":
    "拉取请求归属、创建时间、终端编号和最终回复现在都会按正确任务解析。",
  "Pull requests are attributed to the owning thread rather than a neighboring checkout, created-at ordering remains stable, numbered terminal shortcuts select the intended tab, and the final assistant response remains self-contained after segmented or folded output. Factory Droid can also generate Git commit and pull-request text through the shared action flow.":
    "拉取请求会归到所属对话，而不会误关联到相邻检出目录；按创建时间排序保持稳定；带编号的终端快捷键会选中正确标签页；输出被分段或折叠后，最终助手回复仍保持内容完整。Factory Droid 也能通过共享操作流程生成 Git 提交和拉取请求文案。",
  "Paths, networks, payloads, and credentials fail closed":
    "路径、网络、负载和凭据遇到异常时默认拒绝",
  "A broad boundary audit closes prototype, path, byte-limit, loopback, retry, and temporary-credential edge cases.":
    "一次全面的边界审查修复了对象原型、路径、字节限制、回环地址、重试和临时凭据相关的边缘问题。",
  "Untrusted object keys cannot mutate prototypes, Windows drive-relative paths are rejected while drive roots remain valid, UTF-8 limits count bytes without splitting characters, IPv4-mapped addresses cannot bypass network policy, Retry-After values are validated and bounded, empty streamed chunks settle correctly at limits, and provider credential files use isolated temporary locations.":
    "不受信任的对象键无法修改对象原型；Windows 驱动器相对路径会被拒绝，同时驱动器根路径仍有效；UTF-8 限制按字节计数且不会拆开字符；IPv4 映射地址无法绕过网络策略；Retry-After 值会经过校验并限制范围；空的流式数据块在达到限制时能够正确结束；提供商凭据文件会使用隔离的临时位置。",
  "Desktop updates and platform paths are safer": "桌面更新和平台路径更安全",
  "Electron, backend shutdown, Windows home paths, and source-launch identity received release-focused fixes.":
    "Electron、后端关闭、Windows 主目录路径和源码启动身份都获得了面向发布的修复。",
  "Electron is upgraded to 43.4.1 to include the fix for CVE-2026-70608. POSIX desktop updates now shut the backend down gracefully before replacement, Windows home paths abbreviate consistently, and source validation uses the working directory only when no stronger launcher digest is available.":
    "Electron 已升级到 43.4.1，包含 CVE-2026-70608 的修复。POSIX 桌面更新现在会在替换前正常关闭后端；Windows 主目录路径的缩写方式保持一致；源码校验只有在没有更可靠的启动器摘要时才会使用工作目录。",
  "Provider resumes, compaction, and versions keep their identity":
    "提供商恢复、压缩和版本信息保持身份一致",
  "Replay gates and exact provider metadata prevent stale lifecycle work from appearing as new activity.":
    "重放控制和精确的提供商元数据会防止过期的生命周期工作被显示成新活动。",
  "ACP load replay is suppressed until the restored session is ready, native resume is gated by the provider's real capability, Claude Auto variants match exact context limits and fail closed, compaction refreshes usage from the new boundary, long-message pagination is lossless and Unicode-safe, and prerelease provider versions retain their complete identifiers.":
    "在恢复的会话准备好之前，ACP 加载重放会被抑制；原生恢复只会在提供商确实支持时启用；Claude 自动变体会严格匹配上下文限制，匹配失败时直接拒绝；压缩后会从新的边界刷新用量；长消息分页不会丢失内容，并正确处理 Unicode；预发布提供商版本也会保留完整标识符。",

  "Quit without silently abandoning running chats": "退出时不再静默丢下仍在运行的对话",
  "Synara now shows every chat still working before the desktop app closes and can continue eligible work on the next launch.":
    "桌面应用关闭前，Synara 会列出所有仍在运行的对话，并可在下次启动时继续符合条件的工作。",
  "The quit dialog lists live chats and remembers whether automatic resume is enabled. When you confirm, Synara records the exact in-flight turns before interrupting them, then starts one guarded continuation per unchanged chat after restart. Completed, archived, deleted, replaced, or otherwise advanced work is skipped, and a bounded fallback still lets the app quit if the local server cannot acknowledge the resume record.":
    "退出对话框会列出正在运行的对话，并记住是否启用了自动恢复。确认退出时，Synara 会先记录每个正在执行的轮次，再中断它们；重启后，每个内容未变化的对话只会启动一次受保护的续接。已经完成、归档、删除、被替换或已继续推进的工作会跳过；即使本地服务器无法确认恢复记录，也有受限的回退路径保证应用能够退出。",
  "Keep the browser over the conversation": "让浏览器浮在对话上方",
  "The task browser can now float inside the chat instead of taking over the right sidebar.":
    "任务浏览器现在可以浮在对话内，不必占用右侧边栏。",
  "The floating panel shares the task's existing browser tabs and session, opens automatically when an agent requests the browser, and can be dragged, resized from every edge, closed, or returned to the sidebar. Its bounds stay inside the visible chat surface, new tabs use the current page's context more predictably, and the hidden dock remains preview-only so one live browser guest is never driven by two surfaces.":
    "浮动面板会复用该任务现有的浏览器标签页和会话；Agent 请求浏览器时会自动打开，也可以拖动、从任意边缘调整大小、关闭或放回侧边栏。面板始终限制在可见对话区域内，新标签页会更稳定地沿用当前页面上下文；隐藏的停靠区只保留预览能力，避免同一个实时浏览器实例同时被两个界面控制。",
  "See usage for every signed-in provider": "查看所有已登录提供商的用量",
  "Provider usage is no longer limited to Codex and Claude; Settings and in-context meters now cover every authenticated runtime Synara can verify.":
    "提供商用量不再只支持 Codex 和 Claude；设置页和上下文中的用量指示现在会覆盖 Synara 能验证的所有已认证运行时。",
  "Synara adds account or quota views for Antigravity, Cursor, Grok, OpenCode, and locally authenticated providers, while keeping Codex and Claude's detailed windows. Provider-specific adapters use local credentials or documented account endpoints, share cached snapshots, retain useful stale data through transient failures, apply bounded cooldowns after rate limiting, and explain when a provider exposes sign-in state but no machine-readable quota.":
    "Synara 为 Antigravity、Cursor、Grok、OpenCode 以及本地认证的提供商增加账户或额度视图，同时保留 Codex 和 Claude 的详细窗口。各提供商适配器会使用本地凭据或官方账户接口，共享缓存快照；遇到临时故障时保留仍有参考价值的旧数据；触发限流后采用有上限的冷却时间；如果某个提供商能显示登录状态却没有机器可读的额度，也会明确说明。",
  "Lower CPU, GPU, memory, and Git overhead": "降低 CPU、GPU、内存和 Git 开销",
  "A measured performance pass cuts work in the renderer, sidebar, Git statistics, runtime-event pipeline, and idle provider discovery.":
    "一轮有数据验证的性能优化减少了渲染进程、侧边栏、Git 统计、运行时事件链路以及空闲提供商发现的工作量。",
  "Streaming updates avoid repeated full-array scans and unnecessary visual effects, Git diff statistics are aggregated in one pass, runtime-event handling performs fewer repeated traversals, sidebar spinners pause when hidden, and animated translucency costs less. The server also trims idle Codex discovery sessions sooner while extending the grace period when real requests arrive, reducing process-tree memory without interrupting active model discovery.":
    "流式更新避免重复扫描整个数组和不必要的视觉效果，Git 差异统计改为一次聚合，运行时事件处理减少重复遍历，侧边栏加载动画在不可见时会暂停，动态半透明效果的开销也更低。服务器还会更早清理空闲的 Codex 发现会话，同时在真实请求到来时延长宽限期，从而降低进程树内存占用，又不会中断正在进行的模型发现。",
  "Windows and Linux workspaces feel more native": "Windows 和 Linux 工作区更贴近原生体验",
  "WSL repositories, UNC paths, taskbar icons, and desktop chrome now behave like first-class platform paths and controls.":
    "WSL 仓库、UNC 路径、任务栏图标和桌面窗口控件现在都按平台原生能力处理。",
  "On Windows, a project opened through \\\\wsl.localhost or \\\\wsl$ launches provider commands inside the selected distribution with a Linux cwd, while local-folder mentions and the project browser recognize UNC and Windows home paths. Runtime icon changes now refresh the shell-visible taskbar icon. Windows and Linux users can also switch between Synara's custom title bar and the system title bar from Appearance, with an explicit restart to apply the frame change.":
    "在 Windows 上，通过 \\\\wsl.localhost 或 \\\\wsl$ 打开的项目，会在所选发行版中以 Linux cwd 启动提供商命令；本地文件夹引用和项目浏览器也能识别 UNC 与 Windows 主目录路径。运行时图标变化后，系统任务栏图标会同步刷新。Windows 和 Linux 用户还可以在“外观”中切换 Synara 自定义标题栏和系统标题栏，并通过明确的重启应用窗口框架变更。",
  "Run and inspect Synara without the desktop shell": "无需桌面外壳也能运行和检查 Synara",
  "GitHub releases now include a versioned headless server tarball, and the CLI can verify whether a server is reachable and ready.":
    "GitHub 发布现在会包含带版本号的无界面服务器归档包，CLI 也可以检查服务器是否可访问并已就绪。",
  "The release pipeline builds synara-server-<version>.tar.gz from the same source and web client as the desktop release. The new `synara server status` command discovers the persisted local runtime or accepts an explicit HTTP(S) URL, verifies the runtime identity, probes `/health`, reports projection readiness, supports JSON output, and exits non-zero when the server is unreachable or not ready.":
    "发布流程会使用与桌面版相同的源码和网页客户端构建 synara-server-<version>.tar.gz。新的 `synara server status` 命令可以发现已持久化的本地运行时，也接受显式 HTTP(S) URL；它会验证运行时身份、探测 `/health`、报告投影就绪状态、支持 JSON 输出，并在服务器不可访问或尚未就绪时以非零状态退出。",
  "Send a side chat to another provider": "把侧边对话交给另一个提供商",
  "`/side` can now target a different installed provider without moving the main conversation.":
    "`/side` 现在可以指定另一个已安装的提供商，同时保持主对话不变。",
  "Use `/side <provider> <prompt>` with a provider kind or display name. Synara validates the requested provider against the runtimes currently available to the task, removes the provider token from the child prompt, and keeps the existing guarded side-chat creation and source relationship. Omitting the provider continues to open the side chat on the current runtime.":
    "使用 `/side <provider> <prompt>`，其中 provider 可以填写提供商类型或显示名称。Synara 会根据任务当前可用的运行时验证所请求的提供商，从子任务提示词中移除提供商参数，并保留现有的受保护侧边对话创建流程及来源关系。不指定提供商时，仍会在当前运行时中打开侧边对话。",
  "Provider turns keep their real text, tools, and children":
    "提供商轮次保留真实文本、工具和子任务",
  "Antigravity, OpenCode, Cursor, and Grok received focused lifecycle and option fixes.":
    "Antigravity、OpenCode、Cursor 和 Grok 获得了针对生命周期和选项的修复。",
  "Antigravity now streams tool cards, settles completed turns, routes subagents into child threads, and keeps background task turns alive instead of killing the CLI. OpenCode preserves raw streamed assistant text. Cursor no longer leaves fast mode or Grok HIGH reasoning stuck after their controls are disabled, preserves fallback model options, and Grok's effort picker follows the live CLI model ladders.":
    "Antigravity 现在会流式显示工具卡片、正确结束已完成轮次、把子 Agent 路由到子对话，并让后台任务轮次保持运行，而不会直接终止 CLI。OpenCode 会保留原始流式助手文本。Cursor 在控件被禁用后不会再让快速模式或 Grok 高强度推理残留为卡死状态，也会保留回退模型选项；Grok 的推理强度选择器会跟随 CLI 实时提供的模型档位。",
  "Diagnostics reveal less and reject ambiguous input": "诊断暴露更少信息，并拒绝含糊输入",
  "Process, provider, environment, URL, and fixture diagnostics now apply a broader fail-closed credential policy.":
    "进程、提供商、环境、URL 和测试数据的诊断现在采用更严格的凭据默认拒绝策略。",
  "Synara redacts quoted, wrapped, truncated, serialized, reordered, compact, URL-embedded, and shell-composed secret forms; bounds sanitizer traversal; preserves safe numeric diagnostic tokens; and keeps OpenAI credentials out of restricted provider children. Duplicate Origin headers, off-origin WebSocket token injection, high-water cursor violations, unterminated credentials, and ambiguous command substitutions are rejected instead of being interpreted optimistically.":
    "Synara 会遮盖带引号、包裹、截断、序列化、重排、压缩、嵌入 URL 以及由命令行环境组合出的各类敏感信息形式；限制清理器遍历范围；保留安全的数字诊断令牌；并确保 OpenAI 凭据不会进入受限的提供商子进程。重复 Origin 头、跨来源 WebSocket 令牌注入、超出高水位的游标、未闭合凭据和含糊的命令替换都会被拒绝，不再按乐观方式解释。",
  "Find files and start work with fewer corrective clicks": "查找文件和开始工作时少走弯路",
  "Workspace search ranks and presents results more clearly, while project scripts are available again from the empty landing view.":
    "工作区搜索的排序和结果展示更清楚，空白起始页也重新提供项目脚本。",
  "File search now emphasizes fuzzy matches, keeps the most useful parent path visible, limits mounted rows, debounces server work, and opens directories directly in Explorer. The landing composer and project controls share a flatter, more consistent visual treatment, muted labels and disclosure contrast are normalized, and project script shortcuts remain accessible before a chat exists.":
    "文件搜索现在更突出模糊匹配，保留最有用的父路径信息，限制挂载行数，对服务器请求做防抖，并可直接在资源管理器中打开目录。起始页输入框和项目控件采用更扁平一致的视觉样式，弱化标签和展开控件的对比度保持统一；即使还没有对话，项目脚本快捷入口仍然可用。",
  "Repeated actions and restored state converge safely": "重复操作和状态恢复现在更稳定",
  "Approvals, managed worktrees, feature flags, and route restoration now have stronger replay and ownership fences.":
    "审批、托管 Worktree、功能开关和路由恢复现在有更严格的重放与归属边界。",
  "Duplicate approval responses are rejected durably at the serialized decider. Permanent deletion reclaims only Synara-owned managed worktrees and preserves unowned paths. Malformed cached feature flags reset instead of leaving stale values, route restoration ignores snapshots from superseded refreshes, and large projection repair stops thrashing when the state is already being repaired.":
    "重复的审批响应会在串行化决策器中被持久拒绝。永久删除只回收 Synara 自己管理的 Worktree，不会动未归属路径。格式异常的缓存功能开关会重置，不再保留旧值；路由恢复会忽略已被新刷新取代的快照；大型状态修复在已经进行时也不会反复抖动。",
  "Text, paths, attachments, and origins survive edge cases":
    "文本、路径、附件和来源在边缘情况下仍保持完整",
  "Several low-level boundaries now preserve exact data instead of corrupting, truncating, or misclassifying it.":
    "多处底层边界现在会保留准确数据，不再出现损坏、截断或错误分类。",
  "Process output and bounded runtime text preserve UTF-8 characters split across chunks, multi-dot attachments keep their final extension, Windows workspace comparisons ignore case, Codex prerelease versions retain every hyphenated segment, malformed Claude auth JSON fails closed, missing provider commands are classified consistently, and duplicate HTTP Origin headers are refused.":
    "进程输出和受限运行时文本会正确保留跨数据块拆分的 UTF-8 字符；多点号附件保留最后一个扩展名；Windows 工作区比较忽略大小写；Codex 预发布版本保留所有连字符片段；格式异常的 Claude 认证 JSON 会直接拒绝；缺失的提供商命令采用一致分类；重复的 HTTP Origin 头会被拒绝。",
  "Desktop replies and simulator support recover more cleanly": "桌面回复和模拟器支持恢复更稳",
  "Background completions appear without reloads, terminal fences settle at the right reply, and Xcode 27 beta remains usable.":
    "后台完成的回复无需刷新即可出现，终止边界会对应正确回复，Xcode 27 测试版也能继续使用。",
  "The web client keeps a completed assistant reply attached to its terminal fence until the final post-settle text arrives, including work that finishes in the background. Xcode 27 beta's relocated SimulatorKit framework is discovered by the iOS device helper, and browser navigation guidance now accurately distinguishes supported localhost and file behavior from genuinely blocked destinations.":
    "网页客户端会让已完成的助手回复继续绑定在对应的终止边界上，直到结束后的最终文本到达，后台完成的工作也一样。iOS 设备辅助程序现在能找到 Xcode 27 测试版中已移动位置的 SimulatorKit 框架；浏览器导航提示也会准确区分受支持的 localhost、文件行为和真正被阻止的目标。",
  "A calmer shell with clearer model choices": "界面更清爽，模型选择更清楚",
  "Sidebar surfaces, the landing composer, quit confirmation, and provider pickers received a cohesive visual and interaction pass.":
    "侧边栏界面、起始页输入框、退出确认和提供商选择器进行了统一的视觉与交互调整。",
  "Translucent surfaces have fewer seams and better light/dark contrast, the quit dialog now matches the command palette, and empty-landing controls sit flush with the composer. Claude models sort by their live catalogue order, picker menus have more room for full names, and provider metadata is enforced exhaustively so new runtimes cannot silently miss required UI descriptions.":
    "半透明界面的接缝更少，浅色与深色模式下的对比度更好；退出对话框现在与命令面板风格一致；空白起始页控件也与输入框平齐。Claude 模型会按实时目录顺序排列，选择器菜单为完整名称留出更多空间；提供商元数据会被完整校验，新的运行时不会再静默缺失必需的界面说明。",

  "Build and test iOS apps beside the conversation": "在对话旁直接构建和测试 iOS 应用",
  "The new iOS Simulator pane gives you and supported agents one live, interactive device surface inside Synara.":
    "新的 iOS Simulator 面板在 Synara 内提供一个实时可交互的设备界面，供你和支持的 Agent 使用。",
  "On macOS, Synara can boot and attach simulators, stream their display, install and launch apps, tap, swipe, type, press hardware controls, save screenshots, record the view, and inspect accessibility elements. The source-shipped helper compiles with your selected Xcode, runs in a constrained sandbox, drops slow frames instead of blocking RPC traffic, and reclaims Synara-owned devices after crashes.":
    "在 macOS 上，Synara 可以启动并连接模拟器、流式显示画面、安装和启动应用、点击、滑动、输入、按硬件按键、保存截图、录制画面并检查辅助功能元素。随源码提供的辅助程序会使用你选择的 Xcode 编译，在受限沙箱中运行；遇到慢帧时会丢帧而不是阻塞 RPC 流量，崩溃后也会回收 Synara 创建的设备。",
  "Give a thread a goal and let it keep going": "给对话设定目标，让它持续推进",
  "Persistent goals stay visible, timed, and active across turns, with pause, resume, achievement, and recovery controls.":
    "持久目标会跨轮次保持可见、计时和活动状态，并提供暂停、继续、完成与恢复控制。",
  "Use /goal or the stacked composer panel to set an objective. Synara carries it through provider turns, restarts, retries, and subagent steering, records completed goals, and can automatically start the next continuation after clean completion. Queued user work, approvals, Plan mode, interrupts, failures, timeouts, and repeated blockers all have explicit priority and pause rules so autonomy does not become an uncontrolled loop.":
    "使用 /goal 或输入框上方的堆叠面板设置目标。Synara 会让目标贯穿提供商轮次、重启、重试和子 Agent 引导，记录已完成目标，并可在正常完成后自动开始下一次续接。排队中的用户工作、审批、计划模式、中断、失败、超时和重复阻塞都有明确的优先级与暂停规则，避免自动执行变成失控循环。",
  "See and manage the whole pull-request stack": "查看并管理整组堆叠 PR",
  "Pull-request rows and details now understand stack position, order, readiness, navigation, and merge outcomes.":
    "PR 行和详情现在能识别堆叠位置、顺序、就绪状态、导航关系和合并结果。",
  "Stack badges show where each PR sits, the detail view opens an ordered navigator, and merge copy accounts for drafts, conflicts, and incomplete stack data. Synara uses GitHub's asynchronous merge path when available, falls back safely where needed, and refreshes repository-wide PR state after a stack mutation.":
    "堆叠徽标会显示每个 PR 所在位置，详情页提供有序导航；合并文案也会考虑草稿、冲突和不完整的堆叠数据。可用时，Synara 会使用 GitHub 的异步合并路径；需要时会安全回退；堆叠发生变更后会刷新整个仓库的 PR 状态。",
  "Debug with an evidence-first workflow": "用证据优先的流程进行调试",
  "A new Debug mode guides the selected agent through observe, reproduce, investigate, fix, and verify.":
    "新的调试模式会引导所选 Agent 按观察、复现、调查、修复、验证的顺序处理问题。",
  "Debug is available from the mode menu and /debug, persists across drafts, turns, forks, handoffs, queues, and restarts, and keeps the current runtime permissions. It budgets its instructions across providers, asks structured reproduction questions where supported, and explicitly prevents unverified success claims or invisible assumptions about external state.":
    "调试模式可从模式菜单或 /debug 启用，并会跨草稿、轮次、分叉、转交、队列和重启持续保留，同时沿用当前运行时权限。它会根据不同提供商控制指令长度，在支持时提出结构化的复现问题，并明确阻止未经验证的成功结论或对外部状态的隐含假设。",
  "Search files and code across the workspace": "在整个工作区搜索文件和代码",
  "Open files by name with Cmd/Ctrl+P or search matching source lines with Cmd/Ctrl+Shift+F.":
    "使用 Cmd/Ctrl+P 按名称打开文件，或使用 Cmd/Ctrl+Shift+F 搜索匹配的源码行。",
  "The new command palette ranks file-name matches and provides bounded, grep-style content results with path, line number, and matching text. Search respects the workspace index and ignored files, skips binary content, stays scoped to the active project, and opens the selected result in the right-dock file pane.":
    "新的命令面板会对文件名匹配结果排序，并提供数量受限的 grep 风格内容结果，包含路径、行号和匹配文本。搜索会遵循工作区索引和忽略规则，跳过二进制内容，只在当前项目范围内进行，并在右侧停靠文件面板中打开所选结果。",
  "Fork from the exact message across more providers": "在更多提供商中从指定消息准确分叉",
  "Message-level forks now preserve their source visually and use native provider forks wherever the runtime supports them.":
    "消息级分叉现在会在界面上保留来源，并在运行时支持时使用提供商原生分叉。",
  "Claude, Cursor, Droid, Grok, and OpenCode join Codex with centralized capability checks, timeouts, cleanup, cursor handling, and in-flight-turn protection. A source divider links back to the original conversation, turn counts and resumability metadata survive, and retained transcript reconstruction remains the safe fallback when native forking is unavailable.":
    "Claude、Cursor、Droid、Grok 和 OpenCode 现在与 Codex 一样，统一使用能力检查、超时、清理、游标处理和进行中轮次保护。来源分隔条会链接回原对话，轮次数量和可恢复元数据会被保留；原生分叉不可用时，基于保留对话记录的重建仍作为安全回退。",
  "Automations explain failures and stop on your terms": "自动化会说明失败原因，并按你的规则停止",
  "Choose how many consecutive failures an automation should tolerate, or let it keep retrying indefinitely.":
    "可以设置自动化最多容忍多少次连续失败，也可以让它无限重试。",
  "Failure counts, disable reasons, and timestamps are now durable; a successful run resets the count, hitting the threshold requires an explicit re-enable, and manual reruns keep the evidence intact. Inline creation and editing fields, clearer risk confirmation, optimistic concurrency, and visible disabled-state explanations make the policy easier to understand and safer to change.":
    "失败次数、禁用原因和时间戳现在会持久保存；成功运行会重置计数，达到阈值后必须明确重新启用，手动重跑也会保留原有证据。内联创建和编辑字段、更清楚的风险确认、乐观并发控制以及可见的禁用状态说明，让这套策略更容易理解，修改起来也更稳妥。",
  "Large histories start faster and live output does less work":
    "大型历史记录启动更快，实时输出开销更低",
  "Projector replay and the visible streaming pipeline received a measured performance pass.":
    "状态重放和可见流式输出链路完成了一轮有数据验证的性能优化。",
  "SQLite replay now keeps its primary-key range scan and uses bounded cache and memory-map settings; on the documented 2.9 GB fixture, a lagging replay fell from several minutes to about 24 seconds. Streaming text commits are batched, bottom-follow keys stay stable, layout reads and scroll work are coalesced, store selectors are narrower, and a production-path benchmark now covers the complete event-to-transcript pipeline.":
    "SQLite 重放现在会保持主键范围扫描，并使用有上限的缓存与内存映射设置；在记录的 2.9 GB 测试数据集上，落后重放从数分钟降到约 24 秒。流式文本提交会批量处理，底部跟随键值保持稳定，布局读取和滚动工作会合并，状态选择器范围更窄；生产路径基准测试也覆盖了从事件到对话记录的完整链路。",
  "Provider activity stays visible even when it is unfamiliar":
    "即使活动类型陌生，提供商状态也不会消失",
  "Oversized and previously unmapped runtime events no longer disappear or quarantine an otherwise healthy session.":
    "过大的运行时事件和以前未映射的事件不会再直接消失，也不会把原本正常的会话隔离。",
  "Large event payloads are bounded and truncated while retaining their diagnostic meaning, unknown events surface through a safe fallback row, stale-generation terminal events settle the owning turn, and OpenCode tool titles and lifecycle detail parsing are normalized before persistence.":
    "大型事件负载会在保留诊断意义的前提下限制大小并截断；未知事件会通过安全的回退行显示；旧生命周期代次的终止事件仍会正确结束所属轮次；OpenCode 工具标题和生命周期详情会先规范化再持久保存。",
  "Transcript progress reads in the order it happened": "对话进度按实际发生顺序呈现",
  "Assistant text, tools, reasoning, task progress, change summaries, and footer actions now form a clearer sequence.":
    "助手文本、工具、推理、任务进度、变更摘要和底部操作现在会形成更清晰的顺序。",
  "Text segments interleave with tool rows using provider event order, compacted reasoning stays anchored to its first update, repeated task-list updates collapse into one progressing row, the turn changes card appears before footer actions, and streamed text no longer repeatedly re-arms bottom-stick or redundant highlight scrolling.":
    "文本片段会按提供商事件顺序与工具行交错显示；压缩后的推理固定在首次更新位置；重复的任务列表更新会合并成一条持续进展的记录；本轮变更卡片会出现在底部操作之前；流式文本也不会反复重新触发底部吸附或多余的高亮滚动。",
  "Drafts, branches, diffs, and Git actions keep their context":
    "草稿、分支、差异和 Git 操作保持正确上下文",
  "Switching tasks or repositories is less likely to lose a draft, branch, diff selection, or action explanation.":
    "切换任务或仓库时，更不容易丢失草稿、分支、差异选择或操作说明。",
  "New-chat drafts survive thread switches, local branches remain attached during resume, branch mismatches settle before send, Pull appears when upstream is ahead, Git diff previews follow the selected file, worktree cancellation stays durable, and the shared commit/push/PR dialog keeps disabled reasons while presenting more direct primary actions.":
    "新对话草稿会跨对话切换保留；恢复时本地分支仍正确关联；分支不匹配会在发送前处理完；上游领先时会显示“拉取”；Git 差异预览跟随所选文件；Worktree 取消状态会持久保存；共享的提交/推送/PR 对话框会保留禁用原因，同时提供更直接的主要操作。",
  "Model and usage discovery fails smaller": "模型和用量发现失败时影响范围更小",
  "One malformed model or very large local Codex archive no longer destabilizes an entire catalogue or usage refresh.":
    "单个格式异常的模型或超大的本地 Codex 归档，不会再拖垮整个模型目录或用量刷新。",
  "Synara isolates invalid descriptors, warms every available provider catalogue for new threads, shows installed providers, exposes Pi's maximum thinking level, and turns unknown rate-limit windows into readable labels. Codex usage scans now read archives backward in bounded 64 KiB chunks and skip oversized records without loading entire session files into memory.":
    "Synara 会隔离无效描述符，为新对话预热所有可用提供商的模型目录，显示已安装提供商，提供 Pi 的最高思考等级，并把未知的限流时间窗转换成可读标签。Codex 用量扫描现在会以最多 64 KiB 的数据块反向读取归档，跳过过大的记录，无需把整个会话文件载入内存。",
  "Tune the reading width and act on file links": "调整阅读宽度，并直接操作文件链接",
  "Choose a focused, standard, or wide chat column and use context actions directly from file references.":
    "可以选择紧凑、标准或宽版对话栏，并直接从文件引用执行上下文操作。",
  "Chat width is persisted as a visual preference, while Markdown file links can copy their path, open in Synara, or reveal supported workspace references. File and snippet search use the same direct-to-file workflow for a more consistent navigation path.":
    "对话宽度会作为视觉偏好持久保存；Markdown 文件链接可以复制路径、在 Synara 中打开，或定位受支持的工作区引用。文件搜索和代码片段搜索也使用同一套直达文件流程，让导航路径更一致。",
  "Desktop behavior is more native across macOS and Windows": "macOS 和 Windows 上的桌面行为更原生",
  "Dock and taskbar icons, terminal startup, updater shutdown, timestamps, and action glyphs received a platform-focused pass.":
    "Dock 与任务栏图标、终端启动、更新器关闭、时间戳和操作图标都进行了平台专项调整。",
  "macOS can follow appearance with a dark dock icon, Windows refreshes its taskbar icon after runtime changes and starts Bun PTYs reliably, updater failures no longer erase quit intent, and message metadata now adds day or date context when a time alone would be ambiguous. Sidebar and turn-action icons were simplified and aligned.":
    "macOS 可以根据外观使用深色 Dock 图标；Windows 会在运行时变化后刷新任务栏图标，并可靠启动 Bun PTY；更新器失败不会再清除退出意图；仅显示时间可能产生歧义时，消息元数据会补充星期或日期。侧边栏和轮次操作图标也进行了简化和对齐。",
  "Interrupted and replayed work converges more reliably":
    "中断或重放后，任务状态能更可靠地恢复一致",
  "Queue promotion, snapshot replay, terminal settlement, and goal recovery now preserve durable ordering through restarts and races.":
    "队列中的轮次提升、快照重放、终止结算和目标恢复即使遇到重启或竞态，也会保持一致的持久化顺序。",
  "Queued turns can be promoted replay-safely, stalled projection cursors escape permanent resnapshot loops, superseded projections retain retry backoff, terminal sessions can retry eligible goals, and pause or blocked transitions fence automatic continuation before user interrupts or newer work can be overtaken.":
    "排队轮次可以在保证重放安全的前提下提升；卡住的状态同步游标不会陷入永久重新快照循环；已被取代的状态同步仍保留重试退避；已结束会话可以重试符合条件的目标；暂停或阻塞状态会阻止自动续接抢在用户中断或更新工作之前执行。",
  "Release publication has stricter, clearer gates": "发布流程的门槛更严格、更清楚",
  "The release workflow now uses least-privilege permissions, clean-lane checks, deterministic Windows setup, and scoped unsigned exceptions.":
    "发布工作流现在采用最小权限、独立通道检查、确定性的 Windows 环境设置，以及范围受控的未签名例外。",
  "Publication policy is explicit about when a release can proceed, Windows dependency installation is stabilized, and an unsigned Windows build must still pass packaging, provenance, startup smoke, and artifact-upload checks under an exact version-scoped exception.":
    "发布策略会明确说明何时可以继续发布，Windows 依赖安装也更稳定。即使某个 Windows 构建在指定版本范围内获准不签名，也仍必须通过打包、来源证明、启动冒烟和产物上传检查。",

  "Large histories start and reconnect without a fixed deadline":
    "大型历史记录启动和重连不再受固定时限限制",
  "Synara now keeps waiting for a healthy backend and recovers late connections instead of giving up while a large history is still loading.":
    "大型历史记录仍在加载时，Synara 会继续等待健康的后端，并恢复较晚建立的连接，而不会提前放弃。",
  "Desktop readiness is cancellable but no longer capped by a fixed timeout, WebSocket reconnects use bounded backoff, and orchestration replay filters irrelevant events before decoding them. Startup, resume, and late-event handling now converge without turning a slow database into a false failure.":
    "桌面就绪等待仍可取消，但不再受固定超时限制；WebSocket 重连采用有上限的退避；会话事件重放会先过滤无关事件再解码。启动、恢复和迟到事件处理现在能统一恢复一致，不会再把数据库较慢误判成失败。",
  "Branches and pull requests stay in sync while agents work":
    "Agent 工作时，分支和 PR 状态保持同步",
  "Task metadata now follows branch, worktree, push, and pull-request changes as they happen.":
    "任务元数据现在会实时跟随分支、Worktree、推送和 PR 的变化。",
  "A dedicated Git metadata reactor propagates mid-turn repository changes, recognizes task branches and pull requests more reliably, and repairs stale merged-PR badges. Refresh work is serialized and coalesced so commit, push, and PR actions are not blocked by competing background reads.":
    "专用 Git 元数据监听器会传播轮次进行中的仓库变化，更可靠地识别任务分支和 PR，并修复过期的已合并 PR 徽标。刷新工作会串行并合并执行，避免提交、推送和 PR 操作被竞争中的后台读取阻塞。",
  "Create PR can finish the whole publishing flow": "创建 PR 可以完成整个发布流程",
  "The PR dialog can commit the intended changes, push the branch, and open the pull request as one guided action.":
    "PR 对话框现在可以通过一次引导操作完成提交指定更改、推送分支并创建 PR。",
  "The flow has clearer draft and ready-for-review actions, safer branch and upstream handling, progress-aware controls, and refresh behavior that detaches after the terminal Git action succeeds instead of leaving the UI stuck while metadata catches up.":
    "流程提供更清楚的草稿和“准备审核”操作，更稳妥地处理分支与上游，控件会反映进度；最终 Git 操作成功后，刷新流程会脱离等待，不会因为元数据还在追赶而让界面卡住。",
  "Edit and save files directly from Explorer": "直接在资源管理器中编辑并保存文件",
  "Workspace previews are now useful for small code and text edits without leaving Synara.":
    "工作区预览现在可以直接完成小范围代码和文本编辑，无需离开 Synara。",
  "Explorer file previews support editing, dirty-state tracking, guarded saves, clearer breadcrumbs, and safer path validation. Image overlays and preview layering were also corrected so file inspection remains usable beside the native browser and docked tools.":
    "资源管理器文件预览现在支持编辑、未保存状态跟踪、受保护保存、更清楚的面包屑导航和更安全的路径校验。图片浮层和预览层级也已修正，因此在原生浏览器和停靠工具旁检查文件时仍能正常使用。",
  "Usage limits load faster and survive transient failures": "用量限制加载更快，也能扛住临时故障",
  "Provider usage is fetched once on the server and shared consistently across the sidebar and Settings.":
    "提供商用量现在由服务器统一获取一次，并在侧边栏和设置页中一致共享。",
  "Claude and Codex credential refresh, keychain fallback, request joining, identity-scoped caching, throttling, and stale-but-healthy snapshot retention were hardened. A temporary provider or network failure no longer wipes a previously verified usage view.":
    "Claude 和 Codex 的凭据刷新、钥匙串回退、请求合并、按身份隔离缓存、节流以及保留仍可信旧快照的逻辑都得到强化。临时的提供商或网络故障不会再清空之前已验证的用量视图。",
  "Provider sessions recover from more real-world failures": "提供商会话可从更多真实故障中恢复",
  "Codex, Claude, OpenCode, Grok, Kilo, Antigravity, and ACP sessions now settle and resume more predictably.":
    "Codex、Claude、OpenCode、Grok、Kilo、Antigravity 和 ACP 会话现在能更稳定地结束与恢复。",
  "This release adds focused recovery for transient Grok storage and Kilo credential failures, OpenCode host-policy reinjection and Windows launching, Antigravity cancellation, AskUserQuestion replies, handoff eligibility, inline API keys, model discovery, and late terminal events.":
    "本版本针对多类问题增加恢复处理，包括 Grok 临时存储故障、Kilo 凭据故障、OpenCode 主机策略重新注入和 Windows 启动、Antigravity 取消、AskUserQuestion 回复、转交资格、内联 API 密钥、模型发现以及迟到的终止事件。",
  "Long and streaming conversations do less unnecessary work": "长对话和流式对话减少无效工作",
  "Live output remains visible while background polling, subscriptions, and timeline layout are more selective.":
    "实时输出继续保持可见，同时后台轮询、订阅和时间线布局会更有选择地执行。",
  "Runtime polling adapts to activity, thread subscriptions are retained only where needed, replay avoids duplicate persistence, and timeline rows guard against painted overlap. Loading and Working labels now follow the real send and stream lifecycle instead of sticking after acknowledgements are lost or a live turn is taken over.":
    "运行时轮询会根据活动状态调整；只在需要的地方保留对话订阅；重放会避免重复持久化；时间线行也会防止已绘制内容重叠。“正在加载”和“处理中”标签现在跟随真实的发送与流式生命周期，不会再因为确认丢失或实时轮次被接管而一直残留。",
  "Worktree setup is visible, cancellable, and easier to recover":
    "Worktree 设置过程可见、可取消，也更容易恢复",
  "See setup progress, cancel before dispatch, or open a local checkout when that is the better path.":
    "可以查看设置进度，在发送前取消，或在更合适时直接打开本地检出目录。",
  "Automatic branch creation and attachment were restored, setup races were closed, worktree activity is easier to identify, and imported Codex history can now create a real fork while preserving the source relationship. The configured Git model is also used when naming new worktree branches.":
    "自动创建并关联分支的能力已恢复，设置过程中的竞态已修复，Worktree 活动也更容易识别。导入的 Codex 历史现在可以创建真正的分叉，同时保留来源关系。为新 Worktree 分支命名时，也会使用已配置的 Git 模型。",
  "Choose the desktop icon and preview themes visually": "选择桌面图标，并直观看主题预览",
  "Settings now includes native-style app icon choices and a compact theme mockup picker.":
    "设置页现在提供原生风格的应用图标选项和紧凑的主题预览选择器。",
  "Desktop icon selection persists through renderer startup and updates the packaged macOS presentation. Theme, shortcut, sidebar, composer glass, and translucent surface layouts were tightened, including production-safe backdrop filtering and better fallbacks where native transparency is unavailable.":
    "桌面图标选择会跨渲染进程启动保留，并更新打包后的 macOS 显示效果。主题、快捷键、侧边栏、输入框玻璃效果和半透明界面布局都进一步优化，也加入了适合生产环境的背景滤镜，以及原生透明效果不可用时更好的回退。",
  "Project and keyboard workflows need fewer corrective clicks": "项目和键盘操作少走弯路",
  "Project search focuses immediately, and terminal and side-chat shortcuts behave more predictably.":
    "打开项目搜索后会立即聚焦输入框，终端和侧边对话快捷键也更稳定。",
  "The shared project picker keeps its existing shell while focusing its search field on open. Conditional shortcut edits, keybinding capture, side-chat terminal exits, and shortcut settings were hardened so platform-specific combinations do not silently replace unrelated bindings.":
    "共享项目选择器保留现有外壳，但打开时会直接聚焦搜索框。条件快捷键编辑、按键绑定捕获、侧边对话终端退出和快捷键设置都得到强化，避免平台特有组合静默覆盖无关绑定。",
  "Errors, confirmations, and release notes are easier to find":
    "错误、确认信息和发行说明更容易找到",
  "Task errors now appear as toasts, routine notices remain visible longer, and past releases are available from Help.":
    "任务错误现在会以浮动通知显示，常规提示会保留更久，历史版本说明也可从“帮助”打开。",
  "Shared toast providers now default to a 10-second dismissal while preserving explicitly persistent notices. Error banners moved into the common toast path, copying the active task ID has a dedicated shortcut, and the sidebar Help menu now opens the complete in-app release history.":
    "共享浮动通知默认在 10 秒后消失，同时保留明确设置为持续显示的通知。错误横幅已统一进入浮动通知通道；复制当前任务 ID 有专用快捷键；侧边栏“帮助”菜单现在可以打开完整的应用内发行历史。",
  "Windows, Markdown, images, and pull-request views are sturdier":
    "Windows、Markdown、图片和 PR 视图更稳定",
  "Several small but disruptive platform and rendering failures have been removed.":
    "多处虽小却影响明显的平台和渲染故障已经修复。",
  "Windows OpenCode shim spawning and terminal activity detection were corrected, malformed GitHub-flavored Markdown tables are repaired before rendering, image overlays stack above the browser correctly, PR comments parse more consistently, and diff statistics can use an optional red/green presentation.":
    "Windows 上的 OpenCode 兼容启动脚本进程和终端活动检测已修正；格式异常的 GitHub 风格 Markdown 表格会在渲染前修复；图片浮层会正确显示在浏览器上方；PR 评论解析更一致；差异统计还可以选择红绿配色显示。",

  "A review of the Synara codebase found an analytics configuration that came from the original T3 Code codebase when Synara was created as a clone in March.":
    "审查 Synara 代码库时发现了一项分析配置，它来自最初的 T3 Code 代码库，是 Synara 在 3 月克隆创建时一并带入的。",
  "We did not add it, and we have no access to the PostHog project receiving the events.":
    "这项配置并非我们添加，我们也无权访问接收这些事件的 PostHog 项目。",
  "The configuration has been removed. Synara no longer sends remote product analytics. The events did not include prompts, source code, filenames, or file contents. We're sorry this wasn't caught earlier":
    "这项配置已经移除。Synara 不再发送远程产品分析数据。这些事件不包含提示词、源代码、文件名或文件内容。很抱歉我们没能更早发现这个问题。",

  "Start directly from a GitHub repository": "直接从 GitHub 仓库开始",
  "Create a project from a GitHub URL or repository name and let Synara prepare the local checkout for you.":
    "通过 GitHub URL 或仓库名称创建项目，让 Synara 自动准备本地检出目录。",
  "The new GitHub source in the project dialog validates repository and folder names, uses your GitHub CLI access, reports clone progress, reuses compatible checkouts, and recovers safely from cancellation or a failed registration without leaving an ambiguous project behind.":
    "项目对话框新增 GitHub 来源，会校验仓库与文件夹名称，使用你的 GitHub CLI 访问权限，显示克隆进度，复用兼容的检出目录，并在取消或注册失败后安全恢复，不会留下状态不明的项目。",
  "Side chats stay focused and dependable": "侧边对话更专注，也更可靠",
  "Opening a side chat is more reliable, and moving between its tab, dock, and source task keeps the right conversation in view.":
    "打开侧边对话更稳定，在其标签页、停靠区和来源任务之间切换时，也会保持显示正确的对话。",
  "Side-chat creation now has one shared path with prompt deduplication, safer snapshot retention, and clearer recovery when activation races the new task. Dock navigation and tab presentation were simplified, while temporary user messages keep a distinct dashed treatment until the task becomes permanent.":
    "侧边对话创建现在统一走一条路径，支持提示词去重、更稳妥的快照保留，以及激活与新任务发生竞态时更明确的恢复。停靠区导航和标签页展示也已简化；临时用户消息会保持明显的虚线样式，直到任务正式建立。",
  "Interrupted work settles more cleanly": "被中断的工作能更可靠地收尾",
  "Tasks are less likely to remain stuck or replay the wrong command after a provider restart, delayed event, or partial failure.":
    "提供商重启、事件延迟或部分失败后，任务更不容易卡住，也不会误重放错误命令。",
  "Unreplayable runtime commands are quarantined instead of being dispatched again, terminal provider events reconcile against durable turn state, pending interactions settle against the owning request, and stale lifecycle updates are fenced before they can overwrite newer task state.":
    "无法安全重放的运行时命令会被隔离，不会再次发送；提供商终止事件会根据持久化轮次状态进行对账；待处理交互会归并到所属请求；过期生命周期更新会被拦截，无法覆盖更新的任务状态。",
  "Terminal context goes to the right chat": "终端上下文会发送到正确对话",
  "Add to chat now targets the composer beside the terminal you used, and a normal shell exit closes only that finished tab.":
    "“添加到对话”现在会定位到你所用终端旁的输入框，正常的命令行环境退出也只会关闭已经结束的那个标签页。",
  "Terminal selection actions use a scoped composer registry across the drawer and right dock. Naturally exited sessions clear their activity without a destructive-close prompt, placeholder cleanup, or a duplicate fallback exit command, while live tabs remain untouched.":
    "终端选区操作会在抽屉和右侧停靠区之间使用限定范围的输入框注册表。正常退出的会话会直接清除活动状态，不再弹出破坏性关闭提示、清理占位符或重复执行回退退出命令；仍在运行的标签页不会受影响。",
  "Open work stays visible with less background churn": "已打开的工作持续可见，后台波动更少",
  "File previews and task details now survive more project-path changes while inactive conversations consume less subscription work.":
    "文件预览和任务详情现在能适应更多项目路径变化，非活动对话的订阅开销也更低。",
  "Image, PDF, and workspace previews can relocate safe out-of-root references back into the active project, visible transcript state is retained through overlapping refreshes, and thread-detail subscriptions are narrowed to the conversations that actually need live detail.":
    "图片、PDF 和工作区预览可以把安全的根目录外引用重新定位到当前项目；重叠刷新期间会保留可见对话记录状态；对话详情订阅也只保留给真正需要实时详情的对话。",
  "Notifications respect where your attention is": "通知会根据你的关注位置调整",
  "Completion alerts stay quiet while Synara is in front of you, and provider update notices refresh more reliably when you return.":
    "当 Synara 位于前台时，完成提醒会保持安静；返回应用时，提供商更新提示也会更可靠地刷新。",
  "Foreground detection now includes the native browser pane, toast visibility follows side-chat dock and split routes, and provider update checks retry on focus with fresher scheduling so stale availability does not linger in the sidebar.":
    "前台检测现在包括原生浏览器面板；浮动通知的可见性会跟随侧边对话停靠区和分屏路由；窗口重新获得焦点时，提供商更新检查会按更及时的计划重试，避免过期的可用状态长期留在侧边栏。",

  "Point at exactly what should change": "准确指出需要修改的位置",
  "The visible-browser annotation tool can now inspect page elements and keeps your markers stable while you navigate and refine a request.":
    "可见浏览器的标注工具现在可以检查页面元素，并在你导航页面或完善请求时保持标记稳定。",
  "Element inspection captures clearer geometry and presentation context, markers survive hash navigation and compatible document-key changes, and collapsed or invalid targets are handled safely. The overlay, inspector radii, annotation action, and review labels were polished so selecting and sending precise page feedback feels more dependable.":
    "元素检查会捕获更清楚的几何信息和展示上下文；标记可以跨哈希导航和兼容的文档键值变化保留；折叠或无效目标也会被安全处理。浮层、检查器圆角、标注操作和审核标签都做了调整，让选择并发送精确页面反馈更可靠。",
  "Mic mode starts faster and stops cleanly": "麦克风模式启动更快，也能正常停止",
  "Voice capture now does less work on the main thread, warms the transcription path earlier, and behaves predictably when you stop or cancel.":
    "语音采集减少了主线程工作，会更早预热转写链路，停止或取消时的行为也更稳定。",
  "Recording uses a streamlined encoding path with measured performance coverage, safer startup and shutdown races, guarded authentication and upload admission, and a clearer send-style stop control. Cancel now discards the recording, while fallback transcription remains available when the preferred path cannot be used.":
    "录音采用更精简的编码路径，并有性能测量覆盖；启动与停止竞态更安全，认证和上传入口也有保护，停止控件改成更清楚的发送式样。取消时现在会丢弃录音；首选路径不可用时，仍可使用回退转写。",
  "Approvals and questions settle once": "审批和提问只处理一次",
  "Permission prompts and other requests for your input are less likely to linger, reappear, or acknowledge the wrong task.":
    "权限提示和其他需要你输入的请求，更不容易残留、重复出现或错误确认到别的任务。",
  "Human interactions are now fenced to the owning provider request and turn across Claude and OpenCode. Resolved guards remain resolved, stale cross-turn requests are ignored, retryable interactions stay visible, and OpenCode permission replies wait for a real acknowledgement before Synara clears them.":
    "在 Claude 和 OpenCode 中，人工交互现在严格绑定到所属的提供商请求和轮次。已解除的保护状态会保持已解除；跨轮次的过期请求会被忽略；可重试交互继续保持可见；OpenCode 权限回复会等到真实确认后，Synara 才会清除。",
  "Installed skills and favourite models stay discoverable": "已安装技能和收藏模型始终可发现",
  "Synara now finds installed Claude plugin skills and keeps similarly named favourite models tied to the correct provider.":
    "Synara 现在可以发现已安装的 Claude 插件技能，并确保名称相近的收藏模型仍绑定到正确提供商。",
  "Claude plugin discovery respects install precedence and Windows path boundaries. Model metadata from Pi extensions is normalized without losing resolvable identities, favourite entries distinguish providers, and model-cost context remains accessible in the picker.":
    "Claude 插件发现会遵循安装优先级和 Windows 路径边界。Pi 扩展提供的模型元数据会被规范化，同时保留可解析身份；收藏项会区分提供商；模型成本信息也仍可在选择器中查看。",
  "New messages arrive with less visual churn": "新消息出现时视觉抖动更少",
  "Opening a conversation is bounded even when deferred work stalls, and a sent message now glides to its reading anchor instead of teleporting.":
    "即使延后工作卡住，打开对话也有明确的等待上限；发送后的消息会平滑移动到阅读锚点，不再突然跳过去。",
  "Deferred chat mounting has a tested maximum delay. Transcript anchoring uses one monotonic animation clock and a fixed ease-out path, preserves the common non-virtualized route, refreshes recent activity more reliably, and avoids measurement or sidebar updates turning into scroll feedback.":
    "延后挂载对话已经设置并测试最大延迟。对话记录锚定使用统一的单调动画时钟和固定缓出路径，保留常见的非虚拟化流程，更可靠地刷新最近活动，并避免测量或侧边栏更新反过来触发滚动。",
  "Completion alerts mean the task really completed": "完成提醒只在任务真正完成时出现",
  "Synara no longer treats interrupted or errored work as a successful completion or repeats an alert as timestamps change.":
    "Synara 不会再把被中断或出错的工作当成成功完成，也不会因时间戳变化重复提醒。",
  "Completion identity is now tied to the turn rather than mutable session fields, stale snapshots cannot settle the active turn, and notification deduplication remains stable as status projections converge.":
    "完成身份现在绑定到轮次，而不是可变的会话字段；过期快照无法结束当前活动轮次；状态逐步恢复一致时，通知去重也会保持稳定。",

  "See what needs attention from one Activity view": "在一个“活动”视图中查看所有待关注事项",
  "Switch the sidebar to a compact task inbox that keeps running work, input requests, failures, and recently finished tasks easy to scan.":
    "把侧边栏切换为紧凑的任务收件箱，运行中的工作、输入请求、失败任务和最近完成的任务都能快速浏览。",
  "Activity groups tasks by urgency and recency, keeps important pinned work visible, supports project-scoped filtering, and opens new chats in the latest relevant project. Status indicators settle predictably, stale filters recover to all projects, and the selected view stays in sync across tabs.":
    "“活动”会按紧急程度和最近时间对任务分组，始终保留重要的置顶工作，支持按项目筛选，并在最近相关项目中打开新对话。状态指示会稳定收敛；过期筛选会恢复到全部项目；所选视图也会在标签页之间同步。",
  "Tasks settle and recover more reliably": "任务结束与恢复更可靠",
  "Conversation state now stays closer to the provider's real lifecycle through starts, reconnects, handoffs, and delayed events.":
    "在启动、重连、转交和延迟事件期间，对话状态现在会更贴近提供商真实生命周期。",
  "Session orchestration now fences more stale updates, repairs workspace metadata immediately after a worktree handoff, keeps runtime activity attributed to the correct task, and strengthens recovery when provider or projection state arrives out of order.":
    "会话处理现在会拦截更多过期更新，在 Worktree 转交后立即修复工作区元数据，让运行时活动始终归到正确任务，并在提供商或状态同步结果乱序到达时加强恢复。",
  "Take back scroll control instantly": "立即拿回滚动控制",
  "Touching the transcript during an automatic jump now stops smooth scrolling at the current position instead of fighting your input.":
    "自动跳转过程中只要你操作对话记录，平滑滚动就会停在当前位置，不再和你的操作对抗。",
  "The transcript cancels both native and virtual-list scroll state at the visible offset, guards late tail-settle work after user takeover or task replacement, and preserves the simpler non-virtualized path for ordinary conversation sizes.":
    "对话记录会在当前可见位置停止原生和虚拟列表滚动；用户接管或任务被替换后，迟到的滚动收尾任务不会再干扰界面；普通长度对话仍保留更简单的非虚拟化路径。",
  "Image attachments fail more safely": "图片附件失败时处理更稳妥",
  "Large or awkward images are prepared more defensively before they enter a prompt, with clearer limits and fewer browser-worker edge cases.":
    "大图片或特殊图片在进入提示词前会经过更稳妥的处理，限制更清楚，也减少浏览器工作线程相关边缘问题。",
  "Composer image handling now bounds resize attempts, keeps worker communication scoped correctly, and hardens attachment intake so unsupported or oversized payloads fail predictably instead of destabilizing the draft.":
    "输入框的图片处理现在会限制调整尺寸的尝试次数，确保工作线程通信范围正确，并强化附件接收逻辑；不受支持或过大的负载会按预期失败，不再把草稿状态弄乱。",
  "Sidebar and tool details are easier to read": "侧边栏和工具详情更易读",
  "Surface switching, task hover cards, browser tool rows, and active states received a focused visual and accessibility pass.":
    "界面切换、任务悬停卡片、浏览器工具行和活动状态都进行了针对性的视觉与无障碍优化。",
  "The sidebar surface picker has calmer styling, thread cards keep their active state while hovered, browser actions use clearer presentation, Search is located by its accessible name, and urgent or completed states stay legible in dense task lists.":
    "侧边栏界面选择器样式更克制；对话卡片悬停时仍保留活动状态；浏览器操作的展示更清楚；“搜索”会通过无障碍名称定位；在密集任务列表中，紧急和已完成状态也保持清晰可辨。",

  "Agents can use the visible browser": "Agent 可以使用可见浏览器",
  "Let supported agents navigate and operate the same browser surface you can see, with tabs, snapshots, screenshots, input, dialogs, and workspace-safe file transfer.":
    "让支持的 Agent 直接导航并操作你眼前的同一个浏览器界面，包括标签页、快照、截图、输入、对话框，以及符合工作区安全边界的文件传输。",
  "The browser bridge is provider-agnostic and session-scoped: it reuses Synara's visible Electron WebView, cookies, and authenticated state instead of creating a hidden browser. Agents get bounded semantic snapshots, trusted clicks, typing, key presses, scrolling, selection, dragging, waits, and page diagnostics, while navigation, target refs, timeouts, popup sign-in, uploads, and download approval boundaries stay explicit.":
    "浏览器桥接与具体提供商无关，并按会话隔离：它会复用 Synara 可见的 Electron WebView、浏览器会话数据和认证状态，而不会另建隐藏浏览器。Agent 可以使用受限的语义快照、可信点击、输入、按键、滚动、选择、拖拽、等待和页面诊断；导航、目标引用、超时、弹窗登录、上传和下载审批边界都保持明确。",
  "Annotate the page before you ask": "提问前先在页面上标注",
  "Select elements in the visible browser and send compact, redacted annotations with your message so an agent knows exactly what you mean.":
    "在可见浏览器中选中元素，并随消息发送精简且已脱敏的标注，让 Agent 准确理解你的指向。",
  "Annotations preserve bounded element role, name, text, selector, and page context, support multiple marks with a compact overflow row, survive drafts and transcript rendering, and keep exact-page affinity local. Untrusted page data is clearly separated from user instructions and document-only metadata is removed before provider injection.":
    "标注会在受限范围内保留元素角色、名称、文本、选择器和页面上下文，支持多个标记并用紧凑的溢出行展示，也会跨草稿和对话记录渲染保留；与具体页面的精确关联只保存在本地。不可信的页面数据会与用户指令明确分开，只属于文档的元数据会在注入提供商前移除。",
  "Choose how much autonomy each run has": "选择每次运行拥有多少自主权限",
  "Pick Approval required, Auto, or Full access when the selected provider and model support it, with clearer model, effort, and approval controls.":
    "当所选提供商和模型支持时，可选择“需要审批”“自动”或“完全访问”，并通过更清楚的模型、推理强度和审批控件进行管理。",
  "Runtime mode is validated before dispatch, and automation or delegated work cannot silently escalate its privilege. Codex and Claude Code expose Auto only when capability is confirmed; unsupported or unknown capabilities fail closed to approval-required. The composer and model pickers now explain the effective mode and pending approvals more clearly.":
    "运行时模式会在发送前校验，自动化或委派工作无法静默提升权限。Codex 和 Claude Code 只有在能力已确认时才显示“自动”；不支持或未知能力会安全回退到“需要审批”。输入框和模型选择器现在也会更清楚地说明实际生效模式和待审批事项。",
  "Steer live turns without breaking the transcript": "在不破坏对话记录的情况下引导实时轮次",
  "Send guidance into a running Codex or Claude turn, or keep follow-ups queued, while the current task remains correctly attributed.":
    "可以向正在运行的 Codex 或 Claude 轮次发送引导，也可以让后续消息继续排队，同时保持当前任务归属正确。",
  "Native steer calls travel through provider-aware command handling, runtime activity projection, and lifecycle fencing. Sent user messages, live assistant answers, child work, and terminal events stay attached to the right turn across late or replayed updates, interruptions, and provider restarts.":
    "原生引导调用会经过感知提供商的命令处理、运行时活动同步和生命周期隔离。已发送的用户消息、实时助手回复、子任务工作和终止事件，即使遇到迟到或重放更新、中断以及提供商重启，也会继续绑定到正确轮次。",
  "Streaming conversations stay anchored": "流式对话保持阅读位置稳定",
  "Long or fast responses no longer yank the viewport away from the point you are reading.":
    "长回复或高速输出不会再把视口突然拉离当前阅读位置。",
  "Tail following now uses one shared anchor path across estimated and virtualized rows, sent-message reveals, and native browser end-space. New real transcript messages drive auto-follow; tool rows, buffering, measurements, and reconnect-only updates no longer impersonate user-visible message arrivals.":
    "尾部跟随现在对估算行、虚拟化行、已发送消息定位和原生浏览器尾部空间使用同一条锚定路径。只有新的真实对话消息会驱动自动跟随；工具行、缓冲、测量和仅重连更新不会再被误当成用户可见的新消息。",
  "Reconnects use less bandwidth and recover more state": "重连占用更少带宽，并恢复更多状态",
  "Synara negotiates one authenticated connection, compresses large traffic, and resumes thread detail from a cursor when possible.":
    "Synara 会协商单一认证连接，压缩大流量，并在可能时从游标恢复对话详情。",
  "A single handshake negotiates compatibility and permessage-deflate; delta-capable subscriptions replay from safe cursors with conservative snapshot fallback; precompressed web assets and cache headers speed first loads. Hydration also reads durable projections directly, retries missing snapshots after timed-out starts, and keeps provider notification drains alive until sessions settle.":
    "单次握手会协商兼容性和 permessage-deflate；支持增量的订阅会从安全游标开始重放，并保留保守的快照回退；预压缩网页资源和缓存头能加快首次加载。状态恢复也会直接读取持久化状态，在启动超时后重试缺失快照，并让提供商通知排空过程持续运行到会话稳定结束。",
  "Open workspace tools from one right dock": "从一个右侧停靠区打开工作区工具",
  "A new launcher puts review, terminal, browser, files, side chat, and source control one click away without crowding the composer.":
    "新的启动器把审查、终端、浏览器、文件、侧边对话和源码控制集中到一处，一次点击即可打开，同时不挤占输入框。",
  "Dock panes open at a stable half-shell split, keep live terminal state mounted when switching, and gate tools on the current project and repository. Missed draft promotions are recovered during event routing, so a message is less likely to disappear when the dock or task changes.":
    "停靠面板会以稳定的半屏比例打开，切换时保持实时终端状态挂载，并根据当前项目和仓库决定哪些工具可用。事件路由会补上遗漏的草稿转正处理，因此切换停靠区或任务时，消息更不容易消失。",
  "Provider choices show their real capabilities": "提供商选择会显示真实能力",
  "Model discovery and runtime menus stay useful across cold starts, Claude capabilities, and mixed provider sessions.":
    "模型发现和运行时菜单在冷启动、Claude 能力变化以及混合提供商会话中都能保持可用。",
  "Claude models can be discovered on a cold start, model and effort options use capability-aware ordering and labels, and thread hover cards expose the active provider and model context. Unknown provider update statuses no longer break self-update flows, and Antigravity returns a decision for inactive hook requests instead of launching Synara.":
    "冷启动时也能发现 Claude 模型；模型和推理强度选项会按实际能力排序并标注；对话悬停卡片会显示当前提供商和模型上下文。未知的提供商更新状态不会再破坏自更新流程；Antigravity 对非活动钩子请求会直接返回决定，而不会意外启动 Synara。",
  "Git workflows explain what needs attention": "Git 工作流会说明哪里需要处理",
  "When a branch is behind upstream, Environment surfaces Pull before risky actions, and generated PR bodies can follow repository templates.":
    "当分支落后于上游时，环境面板会在高风险操作前提示“拉取”；生成的 PR 正文也可以遵循仓库模板。",
  "Git action availability now uses one consistent upstream and working-tree state model. PR generation discovers applicable `.github` templates, removes boilerplate instructions, and asks the selected provider to fill the repository's own sections while preserving the fallback body when none exists.":
    "Git 操作可用性现在统一依据上游和工作目录状态模型判断。生成 PR 时会查找适用的 `.github` 模板，移除样板说明，并让所选提供商填写仓库自己的章节；没有模板时仍保留回退正文。",

  "Stop stays responsive under load": "高负载下停止操作仍保持响应",
  "Interrupt and stop actions now take priority over new work, even when a busy Synara server has filled its ordinary command queue.":
    "中断和停止操作现在优先于新工作，即使繁忙的 Synara 服务端已经塞满普通命令队列也一样。",
  "Control, user, and background commands now use separate admission priorities while preserving reserved capacity for recovery. Provider calls and lifecycle locks are bounded too, so one wedged session cannot hold every other task hostage, and failed stop requests now surface an actionable error instead of silently leaving the UI spinning.":
    "控制命令、用户命令和后台命令现在采用不同的准入优先级，同时保留专门用于恢复的容量。提供商调用和生命周期锁也设置了边界，因此单个卡死会话无法拖住所有其他任务；停止请求失败时会显示可处理的错误，不会只让界面一直转圈。",
  "Undo can recover from a partial failure": "撤销操作可从部分失败中恢复",
  "File and conversation reverts now preserve a rescue snapshot before changing your worktree and restore it if the provider rollback fails.":
    "文件和对话回退在修改 Worktree 前会先保存救援快照；如果提供商回滚失败，就用该快照恢复。",
  "Reverts validate checkpoints before mutation, work without a live provider session, retry their deterministic completion step, and clean up managed refs only after the operation commits. Grouped file-change cards undo newest-first, while failures identify any retained rescue ref so recovery remains explicit.":
    "回退会在修改前校验检查点，无需实时提供商会话也能工作，并会重试可确定的收尾步骤；只有操作提交后才清理受管引用。分组文件变更卡会从最新改动开始撤销；失败时会明确指出任何保留的救援引用，方便继续恢复。",
  "Interrupted sessions settle cleanly": "被中断的会话会正确结束",
  "Turns are less likely to remain stuck as running after terminal provider events, restarts, stale resumes, or delayed lifecycle updates.":
    "提供商终止事件、重启、过期恢复或延迟生命周期更新后，轮次更不容易一直卡在“运行中”。",
  "Synara retains enough turn identity to settle late Claude results, fences stale lifecycle generations, reconciles durable provider commands and runtime events, and aligns Codex, Claude, Cursor, and ACP session ownership through start, stop, reconnect, and restart boundaries.":
    "Synara 会保留足够的轮次身份，以正确处理迟到的 Claude 结果；拦截过期的生命周期代次；对持久化提供商命令和运行时事件进行对账；并在启动、停止、重连和重启边界上统一 Codex、Claude、Cursor 与 ACP 的会话归属。",
  "Follow-ups no longer disappear into stale queues": "后续消息不会再掉进过期队列",
  "A thread that looks busy but has no real active turn keeps the composer available instead of accepting a message that cannot be dispatched.":
    "如果对话看起来忙碌但实际上没有活动轮次，输入框会保持可用，而不会接收一条根本无法发送的消息。",
  "Queue draining now requires a queueable live turn, the transcript keeps the newest answer open while terminal state converges, and visible stop failures are reported immediately. These safeguards keep the conversation usable while server-side recovery repairs stale session state.":
    "队列排空现在要求存在可排队的实时轮次；终止状态收敛期间，对话记录会保持最新答案展开；可见的停止失败会立即报告。这些保护让服务端恢复旧会话状态时，对话仍然可用。",
  "Open tasks stay present during refreshes": "刷新期间已打开任务不会消失",
  "Visible task details are retained and re-requested across overlapping snapshot, subscription, and eviction work instead of briefly rendering as an empty conversation.":
    "快照、订阅和逐出操作发生重叠时，会保留并重新请求当前可见的任务详情，不会短暂渲染成空对话。",
  "Thread-detail retention now understands what is on screen, re-arms refreshes that race an in-flight snapshot, and normalizes projections more defensively. Cleanup also preserves archived tasks, newly forked or handed-off tasks, and soft-deleted history without proven manual-delete provenance.":
    "对话详情保留逻辑现在会感知屏幕上正在显示什么；如果刷新与进行中的快照发生竞态，会重新安排刷新；状态规范化也更稳妥。清理过程还会保留已归档任务、新分叉或转交的任务，以及无法证明由用户手动删除的软删除历史。",

  "Every agent's live tool work is visible": "每个 Agent 的实时工具活动都清晰可见",
  "Follow tools as they start, update, and finish across supported providers, with consistent labels and details directly in the transcript.":
    "可以直接在对话记录中跟踪受支持提供商的工具启动、更新和完成过程，并使用一致的标签和详情展示。",
  "Synara now normalizes live and settled tool activity into one presentation model, preserves expandable tool details and interactions, and reconciles terminal states without leaving duplicate or permanently running work rows behind.":
    "Synara 现在会把实时和已结束的工具活动统一到一种展示模型中，保留可展开的工具详情和交互，并正确对账终止状态，不再留下重复或永久显示“运行中”的工作行。",
  "Live tasks recover after reconnects": "实时任务可在重连后恢复",
  "Provider status, active turns, and thread details converge back to the server's real state after dropped connections or delayed events.":
    "连接中断或事件延迟后，提供商状态、活动轮次和对话详情会重新收敛到服务器的真实状态。",
  "Reconnect refreshes preserve useful status while new data arrives, stale live projections are fenced and repaired, settled turns stop polling, and thread-detail ownership is reconciled across lease, snapshot, and subscription races.":
    "重连刷新会在新数据到达前保留仍有用的状态；过期实时状态会被隔离并修复；已结束轮次停止轮询；对话详情归属会在租约、快照和订阅竞态之间完成对账。",
  "Choose whether follow-ups queue or steer": "选择后续消息排队还是直接引导",
  "Set new messages sent during active work to wait their turn or steer the current agent immediately.":
    "可以设置活动工作期间发送的新消息是等待轮到自己，还是立即引导当前 Agent。",
  "The new conversation setting is searchable in Settings and is applied consistently by the composer while a task is running, with Queue as the predictable default and Steer available for more interactive workflows.":
    "新的对话设置可在设置页中搜索，任务运行期间输入框会统一应用该设置。“排队”是稳定可靠的默认选项，“引导”则适合需要更多实时交互的工作流。",
  "Blocked threads can be recovered": "被阻塞的对话可以恢复",
  "When an uncertain provider delivery quarantines a thread, the error banner now offers a safe Unblock thread action.":
    "当提供商是否送达无法确认而导致对话被隔离时，错误横幅现在会提供安全的“解除对话阻塞”操作。",
  "Synara abandons ambiguous blockers oldest-first, then replays only the skipped turn starts. This restores the conversation without risking a duplicate resend of the command whose delivery could not be proven.":
    "Synara 会从最旧的开始放弃状态不明确的阻塞项，然后只重放被跳过的轮次启动。这样可以恢复对话，又不会冒险重复发送那条无法证明是否已送达的命令。",
  "Automations and desktop recovery are tougher": "自动化和桌面恢复更稳健",
  "Dedicated automation runs, clearer completion policies, and bounded desktop crash recovery make unattended work more dependable.":
    "独立的自动化运行、更清楚的完成策略，以及受限的桌面崩溃恢复，让无人值守工作更可靠。",
  "Automation self-cancellation is explicitly authorized, run state and completion policies persist more reliably, renderer crashes use bounded reload recovery with actionable prompts, and process supervision, executable lookup, terminal wrappers, worktrees, and Git status broadcasting handle failure boundaries more carefully.":
    "自动化现在可以明确授权自我取消；运行状态和完成策略的持久化更可靠；渲染进程崩溃时会进行次数受限的重新加载恢复，并给出明确的处理提示；进程监管、可执行文件查找、终端包装程序、Worktree 和 Git 状态广播也会更谨慎地处理故障边界。",
  "Startup and large diffs do less work": "启动和大型差异处理减少无效工作",
  "Synara loads expensive provider and diff machinery only when needed and computes working-tree statistics without transferring full patches.":
    "Synara 只在需要时加载开销较大的提供商和差异处理机制，并且无需传输完整补丁就能计算工作目录统计。",
  "Shell environment probes and orchestration startup state are reused, route chunks are preloaded selectively, supervised process scans are throttled, and React Compiler coverage protects chat, picker, hook, and UI hot paths.":
    "命令行环境探测和会话启动状态会被复用，路由分块会按需预加载，受监管的进程扫描会节流，React Compiler 的覆盖范围也扩展到对话、选择器、钩子和界面热点路径。",
  "Local state stays safer": "本地状态更可靠",
  "Exclusive SQLite locking and stricter migration-artifact cleanup reduce the chance of competing writers or abandoned update files.":
    "SQLite 独占锁和更严格的迁移产物清理，降低了多个写入者竞争或遗留更新文件的风险。",
  "Database access now proves exclusive ownership, migration backups and resumable artifacts receive broader retention and reclamation coverage, and orphan cleanup stays bounded to verified Synara-owned paths.":
    "数据库访问现在必须确认自己拥有独占访问权；迁移备份和可恢复产物得到更完整的保留与回收处理；孤立文件清理也只会作用于已验证属于 Synara 的路径。",
  "Make the Void space your own": "把 Void 空间改成你想要的样子",
  "Rename Void and choose its icon so unassigned projects fit the way you organize your workspace.":
    "可以重命名 Void 并选择图标，让未分配项目更符合你的工作区组织方式。",
  "The custom presentation is stored locally and appears consistently in the sidebar, Space switcher, project pickers, and creation flows, with validation and a one-step reset to the default.":
    "自定义显示会保存在本地，并统一出现在侧边栏、空间切换器、项目选择器和创建流程中；同时提供校验和一步恢复默认值。",
  "Small details are calmer and clearer": "细节更克制，也更清楚",
  "Completion notifications retain useful Markdown context, command menus explain loading and empty states, and Settings are organized around user intent.":
    "完成通知会保留有用的 Markdown 上下文，命令菜单会说明加载和空状态，设置页也按用户目的重新组织。",
  "This release also standardizes settings cards and elevated hover surfaces, simplifies subagent transcript rows, preserves the landing project color, keeps Ctrl-minus zoom working on Windows and browser guests, improves diff and composer hot paths, and makes fenced code, references, nested Markdown, and technical completion summaries safer and easier to read.":
    "本版本还统一了设置卡片和更有层次的悬停界面，简化子 Agent 对话记录行，保留起始页项目颜色，确保 Windows 和浏览器页面中的 Ctrl-minus 缩放可用，优化差异视图与输入框热点路径，并让代码块、引用、嵌套 Markdown 和技术性完成摘要更安全、更易读。",

  "Updates recover safely from interrupted migrations": "更新可以从中断的迁移中安全恢复",
  "Synara now detects and repairs the database state that could leave some 0.6.0 installations stuck during startup.":
    "Synara 现在会检测并修复可能导致部分 0.6.0 安装在启动时卡住的数据库状态。",
  "Migration lineage is validated before launch, recovery uses verified backups and resumable markers, and the desktop supervisor distinguishes recoverable migration failures from ordinary backend exits. The recovery path is covered on macOS, Linux, and Windows, including Windows-specific process and filesystem behavior.":
    "启动前会校验迁移链；恢复过程使用已验证的备份和可恢复标记；桌面监管程序会区分可恢复的迁移失败与普通后端退出。恢复路径覆盖 macOS、Linux 和 Windows，也包括 Windows 特有的进程与文件系统行为。",
  "Projects are easier to enter and switch": "进入和切换项目更方便",
  "Start from the project you want directly in the new-task heading, with fewer intermediate workspace screens and steadier navigation state.":
    "可以直接从新任务标题处选择想要的项目开始，减少中间工作区页面，导航状态也更稳定。",
  "The project name in the empty-chat heading is now a picker trigger, Space navigation is normalized through one shared path, and Studio workspace metadata is repaired during migration so restored tasks open in the right place.":
    "空白对话标题中的项目名现在可以直接打开选择器；空间导航统一走一条共享路径；迁移期间也会修复 Studio 工作区元数据，让恢复后的任务打开在正确位置。",
  "Diff and Git tools stay in sync": "差异和 Git 工具保持同步",
  "Switch diff views, refresh repository state, and copy large virtualized changes without stale controls or missing content.":
    "切换差异视图、刷新仓库状态和复制大型虚拟化变更时，不再出现过期控件或内容缺失。",
  "The diff toolbar now derives its mode and selection consistently, Select All copies the complete virtualized diff, Git status refreshes after actions, and branch controls handle repository and worktree state more predictably.":
    "差异工具栏现在会统一推导模式和选择状态；“全选”会复制完整的虚拟化差异；操作完成后会刷新 Git 状态；分支控件处理仓库和 Worktree 状态也更稳定。",
  "Agent sessions settle and recover more cleanly": "Agent 会话结束与恢复更可靠",
  "Claude, OpenCode, Pi, Codex, and other providers keep their model choices, runtime state, and shutdown boundaries aligned through reconnects and failures.":
    "Claude、OpenCode、Pi、Codex 和其他提供商在重连和故障期间，会保持模型选择、运行时状态和关闭边界一致。",
  "This release fixes Pi model discovery against the current runtime SDK, ignores stale OpenCode plan agents, hardens Claude resume and permission handling, preserves WebSocket requests across reconnect boundaries, and proves process-tree teardown before replacing desktop or provider backends.":
    "本版本修复了 Pi 针对当前运行时 SDK 的模型发现，忽略过期的 OpenCode 计划 Agent，强化 Claude 恢复和权限处理，在重连边界保留 WebSocket 请求，并在替换桌面或提供商后端前确认进程树已彻底退出。",
  "Live work is easier to read": "实时工作状态更易读",
  "Automation rows show state-specific icons, task hydration is calmer, and active conversations avoid unnecessary projection and subscription churn.":
    "自动化行会显示对应状态图标，任务状态恢复更平稳，活动对话也减少不必要的状态同步和订阅波动。",
  "Automation status now distinguishes running, attention, failure, and settled states at a glance. Store projection, thread-detail retention, terminal cleanup, and sidebar updates were tightened so busy workspaces remain responsive and predictable.":
    "自动化状态现在可以一眼区分运行中、需要关注、失败和已结束。状态存储同步、对话详情保留、终端清理和侧边栏更新都得到进一步优化，让繁忙工作区仍保持响应和稳定。",

  "Bring Synara to any MCP-capable agent": "让任何支持 MCP 的 Agent 都能使用 Synara",
  "Connect Codex, Claude Code, Claude Desktop, or another local MCP app, then let it discover your Synara workspace, launch isolated tasks, wait for results, and bring the answer back.":
    "连接 Codex、Claude Code、Claude Desktop 或其他本地 MCP 应用，让它发现你的 Synara 工作区、启动隔离任务、等待结果并取回答案。",
  "Settings → Integrations now provides a copy-ready guided prompt for agentic clients, manual JSON configuration for Claude Desktop and other non-agentic clients, resumable pairing, all-or-selected project access, provider and model discovery, connection status, and immediate revocation. Connections expire, are rate-limited and capability-scoped, and default new work to managed worktrees with approval-required execution; local-checkout, full-access, and project-wide task reading stay behind explicit advanced permissions.":
    "设置 → 集成现在为 Agent 客户端提供可直接复制的引导提示词，为 Claude Desktop 和其他非 Agent 客户端提供手动 JSON 配置，同时支持可恢复配对、全部或指定项目访问、提供商与模型发现、连接状态查看和立即撤销。连接会过期，并受到限流和能力范围限制；新工作默认使用托管 Worktree，并要求审批后执行。本地检出目录、完整访问和读取整个项目任务仍需显式开启高级权限。",
  "Synara's agents can now operate Synara": "Synara 中的 Agent 现在可以操作 Synara",
  "Every supported agent running inside Synara receives built-in tools to understand the app, delegate work, coordinate parallel tasks, inspect failures, and manage automations.":
    "每个在 Synara 内运行的受支持 Agent 都会获得内置工具，用于理解应用、委派工作、协调并行任务、检查失败和管理自动化。",
  "The new Synara Agent Gateway can list and read projects and tasks, create one task or an exact multi-agent batch across providers and models, wait for every result, continue or interrupt work, rename or archive tasks, inspect runtime diagnostics, and manage automation lifecycles. Thread-bound authority, privilege caps, idempotent creation, isolated worktrees, and restart recovery keep delegated work visible and contained.":
    "新的 Synara Agent 网关可以列出并读取项目和任务，创建单个任务或跨提供商与模型的精确多 Agent 批次，等待全部结果，继续或中断工作，重命名或归档任务，检查运行时诊断，并管理自动化生命周期。绑定对话的权限、权限上限、幂等创建、隔离 Worktree 和重启恢复，让委派工作始终可见且边界明确。",
  "Organize projects into Spaces": "用空间整理项目",
  "Create named, icon-based Spaces for the parts of your work that belong together, while unassigned projects remain easy to find in Void.":
    "为彼此相关的工作创建带名称和图标的空间，未分配项目仍可在 Void 中快速找到。",
  "Spaces support persisted ordering, project assignment, drag-and-drop movement, bulk moves, activity indicators, inline creation while adding a project, and numbered keyboard shortcuts for direct switching.":
    "空间支持持久化排序、项目分配、拖放移动、批量移动、活动指示、添加项目时内联创建，以及用数字快捷键直接切换。",
  "Automations become long-running collaborators": "自动化可以成为长期协作者",
  "Ask an agent to suggest or create scheduled and heartbeat automations with memory, limits, notifications, and clear review states.":
    "可以让 Agent 建议或创建定时和心跳自动化，并为其设置记忆、限制、通知和清晰的审核状态。",
  "Automations now support standalone and heartbeat modes, persistent memory, cooldowns, maximum runs, notification and completion policies, pause and resume, proposal review, run reconciliation after interruptions, and richer list rows for unread results, failures, approvals, and changes that need attention.":
    "自动化现在支持独立和心跳模式、持久记忆、冷却时间、最大运行次数、通知与完成策略、暂停与恢复、方案审核，以及中断后的运行对账。列表行也会更清楚地显示未读结果、失败、审批和需要关注的变更。",
  "Claude subagents and workflows are first-class": "Claude 子 Agent 和工作流获得完整支持",
  "Follow Claude's native subagents and dynamic workflows as real Synara work, with live status, phases, tools, usage, steering, and background controls.":
    "Claude 原生子 Agent 和动态工作流现在会作为真正的 Synara 工作呈现，可查看实时状态、阶段、工具、用量和引导，并使用后台控制。",
  "Child tasks are navigable and independently visible, workflow cards show every phase and agent by default, model and effort stay live, and pause, resume, stop, foreground, and background actions remain synchronized through late events and provider restarts.":
    "子任务可以单独导航和查看，工作流卡片默认显示每个阶段和 Agent，模型与推理强度保持实时更新；即使遇到迟到事件和提供商重启，暂停、继续、停止、前台和后台操作也会保持同步。",
  "Bring another task into the conversation": "把另一个任务带入当前对话",
  "Mention an existing Synara task from the composer to give the current agent the right recent context without copying a transcript by hand.":
    "在输入框中引用现有 Synara 任务，即可把合适的近期上下文提供给当前 Agent，无需手动复制对话记录。",
  "Cross-task mentions include bounded recent conversation context together with the source project and provider identity, and disambiguate tasks that share the same title.":
    "跨任务引用会带上受限的近期对话上下文、来源项目和提供商身份，并能区分标题相同的不同任务。",
  "New work starts faster and streams lighter": "新工作启动更快，流式开销更低",
  "New chats paint sooner, model choices arrive earlier, and active turns spend less time on repeated setup, storage, and rendering work.":
    "新对话更快显示，模型选项更早到达，活动轮次在重复设置、存储和渲染上的耗时更少。",
  "Synara prefetches provider models before the composer opens, avoids a redundant first-turn Claude permission wait, prepares Codex overlays without blocking, parallelizes independent turn-start I/O, reduces streaming SQL work, and expands React Compiler coverage across the web app.":
    "Synara 会在输入框打开前预取提供商模型，避免首轮 Claude 重复等待权限，以非阻塞方式准备 Codex 覆盖层，并行执行相互独立的轮次启动 I/O，减少流式 SQL 工作，同时扩大 React Compiler 在网页应用中的覆盖范围。",
  "Provider sessions stay truer to their capabilities": "提供商会话更符合自身真实能力",
  "Claude, Codex, Cursor, Droid, Grok, OpenCode, Kilo, Pi, and Antigravity receive a broad round of model, permission, resume, child-event, and completion fixes.":
    "Claude、Codex、Cursor、Droid、Grok、OpenCode、Kilo、Pi 和 Antigravity 获得了一轮覆盖模型、权限、恢复、子事件和完成状态的修复。",
  "Highlights include Fable 5 and Opus 4.8 in Pi, namespaced Cursor and Grok model support, accurate Claude context windows, official ACP SDK handling, app-owned OpenCode review commands, isolated Codex child events, safer provider updates, preserved blank PATH defaults, and an Antigravity hook that no longer launches Synara unexpectedly.":
    "主要改进包括：Pi 支持 Fable 5 和 Opus 4.8；支持带命名空间的 Cursor 与 Grok 模型；Claude 上下文窗口更准确；使用官方 ACP SDK 处理方式；OpenCode 审查命令由应用管理；Codex 子事件相互隔离；提供商更新更安全；空白 PATH 默认值会被保留；Antigravity 钩子也不会再意外启动 Synara。",
  "Desktop and browser lifecycles recover cleanly": "桌面和浏览器生命周期恢复更可靠",
  "Browser control, Windows shutdown, managed worktrees, durable secrets, thread deletion, and macOS release finalization now fail and recover more predictably.":
    "浏览器控制、Windows 关闭、托管 Worktree、持久凭据、对话删除和 macOS 发布收尾，现在在失败与恢复时都更稳定。",
  "The desktop browser bridge restores discovery, ownership, teardown, and reconnect behavior; Windows waits for the backend to stop; interrupted worktree cleanup resumes safely; deleted work cannot resurrect queued turns; credential writes survive interruption; and universal macOS releases preserve the correct update metadata.":
    "桌面浏览器桥接恢复了发现、归属、清理和重连行为；Windows 会等待后端真正停止；被中断的 Worktree 清理可以安全续接；已删除工作无法重新唤起排队轮次；凭据写入能承受中断；macOS 通用发布也会保留正确的更新元数据。",
  "Hundreds of small edges feel calmer": "大量细节体验更稳",
  "Sharper Markdown hierarchy, steadier pickers, better composer spacing, smarter sidebar priority, clearer Studio Git controls, and new shortcuts make daily work easier to scan.":
    "更清楚的 Markdown 层级、更稳定的选择器、更合理的输入框间距、更智能的侧边栏优先级、更明确的 Studio Git 控件和新增快捷键，让日常工作更容易浏览。",
  "This release also adds Commit and Push from the active task, configurable AppSnap shortcuts, a folder opener in Studio, a slimmer running indicator, reliable Cmd+K search on macOS, fixed PR review counts, safer file-icon lookup, cleaner stacked composer panels, and a global new-task flow that uses the latest project state.":
    "本版本还支持从当前任务直接执行提交和推送、可配置 AppSnap 快捷键、在 Studio 中打开文件夹、更精简的运行指示器、macOS 上可靠的 Cmd+K 搜索，并修复 PR 审核数量，强化文件图标查找，整理堆叠输入面板，同时让全局新任务流程使用最新项目状态。",
};
