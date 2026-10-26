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
      .concat(r, "-icon-lv-message-success"),
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
      fill: "#2DD196",
      fillRule: "evenodd",
      d: "M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm4.854-11.44a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0l-4.439 4.44-2.44-2.44a.5.5 0 0 0-.706 0l-.708.708a.5.5 0 0 0 0 .707l3.5 3.5a.5.5 0 0 0 .708 0l5.5-5.5Z",
      clipRule: "evenodd",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconLvMessageSuccess";
