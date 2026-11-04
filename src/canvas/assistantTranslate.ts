/**
 * Translate fallbacks for assistant helpers that run outside a React component.
 * Components pass their `t`; tests and standalone mounts resolve the active locale.
 */
import type { Translate } from "../i18n/I18nProvider.tsx";
import { tNow } from "../i18n/messages.ts";
import type {
  MessageDescriptor,
  MessageKey,
  MessageParams,
} from "../i18n/types.ts";

export function translateNow(
  input: MessageKey | MessageDescriptor,
  params?: MessageParams,
): string {
  return typeof input === "string"
    ? tNow(input, params)
    : tNow(input.key, input.params);
}

/** Default value for optional `t: Translate` parameters in assistant helpers. */
export const defaultTranslate: Translate = translateNow;
