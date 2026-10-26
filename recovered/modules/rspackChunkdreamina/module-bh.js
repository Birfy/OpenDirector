import n from "z8";
import "Vx";
import r from "Ix";
import a from "bT";
import _o from "xb";
export var O = a.memo(function (e) {
  const { label, className, labelClassName, contentClassName, children } = e;
  return n.jsxs("div", {
    className: _o("preview-mALYk8", className),
    children: [
      label
        ? n.jsx(r.A, {
            content: label,
            checkOverflow: true,
            children: n.jsx("div", {
              className: _o("label-YvH8Uz", labelClassName),
              children: label,
            }),
          })
        : null,
      n.jsx("div", {
        className: _o("content-lH6EPP", contentClassName),
        children,
      }),
    ],
  });
});
