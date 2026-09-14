import type { BrowserWindow } from "electron";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { showMessageBoxMock } = vi.hoisted(() => ({
  showMessageBoxMock: vi.fn(),
}));

vi.mock("electron", () => ({
  dialog: {
    showMessageBox: showMessageBoxMock,
  },
}));

import { showDesktopConfirmDialog } from "./confirmDialog";
import { setDesktopUiLanguage } from "./uiLanguage";

describe("showDesktopConfirmDialog", () => {
  beforeEach(() => {
    showMessageBoxMock.mockReset();
    setDesktopUiLanguage("en");
  });

  it("returns false and does not open a dialog for empty messages", async () => {
    const result = await showDesktopConfirmDialog("   ", null);

    expect(result).toBe(false);
    expect(showMessageBoxMock).not.toHaveBeenCalled();
  });

  it("opens a dialog for the focused window and returns true on confirm", async () => {
    const ownerWindow = { id: 1 } as BrowserWindow;
    showMessageBoxMock.mockResolvedValue({ response: 1 });

    const result = await showDesktopConfirmDialog("Delete worktree?", ownerWindow);

    expect(result).toBe(true);
    expect(showMessageBoxMock).toHaveBeenCalledWith(
      ownerWindow,
      expect.objectContaining({
        buttons: ["No", "Yes"],
        message: "Delete worktree?",
      }),
    );
  });

  it("opens an app-level dialog when there is no focused window", async () => {
    showMessageBoxMock.mockResolvedValue({ response: 0 });

    const result = await showDesktopConfirmDialog("Delete worktree?", null);

    expect(result).toBe(false);
    expect(showMessageBoxMock).toHaveBeenCalledWith(
      expect.objectContaining({
        buttons: ["No", "Yes"],
        message: "Delete worktree?",
      }),
    );
  });

  it("localizes the native confirmation buttons in Simplified Chinese", async () => {
    setDesktopUiLanguage("zh-CN");
    showMessageBoxMock.mockResolvedValue({ response: 1 });

    await expect(showDesktopConfirmDialog("删除此项目？", null)).resolves.toBe(true);
    expect(showMessageBoxMock).toHaveBeenCalledWith(
      expect.objectContaining({
        buttons: ["否", "是"],
        message: "删除此项目？",
      }),
    );
  });
});
