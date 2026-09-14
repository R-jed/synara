import { useVirtualizer } from "@tanstack/react-virtual";
import { type CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { ThemeFontFaceSelection } from "../../theme/theme.logic";
import type { LocalFontFamily } from "../../lib/localFonts";
import { cn } from "../../lib/utils";
import { SETTINGS_CONTROL_RADIUS_CLASS_NAME } from "../../settingsPanelStyles";
import { useUiLanguage } from "../../uiLanguage";
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxStatus,
} from "../ui/combobox";
import { Select, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { SettingsSelectPopup } from "./SettingsPanelPrimitives";

const AUTO_FONT_FACE_VALUE = "__auto__";

function renderFontItem(itemValue: string, index: number, style?: CSSProperties) {
  return (
    <ComboboxItem
      key={itemValue}
      index={index}
      value={itemValue}
      style={style}
      className="truncate whitespace-nowrap font-normal text-[var(--color-text-foreground)]"
    >
      {itemValue}
    </ComboboxItem>
  );
}

export function LocalFontControl({
  family,
  face,
  families,
  catalogLoaded,
  loading,
  specialLabel,
  specialSelected,
  ariaLabel,
  mono: monoProp,
  onRequestFonts,
  onSelectSpecial,
  onChange,
}: {
  family: string | null;
  face: ThemeFontFaceSelection | null;
  families: ReadonlyArray<LocalFontFamily>;
  catalogLoaded: boolean;
  loading: boolean;
  specialLabel: string;
  specialSelected: boolean;
  ariaLabel: string;
  mono?: boolean;
  onRequestFonts: () => void;
  onSelectSpecial: () => void;
  onChange: (family: string, face: ThemeFontFaceSelection | null) => void;
}) {
  const { t } = useUiLanguage();
  const mono = monoProp ?? false;
  const selectedValue = specialSelected ? specialLabel : family;
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visibleFamilies = useMemo(
    () =>
      normalizedQuery.length === 0
        ? families
        : families.filter((candidate) =>
            candidate.family.toLocaleLowerCase().includes(normalizedQuery),
          ),
    [families, normalizedQuery],
  );
  const knownItemValues = useMemo(
    () => [
      specialLabel,
      ...families.map((candidate) => candidate.family),
      ...(family && !families.some((candidate) => candidate.family === family) ? [family] : []),
    ],
    [families, family, specialLabel],
  );
  const filteredItemValues = useMemo(
    () => [
      ...(normalizedQuery.length === 0 || specialLabel.toLocaleLowerCase().includes(normalizedQuery)
        ? [specialLabel]
        : []),
      ...visibleFamilies.map((candidate) => candidate.family),
    ],
    [normalizedQuery, specialLabel, visibleFamilies],
  );
  const localFamily = family
    ? families.find(
        (candidate) => candidate.family.toLocaleLowerCase() === family.toLocaleLowerCase(),
      )
    : undefined;
  const faceOptions = localFamily?.faces ?? [];
  const selectedFaceLabel = face?.style ?? t("Auto");

  const shouldVirtualize = filteredItemValues.length > 60;
  const listScrollElementRef = useRef<HTMLDivElement | null>(null);
  const listVirtualizer = useVirtualizer({
    count: filteredItemValues.length,
    estimateSize: () => 28,
    getScrollElement: () => listScrollElementRef.current,
    overscan: 10,
    enabled: isOpen && shouldVirtualize,
    initialRect: { height: 224, width: 256 },
  });
  const virtualRows = listVirtualizer.getVirtualItems();
  const setListRef = useCallback(
    (element: HTMLDivElement | null) => {
      listScrollElementRef.current = (element?.parentElement as HTMLDivElement | null) ?? null;
      if (element) listVirtualizer.measure();
    },
    [listVirtualizer],
  );

  useEffect(() => {
    if (!isOpen || !shouldVirtualize) return;
    queueMicrotask(() => listVirtualizer.measure());
  }, [isOpen, listVirtualizer, shouldVirtualize, visibleFamilies.length]);

  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className="min-w-0" onPointerDown={onRequestFonts} onFocusCapture={onRequestFonts}>
        <Combobox
          items={knownItemValues}
          filteredItems={filteredItemValues}
          value={selectedValue}
          inputValue={isOpen ? query : (selectedValue ?? "")}
          virtualized={shouldVirtualize}
          onItemHighlighted={(_value, eventDetails) => {
            if (!isOpen || eventDetails.index < 0 || !shouldVirtualize) return;
            listVirtualizer.scrollToIndex(eventDetails.index, { align: "auto" });
          }}
          onOpenChange={(open) => {
            setIsOpen(open);
            if (!open) setQuery("");
          }}
          onInputValueChange={setQuery}
          onValueChange={(nextValue) => {
            if (!nextValue) return;
            if (nextValue === specialLabel) {
              onSelectSpecial();
              return;
            }
            const nextFamily = families.find((candidate) => candidate.family === nextValue);
            if (nextFamily) onChange(nextFamily.family, null);
          }}
        >
          <ComboboxInput
            size="sm"
            variant="soft"
            showTrigger
            spellCheck={false}
            autoComplete="off"
            className={cn("w-52 sm:w-56", mono && "font-chat-code")}
            aria-label={ariaLabel}
            onFocus={(event) => event.currentTarget.select()}
          />
          <ComboboxPopup className="w-64 min-w-64 font-system-ui">
            {loading ? <ComboboxStatus>{t("Loading local fonts…")}</ComboboxStatus> : null}
            {!loading && catalogLoaded && visibleFamilies.length === 0 ? (
              <ComboboxStatus>{t("No matching installed fonts.")}</ComboboxStatus>
            ) : null}
            {!loading && !catalogLoaded ? (
              <ComboboxStatus>{t("Click the field to load installed fonts.")}</ComboboxStatus>
            ) : null}
            <ComboboxList ref={setListRef} className="max-h-56">
              {shouldVirtualize ? (
                <div className="relative" style={{ height: `${listVirtualizer.getTotalSize()}px` }}>
                  {virtualRows.map((virtualRow) => {
                    const itemValue = filteredItemValues[virtualRow.index];
                    if (!itemValue) return null;
                    return renderFontItem(itemValue, virtualRow.index, {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${virtualRow.start}px)`,
                    });
                  })}
                </div>
              ) : (
                filteredItemValues.map((itemValue, index) => renderFontItem(itemValue, index))
              )}
            </ComboboxList>
          </ComboboxPopup>
        </Combobox>
      </div>

      <Select
        value={face?.postscriptName ?? AUTO_FONT_FACE_VALUE}
        disabled={specialSelected || !family || faceOptions.length === 0}
        onValueChange={(nextValue) => {
          if (!family || typeof nextValue !== "string") return;
          if (nextValue === AUTO_FONT_FACE_VALUE) {
            onChange(family, null);
            return;
          }
          const nextFace = faceOptions.find((candidate) => candidate.postscriptName === nextValue);
          if (nextFace) onChange(family, nextFace);
        }}
      >
        <SelectTrigger
          size="sm"
          className={cn(SETTINGS_CONTROL_RADIUS_CLASS_NAME, "w-32")}
          aria-label={`${ariaLabel} ${t("Font face")}`}
        >
          <SelectValue>{selectedFaceLabel}</SelectValue>
        </SelectTrigger>
        <SettingsSelectPopup align="end" alignItemWithTrigger={false} className="p-1.5">
          <SelectItem hideIndicator value={AUTO_FONT_FACE_VALUE}>
            {t("Auto")}
          </SelectItem>
          {faceOptions.map((candidate) => (
            <SelectItem
              hideIndicator
              key={candidate.postscriptName}
              value={candidate.postscriptName}
            >
              {candidate.style}
            </SelectItem>
          ))}
        </SettingsSelectPopup>
      </Select>
    </div>
  );
}
