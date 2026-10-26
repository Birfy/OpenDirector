import t from "z8";
import n from "pr";
import i from "Qey";
import r from "xb";
import l from "w4x";
import s from "yw";
export var J = (e) => {
  var { onClick, isActive } = e;
  return t.jsx("div", {
    role: "button",
    tabIndex: 0,
    onKeyDown: n.q,
    "aria-label": i.Ay.t("web_new_canvas_tool_select", {}, "选中"),
    "aria-pressed": isActive,
    onClick,
    children: t.jsx(l.M, {
      tips: i.Ay.t("web_new_canvas_tool_select", {}, "选中"),
      className: r({
        "item-ZpkN4_": true,
        "active-aD_DQ8": isActive,
      }),
      icon: t.jsx(s.ECq, {
        size: 16,
      }),
    }),
  });
};
