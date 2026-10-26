import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1 } from "./module-d1.js";
import { A as A_2, X } from "./module-OPT.js";
import { QO } from "./module-tMn.js";
import * as d from "./module-G1.js";
import { A as A_3 } from "./module-oO_3.js";
import { Tn } from "./module-NnE_2.js";
let h = {
  position: "top",
  trigger: "hover",
  escToClose: false,
  unmountOnExit: true,
  blurToHide: true,
  popupHoverStay: true,
  checkOverflow: false,
  keepInsidePopupContainer: false,
};
export let A = s.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig } = s.useContext(QO);
  let v = A_3(
    e,
    h,
    componentConfig == null ? undefined : componentConfig.Tooltip,
  );
  let {
    style,
    className,
    children,
    trigger,
    escToClose,
    defaultPopupVisible,
    position,
    unmountOnExit,
    popupVisible,
    prefixCls,
    blurToHide,
    popupHoverStay,
    disabled,
    onVisibleChange,
    triggerProps,
    childrenPrefix,
    getPopupContainer,
    keepInsidePopupContainer,
    content,
    mini,
    color,
    showArrow = false,
    checkOverflow,
  } = v;
  let W = i._(v, [
    "style",
    "className",
    "children",
    "trigger",
    "escToClose",
    "defaultPopupVisible",
    "position",
    "unmountOnExit",
    "popupVisible",
    "prefixCls",
    "blurToHide",
    "popupHoverStay",
    "disabled",
    "onVisibleChange",
    "triggerProps",
    "childrenPrefix",
    "getPopupContainer",
    "keepInsidePopupContainer",
    "content",
    "mini",
    "color",
    "showArrow",
    "checkOverflow",
  ]);
  let BRef = s.useRef();
  let updatePopupPosition = (e = 0, t) => {
    if (BRef.current) {
      BRef.current.updatePopupPosition(e, t);
    }
  };
  s.useImperativeHandle(
    t,
    () => ({
      updatePopupPosition,
    }),
    [],
  );
  let L = prefixCls || getPrefixCls("tooltip");
  let F = r._({}, d.A(W, X), d.t(W), triggerProps);
  let children_1 = Tn(content) ? content() : content;
  if ("popupVisible" in v) {
    F.popupVisible = popupVisible;
  } else {
    if (
      children_1 == null ||
      children_1 === false ||
      (typeof children_1 === "string" && children_1.trim() === "") ||
      0
    ) {
      F.popupVisible = false;
    }
  }
  return l.jsx(
    A_2,
    o._(
      r._(
        {
          style: r._(
            {
              maxWidth: 350,
            },
            style,
          ),
          className,
          ref: BRef,
          classNames: "zoomInFadeOut",
          duration: {
            enter: 300,
            exit: 100,
          },
          popup: () =>
            l.jsx("div", {
              style: {
                backgroundColor: color,
              },
              className: A_1(`${L}-content`, `${L}-content-${position}`, {
                [`${L}-mini`]: mini,
              }),
              role: "tooltip",
              children: l.jsx("div", {
                className: `${L}-content-inner`,
                children: children_1,
              }),
            }),
          clickToCloseTooltip: true,
          position,
          disabled,
          trigger,
          escToClose,
          showArrow,
          popupAlign: {
            left: 4,
            right: 4,
            top: 4,
            bottom: 4,
          },
          mouseEnterDelay: 200,
          mouseLeaveDelay: 200,
          unmountOnExit,
          popupHoverStay,
          blurToHide,
          childrenPrefix: childrenPrefix || L,
          getPopupContainer,
          keepInsidePopupContainer,
          onVisibleChange,
          defaultPopupVisible,
          checkOverflow,
        },
        F,
      ),
      {
        children,
      },
    ),
  );
});
A.displayName = "Tooltip";
