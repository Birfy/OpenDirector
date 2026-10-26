import r from "oa";
import n from "bk";
import a from "qa";
import o from "z8";
import _s from "xb";
import c from "yw";
import { M } from "./module-kDi.js";
import { A } from "./module-AL3.js";
export function H(e) {
  const { className, children } = e;
  const s = a._(e, ["className", "children"]);
  return o.jsxs(
    M,
    n._(r._({}, s), {
      className: _s(A.feedItemVideo, className),
      children: [
        children,
        o.jsx("div", {
          className: A.playIcon,
          children: o.jsx(c.AYg, {
            className: A.icon,
          }),
        }),
      ],
    }),
  );
}
