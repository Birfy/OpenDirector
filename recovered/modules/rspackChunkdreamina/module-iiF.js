import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1 } from "./module-Ww_2.js";
import { QO } from "./module-mY_2.js";
import { Gv, Tn } from "./module-V9.js";
import { A as A_2 } from "./module-jDd.js";
import { A as A_3 } from "./module-ag_3.js";
import v from "fyk";
import "U4";
import { V } from "./module-Tb.js";
import { A as A_4 } from "./module-Ix_2.js";
import { A as A_5 } from "./module-Oj_2.js";
import { A } from "./module-Hu.js";
import { A as A_6 } from "./module-k6B.js";
import { A as A_7 } from "./module-Sc_2.js";
let p = (backgroundColor, t) => {
  if (Gv(backgroundColor)) {
    let n = Object.keys(backgroundColor)
      .map((t) => `${backgroundColor[t]} ${t}`)
      .join(",");
    let o = t
      ? {
          backgroundSize: `${10000 / t}%`,
        }
      : {};
    return r._(
      {
        backgroundImage: `linear-gradient(to right, ${n})`,
      },
      o,
    );
  }
  return {
    backgroundColor,
  };
};
let f = {
  small: 3,
  default: 4,
  large: 8,
};
function useH(e) {
  let {
    type,
    size,
    prefixCls,
    buffer,
    percent,
    status,
    color,
    animation,
    showText,
    bufferColor,
    formatText,
    trailColor,
  } = e;
  let w = e.strokeWidth || f[size];
  let j = `${prefixCls}-${type}`;
  let O = status === "success" || status === "error" || percent >= 100;
  let C = s.useCallback(() => {
    if (Tn(formatText)) {
      return formatText(percent);
    }
    if (status === "error") {
      return l.jsxs("span", {
        children: [percent, "% ", l.jsx(A_2, {})],
      });
    }
    return `${percent}%`;
  }, [formatText, percent, status]);
  return l.jsxs("div", {
    className: `${j}-wrapper`,
    children: [
      l.jsxs("div", {
        className: `${j}-outer`,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": percent,
        style: {
          height: w,
          backgroundColor: trailColor,
        },
        children: [
          buffer &&
            !O &&
            l.jsx("div", {
              className: `${j}-inner-buffer`,
              style: r._(
                {
                  width: `${percent > 0 ? percent + 10 : 0}%`,
                },
                p(bufferColor),
              ),
            }),
          l.jsx("div", {
            className: A_1(`${j}-inner`, {
              [`${j}-inner-animate`]: animation,
            }),
            style: r._(
              {
                width: `${percent}%`,
              },
              p(color, percent),
            ),
          }),
        ],
      }),
      showText &&
        l.jsx("div", {
          className: A_1(`${j}-text`, {
            [`${j}-text-with-icon`]: status,
          }),
          children: C(),
        }),
    ],
  });
}
useH.defaultProps = {
  showText: true,
  size: "default",
  status: "normal",
};
const O = s.forwardRef(function (e, t) {
  const prefixCls = s.useContext(V).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const l = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-exclamation"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return s.createElement(
    "svg",
    v(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    s.createElement("path", {
      d: "M23 9H25V30H23z",
    }),
    s.createElement("path", {
      fill: "currentColor",
      stroke: "none",
      strokeWidth: "none",
      d: "M23 9H25V30H23z",
    }),
    s.createElement("path", {
      d: "M23 37H25V39H23z",
    }),
    s.createElement("path", {
      fill: "currentColor",
      stroke: "none",
      strokeWidth: "none",
      d: "M23 37H25V39H23z",
    }),
  );
});
O.defaultProps = {
  isIcon: true,
};
O.displayName = "IconExclamation";
let P = {
  mini: 4,
  small: 3,
  default: 4,
  large: 4,
};
let $ = {
  mini: 16,
  small: 48,
  default: 64,
  large: 80,
};
const useK = (e) => {
  let { size, percent = 0, prefixCls, showText, status, formatText } = e;
  let d = Gv(e.color);
  let p = e.width || $[size];
  let strokeWidth = e.strokeWidth || (size === "mini" ? p / 2 : P[size]);
  let r_1 = (p - strokeWidth) / 2;
  let strokeDasharray = 2 * Math.PI * r_1;
  let g = p / 2;
  let y = `${prefixCls}-circle`;
  let b = `${y}-svg`;
  let x = s.useCallback(
    (e) => {
      if (Tn(formatText)) {
        return formatText(percent);
      }
      switch (e) {
        case "success":
          return l.jsx(A_3, {});
        case "error":
          return l.jsx(O, {});
        default:
          return `${percent}%`;
      }
    },
    [formatText, percent],
  );
  let id = A_5(`${prefixCls}-linear-gradient-`);
  let j = d ? `url(#${id})` : e.color;
  let children = l.jsxs("div", {
    className: `${y}-wrapper`,
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": percent,
    style: {
      width: p,
      height: p,
    },
    children: [
      l.jsxs("svg", {
        viewBox: `0 0 ${p} ${p}`,
        className: `${b}`,
        children: [
          d &&
            l.jsx("defs", {
              children: l.jsx("linearGradient", {
                id,
                x1: "0",
                y1: "1",
                x2: "0",
                y2: "0",
                children: Object.keys(e.color)
                  .sort()
                  .map((offset) =>
                    l.jsx(
                      "stop",
                      {
                        offset,
                        stopColor: e.color[offset],
                      },
                      offset,
                    ),
                  ),
              }),
            }),
          l.jsx("circle", {
            className: `${y}-mask`,
            fill: "none",
            cx: g,
            cy: g,
            r: r_1,
            strokeWidth:
              e.pathStrokeWidth ||
              (size === "mini" ? strokeWidth : Math.max(2, strokeWidth - 2)),
            style: {
              stroke: e.pathStrokeColor,
            },
          }),
          l.jsx("circle", {
            className: `${y}-path`,
            fill: "none",
            cx: g,
            cy: g,
            r: r_1,
            strokeWidth,
            style: {
              stroke: j,
              strokeDasharray,
              strokeDashoffset:
                (percent > 100 ? 100 : 1 - percent / 100) * strokeDasharray,
            },
          }),
        ],
      }),
      showText &&
        size !== "mini" &&
        l.jsx("div", {
          className: `${y}-text`,
          children: x(status),
        }),
    ],
  });
  if (size === "mini" && status === "success" && e.type === "circle") {
    children = l.jsx("div", {
      className: A_1(`${y}-wrapper`, `${y}-icon-wrapper`),
      style: {
        width: p,
        height: p,
      },
      children: l.jsx(A_3, {
        style: {
          fontSize: 12,
          color: j,
        },
      }),
    });
  }
  if (size === "mini" && showText) {
    return l.jsx(A_4, {
      content: l.jsx("div", {
        className: `${y}-text`,
        children: x("normal"),
      }),
      children,
    });
  }
  return children;
};
let useE = (e) => {
  let {
    size,
    prefixCls,
    percent,
    status,
    color,
    type,
    showText,
    formatText,
    trailColor,
  } = e;
  let h = e.strokeWidth || (size === "small" ? 8 : 4);
  let m = `${prefixCls}-${type}`;
  let v = s.useCallback(() => {
    if (Tn(formatText)) {
      return formatText(percent);
    }
    if (status === "error") {
      return l.jsxs("span", {
        children: [percent, "% ", l.jsx(A, {})],
      });
    }
    return `${percent}%`;
  }, [formatText, percent, status]);
  return l.jsxs("div", {
    className: `${m}-wrapper`,
    children: [
      l.jsx("div", {
        className: `${m}-outer`,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": percent,
        style: {
          height: h,
        },
        children: [...Array(e.steps)].map((t, n) => {
          let o = percent > (100 / e.steps) * n;
          return l.jsx(
            "div",
            {
              className: A_1(`${m}-item`, {
                [`${m}-item-active`]: o,
              }),
              style: {
                backgroundColor: o ? color : trailColor || "",
              },
            },
            n,
          );
        }),
      }),
      showText &&
        l.jsx("div", {
          className: A_1(`${m}-text`, {
            [`${m}-text-with-icon`]: status,
          }),
          children: v(),
        }),
    ],
  });
};
useE.defaultProps = {
  showText: true,
  size: "default",
  status: "normal",
};
let T = {
  type: "line",
  showText: true,
  percent: 0,
  size: "default",
};
let S = s.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig, rtl } = s.useContext(QO);
  let p = A_6(
    e,
    T,
    componentConfig == null ? undefined : componentConfig.Progress,
  );
  let { className, style, size, width, strokeWidth, steps, percent } = p;
  let w = i._(p, [
    "className",
    "style",
    "size",
    "width",
    "strokeWidth",
    "steps",
    "percent",
  ]);
  let j = steps && p.type !== "circle" ? "steps" : p.type;
  let prefixCls = getPrefixCls("progress");
  let status = "status" in p ? p.status : percent >= 100 ? "success" : "normal";
  let N = {
    width,
  };
  if (size === "mini" && j === "line") {
    N.width = width || 16;
    N.height = width || 16;
  }
  return l.jsxs(
    "div",
    o._(
      r._(
        {
          ref: t,
          className: A_1(
            prefixCls,
            `${prefixCls}-${j}`,
            `${prefixCls}-${size}`,
            {
              [`${prefixCls}-is-${status}`]: status !== "normal",
              [`${prefixCls}-rtl`]: rtl,
            },
            className,
          ),
          style: r._({}, N, style),
        },
        A_7(w, [
          "type",
          "animation",
          "status",
          "color",
          "trailColor",
          "showText",
          "formatText",
          "buffer",
          "bufferColor",
        ]),
      ),
      {
        children: [
          j === "steps" &&
            l.jsx(
              useE,
              o._(r._({}, p), {
                type: j,
                status,
                prefixCls,
              }),
            ),
          j === "circle" &&
            l.jsx(
              useK,
              o._(
                r._(
                  {
                    width: p.width,
                  },
                  p,
                ),
                {
                  pathStrokeColor: p.trailColor,
                  status,
                  prefixCls,
                },
              ),
            ),
          j === "line" &&
            (size === "mini"
              ? l.jsx(
                  useK,
                  o._(
                    r._(
                      {
                        pathStrokeColor: p.trailColor,
                      },
                      p,
                    ),
                    {
                      pathStrokeWidth: strokeWidth || 4,
                      width: width || 16,
                      strokeWidth: strokeWidth || 4,
                      prefixCls,
                      status,
                    },
                  ),
                )
              : l.jsx(
                  useH,
                  o._(r._({}, p), {
                    status,
                    prefixCls,
                  }),
                )),
        ],
      },
    ),
  );
});
S.displayName = "Progress";
var D = S;
export { D as A };
