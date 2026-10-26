import r from "bT";
let n = (...e) =>
  e
    .filter((e, t, i) => !!e && e.trim() !== "" && i.indexOf(e) === t)
    .join(" ")
    .trim();
const a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
let o = r.forwardRef(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    },
    u,
  ) =>
    r.createElement(
      "svg",
      {
        ref: u,
        ...a,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth
          ? (24 * Number(strokeWidth)) / Number(size)
          : strokeWidth,
        className: n("lucide", className),
        ...rest,
      },
      [
        ...iconNode.map(([e, t]) => r.createElement(e, t)),
        ...(Array.isArray(children) ? children : [children]),
      ],
    ),
);
export let A = (e, iconNode) => {
  let i = r.forwardRef(({ className, ...rest }, s) =>
    r.createElement(o, {
      ref: s,
      iconNode,
      className: n(
        `lucide-${e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`,
        className,
      ),
      ...rest,
    }),
  );
  i.displayName = `${e}`;
  return i;
};
