import { describe, expect, it } from "vitest";

import { droppedFolderErrorMessage } from "./useWindowFolderDrop";

describe("droppedFolderErrorMessage", () => {
  it("localizes typed folder-drop errors in Simplified Chinese", () => {
    expect(droppedFolderErrorMessage("not-folder", "zh-CN")).toBe("请拖入文件夹，而不是文件。");
    expect(droppedFolderErrorMessage("path-unavailable", "zh-CN")).toBe(
      "无法读取文件夹路径。请使用浏览按钮选择，或直接输入路径。",
    );
  });
});
