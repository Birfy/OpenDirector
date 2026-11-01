import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A } from "./module-d1.js";
import { QO } from "./module-tMn.js";
function useU(e) {
  let { children, className, disabled, prefix, size = "default" } = e;
  let f = i._(e, ["children", "className", "disabled", "prefix", "size"]);
  let { getPrefixCls } = s.useContext(QO);
  let m = getPrefixCls("icon-hover");
  return l.jsx(
    "span",
    o._(
      r._(
        {
          className: A(
            m,
            {
              [`${prefix}-icon-hover`]: prefix,
              [`${m}-size-${size}`]: size && size !== "default",
              [`${m}-disabled`]: disabled,
            },
            className,
          ),
          onClick: e.onClick,
        },
        f,
      ),
      {
        children,
      },
    ),
  );
}
export { useU as A };
