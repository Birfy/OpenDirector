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
      .concat(n, "-icon-more"),
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
      d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
    }),
    a.createElement("path", {
      d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconMore";
