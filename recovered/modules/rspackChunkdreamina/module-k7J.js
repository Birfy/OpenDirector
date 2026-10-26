import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import a from "yI";
import { A as A_1 } from "./module-d1.js";
import { QO } from "./module-tMn.js";
import { A as A_2 } from "./module-oO_3.js";
import p from "fyk";
import "U4";
import { V } from "./module-Mt_2.js";
import { Et } from "./module-NnE_2.js";
let spin = s.forwardRef(function (e, t) {
  let prefixCls = s.useContext(V).prefixCls;
  let r = prefixCls === undefined ? "lv" : prefixCls;
  let e_spin = e.spin;
  let e_className = e.className;
  let l = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-spin-loading"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return s.createElement(
    "svg",
    p(
      {
        fill: "none",
        stroke: "currentColor",
        "aria-hidden": "true",
        className: "lv-icon lv-icon-loading",
        display: "block",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 100 100",
      },
      l,
    ),
    s.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "40",
      strokeWidth: "16",
      className: "lv-spin-track",
    }),
    s.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "40",
      strokeDasharray: "190",
      strokeLinecap: "round",
      strokeWidth: "16",
      className: "lv-spin-thumb",
    }),
  );
});
spin.defaultProps = {
  isIcon: true,
};
spin.displayName = "IconSpinLoading";
function useW(e) {
  let { getPrefixCls } = s.useContext(QO);
  let className = `${getPrefixCls("spin")}-dot`;
  let style = {
    width: e.size,
    height: e.size,
  };
  let o = e.size ? parseInt(String(e.size)) : 0;
  return l.jsx("div", {
    className: `${className}-list`,
    style: {
      height: e.size,
      width: Et(o) && o > 0 ? 7 * o : "",
    },
    children: [undefined, undefined, undefined, undefined, undefined].map(
      (e, t) =>
        l.jsx(
          "div",
          {
            className,
            style,
          },
          t,
        ),
    ),
  });
}
const logo = s.forwardRef(function (e, t) {
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
      .concat(r, "-icon-capcut-loading"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return s.createElement(
    "svg",
    p(
      {
        fill: "currentColor",
        viewBox: "0 0 1024 1024",
        stroke: "currentColor",
      },
      l,
    ),
    s.createElement(
      "defs",
      null,
      s.createElement(
        "mask",
        {
          id: "a",
        },
        s.createElement("rect", {
          width: "100%",
          height: "100%",
          fill: "#fff",
        }),
        s.createElement(
          "path",
          {
            fill: "none",
            stroke: "#000",
            strokeDasharray: "350,1990",
            "stroke-dashoffset": "298",
            strokeWidth: "180",
            d: "M1066.29 172.74 58.35 701.29V802.6c0 14 21.95 35.6 39 35.6s576.89-1.84 615-1.84 71-24.22 71-47.07-20-335.06-20-335.06",
            className: "Amask",
          },
          s.createElement("animate", {
            attributeName: "stroke-dashoffset",
            dur: "1.33s",
            keyTimes: "0;0.625;1",
            repeatCount: "indefinite",
            values: "298;-2042;-2042",
          }),
        ),
      ),
    ),
    s.createElement(
      "defs",
      null,
      s.createElement(
        "mask",
        {
          id: "b",
        },
        s.createElement("rect", {
          width: "100%",
          height: "100%",
          fill: "#fff",
        }),
        s.createElement(
          "path",
          {
            fill: "none",
            stroke: "#000",
            strokeDasharray: "350,1990",
            "stroke-dashoffset": "60",
            strokeWidth: "180",
            d: "M776.05 564.14s-14-294.66-14-315-.4-64-40-64-587.54-2.79-621-2.79-47.38 26-47.38 45.73 3.39 97.06 3.39 97.06L1065.93 851",
            className: "Bmask",
          },
          s.createElement("animate", {
            attributeName: "stroke-dashoffset",
            dur: "1.33s",
            keyTimes: "0;0.375;1",
            repeatCount: "indefinite",
            values: "60;60;-2280",
          }),
        ),
      ),
    ),
    s.createElement("path", {
      d: "M1015.2 277.87V121L8.8 647.16v158.09c0 61.35 41.3 99.11 109.73 99.11H716.7c64.89 0 109.72-37.76 109.72-99.11v-7.38l-77.86-41H98.47Z",
      className: "A",
      mask: "url(#a)",
      transform: "translate(36.34 -92.35)",
    }),
    s.createElement("path", {
      d: "M424.1 437.15 98.47 268.43H746.2l80.22-41.85v-5.34c0-62.53-44.83-100.24-109.72-100.24H118.53C50.1 121 8.8 158.71 8.8 221.24v158.1L273.08 516.2l553.34 287.87 188.78 100.29V745.08l-302-157.49Z",
      className: "B",
      mask: "url(#b)",
      transform: "translate(36.34 -92.35)",
    }),
  );
});
logo.defaultProps = {
  isIcon: true,
};
logo.displayName = "IconCapcutLoading";
const primary =
  require.p + "static/image/loading-primary.49ddfd6e.23cb092dfb.webp";
const white = require.p + "static/image/loading-white.5eab00a8.2713524529.webp";
const gray = require.p + "static/image/loading-gray.7c2f624f.24a363dcf9.webp";
let k = {
  spin,
  dot: useW,
  logo,
};
let A = {
  primary,
  white,
  gray,
};
let E = s.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig } = s.useContext(QO);
  let f = A_2(
    e,
    {},
    componentConfig == null ? undefined : componentConfig.Spin,
  );
  let {
    style,
    className,
    children,
    loading,
    size,
    icon,
    element,
    tip,
    presetIcon = "spin",
    spinColor = "primary",
    delay,
    block = false,
    webp = false,
    dot,
  } = f;
  let _ = i._(f, [
    "style",
    "className",
    "children",
    "loading",
    "size",
    "icon",
    "element",
    "tip",
    "presetIcon",
    "spinColor",
    "delay",
    "block",
    "webp",
    "dot",
  ]);
  let [M, setM] = s.useState(!delay && loading);
  let S = s.useCallback(a.A(setM, delay), [delay]);
  let D = delay ? M : loading;
  let R = getPrefixCls("spin");
  s.useEffect(() => {
    if (delay) {
      S(loading);
    }
    return () => {
      if (S) {
        S.cancel();
      }
    };
  }, [loading]);
  let I = s.useMemo(() => {
    if (icon) {
      return l.jsx("span", {
        className: `${R}-icon`,
        children: s.cloneElement(icon, {
          className: A_1(`${R.replace("-spin", "-icon")}-loading`),
          style: {
            fontSize: size,
          },
        }),
      });
    }
    if (element) {
      return l.jsx("span", {
        className: `${R}-icon`,
        children: element,
      });
    }
    if (dot || presetIcon === "dot") {
      return l.jsx("span", {
        className: `${R}-icon`,
        children: l.jsx(useW, {
          size,
        }),
      });
    }
    if (webp) {
      return l.jsx("div", {
        className: A_1(`${R}-icon`, `${R}-webp`),
        children: l.jsx("img", {
          src: A[spinColor],
          alt: "loading",
        }),
      });
    }
    let e = k[presetIcon];
    return l.jsx("span", {
      className: A_1(
        `${R}-icon`,
        `${R}-icon-${presetIcon}`,
        `${R}-icon-${presetIcon}-${spinColor}`,
      ),
      children: l.jsx(e, {
        style: {
          fontSize: size,
        },
      }),
    });
  }, [dot, element, icon, R, presetIcon, size, spinColor, webp]);
  return l.jsx(
    "div",
    o._(
      r._(
        {
          ref: t,
          className: A_1(
            R,
            {
              [`${R}-block`]: block,
              [`${R}-loading`]: D,
              [`${R}-with-tip`]: tip && !children,
            },
            className,
          ),
          style,
        },
        _,
      ),
      {
        children: children
          ? l.jsxs(l.Fragment, {
              children: [
                l.jsx("div", {
                  className: `${R}-children`,
                  children,
                }),
                D &&
                  l.jsx("div", {
                    className: `${R}-loading-layer`,
                    style: {
                      fontSize: size,
                    },
                    children: l.jsxs("span", {
                      className: `${R}-loading-layer-inner`,
                      children: [
                        I,
                        tip
                          ? l.jsx("div", {
                              className: `${R}-tip`,
                              children: tip,
                            })
                          : null,
                      ],
                    }),
                  }),
              ],
            })
          : l.jsxs(l.Fragment, {
              children: [
                I,
                tip
                  ? l.jsx("div", {
                      className: `${R}-tip`,
                      children: tip,
                    })
                  : null,
              ],
            }),
      },
    ),
  );
});
E.displayName = "Spin";
var _ = E;
export { _ as A };
