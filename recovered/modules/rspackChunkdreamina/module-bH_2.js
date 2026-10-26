import _r from "fyk";
import "U4";
import s from "bT";
import { V } from "./module-Tb.js";
export var A = s.forwardRef(function (e, ref) {
  const prefixCls = s.useContext(V).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const c = {
    "aria-hidden": true,
    focusable: false,
    ref,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-lv-message-info"),
  };
  if (e_spin) {
    c.className = "".concat(c.className, " ").concat(r, "-icon-loading");
  }
  delete c.spin;
  delete c.isIcon;
  return s.createElement(
    "svg",
    _r(
      {
        fill: "none",
        viewBox: "0 0 25 24",
        stroke: "currentColor",
      },
      c,
    ),
    s.createElement("path", {
      fill: "#2668FF",
      fillRule: "evenodd",
      d: "M22.5 12c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm-11-4.5A.5.5 0 0 1 12 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-1 7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1v-4.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.5v3h-1Z",
      clipRule: "evenodd",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconLvMessageInfo";
