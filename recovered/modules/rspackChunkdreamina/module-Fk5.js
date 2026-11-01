import n from "Qey";
import r from "T90";
export function h(e) {
  const {
    onClickDelete,
    title = n.Ay.t("web_delete_popup_title", {}, "确认删除"),
    content = n.Ay.t("web_delete_popup_desc", {}, "删除的历史记录将无法找回"),
  } = e;
  return r.d({
    title,
    content,
    confirmText: n.Ay.t("web_delete_popup_btn_delete", {}, "删除"),
    cancelText: n.Ay.t("web_delete_popup_btn_cancel", {}, "取消"),
    onClickConfirm: onClickDelete,
  });
}
