import r from "z8";
import "yuc";
import "uw5";
import "xj";
import n from "tR";
import a from "VAR";
import o from "R8";
import s from "bT";
import _l from "xb";
import { h as h_1 } from "./module-XP3.js";
import { A } from "./module-hZ_2.js";
const m = {
  hot: {
    className: A.tagHot,
    text: "Hot",
  },
  new: {
    className: A.tagNew,
    text: "New",
  },
};
export var t = s.memo(function (e) {
  const {
    icon,
    label,
    tag,
    preview,
    moreAction,
    className,
    onClick,
    onPreviewIntent,
  } = e;
  const b = tag ? m[tag] : undefined;
  const [y, setY] = s.useState(false);
  const xRef = s.useRef(null);
  const w = h_1({
    preview,
    moreAction,
    visible: y,
    triggerRef: xRef,
    onVisibleChange: setY,
  });
  const children = r.jsxs(o.A, {
    htmlType: "button",
    type: "secondary",
    size: "default",
    shape: "round",
    className: _l(A.capsule, className),
    disabled: !onClick,
    onClick,
    icon: icon
      ? r.jsx("span", {
          className: A.icon,
          "aria-hidden": "true",
          children: icon,
        })
      : undefined,
    children: [
      r.jsx("span", {
        className: A.label,
        children: label,
      }),
      b
        ? r.jsx(n.A, {
            className: _l(A.tag, b.className),
            size: "small",
            bordered: false,
            children: b.text,
          })
        : null,
    ],
  });
  if (preview) {
    return r.jsx(a.A, {
      trigger: "hover",
      popupVisible: y,
      position: "bottom",
      showArrow: false,
      triggerProps: {
        mouseEnterDelay: 200,
        popup: w.popup,
      },
      content: null,
      onVisibleChange: w.onVisibleChange,
      children: r.jsx("span", {
        ref: xRef,
        className: A.previewTrigger,
        onMouseEnter: onPreviewIntent,
        onFocus: () => {
          if (onPreviewIntent != null) {
            onPreviewIntent();
          }
          w.onVisibleChange(true);
        },
        onBlur: w.onTriggerBlur,
        onKeyDown: w.onTriggerKeyDown,
        children,
      }),
    });
  }
  return children;
});
