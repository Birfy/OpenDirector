import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import a from "zP7";
import { A as A_1 } from "./module-Ww_2.js";
import { QO } from "./module-mY_2.js";
import { Gv } from "./module-V9.js";
import { A as A_2 } from "./module-Ccf.js";
import { A as A_3 } from "./module-k6B.js";
function useF({ prefixCls, maxCount, count, className, style }) {
  let [i, setI] = s.useState(false);
  let d = A_2(count);
  let h = count !== d;
  return l.jsx(a.A, {
    classNames: "badge-zoom",
    in: count > 0,
    timeout: 300,
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    onEntered: () => {
      setI(true);
    },
    children: l.jsx("span", {
      className,
      style,
      children: l.jsx(
        "span",
        {
          className: A_1({
            [`${prefixCls}-number-text`]: i && h,
          }),
          children: maxCount && count > maxCount ? `${maxCount}+` : count,
        },
        count,
      ),
    }),
  });
}
let m = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray",
];
let v = {
  count: 0,
  maxCount: 99,
};
export let A = s.forwardRef(function (e, ref) {
  let { getPrefixCls, componentConfig, rtl } = s.useContext(QO);
  let y = A_3(
    e,
    v,
    componentConfig == null ? undefined : componentConfig.Badge,
  );
  let {
    count,
    text,
    className,
    dotClassName,
    dot,
    maxCount,
    color,
    dotStyle,
    offset,
    style,
    status,
    children,
  } = y;
  let _ = i._(y, [
    "count",
    "text",
    "className",
    "dotClassName",
    "dot",
    "maxCount",
    "color",
    "dotStyle",
    "offset",
    "style",
    "status",
    "children",
  ]);
  let prefixCls = getPrefixCls("badge");
  let style_1 = r._({}, dotStyle || {});
  let [S, D] = offset || [];
  if (S) {
    style_1.marginRight = -S;
  }
  if (D) {
    style_1.marginTop = D;
  }
  return l.jsxs(
    "span",
    o._(
      r._(
        {
          className: A_1(
            prefixCls,
            {
              [`${prefixCls}-status`]: status,
              [`${prefixCls}-no-children`]: !children,
              [`${prefixCls}-rtl`]: rtl,
            },
            className,
          ),
          ref,
          style,
        },
        _,
      ),
      {
        children: [
          children,
          (() => {
            if (Gv(count)) {
              return l.jsx("span", {
                className: A_1(`${prefixCls}-custom-dot`, dotClassName),
                style: style_1,
                children: count,
              });
            }
            let e =
              !color || m.indexOf(color) > -1
                ? {}
                : {
                    backgroundColor: color,
                  };
            if (!text || color || status) {
              if (status || (color && Number(count) <= 0)) {
                return l.jsxs("span", {
                  className: `${prefixCls}-status-wrapper`,
                  children: [
                    l.jsx("span", {
                      className: A_1(
                        `${prefixCls}-status-dot`,
                        {
                          [`${prefixCls}-status-${status}`]: status,
                          [`${prefixCls}-color-${color}`]: color,
                        },
                        dotClassName,
                      ),
                      style: r._({}, e, style_1),
                    }),
                    text &&
                      l.jsx("span", {
                        className: `${prefixCls}-status-text`,
                        children: text,
                      }),
                  ],
                });
              }
              if ((dot || color) && Number(count) > 0) {
                return l.jsx(a.A, {
                  classNames: "badge-zoom",
                  in: dot || !!color,
                  timeout: 200,
                  appear: true,
                  mountOnEnter: true,
                  unmountOnExit: true,
                  children: l.jsx("span", {
                    className: A_1(
                      `${prefixCls}-dot`,
                      {
                        [`${prefixCls}-color-${color}`]: color,
                      },
                      dotClassName,
                    ),
                    style: r._({}, e, style_1),
                  }),
                });
              }
              return l.jsx(useF, {
                prefixCls,
                className: A_1(`${prefixCls}-number`, dotClassName),
                style: r._({}, e, style_1),
                maxCount,
                count,
              });
            }
            return l.jsx("span", {
              className: A_1(`${prefixCls}-text`, dotClassName),
              style: style_1,
              children: text,
            });
          })(),
        ],
      },
    ),
  );
});
A.displayName = "Badge";
