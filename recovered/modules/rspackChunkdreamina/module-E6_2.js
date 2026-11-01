import i from "z8";
import "yuc";
import "uw5";
import "xj";
import a from "tR";
import o from "VAR";
import n from "R8";
import s from "bT";
import _l from "xb";
import { h as h_1 } from "./module-XP3_2.js";
import { A } from "./module-hZ_3.js";
const v = {
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
  const y = tag ? v[tag] : undefined;
  const [f, setF] = s.useState(false);
  const kRef = s.useRef(null);
  const b = h_1({
    preview,
    moreAction,
    visible: f,
    triggerRef: kRef,
    onVisibleChange: setF,
  });
  const children = i.jsxs(n.A, {
    htmlType: "button",
    type: "secondary",
    size: "default",
    shape: "round",
    className: _l(A.capsule, className),
    disabled: !onClick,
    onClick,
    icon: icon
      ? i.jsx("span", {
          className: A.icon,
          "aria-hidden": "true",
          children: icon,
        })
      : undefined,
    children: [
      i.jsx("span", {
        className: A.label,
        children: label,
      }),
      y
        ? i.jsx(a.A, {
            className: _l(A.tag, y.className),
            size: "small",
            bordered: false,
            children: y.text,
          })
        : null,
    ],
  });
  if (preview) {
    return i.jsx(o.A, {
      trigger: "hover",
      popupVisible: f,
      position: "bottom",
      showArrow: false,
      triggerProps: {
        mouseEnterDelay: 200,
        popup: b.popup,
      },
      content: null,
      onVisibleChange: b.onVisibleChange,
      children: i.jsx("span", {
        ref: kRef,
        className: A.previewTrigger,
        onMouseEnter: onPreviewIntent,
        onFocus: () => {
          if (onPreviewIntent != null) {
            onPreviewIntent();
          }
          b.onVisibleChange(true);
        },
        onBlur: b.onTriggerBlur,
        onKeyDown: b.onTriggerKeyDown,
        children,
      }),
    });
  }
  return children;
});
