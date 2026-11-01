import a from "z8";
import r from "yw";
import { x } from "./module-cV2.js";
const l = (21 / 9 - 1) / (21 / 9 + 1);
export function d(e) {
  const t = x(e);
  if (t) {
    const n = Math.max(t.width, t.height);
    const a = Math.min(t.width, t.height) / n;
    const r = 24 - (2.75 + -1.79 * Math.min((1 - a) / (1 + a) / l, 1)) * 2 - 2;
    const i = Math.max(4, r * a);
    const width = t.width >= t.height ? r : i;
    const height = t.width >= t.height ? i : r;
    return {
      x: (24 - width) / 2,
      y: (24 - height) / 2,
      width,
      height,
    };
  }
}
export function z(e) {
  const { aspectRatio, size = 24 } = e;
  const o = d(aspectRatio);
  if (o) {
    return a.jsx("svg", {
      "aria-hidden": "true",
      focusable: "false",
      width: size,
      height: size,
      viewBox: `0 0 ${24} ${24}`,
      fill: "none",
      children: a.jsx("rect", {
        x: o.x,
        y: o.y,
        width: o.width,
        height: o.height,
        rx: 3,
        ry: 3,
        stroke: "currentColor",
        strokeWidth: 2,
      }),
    });
  }
  return a.jsx(r.X$o, {
    size,
  });
}
