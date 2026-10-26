import n from "z8";
import a from "bT";
import o from "Z1";
export var r = a.memo(function () {
  const e = a.useId().replaceAll(":", "");
  const t = "create-page-top-glow-".concat(e);
  const r = "create-page-top-pattern-".concat(e);
  const i = "create-page-top-mask-blur-".concat(e);
  const c = "create-page-top-mask-".concat(e);
  return n.jsx("div", {
    "aria-hidden": "true",
    className: o.A.topBackground,
    "data-create-page-top-background": true,
    children: n.jsxs("svg", {
      className: o.A.topBackgroundArtwork,
      focusable: "false",
      preserveAspectRatio: "xMidYMin meet",
      viewBox: `0 0 ${1200} ${400}`,
      children: [
        n.jsxs("defs", {
          children: [
            n.jsxs("radialGradient", {
              id: t,
              cx: "0",
              cy: "0",
              r: "10",
              gradientTransform:
                "matrix(-1.6461e-13 17.9 -60 3.0403e-12 600 0)",
              gradientUnits: "userSpaceOnUse",
              children: [
                n.jsx("stop", {
                  offset: "0",
                  stopColor: "#008ee5",
                  stopOpacity: "0.6",
                }),
                n.jsx("stop", {
                  offset: "0.5",
                  stopColor: "#008ee5",
                  stopOpacity: "0.3",
                }),
                n.jsx("stop", {
                  offset: "1",
                  stopColor: "#008ee5",
                  stopOpacity: "0",
                }),
              ],
            }),
            n.jsx("pattern", {
              id: r,
              x: 200,
              y: 2,
              width: 20.901,
              height: 20.959,
              patternUnits: "userSpaceOnUse",
              preserveAspectRatio: "none",
              viewBox: `0 0 ${20.901} ${20.959}`,
              children: n.jsx("svg", {
                focusable: "false",
                height: 8,
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 25 24",
                width: 8,
                x: -1.2,
                y: -0.67,
                children: n.jsx("path", {
                  className: o.A.topBackgroundStar,
                  d: "M22.044 12.695a.77.77 0 0 0-.596-.734c-4.688-1.152-7.18-3.92-7.986-9.924a.358.358 0 0 0-.006-.033.573.573 0 0 0-1.137 0l-.007.033c-.805 6.004-3.298 8.772-7.986 9.924a.77.77 0 0 0-.596.734v.033a.82.82 0 0 0 .625.796c3.3.859 6.851 2.872 7.9 6.022.086.26.332.443.613.454h.037a.673.673 0 0 0 .614-.454c1.048-3.15 4.598-5.163 7.9-6.021a.82.82 0 0 0 .625-.797v-.033Z",
                }),
              }),
            }),
            n.jsx("filter", {
              id: i,
              x: "127.652",
              y: "-82.73",
              width: "944.696",
              height: "412.461",
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: n.jsx("feGaussianBlur", {
                stdDeviation: "42.1739",
              }),
            }),
            n.jsx("mask", {
              id: c,
              x: "127.652",
              y: "-82.73",
              width: "944.696",
              height: "412.461",
              maskContentUnits: "userSpaceOnUse",
              maskUnits: "userSpaceOnUse",
              children: n.jsx("ellipse", {
                cx: "600",
                cy: "123.5",
                rx: "388",
                ry: "121.883",
                fill: "white",
                filter: "url(#".concat(i, ")"),
              }),
            }),
          ],
        }),
        n.jsx("rect", {
          className: o.A.topBackgroundGlow,
          width: 1200,
          height: 400,
          fill: "url(#".concat(t, ")"),
        }),
        n.jsx("rect", {
          x: 200,
          y: 2,
          width: 800,
          height: 320.216,
          fill: "url(#".concat(r, ")"),
          mask: "url(#".concat(c, ")"),
        }),
      ],
    }),
  });
});
