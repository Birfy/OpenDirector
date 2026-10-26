import r from "oa";
import a from "bk";
import o from "qa";
import i from "z8";
import _l from "xb";
import { A } from "./module-Rm.js";
export function K(e) {
  const { active = false, adornments, className, content, rootRef, style } = e;
  const v = o._(e, [
    "active",
    "adornments",
    "className",
    "content",
    "rootRef",
    "style",
  ]);
  return i.jsxs(
    "div",
    a._(r._({}, v), {
      className: _l(A.reference, className, {
        [A.active]: active,
      }),
      style,
      ref: rootRef,
      children: [
        content
          ? i.jsx("div", {
              className: A.content,
              children: content,
            })
          : null,
        adornments,
      ],
    }),
  );
}
