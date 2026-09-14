import { PROVIDER_SEND_TURN_MAX_ATTACHMENTS } from "@synara/contracts";
import { readNativeApi } from "~/nativeApi";
import {
  type ComposerAssistantSelectionAttachment,
  type ComposerFileAttachment,
  type ComposerImageAttachment,
} from "../../composerDraftStore";
import {
  maybeResolveBrowserPromptAttachment,
  type BrowserPromptAttachmentResolution,
} from "../../lib/browserPromptContext";
import {
  maybeResolveDevicePromptAttachment,
  type DevicePromptAttachmentResolution,
} from "../../lib/devicePromptContext";
import { type Thread } from "../../types";
import { toastManager } from "../ui/toast";
interface Input {
  translate: (text: string) => string;
  api: NonNullable<ReturnType<typeof readNativeApi>>;
  activeThread: Thread;
  promptForSend: string;
  composerImagesForSend: ComposerImageAttachment[];
  composerFilesForSend: ComposerFileAttachment[];
  composerAssistantSelectionsForSend: ComposerAssistantSelectionAttachment[];
}

export async function resolveChatPromptCaptures({
  translate,
  api,
  activeThread,
  promptForSend,
  composerImagesForSend,
  composerFilesForSend,
  composerAssistantSelectionsForSend,
}: Input) {
  const browserPromptAttachment: BrowserPromptAttachmentResolution =
    await maybeResolveBrowserPromptAttachment({
      api,
      threadId: activeThread.id,
      prompt: promptForSend,
    }).catch(
      (): BrowserPromptAttachmentResolution => ({
        requested: false,
        image: null,
      }),
    );
  if (browserPromptAttachment.image) {
    const nextAttachmentCount =
      composerImagesForSend.length +
      composerFilesForSend.length +
      composerAssistantSelectionsForSend.length +
      (browserPromptAttachment.image ? 1 : 0);
    if (nextAttachmentCount <= PROVIDER_SEND_TURN_MAX_ATTACHMENTS) {
      composerImagesForSend = [...composerImagesForSend, browserPromptAttachment.image];
    } else {
      toastManager.add({
        type: "warning",
        title: `${translate("You can attach up to")} ${PROVIDER_SEND_TURN_MAX_ATTACHMENTS} ${translate("references per message.")}`,
        description: translate(
          "The current browser screenshot was skipped because this message is already at the attachment limit.",
        ),
      });
    }
  } else if (browserPromptAttachment.requested) {
    const description =
      browserPromptAttachment.reason === "no-open-browser"
        ? translate("Open the in-app browser first, then try again.")
        : browserPromptAttachment.reason === "no-active-tab"
          ? translate("The in-app browser has no active tab to capture yet.")
          : browserPromptAttachment.reason === "attachment-processing-failed"
            ? translate("The browser screenshot could not be optimized for attachment.")
            : translate("The current browser context could not be attached.");
    toastManager.add({
      type: "warning",
      title: translate("Couldn’t attach the in-app browser context"),
      description,
    });
  }

  const devicePromptAttachment: DevicePromptAttachmentResolution =
    await maybeResolveDevicePromptAttachment({
      api,
      threadId: activeThread.id,
      prompt: promptForSend,
    }).catch(
      (): DevicePromptAttachmentResolution => ({
        requested: false,
        image: null,
      }),
    );
  if (devicePromptAttachment.image) {
    const nextAttachmentCount =
      composerImagesForSend.length +
      composerFilesForSend.length +
      composerAssistantSelectionsForSend.length +
      1;
    if (nextAttachmentCount <= PROVIDER_SEND_TURN_MAX_ATTACHMENTS) {
      composerImagesForSend = [...composerImagesForSend, devicePromptAttachment.image];
    } else {
      toastManager.add({
        type: "warning",
        title: `${translate("You can attach up to")} ${PROVIDER_SEND_TURN_MAX_ATTACHMENTS} ${translate("references per message.")}`,
        description: translate(
          "The simulator screenshot was skipped because this message is already at the attachment limit.",
        ),
      });
    }
  } else if (devicePromptAttachment.requested) {
    const description =
      devicePromptAttachment.reason === "no-attached-device"
        ? translate("Open the iOS Simulator panel and choose a device first, then try again.")
        : devicePromptAttachment.reason === "device-not-booted"
          ? translate("The selected simulator is still starting up.")
          : devicePromptAttachment.reason === "attachment-processing-failed"
            ? translate("The simulator screenshot could not be optimized for attachment.")
            : translate("The current simulator context could not be attached.");
    toastManager.add({
      type: "warning",
      title: translate("Couldn’t attach the simulator screen"),
      description,
    });
  }
  return { composerImagesForSend };
}
