import type { PullRequestDetail, PullRequestStack, PullRequestStackEntry } from "@synara/contracts";

export type PullRequestStackAssessment = {
  readonly label:
    | "Ready to merge"
    | "Stack needs attention"
    | "Merge status pending"
    | "Mergeable with failing checks"
    | "Stack merged";
  readonly tone: "ready" | "blocked" | "pending" | "warning" | "complete";
  readonly mergeTargetCount: number;
  readonly canAttemptMerge: boolean;
  readonly blocker: string | null;
};

/** Entries affected by merging the selected PR, ordered from the base branch upwards. */
export function pullRequestStackTargetEntries(
  stack: PullRequestStack,
): ReadonlyArray<PullRequestStackEntry> {
  return stack.entries.filter(
    (entry) => entry.position <= stack.position && entry.state !== "merged",
  );
}

export function assessPullRequestStack(stack: PullRequestStack): PullRequestStackAssessment {
  const targets = pullRequestStackTargetEntries(stack);
  if (targets.length === 0) {
    return {
      label: "Stack merged",
      tone: "complete",
      mergeTargetCount: 0,
      canAttemptMerge: false,
      blocker: null,
    };
  }

  const closed = targets.find((entry) => entry.state === "closed");
  if (closed) {
    return {
      label: "Stack needs attention",
      tone: "blocked",
      mergeTargetCount: targets.length,
      canAttemptMerge: false,
      blocker: `#${closed.number} is closed without being merged.`,
    };
  }

  const draft = targets.find((entry) => entry.isDraft);
  if (draft) {
    return {
      label: "Stack needs attention",
      tone: "blocked",
      mergeTargetCount: targets.length,
      canAttemptMerge: false,
      blocker: `#${draft.number} is still a draft.`,
    };
  }

  const conflicting = targets.find(
    (entry) =>
      entry.mergeability === "conflicting" ||
      ["BLOCKED", "DIRTY", "DRAFT"].includes(entry.mergeStateStatus ?? ""),
  );
  if (conflicting) {
    return {
      label: "Stack needs attention",
      tone: "blocked",
      mergeTargetCount: targets.length,
      canAttemptMerge: false,
      blocker: `#${conflicting.number} is not ready to merge.`,
    };
  }

  if (targets.some((entry) => entry.mergeStateStatus === "UNSTABLE")) {
    return {
      label: "Mergeable with failing checks",
      tone: "warning",
      mergeTargetCount: targets.length,
      canAttemptMerge: true,
      blocker: null,
    };
  }

  const pending = targets.some(
    (entry) =>
      entry.mergeability === "unknown" ||
      entry.mergeStateStatus === null ||
      ["BEHIND", "UNKNOWN"].includes(entry.mergeStateStatus),
  );
  if (pending) {
    return {
      label: "Merge status pending",
      tone: "pending",
      mergeTargetCount: targets.length,
      canAttemptMerge: true,
      blocker: null,
    };
  }

  return {
    label: "Ready to merge",
    tone: "ready",
    mergeTargetCount: targets.length,
    canAttemptMerge: true,
    blocker: null,
  };
}

export function pullRequestMergeBlocker(
  detail: Pick<PullRequestDetail, "mergeability" | "stackMetadataIncomplete">,
  stackAssessment: PullRequestStackAssessment | null,
  language: "en" | "zh-CN" = "en",
): string | null {
  if (detail.stackMetadataIncomplete === true) {
    return language === "zh-CN"
      ? "暂时无法获取堆栈详情。请刷新后再合并。"
      : "Stack details are temporarily unavailable. Refresh before merging.";
  }
  if (stackAssessment?.canAttemptMerge === false) {
    if (language === "zh-CN") {
      const blocker = stackAssessment.blocker;
      if (!blocker) return "此堆栈尚未达到可合并状态。";
      const closed = /^#(\d+) is closed without being merged\.$/u.exec(blocker)?.[1];
      if (closed) return `#${closed} 已关闭但尚未合并。`;
      const draft = /^#(\d+) is still a draft\.$/u.exec(blocker)?.[1];
      if (draft) return `#${draft} 仍是草稿。`;
      const pending = /^#(\d+) is not ready to merge\.$/u.exec(blocker)?.[1];
      if (pending) return `#${pending} 尚未达到可合并状态。`;
      return "此堆栈尚未达到可合并状态。";
    }
    return stackAssessment.blocker ?? "This stack is not ready to merge.";
  }
  if (detail.mergeability !== "conflicting") return null;
  return language === "zh-CN"
    ? "请先解决合并冲突再执行合并"
    : "Resolve merge conflicts before merging";
}
