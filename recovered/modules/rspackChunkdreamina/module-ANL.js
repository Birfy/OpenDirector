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
      .concat(n, "-icon-eye-invisible"),
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
      d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14",
    }),
    a.createElement("path", {
      d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconEyeInvisible";
