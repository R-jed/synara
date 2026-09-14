import type { ResolvedUiLanguage } from "../uiLanguage";
import { WHATS_NEW_PART_A_ZH_CN_MESSAGES } from "../uiLanguageMessages/whatsNew.partA";
import { whatsNewPartBMessages } from "../uiLanguageMessages/whatsNew.partB";
import { WHATS_NEW_PART_C_ZH_CN_MESSAGES } from "../uiLanguageMessages/whatsNew.partC";
import { WHATS_NEW_PART_D_ZH_CN_MESSAGES } from "../uiLanguageMessages/whatsNew.partD";

const ZH_CN_WHATS_NEW_MESSAGES: Readonly<Record<string, string>> = {
  ...WHATS_NEW_PART_A_ZH_CN_MESSAGES,
  ...whatsNewPartBMessages,
  ...WHATS_NEW_PART_C_ZH_CN_MESSAGES,
  ...WHATS_NEW_PART_D_ZH_CN_MESSAGES,
};

export function translateWhatsNewText(language: ResolvedUiLanguage, text: string): string {
  if (language !== "zh-CN") return text;
  return ZH_CN_WHATS_NEW_MESSAGES[text] ?? text;
}
