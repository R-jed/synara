// FILE: ThemePackEditor.tsx
// Purpose: Per-variant theme card matching the Codex appearance settings layout.
// Layer: Web settings UI
// Exports: ThemePackEditor

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Popover, PopoverPopup, PopoverTrigger } from "./ui/popover";
import { Select, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";
import { toastManager } from "./ui/toast";
import { SettingsCard, SettingsSelectPopup } from "./settings/SettingsPanelPrimitives";
import { LocalFontControl } from "./settings/LocalFontControl";
import { copyTextToClipboard } from "../hooks/useCopyToClipboard";
import { type ChromeTheme, type ThemeMode, type ThemeVariant, useTheme } from "../hooks/useTheme";
import { queryLocalFontFamilies, type LocalFontFamily } from "../lib/localFonts";
import { cn } from "../lib/utils";
import { settingRowAnchorId } from "../settingsNavigation";
import {
  SETTINGS_CARD_ROW_CLASS_NAME,
  SETTINGS_CONTROL_RADIUS_CLASS_NAME,
  SETTINGS_STACKED_ROWS_DIVIDER_CLASS_NAME,
} from "../settingsPanelStyles";
import { ELEVATED_HOVER_SURFACE_RAISED_TEXT_CLASS_NAME } from "../surfaceStyles";
import {
  CODE_THEME_OPTIONS,
  DEFAULT_THEME_STATE,
  getAvailableCodeThemes,
  getCodeThemeSeed,
  resolveThemePack,
} from "../theme/theme.logic";
import { useUiLanguage } from "../uiLanguage";

type ThemePackEditorProps = {
  isActive?: boolean;
  mode?: ThemeMode;
  variant: ThemeVariant;
};

const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;
const COLOR_PICKER_COMMIT_DELAY_MS = 220;

/** Borderless text action in the editor's header chrome (Copy, Import). */
const EDITOR_TEXT_ACTION_CLASS_NAME = cn(
  "rounded-md px-2 py-1 text-xs text-[var(--color-text-foreground-secondary)]",
  ELEVATED_HOVER_SURFACE_RAISED_TEXT_CLASS_NAME,
);

export function ThemePackEditor({
  variant,
  isActive: isActiveProp,
  mode: modeProp,
}: ThemePackEditorProps) {
  const { t } = useUiLanguage();
  const isActive = isActiveProp ?? false;
  const mode = modeProp ?? "system";
  const {
    darkTheme,
    lightTheme,
    exportThemeString,
    importThemeString,
    isDefaultThemePack,
    resetThemeVariant,
    setCodeThemeId,
    setSystemUiFont,
    systemUiFont,
    updateThemeFontSelection,
    updateThemePack,
  } = useTheme();

  const pack = variant === "dark" ? darkTheme : lightTheme;
  const theme = pack.theme;
  const defaultTheme = resolveThemePack(DEFAULT_THEME_STATE, variant).theme;
  const codeThemes = useMemo(() => {
    const options = getAvailableCodeThemes(variant);
    return options.map((option) => ({
      id: option.id,
      label: option.label,
      previewTheme: getCodeThemeSeed(option.id, variant),
      variants: option.variants,
    }));
  }, [variant]);
  const [localFontFamilies, setLocalFontFamilies] = useState<ReadonlyArray<LocalFontFamily> | null>(
    null,
  );
  const [localFontsLoading, setLocalFontsLoading] = useState(false);

  const requestLocalFonts = useCallback(() => {
    if (localFontsLoading || localFontFamilies !== null) return;
    setLocalFontsLoading(true);
    void queryLocalFontFamilies()
      // A permission/user-activation failure can be transient. Leave the catalog
      // unloaded so the next deliberate click can retry instead of caching failure.
      .then(setLocalFontFamilies, () => setLocalFontFamilies(null))
      .finally(() => setLocalFontsLoading(false));
  }, [localFontFamilies, localFontsLoading]);
  const preloadStartedRef = useRef(false);
  useEffect(() => {
    if (preloadStartedRef.current) return;
    preloadStartedRef.current = true;
    requestLocalFonts();
  }, [requestLocalFonts]);
  const codeThemeLabel =
    CODE_THEME_OPTIONS.find((option) => option.id === pack.codeThemeId)?.label ?? pack.codeThemeId;
  const isPristine = isDefaultThemePack(variant);
  const titleLabel = t(variant === "dark" ? "Dark theme" : "Light theme");
  const contextLabel = isActive
    ? mode === "system"
      ? t(`System is currently using this ${variant} slot.`)
      : t("This is the active theme right now.")
    : mode === "system"
      ? t(`Used when your system switches to ${variant}.`)
      : t(`Inactive while the app is locked to ${mode}.`);

  const handleCopy = async () => {
    try {
      await copyTextToClipboard(exportThemeString(variant));
      toastManager.add({
        type: "success",
        title: t("Theme copied"),
        description: t(`Copied the ${variant} theme share string.`),
      });
    } catch {
      toastManager.add({
        type: "error",
        title: t("Copy failed"),
        description: t("Unable to copy the theme share string."),
      });
    }
  };

  const handleImport = (value: string) => {
    importThemeString(value, variant);
  };

  return (
    <SettingsCard divided={false}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:py-3.5">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-foreground">{titleLabel}</h3>
          {!isPristine ? (
            <button
              type="button"
              onClick={() => resetThemeVariant(variant)}
              className={cn(
                "rounded-md px-1.5 py-0.5 text-[11px] text-[var(--color-text-foreground-secondary)]",
                ELEVATED_HOVER_SURFACE_RAISED_TEXT_CLASS_NAME,
              )}
            >
              {t("Reset")}
            </button>
          ) : null}
        </div>
        <div className="flex items-center gap-1">
          <ImportThemeDialog variant={variant} onImport={handleImport} />
          <button
            type="button"
            onClick={() => void handleCopy()}
            className={EDITOR_TEXT_ACTION_CLASS_NAME}
          >
            {t("Copy")}
          </button>
          <Select
            value={pack.codeThemeId}
            onValueChange={(value) => {
              if (typeof value !== "string") return;
              setCodeThemeId(variant, value);
            }}
          >
            <SelectTrigger
              size="sm"
              className={cn(SETTINGS_CONTROL_RADIUS_CLASS_NAME, "ml-1 min-w-52 gap-2")}
              aria-label={`${titleLabel} ${t("Code theme")}`}
            >
              <SelectValue className="flex-1 text-left">
                <CodeThemeSelectOption label={codeThemeLabel} theme={theme} />
              </SelectValue>
            </SelectTrigger>
            <SettingsSelectPopup align="end" alignItemWithTrigger={false} className="p-1.5">
              {codeThemes.map((option) => (
                <SelectItem
                  hideIndicator
                  key={option.id}
                  value={option.id}
                  className={cn(SETTINGS_CONTROL_RADIUS_CLASS_NAME, "px-2 py-2")}
                >
                  <CodeThemeSelectOption label={option.label} theme={option.previewTheme} />
                </SelectItem>
              ))}
            </SettingsSelectPopup>
          </Select>
        </div>
      </div>
      <div className="border-b border-[color:var(--color-border)] px-4 pb-3 text-[11px] text-[var(--color-text-foreground-secondary)]">
        {contextLabel}
      </div>

      <div className={SETTINGS_STACKED_ROWS_DIVIDER_CLASS_NAME}>
        <ThemeRow label={t("Accent")}>
          <ColorPill
            color={theme.accent}
            ariaLabel={`${titleLabel} ${t("Accent color")}`}
            onChange={(next) => updateThemePack(variant, { accent: next })}
            onReset={
              theme.accent !== defaultTheme.accent
                ? () =>
                    updateThemePack(variant, {
                      accent: defaultTheme.accent,
                    })
                : undefined
            }
          />
        </ThemeRow>

        <ThemeRow label={t("Background")}>
          <ColorPill
            color={theme.surface}
            ariaLabel={`${titleLabel} ${t("Background color")}`}
            onChange={(next) => updateThemePack(variant, { surface: next })}
            onReset={
              theme.surface !== defaultTheme.surface
                ? () =>
                    updateThemePack(variant, {
                      surface: defaultTheme.surface,
                    })
                : undefined
            }
          />
        </ThemeRow>

        <ThemeRow label={t("Foreground")}>
          <ColorPill
            color={theme.ink}
            ariaLabel={`${titleLabel} ${t("Foreground color")}`}
            onChange={(next) => updateThemePack(variant, { ink: next })}
            onReset={
              theme.ink !== defaultTheme.ink
                ? () =>
                    updateThemePack(variant, {
                      ink: defaultTheme.ink,
                    })
                : undefined
            }
          />
        </ThemeRow>

        <ThemeRow label={t("UI font")} anchorTitle="UI font">
          <LocalFontControl
            ariaLabel={`${titleLabel} ${t("UI font")}`}
            family={theme.fonts.ui ?? null}
            face={theme.fonts.uiFace ?? null}
            families={localFontFamilies ?? []}
            catalogLoaded={localFontFamilies !== null}
            loading={localFontsLoading}
            specialLabel={t("System default (all themes)")}
            specialSelected={systemUiFont}
            onRequestFonts={requestLocalFonts}
            onSelectSpecial={() => setSystemUiFont(true)}
            onChange={(family, face) => {
              updateThemeFontSelection(variant, "ui", family, face);
              setSystemUiFont(false);
            }}
          />
        </ThemeRow>

        <ThemeRow label={t("Content font")} anchorTitle="Content font">
          <LocalFontControl
            ariaLabel={`${titleLabel} ${t("Content font")}`}
            family={theme.fonts.content ?? null}
            face={theme.fonts.contentFace ?? null}
            families={localFontFamilies ?? []}
            catalogLoaded={localFontFamilies !== null}
            loading={localFontsLoading}
            specialLabel={t("Same as UI")}
            specialSelected={!theme.fonts.content}
            onRequestFonts={requestLocalFonts}
            onSelectSpecial={() => updateThemeFontSelection(variant, "content", null, null)}
            onChange={(family, face) => updateThemeFontSelection(variant, "content", family, face)}
          />
        </ThemeRow>

        <ThemeRow label={t("Code font")} anchorTitle="Code font">
          <LocalFontControl
            ariaLabel={`${titleLabel} ${t("Code font")}`}
            family={theme.fonts.code ?? null}
            face={theme.fonts.codeFace ?? null}
            families={localFontFamilies ?? []}
            catalogLoaded={localFontFamilies !== null}
            loading={localFontsLoading}
            mono
            specialLabel={t("Default (JetBrains Mono)")}
            specialSelected={!theme.fonts.code}
            onRequestFonts={requestLocalFonts}
            onSelectSpecial={() => updateThemeFontSelection(variant, "code", null, null)}
            onChange={(family, face) => updateThemeFontSelection(variant, "code", family, face)}
          />
        </ThemeRow>

        <ThemeRow label={t("Translucent sidebar")}>
          <Switch
            checked={!theme.opaqueWindows}
            onCheckedChange={(checked) => updateThemePack(variant, { opaqueWindows: !checked })}
            aria-label={`${titleLabel} ${t("Translucent sidebar")}`}
          />
        </ThemeRow>

        <ThemeRow label={t("Contrast")}>
          <ContrastSlider
            value={theme.contrast}
            onChange={(next) => updateThemePack(variant, { contrast: next })}
            ariaLabel={`${titleLabel} ${t("Contrast")}`}
          />
        </ThemeRow>
      </div>
    </SettingsCard>
  );
}

export function ThemeLivePreview() {
  const { t } = useUiLanguage();
  return (
    <SettingsCard divided={false}>
      <div className="overflow-hidden rounded-[inherit]">
        <div className="flex items-center justify-between border-b border-[color:var(--color-border)] px-4 py-2.5 text-xs text-[var(--color-text-foreground-secondary)]">
          <span className="font-medium text-[var(--color-text-foreground)]">
            {t("Live preview")}
          </span>
          <span>{t("Theme and code font")}</span>
        </div>
        <div className="space-y-1 p-3 font-chat-code text-[11px] leading-5">
          <div className="rounded-md px-2 text-[var(--color-text-foreground-secondary)]">
            <span className="mr-3 select-none opacity-55">18</span>
            const appearance = currentTheme;
          </div>
          <div className="rounded-md bg-[color-mix(in_srgb,var(--success)_12%,transparent)] px-2 text-[var(--color-text-foreground)]">
            <span className="mr-3 select-none text-[var(--success)]">+</span>
            contentFont: selectedFont,
          </div>
          <div className="rounded-md bg-[color-mix(in_srgb,var(--destructive)_12%,transparent)] px-2 text-[var(--color-text-foreground)]">
            <span className="mr-3 select-none text-[var(--destructive)]">−</span>
            legacyFontInput: true,
          </div>
          <div className="rounded-md px-2 text-[var(--color-text-foreground-secondary)]">
            <span className="mr-3 select-none opacity-55">21</span>
            preview: {t("Updates immediately")}
          </div>
        </div>
      </div>
    </SettingsCard>
  );
}

// ── Row primitive ─────────────────────────────────────────────────────────

function ThemeRow({
  label,
  anchorTitle,
  children,
}: {
  label: string;
  anchorTitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={anchorTitle ? settingRowAnchorId(anchorTitle) : undefined}
      className={cn(
        SETTINGS_CARD_ROW_CLASS_NAME,
        "flex min-h-12 items-center justify-between gap-3",
      )}
    >
      <span className="text-sm text-foreground/90">{label}</span>
      <div className="flex shrink-0 items-center gap-2">{children}</div>
    </div>
  );
}

// ── Color pill ────────────────────────────────────────────────────────────

function ColorPill({
  color,
  ariaLabel,
  onChange,
  onReset,
}: {
  color: string;
  ariaLabel: string;
  onChange: (next: string) => void;
  onReset?: (() => void) | undefined;
}) {
  const { t } = useUiLanguage();
  const commitTimerRef = useRef<number | null>(null);
  const pendingCommitRef = useRef<string | null>(null);
  const colorRef = useRef(color);
  const [draftHexRaw, setDraftHex] = useState<string | null>(null);
  // Derived: once the committed color catches up to the draft (commit round-
  // trip), the draft dissolves in the same render — no state-clearing effect.
  const draftHex = draftHexRaw === color ? null : draftHexRaw;
  const [isOpen, setIsOpen] = useState(false);
  const normalizedDraftHex = draftHex?.trim().toLowerCase() ?? null;
  const previewColor =
    normalizedDraftHex && HEX_COLOR_RE.test(normalizedDraftHex) ? normalizedDraftHex : color;
  const inputValue = draftHex ?? color;
  const textColor = useReadableTextColor(previewColor);
  const ringColor = useReadableTextColor(previewColor, 0.32);

  useEffect(() => {
    colorRef.current = color;
  }, [color]);

  const clearCommitTimer = useCallback(() => {
    if (commitTimerRef.current === null) {
      return;
    }
    window.clearTimeout(commitTimerRef.current);
    commitTimerRef.current = null;
  }, []);

  // Explicit undefined check instead of a ref-reading default parameter,
  // which React Compiler does not support yet (it would skip this component).
  const commitColor = (nextInput?: string | null) => {
    const next = nextInput === undefined ? pendingCommitRef.current : nextInput;
    clearCommitTimer();
    pendingCommitRef.current = null;
    if (!next || next === colorRef.current) {
      return;
    }
    onChange(next);
  };

  const scheduleCommit = (next: string) => {
    pendingCommitRef.current = next;
    clearCommitTimer();
    commitTimerRef.current = window.setTimeout(() => {
      commitColor(next);
    }, COLOR_PICKER_COMMIT_DELAY_MS);
  };

  useEffect(
    () => () => {
      clearCommitTimer();
    },
    [clearCommitTimer],
  );

  // Dragging updates only this local preview; the real theme store is committed
  // after a short idle delay so CSS-var projection stays smooth.
  const handleValidDraft = (next: string) => {
    const normalized = next.trim().toLowerCase();
    setDraftHex(normalized);
    scheduleCommit(normalized);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen);
    if (!nextOpen) {
      commitColor();
      setDraftHex(null);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {onReset ? (
        <button
          type="button"
          onClick={() => {
            clearCommitTimer();
            pendingCommitRef.current = null;
            setDraftHex(null);
            onReset();
          }}
          className={cn(
            "rounded-md p-1 text-[var(--color-text-foreground-tertiary)]",
            ELEVATED_HOVER_SURFACE_RAISED_TEXT_CLASS_NAME,
          )}
          aria-label={`${ariaLabel}，${t("Reset to default")}`}
          title={t("Reset to default")}
        >
          <ResetGlyph />
        </button>
      ) : null}
      <Popover open={isOpen} onOpenChange={handleOpenChange}>
        <PopoverTrigger
          render={
            <button
              type="button"
              className={cn(
                SETTINGS_CONTROL_RADIUS_CLASS_NAME,
                "group relative flex h-8 min-w-44 items-center gap-2 overflow-hidden border px-2 pr-3 text-left transition-[transform,box-shadow] hover:scale-[1.005] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
              )}
              // borderColor rides the readable color so a near-white fill still shows
              // a crisp edge against the (also near-white) settings card.
              style={{ backgroundColor: previewColor, color: textColor, borderColor: ringColor }}
              aria-label={ariaLabel}
            />
          }
        >
          <span
            aria-hidden
            className="block size-5 shrink-0 rounded-full border"
            style={{ borderColor: ringColor }}
          />
          <span className="font-system-ui flex-1 text-[12px] uppercase">{previewColor}</span>
        </PopoverTrigger>
        <PopoverPopup
          align="end"
          side="bottom"
          sideOffset={8}
          className="p-0 [&_[data-slot=popover-viewport]]:p-0"
        >
          <div className="theme-color-picker flex w-56 flex-col gap-3 p-3">
            <HexColorPicker color={previewColor} onChange={handleValidDraft} />
            <input
              type="text"
              value={inputValue}
              onChange={(event) => {
                const next = event.target.value;
                setDraftHex(next);
                if (HEX_COLOR_RE.test(next.trim())) {
                  handleValidDraft(next);
                }
              }}
              onBlur={() => {
                commitColor();
                setDraftHex(null);
              }}
              spellCheck={false}
              maxLength={7}
              className={cn(
                SETTINGS_CONTROL_RADIUS_CLASS_NAME,
                "h-8 border border-[color:var(--color-border-light)] bg-[var(--color-background-elevated-secondary)] px-2 text-center font-chat-code text-xs uppercase outline-none focus:border-[color:var(--color-border-focus)]",
              )}
              aria-label={`${ariaLabel}，${t("Hex value")}`}
            />
          </div>
        </PopoverPopup>
      </Popover>
    </div>
  );
}

function CodeThemeBadge({ theme }: { theme: ChromeTheme }) {
  return (
    <span
      aria-hidden
      className="flex size-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-semibold leading-none"
      style={{
        backgroundColor: theme.surface,
        borderColor: mixColor(theme.surface, theme.ink, 0.16),
        color: theme.accent,
      }}
    >
      Aa
    </span>
  );
}

function CodeThemeSelectOption({ label, theme }: { label: string; theme: ChromeTheme }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <CodeThemeBadge theme={theme} />
      <div className="min-w-0 flex-1">
        <div className="truncate text-[13px] text-[var(--color-text-foreground)]">{label}</div>
      </div>
    </div>
  );
}

