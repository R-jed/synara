// FILE: ProviderUsageLimitRows.tsx
// Purpose: Shared provider usage limit-row renderer for Settings and compact
// popovers. Keeps labels, progress tracks, pace details, and tones consistent.

import {
  providerUsagePaceDetails,
  providerUsageProgressTrackProps,
  type ProviderUsageDisplayRow,
} from "~/lib/providerUsageDisplay";
import { cn } from "~/lib/utils";
import { useUiLanguage } from "~/uiLanguage";

import { UsageProgressTrack } from "./UsageProgressTrack";

export type ProviderUsageLimitRowsSurface = "settings" | "popover";

function localizeDurationText(text: string, language: "en" | "zh-CN"): string {
  if (language !== "zh-CN") return text;
  return text
    .replace(/(\d+)d/gu, "$1 天")
    .replace(/(\d+)h/gu, "$1 小时")
    .replace(/(\d+)m/gu, "$1 分钟")
    .replace("<1 分钟", "不到 1 分钟");
}

function localizeResetText(text: string | null, language: "en" | "zh-CN"): string | null {
  if (!text || language !== "zh-CN") return text;
  if (text === "Resets soon") return "即将重置";
  const match = /^Resets in (.+)$/u.exec(text);
  return match ? `${localizeDurationText(match[1] ?? "", language)}后重置` : text;
}

function localizePaceText(text: string | null, language: "en" | "zh-CN"): string | null {
  if (!text || language !== "zh-CN") return text;
  if (text === "Lasts until reset") return "按当前速度可用到重置";
  if (text === "Limit reached") return "已达到限额";
  const reserve = /^(\d+)% in reserve$/u.exec(text);
  if (reserve) return `低于计划用量 ${reserve[1]}%`;
  const deficit = /^(\d+)% in deficit$/u.exec(text);
  if (deficit) return `高于计划用量 ${deficit[1]}%`;
  const runOut = /^Runs out in (.+)$/u.exec(text);
  if (runOut) return `预计 ${localizeDurationText(runOut[1] ?? "", language)}后用尽`;
  return text;
}

function localizeUsageLabel(label: string, language: "en" | "zh-CN", t: (text: string) => string) {
  if (language !== "zh-CN") return label;
  if (label === "Current") return "当前周期";
  if (label === "Daily") return "每日";
  const translated = t(label);
  if (translated !== label) return translated;
  return label.replace(/\b5h\b/gu, "5 小时");
}

function ProviderUsagePaceLine({
  row,
  surface,
}: {
  row: ProviderUsageDisplayRow;
  surface: ProviderUsageLimitRowsSurface;
}) {
  const { language } = useUiLanguage();
  const paceDetails = providerUsagePaceDetails(row);
  if (!paceDetails) return null;

  if (surface === "popover") {
    return (
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-3 text-muted-foreground">
        {paceDetails.amountText ? (
          <div className="min-w-0 truncate tabular-nums">
            {localizePaceText(paceDetails.amountText, language)}
          </div>
        ) : (
          <div />
        )}
        {paceDetails.etaText ? (
          <div className="min-w-0 truncate text-right tabular-nums text-muted-foreground/80">
            {localizePaceText(paceDetails.etaText, language)}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between text-[11px] tabular-nums text-muted-foreground">
      {paceDetails.amountText ? (
        <span>{localizePaceText(paceDetails.amountText, language)}</span>
      ) : (
        <span />
      )}
      {paceDetails.etaText ? <span>{localizePaceText(paceDetails.etaText, language)}</span> : null}
    </div>
  );
}

function ProviderUsageTrack({
  row,
  surface,
}: {
  row: ProviderUsageDisplayRow;
  surface: ProviderUsageLimitRowsSurface;
}) {
  const { language, t } = useUiLanguage();
  const trackProps = providerUsageProgressTrackProps(row);
  const localizedLabel = localizeUsageLabel(row.label, language, t);

  return (
    <UsageProgressTrack
      {...trackProps}
      label={language === "zh-CN" ? `${localizedLabel}剩余` : trackProps.label}
      className={surface === "popover" ? "h-1.5 bg-muted/80" : undefined}
      markerGapClassName={surface === "popover" ? "bg-popover" : undefined}
    />
  );
}

function SettingsUsageLimitRow({ row }: { row: ProviderUsageDisplayRow }) {
  const { language, t } = useUiLanguage();
  const trackProps = providerUsageProgressTrackProps(row);
  const localizedLabel = localizeUsageLabel(row.label, language, t);
  const paceStatus =
    row.pace?.status === "ahead"
      ? "低于计划"
      : row.pace?.status === "on-track"
        ? "符合计划"
        : "高于计划";

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-medium text-foreground">{localizedLabel}</span>
        <span
          className={cn("size-1.5 shrink-0 rounded-full", trackProps.markerClassName)}
          title={
            row.pace
              ? language === "zh-CN"
                ? `用量进度：${paceStatus}`
                : `Usage pace: ${row.pace.status}`
              : undefined
          }
          aria-hidden
        />
      </div>
      <ProviderUsageTrack row={row} surface="settings" />
      <div className="flex items-center justify-between text-[11px] tabular-nums text-muted-foreground">
        <span>{language === "zh-CN" ? `剩余 ${row.remainingLabel}` : row.leftText}</span>
        {row.resetText ? <span>{localizeResetText(row.resetText, language)}</span> : null}
      </div>
      <ProviderUsagePaceLine row={row} surface="settings" />
    </div>
  );
}

function PopoverUsageLimitRow({ row }: { row: ProviderUsageDisplayRow }) {
  const { language, t } = useUiLanguage();
  const localizedLabel = localizeUsageLabel(row.label, language, t);
  return (
    <div className="space-y-1 text-[length:var(--app-font-size-chat-meta,10px)] leading-tight">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-baseline gap-x-3">
        <div className="flex min-w-0 items-baseline gap-1.5">
          <span className="shrink-0 text-[11px] font-medium text-foreground">{localizedLabel}</span>
          <span className="min-w-0 truncate tabular-nums text-foreground">
            {language === "zh-CN" ? `剩余 ${row.remainingLabel}` : row.leftText}
          </span>
        </div>
        <div className="min-w-0 text-right text-muted-foreground">
          {row.resetText ? (
            <div className="truncate tabular-nums">
              {localizeResetText(row.resetText, language)}
            </div>
          ) : null}
        </div>
      </div>
      <ProviderUsageTrack row={row} surface="popover" />
      <ProviderUsagePaceLine row={row} surface="popover" />
    </div>
  );
}

export function ProviderUsageLimitRows({
  rows,
  surface,
}: {
  rows: ReadonlyArray<ProviderUsageDisplayRow>;
  surface: ProviderUsageLimitRowsSurface;
}) {
  if (rows.length === 0) return null;

  return (
    <div className={surface === "settings" ? "space-y-3" : "space-y-1.5"}>
      {rows.map((row) =>
        surface === "settings" ? (
          <SettingsUsageLimitRow key={row.id} row={row} />
        ) : (
          <PopoverUsageLimitRow key={row.id} row={row} />
        ),
      )}
    </div>
  );
}
