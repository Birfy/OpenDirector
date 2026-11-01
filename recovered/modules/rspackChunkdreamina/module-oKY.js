import n from "oa";
import r from "bk";
import a from "qa";
import o from "z8";
import s from "bT";
import _l from "xb";
import { A } from "./module-dIg.js";
export var m = s.memo(
  s.forwardRef(function (e, ref) {
    const {
      icon,
      label,
      size = "default",
      iconOnly = false,
      active,
      dragging,
      className,
    } = e;
    const p = a._(e, [
      "icon",
      "label",
      "size",
      "iconOnly",
      "active",
      "dragging",
      "className",
    ]);
    return o.jsxs(
      "span",
      r._(
        n._(
          {
            ref,
          },
          p,
        ),
        {
          className: _l(A.tag, className, {
            [A.large]: size === "large",
            [A.iconOnly]: iconOnly,
            [A.active]: active,
            [A.dragging]: dragging,
          }),
          children: [
            icon
              ? o.jsx("span", {
                  className: A.icon,
                  children: icon,
                })
              : null,
            !iconOnly && label
              ? o.jsx("span", {
                  className: A.label,
                  children: label,
                })
              : null,
          ],
        },
      ),
    );
  }),
);
