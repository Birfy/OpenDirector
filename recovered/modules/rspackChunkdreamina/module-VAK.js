import r from "z8";
import n from "Qey";
import { A } from "./module-M53.js";
export function J(e) {
  const { item, children, onActivate, rootRef } = e;
  return r.jsx("button", {
    ref: rootRef,
    type: "button",
    className: A.card,
    "aria-label": item.title || n.Ay.t("web_new_publish_preview", {}, "预览"),
    onClick: onActivate ? () => onActivate(item) : undefined,
    children,
  });
}
