import n from "oa";
import s from "bk";
import a from "z8";
import "xj";
import r from "R8";
import o from "Qey";
import _l from "xb";
import c from "bT";
import d from "yw";
import * as u from "./module-XLl.js";
import _ from "pr";
const v = c.memo(function (e) {
  const { icon, active, onClick, label } = e;
  return a.jsx("div", {
    className: _l({
      "btn-u5xABP": true,
      "btn-active-ebz1z7": !!active,
    }),
    role: "button",
    tabIndex: 0,
    "aria-label": label,
    "aria-pressed": active,
    onKeyDown: _.q,
    onClick,
    children: icon,
  });
});
export var B = c.memo(function (e) {
  const { scale, logic } = e;
  const {
    dropdownVisible,
    handleScaleUp,
    handleScaleDown,
    getScaleName,
    menu,
    dropdownStyle,
    dropdownRef,
    handleDropdownVisibleChange,
  } = logic;
  return a.jsxs("div", {
    className: "scale-container-NocWhC",
    children: [
      a.jsx(v, {
        label: o.Ay.t("web_keyboard_text_Zoom_out", {}, "缩小"),
        icon: a.jsx(d.YPw, {
          size: 16,
        }),
        onClick: handleScaleDown,
      }),
      a.jsx(u.h, {
        ref: dropdownRef,
        containerClassName: "drop-container-IhC5SA",
        contentClassName: "drop-content-A1Ih4b",
        content: menu,
        contentStyle: s._(n._({}, dropdownStyle), {
          backdropFilter: "none",
        }),
        onVisibleChange: handleDropdownVisibleChange,
        children: a.jsx(r.A, {
          className: _l("btn-qBdsZ7", {
            "active-iTpeg9": dropdownVisible,
          }),
          children: getScaleName(scale),
        }),
      }),
      a.jsx(v, {
        label: o.Ay.t("web_keyboard_text_Zoom_in", {}, "放大"),
        icon: a.jsx(d.xZp, {
          size: 16,
        }),
        onClick: handleScaleUp,
      }),
    ],
  });
});
