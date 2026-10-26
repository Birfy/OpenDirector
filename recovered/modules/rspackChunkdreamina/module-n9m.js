import n from "z8";
import s from "pr";
import a from "Qey";
import r from "yw";
import o from "bT";
import l from "xb";
import { M } from "./module-w4x.js";
export var p = o.memo(function (e) {
  const { handleClickMove, dragActive } = e;
  return n.jsx("div", {
    role: "button",
    tabIndex: 0,
    onKeyDown: s.q,
    "aria-label": a.Ay.t("web_image_edit_tool_move", {}, "移动"),
    "aria-pressed": dragActive,
    onClick: handleClickMove,
    children: n.jsx(M, {
      disabled: dragActive,
      tips: n.jsxs("div", {
        className: "tip-content-K2Mq1N",
        children: [
          n.jsx("span", {
            className: "text-eu4Vmg",
            children: a.Ay.t("web_image_edit_tool_move", {}, "移动"),
          }),
          n.jsx("span", {
            className: "hotkey-EHccRl",
            children: "space",
          }),
        ],
      }),
      className: l({
        "item-m9eIgT": true,
        "active-d1w8kG": dragActive,
      }),
      icon: n.jsx(r.hOF, {
        style: {
          fontSize: "16px",
        },
      }),
    }),
  });
});
