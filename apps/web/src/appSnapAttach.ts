// FILE: appSnapAttach.ts
// Purpose: Shared completion flow for an AppSnap capture once its target thread is known.
// Layer: Web composer domain
// Depends on: composer draft image intake, toast notifications, and optional bridge acknowledgement.

import type { DesktopAppSnapCapture, ThreadId } from "@synara/contracts";

import { insertAppSnapCaptureIntoDraft } from "~/appSnapIntake";
import { toastManager } from "~/components/ui/toast";

export async function attachAppSnapCapture(
  threadId: ThreadId,
  capture: DesktopAppSnapCapture,
  acknowledge?: () => Promise<void>,
  translate: (text: string) => string = (text) => text,
): Promise<"persisted" | "unverified"> {
  const persistenceResult = await insertAppSnapCaptureIntoDraft(threadId, capture);

  const unverifiedDescription = translate(
    "The capture is attached, but Synara could not verify its draft metadata. If it is missing after a reload, Synara will attach it again.",
  );
  const successDescription = capture.sourceAppName
    ? `${translate("Captured")} ${capture.sourceAppName} ${translate("and added it to the composer.")}`
    : translate("The window was added to the composer.");

  toastManager.add({
    type: persistenceResult === "unverified" ? "warning" : "success",
    title:
      persistenceResult === "unverified"
        ? translate("AppSnap added with a warning")
        : translate("AppSnap added"),
    description: persistenceResult === "unverified" ? unverifiedDescription : successDescription,
    data: { allowCrossThreadVisibility: true },
  });

  if (persistenceResult === "persisted" && acknowledge) {
    await acknowledge().catch((error) =>
      console.warn("[appsnap] Could not acknowledge capture", error),
    );
  }

  return persistenceResult;
}
