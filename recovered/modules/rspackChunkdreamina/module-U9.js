import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A } from "./module-Ww_2.js";
import { QO } from "./module-mY_2.js";
import { A as A_1 } from "./module-k6B.js";
let d = {
  type: "horizontal",
  orientation: "center",
};
let p = s.forwardRef(function (e, ref) {
  let { getPrefixCls, componentConfig } = s.useContext(QO);
  let f = A_1(
    e,
    d,
    componentConfig == null ? undefined : componentConfig.Divider,
  );
  let { children, style, className, type, orientation } = f;
  let b = i._(f, ["children", "style", "className", "type", "orientation"]);
  let x = getPrefixCls("divider");
  let className_1 = A(
    x,
    `${x}-${type}`,
    {
      [`${x}-with-text`]: children,
      [`${x}-with-text-${orientation}`]: children && orientation,
    },
    className,
  );
  return l.jsx(
    "div",
    o._(
      r._(
        {
          role: "separator",
          ref,
          className: className_1,
          style,
        },
        b,
      ),
      {
        children:
          children && type === "horizontal"
            ? l.jsx("span", {
                className: `${x}-text ${x}-text-${orientation}`,
                children,
              })
            : null,
      },
    ),
  );
});
export { p as A };
p.displayName = "Divider";
