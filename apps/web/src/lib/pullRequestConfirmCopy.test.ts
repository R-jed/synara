import { describe, expect, it } from "vitest";

import { buildPullRequestMergeConfirmCopy } from "./pullRequestConfirmCopy";

describe("buildPullRequestMergeConfirmCopy", () => {
  it("builds complete Simplified Chinese stack copy", () => {
    expect(
      buildPullRequestMergeConfirmCopy({
        language: "zh-CN",
        number: 321,
        mergeMethod: "squash",
        baseBranch: "main",
        stackTargetCount: 2,
        stackHasHigherPullRequests: true,
      }),
    ).toEqual({
      title: "合并 2 个拉取请求？",
      description:
        "这会将截至 #321 的所有未关闭拉取请求一次性合并到 main，合并方式为压缩并合并。其上的拉取请求会保持未关闭，GitHub 会自动重新指定目标分支。",
    });
  });

  it("preserves concise English single-PR copy", () => {
    expect(
      buildPullRequestMergeConfirmCopy({
        language: "en",
        number: 42,
        mergeMethod: "merge",
        baseBranch: "main",
      }),
    ).toEqual({
      title: "Merge pull request?",
      description: "This will merge #42 into main using merge.",
    });
  });
});
