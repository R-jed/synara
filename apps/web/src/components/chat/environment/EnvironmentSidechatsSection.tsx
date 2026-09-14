import type { ThreadId } from "@synara/contracts";

import { IconButton } from "~/components/ui/icon-button";
import { PlusIcon, SidechatIcon } from "~/lib/icons";
import { cn } from "~/lib/utils";
import { useUiLanguage } from "~/uiLanguage";

import {
  ENVIRONMENT_ROW_ICON_CLASS_NAME,
  EnvironmentRow,
  EnvironmentSectionDivider,
  EnvironmentSectionLabel,
} from "./EnvironmentRow";

export interface EnvironmentSidechatPanelItem {
  readonly id: ThreadId;
  readonly title: string;
  readonly expiredAt: string | null;
}

export function EnvironmentSidechatsSection({
  sidechats,
  onCreate,
  onOpen,
}: {
  readonly sidechats: readonly EnvironmentSidechatPanelItem[];
  readonly onCreate: () => void;
  readonly onOpen: (threadId: ThreadId) => void;
}) {
  const { t } = useUiLanguage();
  // No side chats yet: hide the whole section instead of showing an empty header row.
  if (sidechats.length === 0) {
    return null;
  }
  return (
    <>
      <EnvironmentSectionDivider />
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between gap-2 pr-2">
          <EnvironmentSectionLabel>{t("Side chats")}</EnvironmentSectionLabel>
          <IconButton
            label={t("Start side chat")}
            tooltip={t("Start side chat")}
            onClick={onCreate}
          >
            <PlusIcon className="size-3.5" />
          </IconButton>
        </div>
        {sidechats.map((sidechat) => {
          const expired = sidechat.expiredAt !== null;
          return (
            <EnvironmentRow
              key={sidechat.id}
              icon={<SidechatIcon className={ENVIRONMENT_ROW_ICON_CLASS_NAME} aria-hidden />}
              label={<span className="truncate">{sidechat.title}</span>}
              trailing={
                expired ? (
                  <span className="text-[var(--color-text-foreground-secondary)]">
                    {t("Expired")}
                  </span>
                ) : null
              }
              className={cn(expired && "opacity-60")}
              aria-label={`${t("Open side chat")} ${sidechat.title}${expired ? ` (${t("expired")})` : ""}`}
              onClick={() => onOpen(sidechat.id)}
            />
          );
        })}
      </div>
    </>
  );
}
