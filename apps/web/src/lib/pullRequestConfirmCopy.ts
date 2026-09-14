import type { PullRequestMergeMethod } from "@synara/contracts";
import { translateUiText } from "../uiLanguage";
import type { ResolvedUiLanguage } from "../uiLanguagePreference";

const PULL_REQUEST_MERGE_METHOD_LABELS: Record<PullRequestMergeMethod, string> = {
  merge: "Merge commit",
  squash: "Squash and merge",
  rebase: "Rebase and merge",
};

export function pullRequestMergeMethodLabel(method: PullRequestMergeMethod): string {
  return PULL_REQUEST_MERGE_METHOD_LABELS[method];
}

export interface PullRequestMergeConfirmCopyInput {
  readonly language: ResolvedUiLanguage;
  readonly number: number;
  readonly mergeMethod: PullRequestMergeMethod;
  readonly baseBranch?: string | null;
  readonly stackTargetCount?: number | null;
  readonly stackHasHigherPullRequests?: boolean;
}

export interface PullRequestMergeConfirmCopy {
  readonly title: string;
  readonly description: string;
}

export function buildPullRequestMergeConfirmCopy(
  input: PullRequestMergeConfirmCopyInput,
): PullRequestMergeConfirmCopy {
  const stackCount = input.stackTargetCount ?? null;
  const isStack = stackCount !== null;
  const mergeMethodLabel =
    input.language === "zh-CN"
      ? translateUiText(input.language, pullRequestMergeMethodLabel(input.mergeMethod))
      : input.mergeMethod;

  if (input.language === "zh-CN") {
    const title = isStack ? `合并 ${stackCount} 个拉取请求？` : "合并拉取请求？";
    const description = isStack
      ? input.baseBranch
        ? `这会将截至 #${input.number} 的所有未关闭拉取请求一次性合并到 ${input.baseBranch}，合并方式为${mergeMethodLabel}。`
        : `这会一次性合并截至 #${input.number} 的所有未关闭拉取请求，合并方式为${mergeMethodLabel}。`
      : input.baseBranch
        ? `这会将 #${input.number} 合并到 ${input.baseBranch}，合并方式为${mergeMethodLabel}。`
        : `这会合并 #${input.number}，合并方式为${mergeMethodLabel}。`;
    return {
      title,
      description:
        isStack && input.stackHasHigherPullRequests
          ? `${description}其上的拉取请求会保持未关闭，GitHub 会自动重新指定目标分支。`
          : description,
    };
  }

  const title = isStack
    ? `Merge ${stackCount} ${stackCount === 1 ? "pull request" : "pull requests"}?`
    : "Merge pull request?";
  const target = input.baseBranch ? ` into ${input.baseBranch}` : "";
  const description = isStack
    ? `This will atomically merge every open pull request through #${input.number}${target} using ${mergeMethodLabel}.`
    : `This will merge #${input.number}${target} using ${mergeMethodLabel}.`;
  return {
    title,
    description:
      isStack && input.stackHasHigherPullRequests
        ? `${description} Pull requests above it will remain open and GitHub will retarget them.`
        : description,
  };
}
