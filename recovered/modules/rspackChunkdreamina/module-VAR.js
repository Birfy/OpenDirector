import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1 } from "./module-Ix_2.js";
import { QO } from "./module-mY_2.js";
import { A as A_2 } from "./module-k6B.js";
import { A as A_3 } from "./module-Ww_2.js";
let p = {
  position: "top",
  trigger: "hover",
  unmountOnExit: true,
};
export let A = s.forwardRef(function (e, ref) {
  let { getPrefixCls, componentConfig, rtl } = s.useContext(QO);
  let m = A_2(
    e,
    p,
    componentConfig == null ? undefined : componentConfig.Popover,
  );
  let {
    style,
    className,
    children,
    position,
    getPopupContainer,
    trigger,
    defaultPopupVisible,
    popupVisible,
    triggerProps,
    unmountOnExit,
    onVisibleChange,
    content,
    title,
    showArrow = true,
  } = m;
  let E = i._(m, [
    "style",
    "className",
    "children",
    "position",
    "getPopupContainer",
    "trigger",
    "defaultPopupVisible",
    "popupVisible",
    "triggerProps",
    "unmountOnExit",
    "onVisibleChange",
    "content",
    "title",
    "showArrow",
  ]);
  let _ = getPrefixCls("popover");
  return l.jsx(
    A_1,
    o._(
      r._(
        o._(r._({}, E), {
          ref,
          style: r._(
            {
              maxWidth: 350,
            },
            style,
          ),
          showArrow,
          className,
          prefixCls: _,
          getPopupContainer,
          position,
          trigger,
          content: l.jsxs("div", {
            className: A_3(`${_}-inner`, {
              [`${_}-inner-rtl`]: rtl,
            }),
            children: [
              title
                ? l.jsx("div", {
                    className: `${_}-title`,
                    children: title,
                  })
                : null,
              l.jsx("div", {
                className: `${_}-inner-content`,
                children: content,
              }),
            ],
          }),
          popupHoverStay: true,
          unmountOnExit,
          triggerProps,
          defaultPopupVisible,
          onVisibleChange:
            onVisibleChange ||
            (triggerProps ? triggerProps.onVisibleChange : undefined),
          childrenPrefix: _,
        }),
        "popupVisible" in m
          ? {
              popupVisible,
            }
          : {},
      ),
      {
        children:
          typeof children === "string"
            ? l.jsx("span", {
                children,
              })
            : children,
      },
    ),
  );
});
A.displayName = "Popover";
