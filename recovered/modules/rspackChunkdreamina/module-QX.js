import n from "oa";
import t from "bk";
import o from "qa";
import r from "z8";
import _s from "xb";
import c from "y3";
import { A } from "./module-xha.js";
function m(e) {
  const { className, appearance = "default" } = e;
  const s = o._(e, ["className", "appearance"]);
  return r.jsxs(
    "div",
    t._(n._({}, s), {
      className: _s(
        A.skeletonCard,
        {
          [A.film]: appearance === "film",
        },
        className,
      ),
      "aria-hidden": "true",
      "data-testid": "short-video-card-skeleton",
      children: [
        r.jsx(c.Q, {
          className: A.skeletonMedia,
        }),
        r.jsxs("div", {
          className: A.skeletonInfo,
          children: [
            r.jsx(c.Q, {
              className: A.skeletonTitle,
            }),
            r.jsx(c.Q, {
              className: A.skeletonAuthor,
            }),
          ],
        }),
      ],
    }),
  );
}
export { m as n };
