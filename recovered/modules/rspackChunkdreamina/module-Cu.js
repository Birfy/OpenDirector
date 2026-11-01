import r from "bT";
import { A } from "./module-puV.js";
import { QO } from "./module-ce.js";
function useC(e) {
  const {
    children,
    className,
    disabled,
    prefix,
    size = "default",
    ...rest
  } = e;
  const m = r.useContext(QO).getPrefixCls("icon-hover");
  return r.createElement(
    "span",
    {
      className: A(
        m,
        {
          [prefix + "-icon-hover"]: prefix,
          [m + "-size-" + size]: size && size !== "default",
          [m + "-disabled"]: disabled,
        },
        className,
      ),
      onClick: e.onClick,
      ...rest,
    },
    children,
  );
}
export { useC as A };
