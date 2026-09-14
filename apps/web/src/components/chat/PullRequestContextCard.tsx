// FILE: PullRequestContextCard.tsx
// Purpose: Attachment-style cards for pull request context (the "Repair" / "Add to chat"
//   bubbles): the composer card (remove) and the transcript card (click to reveal the
//   prompt the card carried). Both share the AttachmentCard shell so they read like the
//   file and pasted-text attachments beside them.
// Layer: Chat composer/transcript presentation

import { useState, type ComponentType } from "react";

import {
  ChatBubbleIcon,
  CircleAlertIcon,
  GitMergeConflictIcon,
  GitPullRequestIcon,
  HammerIcon,
} from "~/lib/icons";
import { type PullRequestContextScope } from "~/lib/pullRequestContext";
import { cn } from "~/lib/utils";
import { useUiLanguage } from "~/uiLanguage";
import { AttachmentCard } from "./AttachmentCard";

const SCOPE_ICONS: Record<PullRequestContextScope, ComponentType<{ className?: string }>> = {
  reference: GitPullRequestIcon,
  comments: ChatBubbleIcon,
  checks: CircleAlertIcon,
  conflicts: GitMergeConflictIcon,
  everything: HammerIcon,
};

interface PullRequestContextCardShellProps {
  scope: PullRequestContextScope;
  title: string;
  subtitle: string;
  onRemove?: () => void;
  className?: string;
}

function localizePullRequestContextTitle(
  scope: PullRequestContextScope,
  title: string,
  t: (text: string) => string,
): string {
  if (scope === "comments") {
    const match = /^(\d+\+?) review comments?$/.exec(title);
    if (match) return t("{count} review comments").replace("{count}", match[1]!);
  }
  if (scope === "checks") {
    const match = /^(\d+) failing checks?$/.exec(title);
    if (match) return t("{count} failing checks").replace("{count}", match[1]!);
  }
  if (scope === "conflicts" && title === "Merge conflicts") {
    return t("Merge conflicts");
  }
  if (scope === "everything") {
    const match = /^Repair PR (#\d+)$/.exec(title);
    if (match) return t("Repair PR {number}").replace("{number}", match[1]!);
  }
  return title;
}

function localizePullRequestContextSubtitle(
  scope: PullRequestContextScope,
  subtitle: string,
  t: (text: string) => string,
): string {
  if (scope === "conflicts") {
    const match = /^Conflicts with (.+)$/.exec(subtitle);
    if (match) return t("Conflicts with {branch}").replace("{branch}", match[1]!);
  }
  if (scope !== "everything") return subtitle;
  return subtitle
    .split(", ")
    .map((part) => {
      const comments = /^(\d+) comments?$/.exec(part);
      if (comments) return t("{count} comments").replace("{count}", comments[1]!);
      const checks = /^(\d+) failing checks?$/.exec(part);
      if (checks) return t("{count} failing checks").replace("{count}", checks[1]!);
      return part === "merge conflicts" ? t("Merge conflicts") : part;
    })
    .join("，");
}

function PullRequestContextCardShell({
  scope,
  title,
  subtitle,
  onRemove,
  className,
}: PullRequestContextCardShellProps) {
  const { t } = useUiLanguage();
  const Icon = SCOPE_ICONS[scope];
  const displayTitle = localizePullRequestContextTitle(scope, title, t);
  const displaySubtitle = localizePullRequestContextSubtitle(scope, subtitle, t);
  return (
    <AttachmentCard
      size="md"
      className={cn("w-64", className)}
      icon={<Icon className="size-4" />}
      title={displayTitle}
      subtitle={
        displaySubtitle.length > 0 ? <span className="truncate">{displaySubtitle}</span> : undefined
      }
      onRemove={onRemove}
      removeLabel={`${t("Remove")} ${displayTitle}`}
    />
  );
}

interface ComposerPullRequestContextCardProps {
  scope: PullRequestContextScope;
  title: string;
  subtitle: string;
  onRemove: () => void;
}

// Composer attachment: the card is the whole affordance — there is no inline text to edit,
// the prompt rides along hidden and is dropped by removing the card.
export function ComposerPullRequestContextCard(props: ComposerPullRequestContextCardProps) {
  return <PullRequestContextCardShell {...props} />;
}

interface UserMessagePullRequestContextCardProps {
  scope: PullRequestContextScope;
  title: string;
  subtitle: string;
  text: string;
}

// Transcript echo: clicking the card reveals the exact prompt the agent received so the
// user can audit what "Repair" asked for.
export function UserMessagePullRequestContextCard({
  scope,
  title,
  subtitle,
  text,
}: UserMessagePullRequestContextCardProps) {
  const { t } = useUiLanguage();
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        aria-expanded={expanded}
        title={expanded ? t("Hide the prompt this card sent") : t("Show the prompt this card sent")}
        className="cursor-pointer rounded-xl text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        onClick={() => setExpanded((value) => !value)}
      >
        <PullRequestContextCardShell scope={scope} title={title} subtitle={subtitle} />
      </button>
      {expanded ? (
        <pre className="max-h-80 w-full max-w-full overflow-auto rounded-md border border-[color:var(--color-border-light)] bg-[var(--color-background-elevated-secondary)] p-2 font-mono text-[11px] leading-snug whitespace-pre-wrap break-words text-foreground">
          {text}
        </pre>
      ) : null}
    </div>
  );
}
