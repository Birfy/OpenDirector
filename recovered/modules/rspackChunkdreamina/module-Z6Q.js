import r from "bT";
import { A as A_1 } from "./module-puV.js";
import { A as A_2, X } from "./module-ZW.js";
import { QO } from "./module-ce.js";
import * as a from "./module-Hv_4.js";
import { A as A_3 } from "./module-Bd_2.js";
import { Tn } from "./module-Pl5.js";
const p = {
  position: "top",
  trigger: "hover",
  escToClose: false,
  unmountOnExit: true,
  blurToHide: true,
  popupHoverStay: true,
};
export var A = r.forwardRef(function (e, t) {
  const n = r.useContext(QO);
  const n_getPrefixCls = n.getPrefixCls;
  const n_componentConfig = n.componentConfig;
  const v = A_3(
    e,
    p,
    n_componentConfig == null ? undefined : n_componentConfig.Tooltip,
  );
  const {
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
    content,
    mini,
    color,
    ...rest
  } = v;
  const VRef = r.useRef();
  const updatePopupPosition = function (e = 0, t) {
    if (VRef.current) {
      VRef.current.updatePopupPosition(e, t);
    }
  };
  r.useImperativeHandle(
    t,
    function () {
      return {
        updatePopupPosition,
      };
    },
    [],
  );
  const z = prefixCls || n_getPrefixCls("tooltip");
  const L = {
    ...a.A(rest, X),
    ...a.t(rest),
    ...triggerProps,
  };
  const H = Tn(content) ? content() : content;
  if ("popupVisible" in v) {
    L.popupVisible = popupVisible;
  } else if (
    H == null ||
    H === false ||
    (typeof H === "string" && H.trim() === "") ||
    0
  ) {
    L.popupVisible = false;
  }
  if (L.showArrow !== false || L.arrowProps) {
    L.arrowProps = L.arrowProps || {};
    if (color) {
      L.arrowProps.style = {
        backgroundColor: color,
        ...L.arrowProps.style,
      };
    }
  }
  return r.createElement(
    A_2,
    {
      style: {
        maxWidth: 350,
        ...style,
      },
      className,
      ref: VRef,
      classNames: "zoomInFadeOut",
      duration: {
        enter: 300,
        exit: 100,
      },
      popup: function () {
        return r.createElement(
          "div",
          {
            style: {
              backgroundColor: color,
            },
            className: A_1(z + "-content", z + "-content-" + position, {
              [z + "-mini"]: mini,
            }),
            role: "tooltip",
          },
          r.createElement(
            "div",
            {
              className: z + "-content-inner",
            },
            H,
          ),
        );
      },
      position,
      disabled,
      trigger,
      escToClose,
      showArrow: true,
      popupAlign: {
        left: 12,
        right: 12,
        top: 12,
        bottom: 12,
      },
      mouseEnterDelay: 200,
      mouseLeaveDelay: 200,
      unmountOnExit,
      popupHoverStay,
      blurToHide,
      childrenPrefix: childrenPrefix || z,
      getPopupContainer,
      onVisibleChange,
      defaultPopupVisible,
      ...L,
    },
    children,
  );
});
A.displayName = "Tooltip";