// ── Slider ────────────────────────────────────────────────────────────────

function ContrastSlider({
  value,
  onChange,
  ariaLabel,
}: {
  value: number;
  onChange: (next: number) => void;
  ariaLabel: string;
}) {
  const id = useId();
  const fillPct = Math.max(0, Math.min(100, value));
  return (
    <div className="flex items-center gap-3">
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={ariaLabel}
        className="theme-slider h-1.5 w-44 cursor-pointer appearance-none rounded-full bg-transparent focus-visible:outline-none"
        style={{
          background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${fillPct}%, var(--input) ${fillPct}%, var(--input) 100%)`,
        }}
      />
      <span className="w-7 text-right font-chat-code text-xs text-muted-foreground tabular-nums">
        {value}
      </span>
    </div>
  );
}

// ── Import dialog ─────────────────────────────────────────────────────────

function localizeThemeImportError(language: "en" | "zh-CN", message: string): string {
  if (language !== "zh-CN") return message;
  if (message === "Theme share string must start with codex-theme-v1:") {
    return "主题分享代码必须以 codex-theme-v1: 开头。";
  }
  if (message === "Theme share string does not contain valid JSON.") {
    return "主题分享代码中的 JSON 无效。";
  }
  if (message === "Theme share payload must be an object.") return "主题分享代码的内容必须是对象。";
  if (message === "Theme share variant must be either light or dark.") {
    return "主题模式必须是 light 或 dark。";
  }
  if (message === "Theme share theme must be an object.") return "主题内容必须是对象。";
  if (message === "Theme fonts must be an object.") return "主题字体设置必须是对象。";
  if (message === "Theme semanticColors must be an object.") return "主题语义颜色设置必须是对象。";
  if (message === "Theme contrast must be an integer between 0 and 100.") {
    return "主题对比度必须是 0 到 100 之间的整数。";
  }
  const unavailableCodeTheme = message.match(
    /^Code theme "(.+)" is not available for (light|dark)\.$/,
  );
  if (unavailableCodeTheme) {
    return `代码主题“${unavailableCodeTheme[1]}”不支持 ${unavailableCodeTheme[2]} 模式。`;
  }
  const variantMismatch = message.match(
    /^Theme variant mismatch\. Expected (light|dark), received (light|dark)\.$/,
  );
  if (variantMismatch) {
    return `主题模式不匹配。当前需要 ${variantMismatch[1]}，导入内容为 ${variantMismatch[2]}。`;
  }
  const fieldError = message.match(/^(.+) must (.+)\.$/);
  if (fieldError) {
    return `主题字段“${fieldError[1]}”格式无效：${fieldError[2]}。`;
  }
  return "主题分享代码无效，请检查内容后重试。";
}

function ImportThemeDialog({
  variant,
  onImport,
}: {
  variant: ThemeVariant;
  onImport: (value: string) => void;
}) {
  const { language, t } = useUiLanguage();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    try {
      onImport(value);
      toastManager.add({
        type: "success",
        title: t("Theme imported"),
        description: t(`Updated the ${variant} theme pack.`),
      });
      setValue("");
      setError(null);
      setOpen(false);
    } catch (err) {
      setError(
        err instanceof Error
          ? localizeThemeImportError(language, err.message)
          : t("Unable to import that theme string."),
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button type="button" className={EDITOR_TEXT_ACTION_CLASS_NAME}>
            {t("Import")}
          </button>
        }
      />
      <DialogPopup className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {t(variant === "dark" ? "Import dark theme" : "Import light theme")}
          </DialogTitle>
          <p className="text-xs text-muted-foreground">
            {language === "zh-CN" ? (
              <>
                粘贴以{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-chat-code">codex-theme-v1:</code>{" "}
                开头的主题分享代码。代码中的主题模式必须与当前主题一致，并且所选代码主题必须支持该模式。
              </>
            ) : (
              <>
                Paste a{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-chat-code">codex-theme-v1:</code>{" "}
                share string. The embedded variant must match {variant}, and the selected code theme
                must exist for that variant.
              </>
            )}
          </p>
        </DialogHeader>
        <DialogPanel>
          <Textarea
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setError(null);
            }}
            placeholder='codex-theme-v1:{"codeThemeId":"linear",...}'
            spellCheck={false}
            rows={5}
            className="font-chat-code text-[11px]"
            aria-label={t("Theme share string")}
          />
          {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
        </DialogPanel>
        <DialogFooter>
          <DialogClose
            render={
              <Button variant="outline" type="button" size="sm">
                {t("Cancel")}
              </Button>
            }
          />
          <Button
            type="button"
            size="sm"
            disabled={value.trim().length === 0}
            onClick={handleSubmit}
          >
            {t("Import")}
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────

function ResetGlyph() {
  return (
    <svg
      aria-hidden
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <polyline points="3 4 3 10 9 10" />
    </svg>
  );
}

function useReadableTextColor(hex: string, alpha = 1): string {
  const rgb = parseHex(hex);
  if (!rgb) {
    return alpha === 1 ? "#ffffff" : `rgba(255,255,255,${alpha})`;
  }
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  if (luminance > 0.6) {
    return alpha === 1 ? "#1a1c1f" : `rgba(26,28,31,${alpha})`;
  }
  return alpha === 1 ? "#ffffff" : `rgba(255,255,255,${alpha})`;
}

function mixColor(fromHex: string, toHex: string, amount: number): string {
  const from = parseHex(fromHex);
  const to = parseHex(toHex);
  if (!from || !to) return fromHex;
  const clamped = Math.max(0, Math.min(1, amount));
  const r = Math.round(from.r + (to.r - from.r) * clamped);
  const g = Math.round(from.g + (to.g - from.g) * clamped);
  const b = Math.round(from.b + (to.b - from.b) * clamped);
  return `rgb(${r}, ${g}, ${b})`;
}

function parseHex(hex: string): { r: number; g: number; b: number } | null {
  if (!HEX_COLOR_RE.test(hex)) return null;
  const value = hex.slice(1);
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}
