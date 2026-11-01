import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import _i from "xb";
import { A } from "./module-CF.js";
export function J(e) {
  const {
    children,
    className,
    contentClassName,
    contentRef,
    disabled = false,
    leftScrollable = false,
    onContentScroll,
    rightScrollable = false,
    scrollControls,
  } = e;
  const h = o._(e, [
    "children",
    "className",
    "contentClassName",
    "contentRef",
    "disabled",
    "leftScrollable",
    "onContentScroll",
    "rightScrollable",
    "scrollControls",
  ]);
  return l.jsxs(
    "div",
    r._(a._({}, h), {
      className: _i(A.container, className),
      children: [
        l.jsx("div", {
          ref: contentRef,
          className: _i(A.content, contentClassName, {
            [A.disabled]: disabled,
            [A.leftScrollable]: leftScrollable,
            [A.rightScrollable]: rightScrollable,
          }),
          onScroll: onContentScroll,
          children,
        }),
        scrollControls,
      ],
    }),
  );
}
