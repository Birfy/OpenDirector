import { useRef, useState } from "react";

export type EditorApplyResult = boolean | void | Promise<boolean | void>;

/** A modal closes only after its caller acknowledges the business edit. */
export function useEditorCommit(onClose: () => void) {
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
          throw new Error("编辑未保存，草稿已保留。");
        onClose();
      } catch (reason) {
        setError(
          reason instanceof Error
            ? reason.message
            : "编辑保存失败，草稿已保留。",
        );
      } finally {
        active.current = false;
        setSaving(false);
      }
    },
  };
}
