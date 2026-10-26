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
      .concat(r, "-icon-search"),
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
      d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconSearch";
