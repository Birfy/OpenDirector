import _r from "fyk";
import i from "bT";
import a from "wnX";
import l from "rJ";
import u from "jW8";
export const A = i.forwardRef(function (e, t) {
  const e_style = e.style;
  const e_className = e.className;
  const c = e_className === undefined ? "" : e_className;
  const e_color = e.color;
  const e_type = e.type;
  const f = e_type === undefined ? "dot" : e_type;
  const e_list = e.list;
  const e_duration = e.duration;
  const p = e_duration === undefined ? 1000 : e_duration;
  const e_svgKey = e.svgKey;
  const e_radius = e.radius;
  const r = e_radius === undefined ? 9 : e_radius;
  const e_stroke = e.stroke;
  const x = e_stroke === undefined ? 2 : e_stroke;
  const e_filleted = e.filleted;
  const filleted = e_filleted === undefined || e_filleted;
  const w = i.useState([]);
  const k = w[0];
  const N = w[1];
  const TRef = i.useRef(-1);
  const R = Math.PI * r;
  const S = 0.5 * x + r;
  const I = 2 * r + x;
  const LRef = i.useRef(null);
  const svgKey = u.xV(e_svgKey === undefined ? "" : e_svgKey).svgKey;
  i.useImperativeHandle(t, function () {
    return {
      dom: LRef.current,
    };
  });
  i.useEffect(
    function () {
      if (f === "dot" && k.length) {
        TRef.current = setInterval(() => {
          const e = [].concat(k);
          const t = e.pop();
          if (t) {
            e.unshift(t);
          }
          N(e);
        }, p / k.length);
      }
      return function () {
        if (TRef.current >= 0) {
          clearInterval(TRef.current);
        }
      };
    },
    [f, k, p],
  );
  i.useEffect(
    function () {
      let e;
      if (e_list && e_list.length) {
        e = e_list;
      } else {
        switch (f) {
          case "spin":
            e = [1, 0.1, 0.2286, 0.3572, 0.4858, 0.6144, 0.743, 0.8716];
            break;
          case "dot":
            e = [0.2, 0.6, 1];
            break;
          default:
            e = [];
        }
      }
      N(e);
    },
    [e_list, f],
  );
  return i.createElement(l.Wb, null, function (e) {
    let t;
    const e_prefixCls = e.prefixCls;
    return i.createElement(
      "div",
      {
        className: a.xF(e_prefixCls + "-loading all-border-box", f, c),
        style:
          ((t = a.EK(f, ["circle", "arc"])
            ? {
                width: I,
                height: I,
              }
            : {}),
          u.yx(
            _r(
              {
                animationDuration: p + "ms",
              },
              t,
              e_style || {},
            ),
          )),
        ref: LRef,
      },
      (() => {
        switch (f) {
          case "spin":
            var e;
            e = k.length;
            return k.map((t, n) =>
              i.createElement(
                "span",
                {
                  key: n,
                  className: "spin-cell",
                  style: u.yx({
                    opacity: t,
                    transform: `rotate(${n / e}turn)`,
                    width: x,
                  }),
                },
                i.createElement("span", {
                  className: "spin-cell-inner bg-color-with-config",
                  style: _r(
                    {
                      backgroundColor: e_color,
                    },
                    filleted
                      ? {
                          borderRadius: x,
                        }
                      : {},
                  ),
                }),
              ),
            );
          case "dot":
            return k.map((e, key) =>
              i.createElement("span", {
                key,
                className: a.xF("dot-cell", "bg-color-with-config", {
                  filleted,
                }),
                style: {
                  opacity: e,
                  backgroundColor: e_color,
                },
              }),
            );
          case "circle":
            return i.createElement(
              "svg",
              {
                viewBox: "0 0 " + I + " " + I,
              },
              i.createElement(
                "defs",
                null,
                i.createElement(
                  "linearGradient",
                  {
                    id: "grad1-" + svgKey,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                  },
                  i.createElement("stop", {
                    offset: "0%",
                    className: "loading-circle-middle stop-color-with-config",
                    style: {
                      stopColor: e_color,
                    },
                  }),
                  i.createElement("stop", {
                    offset: "100%",
                    className: "loading-circle-start stop-color-with-config",
                    style: {
                      stopColor: e_color,
                    },
                  }),
                ),
                i.createElement(
                  "linearGradient",
                  {
                    id: "grad2-" + svgKey,
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "0%",
                  },
                  i.createElement("stop", {
                    offset: "0%",
                    className: "loading-circle-middle stop-color-with-config",
                    style: {
                      stopColor: e_color,
                    },
                  }),
                  i.createElement("stop", {
                    offset: "100%",
                    className: "loading-circle-end stop-color-with-config",
                    style: {
                      stopColor: e_color,
                    },
                  }),
                ),
              ),
              i.createElement("circle", {
                cx: S,
                cy: S,
                r,
                stroke: "url(#grad1-" + svgKey + ")",
                strokeWidth: x,
                strokeDasharray: R,
                strokeDashoffset: R,
                fill: "none",
              }),
              i.createElement("circle", {
                cx: S,
                cy: S,
                r,
                stroke: "url(#grad2-" + svgKey + ")",
                strokeWidth: x,
                strokeDasharray: R,
                fill: "none",
              }),
              filleted
                ? i.createElement("circle", {
                    cx: 2 * S - x / 2,
                    cy: S,
                    r: x / 2,
                    className: "loading-circle-filleted fill-color-with-config",
                    style: {
                      fill: e_color,
                    },
                  })
                : null,
            );
          case "arc":
            return i.createElement(
              "svg",
              {
                viewBox: "0 0 " + I + " " + I,
              },
              i.createElement("circle", {
                className: "arc-bg",
                cx: S,
                cy: S,
                r,
                strokeWidth: x,
                fill: "none",
              }),
              i.createElement(
                "circle",
                _r(
                  {
                    className: "arc-line stroke-color-with-config",
                    cx: S,
                    cy: S,
                    r,
                    style: {
                      stroke: e_color,
                    },
                    strokeWidth: x,
                    strokeDashoffset: 0.5 * R,
                    strokeDasharray: `${0.5 * R} ${1.5 * R}`,
                    fill: "none",
                  },
                  filleted
                    ? {
                        strokeLinecap: "round",
                      }
                    : {},
                ),
              ),
            );
          default:
            return null;
        }
      })(),
    );
  });
});
