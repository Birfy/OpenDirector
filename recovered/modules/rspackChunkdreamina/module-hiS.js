import n from "oa";
import r from "bk";
import l from "qa";
import _o from "xb";
import s from "Qey";
import c from "oq";
export function h(e) {
  const { modalProps, confirm = c.a.confirm } = e != null ? e : {};
  const o = modalProps != null ? modalProps : {};
  const { onOk, onCancel } = o;
  const m = l._(o, ["onOk", "onCancel"]);
  const { promise, resolve } = Promise.withResolvers();
  confirm(
    r._(
      n._(
        {
          title: s.Ay.t("skill_dialog_delete_title", {}, "Delete this skill?"),
          content: s.Ay.t(
            "skill_dialog_delete_desc",
            {},
            "Deleted skill can't be recovered.",
          ),
          cancelText: s.Ay.t("skill_dialog_unsaved_cancel", {}, "Cancel"),
          okText: s.Ay.t("skill_publish_button_delete", {}, "Delete"),
        },
        m,
      ),
      {
        className: _o("skill-delete-confirmation-wzip7p", m.className),
        onOk: () => {
          resolve(true);
          if (onOk != null) {
            onOk();
          }
        },
        onCancel: () => {
          resolve(false);
          if (onCancel != null) {
            onCancel();
          }
        },
      },
    ),
  );
  return promise;
}
