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
      .concat(r, "-icon-lv-message-error"),
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
      fill: "#FF303D",
      fillRule: "evenodd",
      d: "M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10ZM8.146 8.354a.5.5 0 0 0 0 .707L11.086 12l-2.94 2.94a.5.5 0 0 0 0 .706l.708.708a.5.5 0 0 0 .707 0l2.939-2.94 2.94 2.94a.5.5 0 0 0 .706 0l.708-.708a.5.5 0 0 0 0-.707L13.914 12l2.94-2.94a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0l-2.939 2.94-2.94-2.94a.5.5 0 0 0-.706 0l-.708.708Z",
      clipRule: "evenodd",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconLvMessageError";
