import r from "bT";
import { A } from "./module-puV.js";
import { QO } from "./module-ce.js";
import { A as A_1 } from "./module-Bd_2.js";
const u = {
  type: "horizontal",
  orientation: "center",
};
var s = r.forwardRef(function (e, ref) {
  const s = r.useContext(QO);
  const s_getPrefixCls = s.getPrefixCls;
  const s_componentConfig = s.componentConfig;
  const d = A_1(
    e,
    u,
    s_componentConfig == null ? undefined : s_componentConfig.Divider,
  );
  const { children, style, className, type, orientation, ...rest } = d;
  const x = s_getPrefixCls("divider");
  const className_1 = A(
    x,
    x + "-" + type,
    {
      [x + "-with-text"]: children,
      [x + "-with-text-" + orientation]: children && orientation,
    },
    className,
  );
  return r.createElement(
    "div",
    {
      role: "separator",
      ref,
      className: className_1,
      style,
      ...rest,
    },
    children && type === "horizontal"
      ? r.createElement(
          "span",
          {
            className: x + "-text " + x + "-text-" + orientation,
          },
          children,
        )
      : null,
  );
});
s.displayName = "Divider";
export { s as A };
