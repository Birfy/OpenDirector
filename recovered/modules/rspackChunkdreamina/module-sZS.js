import _n from "fyk";
import "U4";
import a from "bT";
import { V } from "./module-krC.js";
export var A = a.forwardRef(function (e, ref) {
  const prefixCls = a.useContext(V).prefixCls;
  const n = prefixCls === undefined ? "arco" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const l = {
    "aria-hidden": true,
    focusable: false,
    ref,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(n, "-icon ")
      .concat(n, "-icon-search"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(n, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    _n(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    a.createElement("path", {
      d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconSearch";
