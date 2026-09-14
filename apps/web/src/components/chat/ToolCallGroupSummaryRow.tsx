// FILE: ToolCallGroupSummaryRow.tsx
// Purpose: Collapsed summary disclosure for a settled run of tool calls
//          ("Ran 2 commands, Edited 2 files"); expands to the individual rows.
// Layer: Web chat presentation component
// Exports: ToolCallGroupSummaryRow
// Depends on: DisclosureRegion/DisclosureChevron (shared disclosure motion)

import { useEffect, useState, type ReactNode } from "react";

import { DisclosureChevron } from "../ui/DisclosureChevron";
import { DisclosureRegion } from "../ui/DisclosureRegion";
import { DISCLOSURE_CLEANUP_BUFFER_MS, DISCLOSURE_TRANSITION_MS } from "~/lib/disclosureMotion";
import { cn } from "~/lib/utils";
import { MUTED_LABEL_TEXT_CLASS_NAME } from "~/surfaceStyles";
import { useUiLanguage } from "~/uiLanguage";
import { extractWebFetchUrl } from "../../lib/toolCallLabel";
import { LinkChipIcon } from "../LinkChipIcon";
import type { ToolCallGroupSummary } from "./toolCallGroup.logic";
import { renderWorkEntryIcon, workEntryLeftIcon } from "./TimelineWorkEntryRow";

export function ToolCallGroupSummaryRow(props: {
  summary: ToolCallGroupSummary;
  open: boolean;
  onToggle: (open: boolean) => void;
  fontSizePx: number;
  renderChildren: () => ReactNode;
}) {
  const { summary, open, onToggle, fontSizePx, renderChildren } = props;
  const { language } = useUiLanguage();
  const [keepChildrenMounted, setKeepChildrenMounted] = useState(open);
  const summaryLabel =
    language === "zh-CN"
      ? summary.parts
          .map((part) => {
            switch (part.category) {
              case "command":
                return `运行了 ${part.count} 条命令`;
              case "edit":
                return `编辑了 ${part.count} 个文件`;
              case "read":
                return `读取了 ${part.count} 个文件`;
              case "search":
                return `搜索了 ${part.count} 个文件`;
              case "agent":
                return `运行了 ${part.count} 个 Agent 任务`;
              case "tool":
                return `使用了 ${part.count} 个工具`;
              case "other":
                return summary.parts.length === 1
                  ? `运行了 ${part.count} 次工具调用`
                  : `其他 ${part.count} 次工具调用`;
            }
          })
          .join("，")
      : summary.label;

  useEffect(() => {
    if (open) {
      setKeepChildrenMounted(true);
      return;
    }
    if (!keepChildrenMounted) return;
    const cleanup = window.setTimeout(
      () => setKeepChildrenMounted(false),
      DISCLOSURE_TRANSITION_MS + DISCLOSURE_CLEANUP_BUFFER_MS,
    );
    return () => window.clearTimeout(cleanup);
  }, [keepChildrenMounted, open]);

  const shouldRenderChildren = open || keepChildrenMounted;

  // The collapsed row wears its first entry's icon (favicon for web fetches),
  // so folding a run of tool calls keeps the leading glyph of the row it hides.
  const iconWebFetchUrl = extractWebFetchUrl(summary.iconEntry);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1.5 py-0.5 text-left transition-colors duration-200 hover:text-foreground",
          MUTED_LABEL_TEXT_CLASS_NAME,
        )}
        style={{ fontSize: `${fontSizePx}px` }}
        onClick={() => onToggle(!open)}
      >
        <span className="flex size-4 shrink-0 items-center justify-center" aria-hidden>
          {iconWebFetchUrl ? (
            <LinkChipIcon url={iconWebFetchUrl} className="size-3.5" />
          ) : (
            renderWorkEntryIcon(workEntryLeftIcon(summary.iconEntry), "size-3.5")
          )}
        </span>
        <span>{summaryLabel}</span>
        {/* One step quieter than the label, matching the per-row disclosure chevron. */}
        <DisclosureChevron open={open} className="text-muted-foreground/70" />
      </button>
      <DisclosureRegion open={open}>
        {shouldRenderChildren ? renderChildren() : null}
      </DisclosureRegion>
    </div>
  );
}
