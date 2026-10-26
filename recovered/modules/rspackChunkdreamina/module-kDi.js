import r from "oa";
import n from "bk";
import a from "qa";
import o from "z8";
import _s from "xb";
export function M(e) {
  const { rootRef, children, overlay, topOverlay, className } = e;
  const u = a._(e, [
    "rootRef",
    "children",
    "overlay",
    "topOverlay",
    "className",
  ]);
  return o.jsxs(
    "div",
    n._(r._({}, u), {
      ref: rootRef,
      className: _s("feed-item-GsQc4d", className),
      children: [
        o.jsx("div", {
          className: "content-BmlGjK",
          children,
        }),
        topOverlay,
        overlay,
      ],
    }),
  );
}
