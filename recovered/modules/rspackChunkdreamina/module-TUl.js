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
      .concat(r, "-icon-check-circle-fill"),
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
      fillRule: "evenodd",
      stroke: "none",
      strokeWidth: "none",
      d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
      clipRule: "evenodd",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconCheckCircleFill";
