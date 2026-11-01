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
      .concat(n, "-icon-close-circle-fill"),
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
      fillRule: "evenodd",
      stroke: "none",
      d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
      clipRule: "evenodd",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconCloseCircleFill";
