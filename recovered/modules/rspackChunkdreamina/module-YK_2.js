import n from "oa";
import t from "bk";
import o from "z8";
import r from "Cc8";
import { A } from "./module-j7F.js";
export function D(e) {
  const { items, renderItem, markSsrMediaCandidates = false } = e;
  return o.jsx("div", {
    className: A.inspirationCardGrid,
    children: items.map((e, index) => {
      var layout = {
        w: e.shape.width,
        h: e.shape.height,
        x: 0,
        y: 0,
        s: 0,
        index,
        col: 0,
      };
      var children = renderItem(
        t._(n._({}, e), {
          layout,
        }),
        index,
      );
      if (children == null) {
        return null;
      }
      var style = {
        aspectRatio: "".concat(e.shape.width, " / ").concat(e.shape.height),
      };
      var p = markSsrMediaCandidates
        ? {
            [r.vz]: "true",
          }
        : {};
      return o.jsx(
        "div",
        t._(
          n._(
            {
              className: A.inspirationCard,
              style,
            },
            p,
          ),
          {
            children,
          },
        ),
        e.key,
      );
    }),
  });
}
