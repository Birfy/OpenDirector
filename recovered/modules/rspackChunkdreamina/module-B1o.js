import _r from "fyk";
import "U4";
import s from "bT";
import { V } from "./module-Mt_2.js";
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
      .concat(r, "-icon-check"),
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
        fill: "currentColor",
        viewBox: "0 0 20 20",
        stroke: "currentColor",
      },
      c,
    ),
    s.createElement("path", {
      d: "M15.652 6.902a.5.5 0 0 1 0 .707l-6.548 6.55a.5.5 0 0 1-.707 0l-4.05-4.05a.5.5 0 0 1 0-.707l.472-.471a.5.5 0 0 1 .707 0l3.224 3.224 5.724-5.724a.5.5 0 0 1 .707 0l.471.471Z",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconCheck";
