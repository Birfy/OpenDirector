import r from "bT";
let s = (...t) =>
  t
    .filter((t, e, i) => !!t && t.trim() !== "" && i.indexOf(t) === e)
    .join(" ")
    .trim();
const n = {
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
let a = r.forwardRef(
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
    h,
  ) =>
    r.createElement(
      "svg",
      {
        ref: h,
        ...n,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth
          ? (24 * Number(strokeWidth)) / Number(size)
          : strokeWidth,
        className: s("lucide", className),
        ...rest,
      },
      [
        ...iconNode.map(([t, e]) => r.createElement(t, e)),
        ...(Array.isArray(children) ? children : [children]),
      ],
    ),
);
export let A = (t, iconNode) => {
  let i = r.forwardRef(({ className, ...rest }, o) =>
    r.createElement(a, {
      ref: o,
      iconNode,
      className: s(
        `lucide-${t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`,
        className,
      ),
      ...rest,
    }),
  );
  i.displayName = `${t}`;
  return i;
};
