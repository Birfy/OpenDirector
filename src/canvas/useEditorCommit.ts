import { useRef, useState } from "react";
import { useT } from "../i18n/I18nProvider.tsx";

export type EditorApplyResult = boolean | void | Promise<boolean | void>;

/** A modal closes only after its caller acknowledges the business edit. */
export function useEditorCommit(onClose: () => void) {
  const t = useT();
  const active = useRef(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  return {
    saving,
    error,
    close: () => {
      if (!active.current) onClose();
    },
    apply: async (action: () => EditorApplyResult) => {
      if (active.current) return;
      active.current = true;
      setSaving(true);
      setError("");
      try {
        if ((await action()) === false)
          throw new Error(t("editors.commit.notSaved"));
        onClose();
      } catch (reason) {
        setError(
          reason instanceof Error
            ? reason.message
            : t("editors.commit.failed"),
        );
      } finally {
        active.current = false;
        setSaving(false);
      }
    },
  };
}
