import r from "oa";
import n from "bk";
import i from "qa";
import o from "z8";
import _s from "xb";
import { A } from "./module-CF_3.js";
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
  const g = i._(e, [
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
  return o.jsxs(
    "div",
    n._(r._({}, g), {
      className: _s(A.container, className),
      children: [
        o.jsx("div", {
          ref: contentRef,
          className: _s(A.content, contentClassName, {
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
