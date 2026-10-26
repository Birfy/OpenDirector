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
      .concat(r, "-icon-more"),
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
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      c,
    ),
    s.createElement("path", {
      fill: "currentColor",
      stroke: "none",
      strokeWidth: "none",
      d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
    }),
    s.createElement("path", {
      d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconMore";
