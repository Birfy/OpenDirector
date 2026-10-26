import n from "z8";
import s from "Qey";
import a from "pr";
import r from "bT";
import o from "yw";
import _u from "xb";
import { M } from "./module-w4x.js";
const l = "icon-container-egNpeH";
const h = "disabled-bzboK1";
const c = "active-ITuCW9";
const className = "icon-AqV53h";
const containerStyle = {
  transform: "rotateY(180deg)",
};
var g = r.memo(function (e) {
  const {
    isLimit,
    handleUndo,
    handleRedo,
    undoIconStyle = {},
    redoIconStyle = {},
  } = e;
  return n.jsxs("div", {
    className: "container-o21XXP",
    children: [
      n.jsx("div", {
        className: _u({
          [h]: isLimit.undo,
          [c]: !isLimit.undo,
          [l]: true,
        }),
        role: "button",
        "aria-label": s.Ay.t("web_canva_undo", {}, "撤销"),
        tabIndex: isLimit.undo ? -1 : 0,
        "aria-disabled": isLimit.undo,
        onKeyDown: a.q,
        onClick: isLimit.undo ? undefined : handleUndo,
        children: n.jsx(M, {
          className,
          icon: n.jsx(o.GFc, {
            className,
            style: undoIconStyle,
          }),
        }),
      }),
      n.jsx("div", {
        className: "divider-YHTO4P",
      }),
      n.jsx("div", {
        className: _u({
          [h]: isLimit.redo,
          [c]: !isLimit.redo,
          [l]: true,
        }),
        role: "button",
        "aria-label": s.Ay.t("web_canva_redo", {}, "重做"),
        tabIndex: isLimit.redo ? -1 : 0,
        "aria-disabled": isLimit.redo,
        onKeyDown: a.q,
        onClick: isLimit.redo ? undefined : handleRedo,
        children: n.jsx(M, {
          className,
          containerStyle,
          icon: n.jsx(o.GFc, {
            className,
            style: redoIconStyle,
          }),
        }),
      }),
    ],
  });
});
export { g as h };
