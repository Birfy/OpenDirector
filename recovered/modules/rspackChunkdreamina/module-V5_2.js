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
      .concat(n, "-icon-caret-down"),
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
      fill: "currentColor",
      stroke: "none",
      d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconCaretDown";
