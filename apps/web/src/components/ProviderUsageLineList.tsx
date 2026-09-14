// FILE: ProviderUsageLineList.tsx
// Purpose: Shared provider-usage line renderer for settings cards and compact popovers.
// Keeps label/value/subtitle semantics consistent while allowing each surface its own density.

import type { OpenUsageUsageLine } from "~/lib/openUsageRateLimits";
import { cn } from "~/lib/utils";
import { useUiLanguage } from "~/uiLanguage";

type ProviderUsageLineListSurface = "settings" | "popover";

const SURFACE_CLASSES: Record<
  ProviderUsageLineListSurface,
  {
    item: string;
    row: string;
    label: string;
    value: string;
    subtitle: string;
  }
> = {
  settings: {
    item: "space-y-0.5",
    row: "flex items-center justify-between gap-2 text-xs",
    label: "font-medium text-foreground",
    value: "text-right tabular-nums text-muted-foreground",
    subtitle: "text-[11px] text-muted-foreground/80",
  },
  popover: {
    item: "space-y-0.5",
    row: "flex items-center justify-between gap-2 leading-tight",
    label: "text-[11px] font-medium text-foreground",
    value: "text-right text-[length:var(--app-font-size-chat-meta,10px)] text-muted-foreground",
    subtitle:
      "text-[length:var(--app-font-size-chat-meta,10px)] leading-tight text-muted-foreground/80",
  },
};

function localizeUsageValue(
  value: string,
  language: "en" | "zh-CN",
  t: (text: string) => string,
): string {
  if (language !== "zh-CN") return value;

  const translated = t(value);
  if (translated !== value) return translated;

  const remainingOfTotal = /^(.+) of (.+) remaining$/u.exec(value);
  if (remainingOfTotal) return `剩余 ${remainingOfTotal[1]}，共 ${remainingOfTotal[2]}`;

  const remaining = /^(.+) remaining$/u.exec(value);
  if (remaining) return `剩余 ${remaining[1]}`;

  const ofTotal = /^(.+) of (.+)$/u.exec(value);
  if (ofTotal) return `${ofTotal[1]} / ${ofTotal[2]}`;

  const acuLimit = /^(.+) ACU limit$/u.exec(value);
  if (acuLimit) return `ACU 上限 ${acuLimit[1]}`;

  const limit = /^(.+) limit$/u.exec(value);
  if (limit) return `上限 ${limit[1]}`;

  const spent = /^(.+) spent$/u.exec(value);
  if (spent) return `已使用 ${spent[1]}`;

  const used = /^(.+) used$/u.exec(value);
  if (used) return `已使用 ${used[1]}`;

  return value;
}

export function ProviderUsageLineList({
  className,
  lines,
  surface,
}: {
  className?: string | undefined;
  lines: ReadonlyArray<OpenUsageUsageLine>;
  surface: ProviderUsageLineListSurface;
}) {
  const { language, t } = useUiLanguage();
  const classes = SURFACE_CLASSES[surface];

  return (
    <div className={cn("space-y-1.5", className)}>
      {lines.map((line) => (
        <div key={`${line.label}:${line.value}`} className={classes.item}>
          <div className={classes.row}>
            <span className={classes.label}>{t(line.label)}</span>
            <span className={classes.value}>{localizeUsageValue(line.value, language, t)}</span>
          </div>
          {line.subtitle ? <div className={classes.subtitle}>{t(line.subtitle)}</div> : null}
        </div>
      ))}
    </div>
  );
}
