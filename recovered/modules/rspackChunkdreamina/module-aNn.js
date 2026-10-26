import r from "bT";
import { A as A_1 } from "./module-puV.js";
import { QO } from "./module-ce.js";
import { Et, cy } from "./module-Pl5.js";
import { A as A_2 } from "./module-Bd_2.js";
const s = {
  size: "small",
  direction: "horizontal",
};
export var A = r.forwardRef(function (e, ref) {
  const f = r.useContext(QO);
  const f_getPrefixCls = f.getPrefixCls;
  const f_componentConfig = f.componentConfig;
  const f_rtl = f.rtl;
  const v = A_2(
    e,
    s,
    f_componentConfig == null ? undefined : f_componentConfig.Space,
  );
  const {
    className,
    style,
    children,
    size,
    direction,
    align,
    wrap,
    split,
    ...rest
  } = v;
  const S = f_getPrefixCls("space");
  const P = align || (direction === "horizontal" ? "center" : "");
  const className_1 = A_1(
    S,
    {
      [S + "-" + direction]: direction,
      [S + "-align-" + P]: P,
      [S + "-wrap"]: wrap,
      [S + "-rtl"]: f_rtl,
    },
    className,
  );
  function N(e) {
    if (Et(e)) {
      return e;
    }
    switch (e) {
      case "mini":
        return 4;
      case "small":
      default:
        return 8;
      case "medium":
        return 16;
      case "large":
        return 24;
    }
  }
  const k = r.Children.toArray(children);
  return r.createElement(
    "div",
    {
      ref,
      className: className_1,
      style,
      ...rest,
    },
    k.map((e, t) => {
      const key = (e == null ? undefined : e.key) || t;
      const o = split != null && t > 0;
      return r.createElement(
        r.Fragment,
        {
          key,
        },
        o &&
          r.createElement(
            "div",
            {
              className: S + "-item-split",
            },
            split,
          ),
        r.createElement(
          "div",
          {
            className: S + "-item",
            style: ((e) => {
              const i = k.length === e + 1;
              const a = f_rtl ? "marginLeft" : "marginRight";
              if (typeof size === "string" || typeof size === "number") {
                const c = N(size);
                if (wrap) {
                  if (i) {
                    return {
                      marginBottom: c,
                    };
                  }
                  return {
                    ["" + a]: c,
                    marginBottom: c,
                  };
                }
                if (i) {
                  return {};
                }
                return {
                  [direction === "vertical" ? "marginBottom" : a]: c,
                };
              }
              if (cy(size)) {
                const u = N(size[0]);
                const marginBottom = N(size[1]);
                if (wrap) {
                  if (i) {
                    return {
                      marginBottom,
                    };
                  }
                  return {
                    ["" + a]: u,
                    marginBottom,
                  };
                }
                if (direction === "vertical") {
                  return {
                    marginBottom,
                  };
                }
                return {
                  ["" + a]: u,
                };
              }
            })(t),
          },
          e,
        ),
      );
    }),
  );
});
A.displayName = "Space";
