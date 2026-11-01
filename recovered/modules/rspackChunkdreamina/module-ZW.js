import o from "bT";
import i from "PC";
import l from "zP7";
import a from "xi4";
import { AU, gR, k7, on, qD, t7 } from "./module-eYi.js";
import { Tn, cy } from "./module-Pl5.js";
import { t as t_1 } from "./module-Hv_4.js";
import { gw } from "./module-uRm.js";
import { A as A_1 } from "./module-tgd.js";
import { A as A_2 } from "./module-W3.js";
import { A as A_3 } from "./module-puV.js";
import { QO } from "./module-ce.js";
import { A as A_4 } from "./module-Byn.js";
import * as C from "./module-lv_2.js";
let r;
const DComponent = function (e) {
  const e_getContainer = e.getContainer;
  const e_children = e.children;
  const rRef = o.useRef();
  if ((A_1() || rRef.current === null) && !qD) {
    rRef.current = e_getContainer();
  }
  o.useEffect(function () {
    return function () {
      const rRef_current = rRef.current;
      if (rRef_current && rRef_current.parentNode) {
        rRef_current.parentNode.removeChild(rRef_current);
        rRef.current = null;
      }
    };
  }, []);
  if (rRef.current) {
    return i.createPortal(e_children, rRef.current);
  }
  return null;
};
const g = (e, t, n) => {
  if (n < e) {
    return e;
  }
  if (n > t) {
    return t;
  }
  return n;
};
const b = (popupAlign, showArrow) => {
  let horizontalOffset = 0;
  let verticalOffset = 0;
  let o = {};
  for (const i in (o = showArrow
    ? {
        left: 12,
        right: 12,
        top: 12,
        bottom: 12,
        ...popupAlign,
      }
    : {
        ...popupAlign,
      })) {
    if (cy(o[i])) {
      let l = 0;
      if (["top", "bottom"].indexOf(i) > -1) {
        l = 1;
        horizontalOffset = o[i][0];
      } else {
        verticalOffset = o[i][1];
      }
      o[i] = o[i][l];
    }
  }
  return {
    ...o,
    horizontalOffset,
    verticalOffset,
  };
};
const x = (e, t, n, r, mouseLocation) => {
  let i;
  const e_autoAlignPopupWidth = e.autoAlignPopupWidth;
  const e_autoAlignPopupMinWidth = e.autoAlignPopupMinWidth;
  const e_alignPoint = e.alignPoint;
  const e_style = e.style;
  if (!n || !t || !r) {
    return {};
  }
  const style = {};
  const p = (i = e_alignPoint && mouseLocation)
    ? {
        left: i.clientX,
        top: i.clientY,
        width: 0,
        height: 0,
        right: i.clientX,
        bottom: i.clientY,
      }
    : n.getBoundingClientRect();
  const d = ((e, t, n) => {
    if (!n || !e || qD) {
      return {
        left: 0,
        width: 0,
        height: 0,
        top: 0,
      };
    }
    const r = (e) => document.documentElement[e] || document.body[e];
    const o = n === document.body ? r("scrollTop") : n.scrollTop;
    const i = n === document.body ? r("scrollLeft") : n.scrollLeft;
    const t_left = t.left;
    const t_top = t.top;
    const t_width = t.width;
    const t_height = t.height;
    return {
      left:
        t_left + i - (n === document.body ? 0 : n.getBoundingClientRect().left),
      top:
        t_top + o - (n === document.body ? 0 : n.getBoundingClientRect().top),
      width: t_width,
      height: t_height,
    };
  })(n, p, r);
  const d_left = d.left;
  const d_top = d.top;
  const d_width = d.width;
  const d_height = d.height;
  const x = b(e.popupAlign, e.showArrow);
  const E = x.left || 0;
  const C = x.right || 0;
  const w = x.top || 0;
  const O = x.bottom || 0;
  if (
    e_autoAlignPopupWidth &&
    (e_style == null ? undefined : e_style.width) === undefined
  ) {
    t.style.width = n.offsetWidth + "px";
  }
  if (e_autoAlignPopupMinWidth) {
    t.style.minWidth = n.offsetWidth + "px";
  }
  let e_position = e.position;
  const arrowStyle = {};
  const A = (n) => {
    if (e.autoFitPosition) {
      let o;
      let i;
      const l =
        ((o = document.documentElement) == null ? undefined : o.clientHeight) ||
        window.innerHeight;
      const a =
        ((i = document.documentElement) == null ? undefined : i.clientWidth) ||
        window.innerWidth;
      let c = false;
      const u = {
        left: d_left - p.left,
        top: d_top - p.top,
      };
      const s = style.top;
      const d = s === undefined ? 0 : s;
      const g = style.left;
      const b = g === undefined ? 0 : g;
      if (n === "top" || n === "bottom") {
        if (u.left > b && p.right > 12) {
          style.left = Math.max(u.left, d_left - t.clientWidth);
          style.left = Math.max(style.left, d_left - t.clientWidth + 24);
        } else if (b - u.left + t.clientWidth > a && a - p.left > 12) {
          style.left = Math.max(u.left, u.left + a - t.clientWidth);
          style.left = Math.max(style.left, d_left - t.clientWidth + 24);
        }
      }
      if (n === "left" || n === "right") {
        if (u.top > d && p.bottom > 12) {
          style.top = u.top;
          style.top = Math.max(
            style.top,
            d_top - t.clientHeight + p.height / 2,
          );
        } else if (d - u.top + t.clientHeight > l && l - p.top > 12) {
          style.top = Math.max(u.top, u.top + l - t.clientHeight);
          style.top = Math.max(
            style.top,
            d_top - t.clientHeight + p.height / 2,
          );
        }
      }
      if (n === "top" && u.top > d) {
        if (p.top < l - p.bottom) {
          style.top = Math.min(
            d_top + d_height + (w || 0),
            u.top + l - t.clientHeight,
          );
          c = true;
        } else {
          style.top = u.top;
        }
      }
      if (n === "bottom" && d - u.top + t.clientHeight > l) {
        if (l - p.bottom < p.top) {
          style.top = Math.max(d_top - t.clientHeight - (O || 0), u.top);
          c = true;
        } else {
          style.top = u.top + l - t.clientHeight;
        }
      }
      if (n === "left" && u.left > b) {
        if (p.left < a - p.right) {
          style.left = Math.min(
            d_width + d_left + C,
            u.left + a - t.clientWidth,
          );
          c = true;
        } else {
          style.left = u.left;
        }
      }
      if (n === "right" && b - u.left + t.clientWidth > a) {
        if (a - p.right < p.left) {
          style.left = Math.max(d_left - t.clientWidth - E, u.left);
          c = true;
        } else {
          style.left = u.left + a - t.clientWidth;
        }
      }
      if (style.left < 0) {
        style.left = 0;
      } else {
        style.left = Math.min(r.scrollWidth - t.clientWidth, style.left);
      }
      return c;
    }
  };
  const N = x.horizontalOffset || 0;
  const k = x.verticalOffset || 0;
  switch (e.position) {
    case "top":
      style.top = d_top - t.clientHeight - w;
      style.left = d_left + d_width / 2 - t.clientWidth / 2;
      if (A("top")) {
        e_position = "bottom";
      }
      style.left += N;
      const T = d_left - Number(style.left) + d_width / 2;
      arrowStyle.left = g(12, t.clientWidth - 12, T);
      break;
    case "tl":
      style.top = d_top - t.clientHeight - w;
      style.left = d_left;
      if (A("top")) {
        e_position = "bl";
      }
      style.left += N;
      var j = d_left - Number(style.left) + Math.min(d_width / 2, 50);
      arrowStyle.left = g(12, t.clientWidth - 12, j);
      break;
    case "tr":
      style.top = -t.clientHeight + d_top - w;
      style.left = d_left + d_width - t.clientWidth;
      if (A("top")) {
        e_position = "br";
      }
      style.left += N;
      j = d_left - Number(style.left) + Math.max(d_width / 2, d_width - 50);
      arrowStyle.left = g(12, t.clientWidth - 12, j);
      break;
    case "bottom":
      style.top = d_height + d_top + O;
      style.left = d_left + d_width / 2 - t.clientWidth / 2;
      if (A("bottom")) {
        e_position = "top";
      }
      style.left += N;
      const R = d_left - Number(style.left) + d_width / 2;
      arrowStyle.left = g(12, t.clientWidth - 12, R);
      break;
    case "bl":
      style.top = d_height + d_top + O;
      style.left = d_left;
      if (A("bottom")) {
        e_position = "tl";
      }
      style.left += N;
      j = d_left - Number(style.left) + Math.min(d_width / 2, 50);
      arrowStyle.left = g(12, t.clientWidth - 12, j);
      break;
    case "br":
      style.top = d_height + d_top + O;
      style.left = d_left + d_width - t.clientWidth;
      if (A("bottom")) {
        e_position = "tr";
      }
      style.left += N;
      j = d_left - Number(style.left) + Math.max(d_width / 2, d_width - 50);
      arrowStyle.left = g(12, t.clientWidth - 12, j);
      break;
    case "left":
      style.top = d_top + d_height / 2 - t.clientHeight / 2;
      style.left = d_left - t.clientWidth - E;
      if (A("left")) {
        e_position = "right";
      }
      style.top += k;
      const I = d_top - Number(style.top) + d_height / 2;
      arrowStyle.top = g(12, t.clientHeight - 12, I);
      break;
    case "lt":
      style.top = d_top;
      style.left = d_left - t.clientWidth - E;
      if (A("left")) {
        e_position = "rt";
      }
      style.top += k;
      var F = d_top - Number(style.top) + Math.min(d_height / 2, 50);
      arrowStyle.top = g(12, t.clientHeight - 12, F);
      break;
    case "lb":
      style.top = d_top + d_height - t.clientHeight;
      style.left = d_left - t.clientWidth - E;
      if (A("left")) {
        e_position = "rb";
      }
      style.top += k;
      F = d_top - Number(style.top) + Math.max(d_height / 2, d_height - 50);
      arrowStyle.top = g(12, t.clientHeight - 12, F);
      break;
    case "right":
      style.top = d_top + d_height / 2 - t.clientHeight / 2;
      style.left = d_width + d_left + C;
      if (A("right")) {
        e_position = "left";
      }
      style.top += k;
      const M = d_top - Number(style.top) + d_height / 2;
      arrowStyle.top = g(12, t.clientHeight - 12, M);
      break;
    case "rt":
      style.top = d_top;
      style.left = d_width + d_left + C;
      if (A("right")) {
        e_position = "lt";
      }
      style.top += k;
      F = d_top - Number(style.top) + Math.min(d_height / 2, 50);
      arrowStyle.top = g(12, t.clientHeight - 12, F);
      break;
    case "rb":
      style.top = d_top + d_height - t.clientHeight;
      style.left = d_width + d_left + C;
      if (A("right")) {
        e_position = "lb";
      }
      style.top += k;
      F = d_top - Number(style.top) + Math.max(d_height / 2, d_height - 50);
      arrowStyle.top = g(12, t.clientHeight - 12, F);
  }
  return {
    style,
    arrowStyle,
    realPosition: e_position,
  };
};
r = function (e, t) {
  return (r =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (const n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    })(e, t);
};
const O = (e, t) => {
  if (typeof t !== "function" && t !== null) {
    throw TypeError(
      "Class extends value " + String(t) + " is not a constructor or null",
    );
  }
  function n() {
    this.constructor = e;
  }
  r(e, t);
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
};
function P(childrenDom) {
  if (!childrenDom) {
    return {};
  }
  const t = childrenDom.getBoundingClientRect();
  return {
    width: t.width,
    height: t.height,
    left: t.left,
    right: t.right,
  };
}
export var X = [
  "onClick",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onFocus",
  "onBlur",
  "onContextMenu",
  "onKeyDown",
];
const N = {
  blurToHide: true,
  classNames: "fadeIn",
  trigger: "hover",
  position: "bottom",
  duration: 200,
  unmountOnExit: true,
  popupAlign: {},
  popupHoverStay: true,
  clickOutsideToClose: true,
  escToClose: false,
  mouseLeaveToClose: true,
  containerScrollToClose: false,
  getDocument: function () {
    return window.document;
  },
  autoFixPosition: true,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  autoFitPosition: true,
};
export var A = ((e) => {
  function t(t, n) {
    const r = e.call(this, t, n) || this;
    r.delayTimer = null;
    r.updatePositionTimer = null;
    r.popupOpen = false;
    r.mousedownToHide = false;
    r.hasPopupMouseDown = false;
    r.unmount = false;
    r.isDidMount = false;
    r.mouseLocation = {
      clientX: 0,
      clientY: 0,
    };
    r.observerContainer = null;
    r.scrollElements = null;
    r.resizeObserver = new a.default(function () {
      r.handleUpdatePosition();
    });
    r.childrenDom = null;
    r.childrenDomSize = {};
    r.getMergedProps = function (e) {
      const componentConfig = r.context.componentConfig;
      return ((e, t, n) => {
        const r = {
          ...t,
          ...n,
        };
        const o = {
          ...e,
        };
        for (const i in r) {
          if (o[i] === undefined) {
            o[i] = r[i];
          }
        }
        return o;
      })(
        e || r.props,
        N,
        componentConfig == null ? undefined : componentConfig.Trigger,
      );
    };
    r.getRootElement = function () {
      r.childrenDom = i.findDOMNode(r);
      return r.childrenDom;
    };
    r.offScrollListeners = function () {
      (r.scrollElements || []).forEach((e) => {
        AU(e, "scroll", r.handleScroll);
      });
      r.scrollElements = null;
    };
    r.offWindowResize = function () {
      r.handleWindowResize = false;
      AU(window, "resize", r.handleUpdatePosition);
    };
    r.offContainerResize = function () {
      if (r.resizeObserver && r.observerContainer) {
        r.resizeObserver.unobserve(r.observerContainer);
        r.observerContainer = null;
      }
    };
    r.handleScroll = function () {
      const e = r.getMergedProps();
      if (e.containerScrollToClose) {
        r.setPopupVisible(false);
      } else if (e.updateOnScroll) {
        r.handleUpdatePosition();
      }
    };
    r.onContainersScroll = function (e) {
      let t;
      let n;
      if (!r.scrollElements) {
        r.scrollElements = t7(
          r.childrenDom,
          (t = r.popupContainer) == null ? undefined : t.parentNode,
        );
        if (
          e.containerScrollToClose &&
          ((n = r.popupContainer) == null ? undefined : n.parentNode) ===
            document.body &&
          r.scrollElements.indexOf(document.body) === -1 &&
          k7(document.documentElement)
        ) {
          r.scrollElements.push(window);
        }
        r.scrollElements.forEach((e) => {
          on(e, "scroll", r.handleScroll);
        });
      }
    };
    r.onContainerResize = function () {
      let e;
      const t = (e = r.popupContainer) == null ? undefined : e.parentNode;
      if (r.resizeObserver && r.observerContainer !== t) {
        r.offContainerResize();
        if (t) {
          r.resizeObserver.observe(t);
        }
        r.observerContainer = t;
      }
    };
    r.handleUpdatePosition = A_4(function () {
      r.updatePopupPosition();
    });
    r.isClickTrigger = function () {
      return [].concat(r.getMergedProps().trigger).indexOf("click") > -1;
    };
    r.isFocusTrigger = function () {
      return [].concat(r.getMergedProps().trigger).indexOf("focus") > -1;
    };
    r.isHoverTrigger = function () {
      return [].concat(r.getMergedProps().trigger).indexOf("hover") > -1;
    };
    r.isContextMenuTrigger = function () {
      return [].concat(r.getMergedProps().trigger).indexOf("contextMenu") > -1;
    };
    r.isMouseLeaveToClose = function () {
      return r.isHoverTrigger() && r.getMergedProps().mouseLeaveToClose;
    };
    r.isPopupHoverHide = function () {
      return r.isHoverTrigger() && !r.getMergedProps().popupHoverStay;
    };
    r.isClickToHide = function () {
      if (r.isClickTrigger() || r.isContextMenuTrigger()) {
        const e = r.getMergedProps().clickToClose;
        return e === undefined || e;
      }
      return r.isHoverTrigger() && r.props.clickToClose;
    };
    r.isBlurToHide = function () {
      return r.isFocusTrigger() && r.getMergedProps().blurToHide;
    };
    r.clearTimer = function () {
      if (r.updatePositionTimer) {
        if (r.updatePositionTimer.cancel) {
          r.updatePositionTimer.cancel();
        } else {
          clearTimeout(r.updatePositionTimer);
          r.updatePositionTimer = null;
        }
      }
      if (r.delayTimer) {
        clearTimeout(r.delayTimer);
        r.delayTimer = null;
      }
      if (r.mouseDownTimeout) {
        clearTimeout(r.mouseDownTimeout);
        r.mouseDownTimeout = null;
      }
    };
    r.offClickOutside = function () {
      if (r.handleClickOutside) {
        const e = r.getMergedProps().getDocument;
        const t = Tn(e) && e();
        AU(t, "mousedown", r.onClickOutside);
        r.handleClickOutside = false;
      }
    };
    r.getTransformOrigin = function (e) {
      let t;
      let n;
      const r_triggerRef = r.triggerRef;
      if (!r_triggerRef) {
        return {};
      }
      const i = r.getMergedProps();
      const i_showArrow = i.showArrow;
      const i_classNames = i.classNames;
      let c =
        (i_showArrow && ((t = r.arrowStyle) == null ? undefined : t.top)) || 0;
      let u =
        (i_showArrow && ((n = r.arrowStyle) == null ? undefined : n.left)) || 0;
      c = c ? c + "px" : "";
      const s = {
        top: ((u = u ? u + "px" : "") || "50%") + " 100% 0",
        tl: (u || "15px") + " 100% 0",
        tr: (u || `${r_triggerRef.clientWidth - 15}px`) + " 100% 0",
        bottom: (u || "50%") + " 0 0",
        bl: (u || "15px") + " 0 0",
        br: (u || `${r_triggerRef.clientWidth - 15}px`) + " 0 0",
        left: "100% " + (c || "50%") + " 0",
        lt: "100% " + (c || "15px") + " 0",
        lb: "100% " + (c || `${r_triggerRef.clientHeight - 15}px`) + " 0",
        right: "0 " + (c || "50%") + " 0",
        rt: "0 " + (c || "15px") + " 0",
        rb: "0 " + (c || `${r_triggerRef.clientHeight - 15}px`) + " 0",
      };
      if (i_classNames && i_classNames.indexOf("zoom") > -1) {
        return {
          transformOrigin: s[e],
        };
      }
      if (i_classNames === "slideDynamicOrigin") {
        let transformOrigin = "0% 0%";
        if (["top", "tl", "tr"].indexOf(e) > -1) {
          transformOrigin = "100% 100%";
        }
        return {
          transformOrigin,
        };
      }
      return {};
    };
    r.getTransformTranslate = function () {
      if (r.getMergedProps().classNames !== "slideDynamicOrigin") {
        return "";
      }
      switch (r.realPosition) {
        case "bottom":
        case "bl":
        case "br":
          return "scaleY(0.9) translateY(-4px)";
        case "top":
        case "tl":
        case "tr":
          return "scaleY(0.9) translateY(4px)";
        default:
          return "";
      }
    };
    r.getPopupStyle = function () {
      if (!r.unmount && r.popupContainer) {
        const e = r.popupContainer;
        const t = r.triggerRef;
        const n = r.getRootElement();
        if (!n.offsetParent && !n.getClientRects().length) {
          return r.state.popupStyle;
        }
        const o = x(r.getMergedProps(), t, n, e, r.mouseLocation);
        const i = o.style;
        const l = o.arrowStyle;
        r.realPosition = o.realPosition || r.getMergedProps().position;
        r.arrowStyle = l || {};
        return {
          ...i,
          ...r.getTransformOrigin(r.realPosition),
        };
      }
    };
    r.showPopup = function (e = function () {}) {
      const t = r.getPopupStyle();
      r.setState(
        {
          popupStyle: t,
        },
        e,
      );
    };
    r.update = A_4(function (e) {
      if (!r.unmount && r.state.popupVisible) {
        const t = r.getPopupStyle();
        r.setState(
          {
            popupStyle: t,
          },
          function () {
            if (e) {
              e();
            }
          },
        );
      }
    });
    r.updatePopupPosition = function (e = 0, t) {
      if (r.state.popupVisible) {
        if (e < 4) {
          r.updatePositionTimer = r.update(t);
          return;
        }
        r.updatePositionTimer = setTimeout(() => {
          const e = r.getPopupStyle();
          r.setState(
            {
              popupStyle: e,
            },
            function () {
              if (t) {
                t();
              }
            },
          );
        }, e);
      }
    };
    r.setPopupVisible = function (e, t = 0, n) {
      const o = r.getMergedProps();
      const o_onVisibleChange = o.onVisibleChange;
      if (e !== r.state.popupVisible) {
        r.delayToDo(t, function () {
          if (o_onVisibleChange) {
            o_onVisibleChange(e);
          }
          if ("popupVisible" in o) {
            if (n) {
              n();
            }
          } else if (e) {
            r.setState(
              {
                popupVisible: true,
              },
              function () {
                r.showPopup(n);
              },
            );
          } else {
            r.setState(
              {
                popupVisible: false,
              },
              function () {
                if (n) {
                  n();
                }
              },
            );
          }
        });
      } else if (n) {
        n();
      }
    };
    r.delayToDo = function (e, t) {
      if (e) {
        r.clearDelayTimer();
        r.delayTimer = setTimeout(() => {
          t();
          r.clearDelayTimer();
        }, e);
      } else {
        t();
      }
    };
    r.onClickOutside = function (e) {
      const t = r.getMergedProps();
      const t_onClickOutside = t.onClickOutside;
      const t_clickOutsideToClose = t.clickOutsideToClose;
      const r_triggerRef = r.triggerRef;
      const l = r.getRootElement();
      if (
        !(gR(r_triggerRef, e.target) || gR(l, e.target) || r.hasPopupMouseDown)
      ) {
        if (t_onClickOutside) {
          t_onClickOutside();
        }
        if (
          !(!t_clickOutsideToClose || r.isBlurToHide() || r.isHoverTrigger())
        ) {
          r.setPopupVisible(false);
        }
      }
    };
    r.onKeyDown = function (e) {
      const t = e.keyCode || e.which;
      r.triggerPropsEvent("onKeyDown", e);
      if (t === gw.code) {
        r.onPressEsc(e);
      }
    };
    r.onPressEsc = function (e) {
      if (
        r.getMergedProps().escToClose &&
        e &&
        e.key === gw.key &&
        r.state.popupVisible
      ) {
        r.setPopupVisible(false);
      }
    };
    r.onMouseEnter = function (e) {
      const mouseEnterDelay = r.getMergedProps().mouseEnterDelay;
      r.triggerPropsEvent("onMouseEnter", e);
      r.clearDelayTimer();
      r.setPopupVisible(true, mouseEnterDelay || 0);
    };
    r.onMouseMove = function (e) {
      r.triggerPropsEvent("onMouseMove", e);
      r.setMouseLocation(e);
      if (r.state.popupVisible) {
        r.update();
      }
    };
    r.onMouseLeave = function (e) {
      const mouseLeaveDelay = r.getMergedProps().mouseLeaveDelay;
      r.clearDelayTimer();
      r.triggerPropsEvent("onMouseLeave", e);
      if (r.isMouseLeaveToClose() && r.state.popupVisible) {
        r.setPopupVisible(false, mouseLeaveDelay || 0);
      }
    };
    r.onPopupMouseEnter = function () {
      r.clearDelayTimer();
    };
    r.onPopupMouseLeave = function (e) {
      r.onMouseLeave(e);
    };
    r.setMouseLocation = function (e) {
      if (r.getMergedProps().alignPoint) {
        r.mouseLocation = {
          clientX: e.clientX,
          clientY: e.clientY,
        };
      }
    };
    r.onContextMenu = function (e) {
      e.preventDefault();
      r.triggerPropsEvent("onContextMenu", e);
      r.setMouseLocation(e);
      if (r.state.popupVisible) {
        if (r.getMergedProps().alignPoint) {
          r.update();
        }
      } else {
        r.setPopupVisible(true, 0);
      }
    };
    r.clickToHidePopup = function (e) {
      const popupVisible = r.state.popupVisible;
      if (popupVisible) {
        r.mousedownToHide = true;
      }
      r.triggerPropsEvent("onClick", e);
      if (r.isClickToHide() && popupVisible) {
        r.setPopupVisible(!popupVisible, 0);
      }
    };
    r.onClick = function (e) {
      const popupVisible = r.state.popupVisible;
      if (popupVisible) {
        r.mousedownToHide = true;
      }
      r.triggerPropsEvent("onClick", e);
      r.setMouseLocation(e);
      if (r.isClickToHide() || !popupVisible) {
        r.setPopupVisible(!popupVisible, 0);
      }
    };
    r.onFocus = function (e) {
      const focusDelay = r.getMergedProps().focusDelay;
      const n = function () {
        r.triggerPropsEvent("onFocus", e);
      };
      r.clearDelayTimer();
      if (!r.mousedownToHide) {
        if (r.state.popupVisible) {
          if (n) {
            n();
          }
        } else {
          r.setPopupVisible(true, focusDelay || 0, n);
        }
      }
      r.mousedownToHide = false;
    };
    r.onBlur = function (e) {
      r.setPopupVisible(false, 200, function () {
        return r.triggerPropsEvent("onBlur", e);
      });
    };
    r.onResize = function () {
      if (r.getMergedProps().autoFixPosition && r.state.popupVisible) {
        r.updatePopupPosition();
      }
    };
    r.onPopupMouseDown = function () {
      r.hasPopupMouseDown = true;
      clearTimeout(r.mouseDownTimeout);
      r.mouseDownTimeout = setTimeout(() => {
        r.hasPopupMouseDown = false;
      }, 0);
    };
    r.getChild = function () {
      let e;
      const children = r.props.children;
      const n = children && typeof children !== "string" && children.type;
      let i = children;
      if (
        ["string", "number"].indexOf(typeof children) > -1 ||
        o.Children.count(children) > 1
      ) {
        i = o.createElement("span", null, children);
      } else if (
        children &&
        n &&
        (n.__BYTE_BUTTON === true ||
          n.__BYTE_CHECKBOX === true ||
          n.__BYTE_SWITCH === true ||
          n.__BYTE_RADIO === true ||
          n === "button") &&
        children.props.disabled
      ) {
        let l;
        let a;
        let picked;
        let omitted;
        l = children.props.style;
        a = [
          "position",
          "left",
          "right",
          "top",
          "bottom",
          "float",
          "display",
          "zIndex",
        ];
        picked = {};
        omitted = {
          ...l,
        };
        a.forEach((e) => {
          if (l && e in l) {
            picked[e] = l[e];
            delete omitted[e];
          }
        });
        const s = {
          picked,
          omitted,
        };
        const f = s.picked;
        const p = s.omitted;
        i = o.createElement(
          "span",
          {
            className: (e = children.props) == null ? undefined : e.className,
            style: {
              display: "inline-block",
              ...f,
              cursor: "not-allowed",
            },
          },
          o.cloneElement(children, {
            style: {
              ...p,
              pointerEvents: "none",
            },
            className: undefined,
          }),
        );
      }
      return i || o.createElement("span", null);
    };
    r.appendToContainer = function (e) {
      C.N(r.rafId);
      if (r.isDidMount) {
        const t = r.context.getPopupContainer;
        const n = (r.getMergedProps().getPopupContainer || t)(
          r.getRootElement(),
        );
        if (n) {
          return void n.appendChild(e);
        }
      }
      r.rafId = C.e(function () {
        r.appendToContainer(e);
      });
    };
    r.getContainer = function () {
      const e = document.createElement("div");
      e.style.width = "100%";
      e.style.position = "absolute";
      e.style.top = "0";
      e.style.left = "0";
      r.popupContainer = e;
      r.appendToContainer(e);
      return e;
    };
    r.triggerPropsEvent = function (e, t) {
      const n = r.getChild();
      const o = n && n.props && n.props[e];
      const i = r.getMergedProps();
      if (Tn(o)) {
        o(t);
      }
      if (Tn(i[e])) {
        i[e](t);
      }
    };
    r.triggerOriginEvent = function (e) {
      const t = r.getChild();
      const n = t && t.props && t.props[e];
      const o = r.getMergedProps()[e];
      if (Tn(o) && Tn(n)) {
        return function (e) {
          n(e);
          o(e);
        };
      }
      return n || o;
    };
    const l = r.getMergedProps(t);
    const s = "popupVisible" in l ? l.popupVisible : l.defaultPopupVisible;
    r.popupOpen = !!s;
    r.state = {
      popupVisible: !!s,
      popupStyle: {},
    };
    return r;
  }
  O(t, e);
  t.getDerivedStateFromProps = function (e, t) {
    if ("popupVisible" in e && e.popupVisible !== t.popupVisible) {
      return {
        popupVisible: e.popupVisible,
      };
    }
    return null;
  };
  t.prototype.componentDidMount = function () {
    this.componentDidUpdate(this.getMergedProps());
    this.isDidMount = true;
    this.unmount = false;
    this.childrenDom = this.getRootElement();
    if (this.state.popupVisible) {
      this.childrenDomSize = P(this.childrenDom);
    }
  };
  t.prototype.componentDidUpdate = function (e) {
    const t = this.getMergedProps(e);
    const n = this.getMergedProps();
    if (!t.popupVisible && n.popupVisible) {
      this.update();
    }
    const popupVisible = this.state.popupVisible;
    this.popupOpen = popupVisible;
    const n_getDocument = n.getDocument;
    if (!popupVisible) {
      this.offClickOutside();
      this.offContainerResize();
      this.offWindowResize();
      this.offScrollListeners();
      return;
    }
    const i = P(this.childrenDom);
    if (JSON.stringify(i) !== JSON.stringify(this.childrenDomSize)) {
      this.updatePopupPosition();
      this.childrenDomSize = i;
    }
    this.onContainerResize();
    if (n.updateOnScroll || n.containerScrollToClose) {
      this.onContainersScroll(n);
    }
    if (!this.handleWindowResize) {
      on(window, "resize", this.handleUpdatePosition);
      this.handleWindowResize = true;
    }
    if (!this.handleClickOutside) {
      const l = Tn(n_getDocument) && n_getDocument();
      if (l) {
        on(l, "mousedown", this.onClickOutside);
        this.handleClickOutside = true;
      }
    }
  };
  t.prototype.componentWillUnmount = function () {
    this.unmount = true;
    this.offClickOutside();
    this.clearTimer();
    this.offWindowResize();
    this.offScrollListeners();
    this.offContainerResize();
    C.N(this.rafId);
  };
  t.prototype.clearDelayTimer = function () {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };
  t.prototype.render = function () {
    let r;
    const i = this;
    const a = this.getMergedProps();
    const a_children = a.children;
    const a_style = a.style;
    const a_className = a.className;
    const a_arrowProps = a.arrowProps;
    const a_disabled = a.disabled;
    const a_popup = a.popup;
    const a_classNames = a.classNames;
    const a_duration = a.duration;
    const a_unmountOnExit = a.unmountOnExit;
    const a_alignPoint = a.alignPoint;
    const a_autoAlignPopupWidth = a.autoAlignPopupWidth;
    const a_position = a.position;
    const a_childrenPrefix = a.childrenPrefix;
    const a_showArrow = a.showArrow;
    const a_popupStyle = a.popupStyle;
    const a___onExit = a.__onExit;
    const a___onExited = a.__onExited;
    const T = a_children || a_children === 0;
    const context = this.context;
    const j_getPrefixCls = context.getPrefixCls;
    const j_zIndex = context.zIndex;
    const j_rtl = context.rtl;
    const state = this.state;
    const M_popupVisible = state.popupVisible;
    const M_popupStyle = state.popupStyle;
    if (!a_popup) {
      return null;
    }
    const D = {};
    const z = {
      onMouseDown: this.onPopupMouseDown,
    };
    if (this.isHoverTrigger() && !a_disabled) {
      D.onMouseEnter = this.onMouseEnter;
      D.onMouseLeave = this.onMouseLeave;
      if (this.isClickToHide()) {
        D.onClick = this.clickToHidePopup;
      }
      if (a_alignPoint) {
        D.onMouseMove = this.onMouseMove;
      }
      if (!this.isPopupHoverHide()) {
        z.onMouseEnter = this.onPopupMouseEnter;
        z.onMouseLeave = this.onPopupMouseLeave;
      }
    } else {
      D.onMouseEnter = this.triggerOriginEvent("onMouseEnter");
      D.onMouseLeave = this.triggerOriginEvent("onMouseLeave");
    }
    if (this.isContextMenuTrigger() && !a_disabled) {
      D.onContextMenu = this.onContextMenu;
      D.onClick = this.clickToHidePopup;
    } else {
      D.onContextMenu = this.triggerOriginEvent("onContextMenu");
    }
    if (this.isClickTrigger() && !a_disabled) {
      D.onClick = this.onClick;
    } else {
      D.onClick = D.onClick || this.triggerOriginEvent("onClick");
    }
    if (this.isFocusTrigger() && !a_disabled) {
      D.onFocus = this.onFocus;
      if (this.isBlurToHide()) {
        D.onBlur = this.onBlur;
      }
    } else {
      D.onFocus = this.triggerOriginEvent("onFocus");
      D.onBlur = this.triggerOriginEvent("onBlur");
    }
    if (a_disabled) {
      D.onKeyDown = this.triggerOriginEvent("onKeyDown");
    } else {
      D.onKeyDown = this.onKeyDown;
    }
    const L = this.getChild();
    const H = o.Children.only(a_popup());
    if (L.props.className) {
      D.className = L.props.className;
    }
    if (a_childrenPrefix && M_popupVisible) {
      D.className = D.className
        ? D.className + " " + a_childrenPrefix + "-open"
        : a_childrenPrefix + "-open";
    }
    if (this.isFocusTrigger()) {
      D.tabIndex = a_disabled ? -1 : 0;
    }
    const G = j_getPrefixCls("trigger");
    const className = A_3(
      G,
      a_childrenPrefix,
      G + "-position-" + a_position,
      {
        [G + "-rtl"]: j_rtl,
      },
      a_className,
    );
    const K =
      T &&
      o.createElement(
        A_2,
        {
          onResize: this.onResize,
        },
        o.cloneElement(L, {
          ...D,
        }),
      );
    const B = o.createElement(
      l.A,
      {
        in: !!M_popupVisible,
        timeout: a_duration,
        classNames: a_classNames,
        unmountOnExit: a_unmountOnExit,
        appear: true,
        mountOnEnter: true,
        onEnter: function (e) {
          e.style.display = "initial";
          e.style.pointerEvents = "none";
          if (a_classNames === "slideDynamicOrigin") {
            e.style.transform = i.getTransformTranslate();
          }
        },
        onEntering: function (e) {
          if (a_classNames === "slideDynamicOrigin") {
            e.style.transform = "";
          }
        },
        onEntered: function (e) {
          e.style.pointerEvents = "auto";
          i.forceUpdate();
        },
        onExit: function (e) {
          e.style.pointerEvents = "none";
          if (a___onExit != null) {
            a___onExit(e);
          }
        },
        onExited: function (e) {
          e.style.display = "none";
          if (a_unmountOnExit) {
            i.triggerRef = null;
          }
          i.setState({
            popupStyle: {},
          });
          if (a___onExited != null) {
            a___onExited(e);
          }
        },
      },
      o.createElement(
        A_2,
        {
          onResize: function () {
            const i_triggerRef = i.triggerRef;
            if (i_triggerRef) {
              const t = i.getPopupStyle();
              const n = i.props.style || {};
              i_triggerRef.style.top = String(n.top || t.top + "px");
              i_triggerRef.style.left = String(n.left || t.left + "px");
            }
            i.onResize();
          },
        },
        o.createElement(
          "span",
          {
            ref: function (e) {
              return (i.triggerRef = e);
            },
            "trigger-placement": this.realPosition,
            style: {
              width:
                a_autoAlignPopupWidth &&
                (a_style == null ? undefined : a_style.width) === undefined
                  ? (r = this.childrenDomSize) == null
                    ? undefined
                    : r.width
                  : "",
              ...M_popupStyle,
              position: "absolute",
              zIndex: j_zIndex || "",
              ...a_style,
            },
            ...z,
            className,
            ...t_1(this.props),
          },
          o.createElement(H.type, {
            ref: H.ref,
            ...H.props,
            style: {
              ...H.props.style,
              ...a_popupStyle,
            },
          }),
          (a_showArrow || a_arrowProps) &&
            o.createElement(
              "div",
              {
                className: A_3(G + "-arrow-container", {
                  [a_childrenPrefix + "-arrow-container"]: a_childrenPrefix,
                }),
              },
              o.createElement("div", {
                ...a_arrowProps,
                className: A_3(
                  G + "-arrow",
                  {
                    [a_childrenPrefix + "-arrow"]: a_childrenPrefix,
                  },
                  a_arrowProps == null ? undefined : a_arrowProps.className,
                ),
                style: {
                  ...this.arrowStyle,
                  ...(a_arrowProps == null ? undefined : a_arrowProps.style),
                },
              }),
            ),
        ),
      ),
    );
    const U =
      M_popupVisible || this.triggerRef
        ? o.createElement(
            DComponent,
            {
              getContainer: this.getContainer,
            },
            B,
          )
        : null;
    if (T) {
      return o.createElement(o.Fragment, null, K, U);
    }
    return U;
  };
  t.displayName = "Trigger";
  t.contextType = QO;
  return t;
})(o.PureComponent);
