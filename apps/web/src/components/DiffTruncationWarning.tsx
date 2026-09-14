// FILE: DiffTruncationWarning.tsx
// Purpose: Shared warning for repository diff surfaces backed by size-bounded patch reads.
// Layer: Web diff presentation

import type { HTMLAttributes } from "react";

import { TriangleAlertIcon } from "~/lib/icons";
import { cn } from "~/lib/utils";
import { useUiLanguage } from "~/uiLanguage";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export const DEFAULT_DIFF_TRUNCATION_MESSAGE =
  "Synara stopped reading at the diff size limit. Some files or changes may be missing.";

export function DiffTruncationWarning({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { t } = useUiLanguage();
  return (
    <Alert {...props} variant="warning" size="sm" className={cn("shrink-0", className)}>
      <TriangleAlertIcon aria-hidden="true" />
      <AlertTitle>{t("Partial diff")}</AlertTitle>
      <AlertDescription>{children ?? t(DEFAULT_DIFF_TRUNCATION_MESSAGE)}</AlertDescription>
    </Alert>
  );
}
