import { Loader2Icon } from "~/lib/icons";
import { cn } from "~/lib/utils";
import { useUiLanguage } from "~/uiLanguage";

function Spinner({ className, ...props }: React.ComponentProps<typeof Loader2Icon>) {
  const { t } = useUiLanguage();
  return (
    <Loader2Icon
      aria-label={t("Loading")}
      className={cn("animate-spin", className)}
      role="status"
      {...props}
    />
  );
}

export { Spinner };
