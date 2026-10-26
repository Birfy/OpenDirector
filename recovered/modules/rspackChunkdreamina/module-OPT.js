import r from "oa";
import o from "bk";
import i from "z8";
import l from "bT";
import s from "PC";
import a from "zP7";
import c from "xi4";
import { AU, G9, gR, on, qD, t7 } from "./module-qV.js";
import { Tn, cy } from "./module-NnE_2.js";
import { t as t_1 } from "./module-G1.js";
import { gw } from "./module-Kg.js";
import { A as A_1 } from "./module-XI_5.js";
import { A as A_2 } from "./module-LFK.js";
import { A as A_3 } from "./module-d1.js";
import { QO } from "./module-tMn.js";
import { A as A_4 } from "./module-CVa.js";
import * as w from "./module-Mi.js";
const useM = (e) => {
  let { getContainer, children } = e;
  let rRef = l.useRef();
  if ((A_1() || rRef.current === null) && !qD) {
    rRef.current = getContainer();
  }
  l.useEffect(
    () => () => {
      let rRef_current = rRef.current;
      if (rRef_current && rRef_current.parentNode) {
        rRef_current.parentNode.removeChild(rRef_current);
        rRef.current = null;
      }
    },
    [],
  );
  if (rRef.current) {
    return s.createPortal(children, rRef.current);
  }
  return null;
};
let b = (e, t, n) => {
  if (n < e) {
    return e;
  }
  if (n > t) {
    return t;
  }
  return n;
};
function j(childrenDom) {
  if (!childrenDom) {
    return {};
  }
  let { width, height, left, right, top } = childrenDom.getBoundingClientRect();
  return {
    width,
    height,
    left,
    right,
    top,
  };
}
export let X = [
  "onClick",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onFocus",
  "onBlur",
  "onContextMenu",
  "onKeyDown",
];
let C = {
  blurToHide: true,
  clickToClose: true,
  clickToCloseTooltip: false,
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
  getDocument: () => window.document,
  autoFixPosition: true,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  autoFitPosition: true,
  checkOverflow: false,
  keepInsidePopupContainer: false,
};
let N = {};
export class A extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    if ("popupVisible" in e && e.popupVisible !== t.popupVisible) {
      return {
        popupVisible: e.popupVisible,
      };
    }
    return null;
  }
  componentDidMount() {
    this.componentDidUpdate(this.getMergedProps());
    this.isDidMount = true;
    this.unmount = false;
    this.childrenDom = this.getRootElement();
    if (this.state.popupVisible) {
      this.childrenDomSize = j(this.childrenDom);
    }
  }
  componentDidUpdate(e) {
    let t = this.getMergedPropByKey("popupVisible", e);
    let n = this.getMergedPropByKey("popupVisible");
    if (!t && n) {
      this.update();
    }
    let { popupVisible } = this.state;
    this.popupOpen = popupVisible;
    let o = this.getMergedPropByKey("getDocument");
    if (!popupVisible) {
      this.offClickOutside();
      this.offContainerResize();
      this.offWindowResize();
      this.offScrollListeners();
      return;
    }
    let i = j(this.childrenDom);
    if (JSON.stringify(i) !== JSON.stringify(this.childrenDomSize)) {
      this.updatePopupPosition();
      this.childrenDomSize = i;
    }
    this.onContainerResize();
    if (
      this.getMergedPropByKey("updateOnScroll") ||
      this.getMergedPropByKey("containerScrollToClose")
    ) {
      this.onContainersScroll();
    }
    if (!this.handleWindowResize) {
      on(window, "resize", this.handleUpdatePosition);
      this.handleWindowResize = true;
    }
    if (!this.handleClickOutside) {
      let e = Tn(o) && o();
      if (e) {
        on(e, "mousedown", this.onClickOutside);
        this.handleClickOutside = true;
      }
    }
  }
  componentWillUnmount() {
    this.unmount = true;
    this.offClickOutside();
    this.clearTimer();
    this.offWindowResize();
    this.offScrollListeners();
    this.offContainerResize();
    this.childrenDom = null;
    if (this.popupContainer) {
      this.popupContainer.remove();
      this.popupContainer = null;
    }
    w.N(this.rafId);
  }
  clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  }
  render() {
    let e;
    let [t, n, s, c, u, d, f, timeout, y, b, x, w, j, O, C] =
      this.getMergedPropByKeys([
        "children",
        "style",
        "className",
        "arrowProps",
        "disabled",
        "popup",
        "classNames",
        "duration",
        "unmountOnExit",
        "alignPoint",
        "autoAlignPopupWidth",
        "position",
        "childrenPrefix",
        "showArrow",
        "popupStyle",
      ]);
    let P = t || t === 0;
    let { getPrefixCls, zIndex, rtl } = this.context;
    let { popupVisible, popupStyle } = this.state;
    if (!d) {
      return null;
    }
    let M = {};
    let T = {
      onMouseDown: this.onPopupMouseDown,
    };
    if (this.isHoverTrigger() && !u) {
      M.onMouseEnter = this.onMouseEnter;
      M.onMouseLeave = this.onMouseLeave;
      if (b) {
        M.onMouseMove = this.onMouseMove;
      }
      if (!this.isPopupHoverHide()) {
        T.onMouseEnter = this.onPopupMouseEnter;
        T.onMouseLeave = this.onPopupMouseLeave;
      }
    } else {
      M.onMouseEnter = this.triggerOriginEvent("onMouseEnter");
      M.onMouseLeave = this.triggerOriginEvent("onMouseLeave");
    }
    if (this.isContextMenuTrigger() && !u) {
      M.onContextMenu = this.onContextMenu;
      M.onClick = this.hideContextMenu;
    } else {
      M.onContextMenu = this.triggerOriginEvent("onContextMenu");
    }
    if ((this.isClickTrigger() || this.props.clickToCloseTooltip) && !u) {
      M.onClick = this.onClick;
    } else {
      M.onClick = M.onClick || this.triggerOriginEvent("onClick");
    }
    if (this.isFocusTrigger() && !u) {
      M.onFocus = this.onFocus;
      if (this.isBlurToHide()) {
        M.onBlur = this.onBlur;
      }
    } else {
      M.onFocus = this.triggerOriginEvent("onFocus");
      M.onBlur = this.triggerOriginEvent("onBlur");
    }
    if (u) {
      M.onKeyDown = this.triggerOriginEvent("onKeyDown");
    } else {
      M.onKeyDown = this.onKeyDown;
    }
    let S = this.getChild();
    let D = l.Children.only(d());
    if (S.props.className) {
      M.className = S.props.className;
    }
    if (j && popupVisible) {
      M.className = M.className ? `${M.className} ${j}-open` : `${j}-open`;
    }
    if (this.isFocusTrigger()) {
      M.tabIndex = u ? -1 : 0;
    }
    let R = getPrefixCls("trigger");
    let className = A_3(
      R,
      j,
      `${R}-position-${w}`,
      {
        [`${R}-rtl`]: rtl,
      },
      s,
      "rr-test-lalal",
    );
    let z =
      P &&
      i.jsx(A_2, {
        onResize: this.onResize,
        children: l.cloneElement(S, r._({}, M)),
      });
    let children = i.jsx(a.A, {
      in: !!popupVisible,
      timeout,
      classNames: f,
      unmountOnExit: y,
      appear: true,
      mountOnEnter: true,
      onEnter: (e) => {
        e.style.display = "initial";
        e.style.pointerEvents = "none";
        if (f === "slideDynamicOrigin") {
          e.style.transform = this.getTransformTranslate();
        }
      },
      onEntering: (e) => {
        if (f === "slideDynamicOrigin") {
          e.style.transform = "";
        }
      },
      onEntered: (e) => {
        e.style.pointerEvents = "auto";
        this.forceUpdate();
      },
      onExit: (e) => {
        e.style.pointerEvents = "none";
      },
      onExited: (e) => {
        e.style.display = "none";
        if (y) {
          this.triggerRef = null;
        }
        this.setState({
          popupStyle: N,
        });
      },
      children: i.jsx(A_2, {
        onResize: this.onResize,
        children: i.jsxs(
          "span",
          o._(
            r._(
              o._(
                r._(
                  {
                    ref: (e) => (this.triggerRef = e),
                    "trigger-placement": this.realPosition,
                    style: r._(
                      o._(
                        r._(
                          {
                            opacity:
                              popupVisible && Object.keys(popupStyle).length > 0
                                ? 1
                                : 0,
                            width:
                              x &&
                              (n == null ? undefined : n.width) === undefined
                                ? (e = this.childrenDomSize) == null
                                  ? undefined
                                  : e.width
                                : "",
                          },
                          popupStyle,
                        ),
                        {
                          position: "absolute",
                          zIndex: zIndex || "",
                        },
                      ),
                      n,
                    ),
                  },
                  T,
                ),
                {
                  className,
                },
              ),
              t_1(this.props),
            ),
            {
              children: [
                i.jsx(
                  D.type,
                  o._(
                    r._(
                      {
                        ref: D.ref,
                      },
                      D.props,
                    ),
                    {
                      style: r._({}, D.props.style, C),
                    },
                  ),
                ),
                (O || c) &&
                  i.jsx("div", {
                    className: A_3(`${R}-arrow-container`, {
                      [`${j}-arrow-container`]: j,
                    }),
                    children: i.jsx(
                      "div",
                      o._(r._({}, c), {
                        className: A_3(
                          `${R}-arrow`,
                          {
                            [`${j}-arrow`]: j,
                          },
                          c == null ? undefined : c.className,
                        ),
                        style: r._(
                          {},
                          this.arrowStyle,
                          c == null ? undefined : c.style,
                        ),
                      }),
                    ),
                  }),
              ],
            },
          ),
        ),
      }),
    });
    let W =
      popupVisible || this.triggerRef
        ? i.jsx(useM, {
            getContainer: this.getContainer,
            children,
          })
        : null;
    if (P) {
      return i.jsxs(l.Fragment, {
        children: [z, W],
      });
    }
    return W;
  }
  constructor(e, t) {
    super(e, t);
    this.delayTimer = null;
    this.updatePositionTimer = null;
    this.popupOpen = false;
    this.mousedownToHide = false;
    this.hasPopupMouseDown = false;
    this.unmount = false;
    this.isDidMount = false;
    this.mouseLocation = {
      clientX: 0,
      clientY: 0,
    };
    this.observerContainer = null;
    this.scrollElements = null;
    this.resizeObserver = new c.default(() => {
      this.handleUpdatePosition();
    });
    this.childrenDom = null;
    this.childrenDomSize = {};
    this.bottomOffset = 0;
    this.getMergedProps = (e) => {
      var t;
      var n;
      return ((e, t, n) => {
        let o;
        o = t ? (n ? r._({}, t, n) : t) : n;
        let i = r._({}, e);
        for (let e in o) {
          if (i[e] === undefined) {
            i[e] = o[e];
          }
        }
        return i;
      })(
        e || this.props,
        C,
        (n = this.context) == null || (t = n.componentConfig) == null
          ? undefined
          : t.Trigger,
      );
    };
    this.getMergedPropByKey = (e, t) => {
      var n;
      var r;
      var o;
      let i = t || this.props;
      if (i[e] !== undefined) {
        return i[e];
      }
      if (
        ((o = this.context) == null ||
        (r = o.componentConfig) == null ||
        (n = r.Trigger) == null
          ? undefined
          : n[e]) !== undefined
      ) {
        return this.context.componentConfig.Trigger[e];
      }
      return C[e];
    };
    this.getMergedPropByKeys = (e, t) =>
      e.map((e) => this.getMergedPropByKey(e, t));
    this.getRootElement = () => {
      this.childrenDom = s.findDOMNode(this);
      return this.childrenDom;
    };
    this.offScrollListeners = () => {
      (this.scrollElements || []).forEach((e) => {
        AU(e, "scroll", this.handleScroll);
      });
      this.scrollElements = null;
    };
    this.offWindowResize = () => {
      this.handleWindowResize = false;
      AU(window, "resize", this.handleUpdatePosition);
    };
    this.offContainerResize = () => {
      if (this.resizeObserver && this.observerContainer) {
        this.resizeObserver.unobserve(this.observerContainer);
        this.observerContainer = null;
      }
    };
    this.handleScroll = () => {
      let e = this.getMergedPropByKey("containerScrollToClose");
      let t = this.getMergedPropByKey("updateOnScroll");
      if (e) {
        this.setPopupVisible(false);
      } else if (t) {
        this.handleUpdatePosition();
      }
    };
    this.onContainersScroll = () => {
      var e;
      if (!this.scrollElements && this.childrenDom) {
        this.scrollElements = t7(
          this.childrenDom,
          (e = this.popupContainer) == null ? undefined : e.parentNode,
        );
        this.scrollElements.forEach((e) => {
          on(e, "scroll", this.handleScroll);
        });
      }
    };
    this.onContainerResize = () => {
      var e;
      let t = (e = this.popupContainer) == null ? undefined : e.parentNode;
      if (this.resizeObserver && this.observerContainer !== t) {
        this.offContainerResize();
        if (t) {
          this.resizeObserver.observe(t);
        }
        this.observerContainer = t;
      }
    };
    this.handleUpdatePosition = A_4(() => {
      this.updatePopupPosition();
    });
    this.isClickTrigger = () =>
      [].concat(this.getMergedPropByKey("trigger")).indexOf("click") > -1;
    this.isFocusTrigger = () =>
      [].concat(this.getMergedPropByKey("trigger")).indexOf("focus") > -1;
    this.isHoverTrigger = () =>
      [].concat(this.getMergedPropByKey("trigger")).indexOf("hover") > -1;
    this.isContextMenuTrigger = () =>
      [].concat(this.getMergedPropByKey("trigger")).indexOf("contextMenu") > -1;
    this.isMouseLeaveToClose = () =>
      this.isHoverTrigger() && this.getMergedPropByKey("mouseLeaveToClose");
    this.isPopupHoverHide = () =>
      this.isHoverTrigger() && !this.getMergedPropByKey("popupHoverStay");
    this.isClickToHide = () =>
      (this.isClickTrigger() ||
        this.isContextMenuTrigger() ||
        this.props.clickToCloseTooltip) &&
      this.getMergedPropByKey("clickToClose");
    this.isBlurToHide = () =>
      this.isFocusTrigger() && this.getMergedPropByKey("blurToHide");
    this.clearTimer = () => {
      if (this.updatePositionTimer) {
        if (this.updatePositionTimer.cancel) {
          this.updatePositionTimer.cancel();
        } else {
          clearTimeout(this.updatePositionTimer);
          this.updatePositionTimer = null;
        }
      }
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }
      if (this.mouseDownTimeout) {
        clearTimeout(this.mouseDownTimeout);
        this.mouseDownTimeout = null;
      }
    };
    this.offClickOutside = () => {
      if (this.handleClickOutside) {
        let e = this.getMergedPropByKey("getDocument");
        let t = Tn(e) && e();
        AU(t, "mousedown", this.onClickOutside);
        this.handleClickOutside = false;
      }
    };
    this.getTransformOrigin = (e) => {
      var t;
      var n;
      let triggerRef = this.triggerRef;
      if (!triggerRef) {
        return {};
      }
      let o = this.getMergedPropByKey("showArrow");
      let i = this.getMergedPropByKey("classNames");
      let l = (o && ((t = this.arrowStyle) == null ? undefined : t.top)) || 0;
      let s = (o && ((n = this.arrowStyle) == null ? undefined : n.left)) || 0;
      l = l ? `${l}px` : "";
      s = s ? `${s}px` : "";
      let a = {
        top: `${s || "50%"} 100% 0`,
        tl: `${s || "15px"} 100% 0`,
        tr: `${s || `${triggerRef.clientWidth - 15}px`} 100% 0`,
        bottom: `${s || "50%"} 0 0`,
        bl: `${s || "15px"} 0 0`,
        br: `${s || `${triggerRef.clientWidth - 15}px`} 0 0`,
        left: `100% ${l || "50%"} 0`,
        lt: `100% ${l || "15px"} 0`,
        lb: `100% ${l || `${triggerRef.clientHeight - 15}px`} 0`,
        right: `0 ${l || "50%"} 0`,
        rt: `0 ${l || "15px"} 0`,
        rb: `0 ${l || `${triggerRef.clientHeight - 15}px`} 0`,
      };
      if (i && i.indexOf("zoom") > -1) {
        return {
          transformOrigin: a[e],
        };
      }
      if (i === "slideDynamicOrigin") {
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
    this.getTransformTranslate = () => {
      if (this.getMergedPropByKey("classNames") !== "slideDynamicOrigin") {
        return "";
      }
      switch (this.realPosition) {
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
    this.getPopupStyle = () => {
      var e;
      if (this.unmount || !this.popupContainer) {
        return N;
      }
      let keepInsidePopupContainer = this.getMergedPropByKey(
        "keepInsidePopupContainer",
      );
      let popupContainer = this.popupContainer;
      if (keepInsidePopupContainer) {
        let { getPopupContainer } = this.context;
        popupContainer = (
          this.getMergedPropByKey("getPopupContainer") || getPopupContainer
        )(this.getRootElement());
      }
      let triggerRef = this.triggerRef;
      let l = this.getRootElement();
      let { style, arrowStyle, realPosition } = ((e, t, n, i, l) => {
        let s;
        let {
          autoAlignPopupWidth,
          autoAlignPopupMinWidth,
          alignPoint,
          style,
          popupAlign,
          showArrow,
          position,
          autoFitPosition,
          bottomOffset,
          keepInsidePopupContainer,
          boundaryOffset,
        } = e;
        if (!n || !t || !i) {
          return {};
        }
        let style_1 = {};
        let O = (s = alignPoint && l)
          ? {
              left: s.clientX,
              top: s.clientY,
              width: 0,
              height: 0,
              right: s.clientX,
              bottom: s.clientY,
            }
          : n.getBoundingClientRect();
        let { left, top, width, height } = ((e, t, n) => {
          if (!n || !e || qD) {
            return {
              left: 0,
              width: 0,
              height: 0,
              top: 0,
            };
          }
          let r = (e) => document.documentElement[e] || document.body[e];
          let o = n === document.body ? r("scrollTop") : n.scrollTop;
          let i = n === document.body ? r("scrollLeft") : n.scrollLeft;
          let { left, top, width, height } = t;
          return {
            left:
              left +
              i -
              (n === document.body ? 0 : n.getBoundingClientRect().left),
            top:
              top +
              o -
              (n === document.body ? 0 : n.getBoundingClientRect().top),
            width,
            height,
          };
        })(n, O, i);
        let k = ((e, t) => {
          let horizontalOffset = 0;
          let verticalOffset = 0;
          let l = {};
          for (let o in (l = t
            ? r._(
                {
                  left: 12,
                  right: 12,
                  top: 12,
                  bottom: 12,
                },
                e,
              )
            : r._({}, e))) {
            if (cy(l[o])) {
              let e = 0;
              if (["top", "bottom"].indexOf(o) > -1) {
                e = 1;
                horizontalOffset = l[o][0];
              } else {
                verticalOffset = l[o][1];
              }
              l[o] = l[o][e];
            }
          }
          return o._(r._({}, l), {
            horizontalOffset,
            verticalOffset,
          });
        })(popupAlign, showArrow);
        let A = k.left || 0;
        let E = k.right || 0;
        let _ = k.top || 0;
        let M = k.bottom || 0;
        if (
          autoAlignPopupWidth &&
          (style == null ? undefined : style.width) === undefined
        ) {
          t.style.width = `${n.offsetWidth}px`;
        }
        if (autoAlignPopupMinWidth) {
          t.style.minWidth = `${n.offsetWidth}px`;
        }
        let realPosition_1 = position;
        let arrowStyle_1 = {};
        let D = (e) => {
          var n;
          var r;
          if (!autoFitPosition) {
            return;
          }
          let o =
            ((n = document.documentElement) == null
              ? undefined
              : n.clientHeight) || window.innerHeight;
          let l =
            ((r = document.documentElement) == null
              ? undefined
              : r.clientWidth) || window.innerWidth;
          let s = false;
          let { left: left_1 = 0, top: top_1 = 0 } =
            boundaryOffset != null ? boundaryOffset : {};
          let u = {
            left: left - O.left,
            top: top - O.top,
          };
          let { top: top_2 = 0, left: left_2 = 0 } = style_1;
          if (e === "top" || e === "bottom") {
            if (u.left > left_2 && O.right > 12) {
              style_1.left = Math.max(u.left, left - t.clientWidth);
              style_1.left = Math.max(style_1.left, left - t.clientWidth + 24);
            } else if (left_2 - u.left + t.clientWidth > l && l - O.left > 12) {
              style_1.left = Math.max(
                u.left,
                u.left + l - t.clientWidth - left_1,
              );
              style_1.left = Math.max(style_1.left, left - t.clientWidth + 24);
            }
          }
          if (e === "left" || e === "right") {
            if (u.top > top_2 && O.bottom > 12) {
              style_1.top = u.top;
              style_1.top = Math.max(
                style_1.top,
                top - t.clientHeight + O.height / 2,
              );
            } else if (top_2 - u.top + t.clientHeight > o && o - O.top > 12) {
              style_1.top = Math.max(u.top, u.top + o - t.clientHeight - top_1);
              style_1.top = Math.max(
                style_1.top,
                top - t.clientHeight + O.height / 2,
              );
            }
          }
          if (
            e === "top" &&
            (u.top > top_2 || (keepInsidePopupContainer && top_2 < 0))
          ) {
            if (O.top < o - O.bottom) {
              style_1.top = Math.min(
                top + height + (_ || 0),
                u.top + o - t.clientHeight,
              );
              s = true;
            } else {
              style_1.top = u.top;
            }
          }
          let f = top_2 - u.top + t.clientHeight + bottomOffset;
          if (
            e === "bottom" &&
            (f > o ||
              (keepInsidePopupContainer &&
                f > i.getBoundingClientRect().bottom))
          ) {
            if (o - O.bottom - bottomOffset < O.top) {
              style_1.top = Math.max(top - t.clientHeight - (M || 0), u.top);
              s = true;
            } else {
              style_1.top = u.top + o - t.clientHeight;
            }
          }
          if (e === "left" && u.left > left_2) {
            if (O.left < l - O.right) {
              style_1.left = Math.min(
                width + left + E,
                u.left + l - t.clientWidth,
              );
              s = true;
            } else {
              style_1.left = u.left;
            }
          }
          if (e === "right" && left_2 - u.left + t.clientWidth > l) {
            if (l - O.right < O.left) {
              style_1.left = Math.max(left - t.clientWidth - A, u.left);
              s = true;
            } else {
              style_1.left = u.left + l - t.clientWidth;
            }
          }
          if (style_1.left < 0) {
            style_1.left = 0;
          } else {
            style_1.left = Math.min(
              i.scrollWidth - t.clientWidth,
              style_1.left,
            );
          }
          if (keepInsidePopupContainer) {
            if (style_1.top < 0) {
              style_1.top = 0;
            }
            style_1.top = Math.min(
              i.scrollHeight - t.clientHeight,
              style_1.top,
            );
          }
          return s;
        };
        let R = k.horizontalOffset || 0;
        let I = k.verticalOffset || 0;
        let z = 0;
        let V = 0;
        switch (position) {
          case "top":
            style_1.top = top - t.clientHeight - _;
            style_1.left = left + width / 2 - t.clientWidth / 2;
            if (D("top")) {
              realPosition_1 = "bottom";
            }
            style_1.left += R;
            z = left - Number(style_1.left) + width / 2;
            arrowStyle_1.left = b(12, t.clientWidth - 12, z);
            break;
          case "tl":
            style_1.top = top - t.clientHeight - _;
            style_1.left = left;
            if (D("top")) {
              realPosition_1 = "bl";
            }
            style_1.left += R;
            z = left - Number(style_1.left) + Math.min(width / 2, 50);
            arrowStyle_1.left = b(12, t.clientWidth - 12, z);
            break;
          case "tr":
            style_1.top = -t.clientHeight + top - _;
            style_1.left = left + width - t.clientWidth;
            if (D("top")) {
              realPosition_1 = "br";
            }
            style_1.left += R;
            z = left - Number(style_1.left) + Math.max(width / 2, width - 50);
            arrowStyle_1.left = b(12, t.clientWidth - 12, z);
            break;
          case "bottom":
            style_1.top = height + top + M;
            style_1.left = left + width / 2 - t.clientWidth / 2;
            if (D("bottom")) {
              realPosition_1 = "top";
            }
            style_1.left += R;
            z = left - Number(style_1.left) + width / 2;
            arrowStyle_1.left = b(12, t.clientWidth - 12, z);
            break;
          case "bl":
            style_1.top = height + top + M;
            style_1.left = left;
            if (D("bottom")) {
              realPosition_1 = "tl";
            }
            style_1.left += R;
            z = left - Number(style_1.left) + Math.min(width / 2, 50);
            arrowStyle_1.left = b(12, t.clientWidth - 12, z);
            break;
          case "br":
            style_1.top = height + top + M;
            style_1.left = left + width - t.clientWidth;
            if (D("bottom")) {
              realPosition_1 = "tr";
            }
            style_1.left += R;
            z = left - Number(style_1.left) + Math.max(width / 2, width - 50);
            arrowStyle_1.left = b(12, t.clientWidth - 12, z);
            break;
          case "left":
            style_1.top = top + height / 2 - t.clientHeight / 2;
            style_1.left = left - t.clientWidth - A;
            if (D("left")) {
              realPosition_1 = "right";
            }
            style_1.top += I;
            V = top - Number(style_1.top) + height / 2;
            arrowStyle_1.top = b(12, t.clientHeight - 12, V);
            break;
          case "lt":
            style_1.top = top;
            style_1.left = left - t.clientWidth - A;
            if (D("left")) {
              realPosition_1 = "rt";
            }
            style_1.top += I;
            V = top - Number(style_1.top) + Math.min(height / 2, 50);
            arrowStyle_1.top = b(12, t.clientHeight - 12, V);
            break;
          case "lb":
            style_1.top = top + height - t.clientHeight;
            style_1.left = left - t.clientWidth - A;
            if (D("left")) {
              realPosition_1 = "rb";
            }
            style_1.top += I;
            V = top - Number(style_1.top) + Math.max(height / 2, height - 50);
            arrowStyle_1.top = b(12, t.clientHeight - 12, V);
            break;
          case "right":
            style_1.top = top + height / 2 - t.clientHeight / 2;
            style_1.left = width + left + E;
            if (D("right")) {
              realPosition_1 = "left";
            }
            style_1.top += I;
            V = top - Number(style_1.top) + height / 2;
            arrowStyle_1.top = b(12, t.clientHeight - 12, V);
            break;
          case "rt":
            style_1.top = top;
            style_1.left = width + left + E;
            if (D("right")) {
              realPosition_1 = "lt";
            }
            style_1.top += I;
            V = top - Number(style_1.top) + Math.min(height / 2, 50);
            arrowStyle_1.top = b(12, t.clientHeight - 12, V);
            break;
          case "rb":
            style_1.top = top + height - t.clientHeight;
            style_1.left = width + left + E;
            if (D("right")) {
              realPosition_1 = "lb";
            }
            style_1.top += I;
            V = top - Number(style_1.top) + Math.max(height / 2, height - 50);
            arrowStyle_1.top = b(12, t.clientHeight - 12, V);
        }
        return {
          style: style_1,
          arrowStyle: arrowStyle_1,
          realPosition: realPosition_1,
        };
      })(
        {
          autoAlignPopupWidth: this.getMergedPropByKey("autoAlignPopupWidth"),
          autoAlignPopupMinWidth: this.getMergedPropByKey(
            "autoAlignPopupMinWidth",
          ),
          alignPoint: this.getMergedPropByKey("alignPoint"),
          style: this.getMergedPropByKey("style"),
          popupAlign: this.getMergedPropByKey("popupAlign"),
          showArrow: this.getMergedPropByKey("showArrow"),
          position: this.getMergedPropByKey("position"),
          autoFitPosition: this.getMergedPropByKey("autoFitPosition"),
          bottomOffset:
            (e = this.props.bottomOffset) != null ? e : this.bottomOffset,
          keepInsidePopupContainer,
          boundaryOffset: this.getMergedPropByKey("boundaryOffset"),
        },
        triggerRef,
        l,
        popupContainer,
        this.mouseLocation,
      );
      this.realPosition = realPosition || this.getMergedPropByKey("position");
      this.arrowStyle = arrowStyle || {};
      return r._({}, style, this.getTransformOrigin(this.realPosition));
    };
    this.showPopup = (e = () => {}) => {
      let t = this.getPopupStyle();
      this.setState(
        {
          popupStyle: t,
        },
        e,
      );
    };
    this.update = A_4((e) => {
      if (this.unmount || !this.state.popupVisible) {
        return;
      }
      let t = this.getPopupStyle();
      this.setState(
        {
          popupStyle: t,
        },
        () => {
          if (e) {
            e();
          }
        },
      );
    });
    this.updatePopupPosition = (e = 0, t) => {
      if (this.state.popupVisible) {
        if (e < 4) {
          this.updatePositionTimer = this.update(t);
          return;
        }
        this.updatePositionTimer = setTimeout(() => {
          let e = this.getPopupStyle();
          this.setState(
            {
              popupStyle: e,
            },
            () => {
              if (t) {
                t();
              }
            },
          );
        }, e);
      }
    };
    this.setPopupVisible = (e, t = 0, n) => {
      let r = this.getMergedPropByKey("onVisibleChange");
      let o = this.getMergedPropByKey("checkOverflow");
      let i = this.getMergedPropByKey("popupVisible");
      let popupVisible = this.state.popupVisible;
      if (e && o) {
        let e = typeof o === "function" ? o : G9;
        if (!this.childrenDom || !e(this.childrenDom)) {
          return void this.setState(
            {
              popupVisible: false,
            },
            () => {
              if (n) {
                n();
              }
            },
          );
        }
      }
      if (e !== popupVisible) {
        this.delayToDo(t, () => {
          if (r) {
            r(e);
          }
          if (i === undefined) {
            if (e) {
              this.setState(
                {
                  popupVisible: true,
                },
                () => {
                  this.showPopup(n);
                },
              );
            } else {
              this.setState(
                {
                  popupVisible: false,
                },
                () => {
                  if (n) {
                    n();
                  }
                },
              );
            }
          } else if (n) {
            n();
          }
        });
      } else if (n) {
        n();
      }
    };
    this.delayToDo = (e, t) => {
      if (e) {
        this.clearDelayTimer();
        this.delayTimer = setTimeout(() => {
          t();
          this.clearDelayTimer();
        }, e);
      } else {
        t();
      }
    };
    this.onClickOutside = (e) => {
      let t = this.getMergedPropByKey("onClickOutside");
      let n = this.getMergedPropByKey("clickOutsideToClose");
      let triggerRef = this.triggerRef;
      let o = this.getRootElement();
      if (
        !(gR(triggerRef, e.target) || gR(o, e.target) || this.hasPopupMouseDown)
      ) {
        if (t) {
          t();
        }
        if (!(!n || this.isBlurToHide() || this.isHoverTrigger())) {
          this.setPopupVisible(false);
        }
      }
    };
    this.onKeyDown = (e) => {
      let t = e.keyCode || e.which;
      this.triggerPropsEvent("onKeyDown", e);
      if (t === gw.code) {
        this.onPressEsc(e);
      }
    };
    this.onPressEsc = (e) => {
      if (
        this.getMergedPropByKey("escToClose") &&
        e &&
        e.key === gw.key &&
        this.state.popupVisible
      ) {
        this.setPopupVisible(false);
      }
    };
    this.onMouseEnter = (e) => {
      let t = this.getMergedPropByKey("mouseEnterDelay");
      this.triggerPropsEvent("onMouseEnter", e);
      this.clearDelayTimer();
      this.setPopupVisible(true, t || 0);
    };
    this.onMouseMove = (e) => {
      this.triggerPropsEvent("onMouseMove", e);
      this.setMouseLocation(e);
      if (this.state.popupVisible) {
        this.update();
      }
    };
    this.onMouseLeave = (e) => {
      let t = this.getMergedPropByKey("mouseLeaveDelay");
      this.clearDelayTimer();
      this.triggerPropsEvent("onMouseLeave", e);
      if (this.isMouseLeaveToClose() && this.state.popupVisible) {
        this.setPopupVisible(false, t || 0);
      }
    };
    this.onPopupMouseEnter = () => {
      this.clearDelayTimer();
    };
    this.onPopupMouseLeave = (e) => {
      this.onMouseLeave(e);
    };
    this.setMouseLocation = (e) => {
      if (this.getMergedPropByKey("alignPoint")) {
        this.mouseLocation = {
          clientX: e.clientX,
          clientY: e.clientY,
        };
      }
    };
    this.onContextMenu = (e) => {
      e.preventDefault();
      this.triggerPropsEvent("onContextMenu", e);
      this.setMouseLocation(e);
      if (this.state.popupVisible) {
        if (this.getMergedPropByKey("alignPoint")) {
          this.update();
        }
      } else {
        this.setPopupVisible(true, 0);
      }
    };
    this.hideContextMenu = (e) => {
      let { popupVisible } = this.state;
      if (popupVisible) {
        this.mousedownToHide = true;
      }
      this.triggerPropsEvent("onClick", e);
      if (this.isClickToHide() && popupVisible) {
        this.setPopupVisible(!popupVisible, 0);
      }
    };
    this.onClick = (e) => {
      let { popupVisible } = this.state;
      if (popupVisible) {
        this.mousedownToHide = true;
      }
      this.triggerPropsEvent("onClick", e);
      this.setMouseLocation(e);
      if (!(!this.isClickToHide() && popupVisible)) {
        if (
          this.isClickTrigger() ||
          !this.props.clickToCloseTooltip ||
          popupVisible
        ) {
          this.setPopupVisible(!popupVisible, 0);
        }
      }
    };
    this.onFocus = (e) => {
      let t = this.getMergedPropByKey("focusDelay");
      let n = () => {
        this.triggerPropsEvent("onFocus", e);
      };
      this.clearDelayTimer();
      if (!this.mousedownToHide) {
        if (this.state.popupVisible) {
          if (n) {
            n();
          }
        } else {
          this.setPopupVisible(true, t || 0, n);
        }
      }
      this.mousedownToHide = false;
    };
    this.onBlur = (e) => {
      this.setPopupVisible(false, 200, () =>
        this.triggerPropsEvent("onBlur", e),
      );
    };
    this.onResize = () => {
      if (
        this.getMergedPropByKey("autoFixPosition") &&
        this.state.popupVisible
      ) {
        this.updatePopupPosition();
      }
    };
    this.onPopupMouseDown = () => {
      this.hasPopupMouseDown = true;
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = setTimeout(() => {
        this.hasPopupMouseDown = false;
      }, 0);
    };
    this.getChild = () => {
      let { children } = this.props;
      let t = children && typeof children !== "string" && children.type;
      let n = children;
      if (
        ["string", "number"].indexOf(typeof children) > -1 ||
        l.Children.count(children) > 1
      ) {
        n = i.jsx("span", {
          children,
        });
      } else if (
        children &&
        t &&
        (t.__BYTE_BUTTON === true ||
          t.__BYTE_CHECKBOX === true ||
          t.__BYTE_SWITCH === true ||
          t.__BYTE_RADIO === true ||
          t === "button") &&
        children.props.disabled
      ) {
        var s;
        var a;
        let picked_1;
        let omitted_1;
        s = children.props.style;
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
        picked_1 = {};
        omitted_1 = r._({}, s);
        a.forEach((e) => {
          if (s && e in s) {
            picked_1[e] = s[e];
            delete omitted_1[e];
          }
        });
        let { picked, omitted } = {
          picked: picked_1,
          omitted: omitted_1,
        };
        n = i.jsx("span", {
          className: children.props.className,
          style: o._(
            r._(
              {
                display: "inline-block",
              },
              picked,
            ),
            {
              cursor: "not-allowed",
            },
          ),
          children: l.cloneElement(children, {
            style: o._(r._({}, omitted), {
              pointerEvents: "none",
            }),
            className: undefined,
          }),
        });
      }
      return n || i.jsx("span", {});
    };
    this.appendToContainer = (e) => {
      w.N(this.rafId);
      if (this.isDidMount) {
        let { getPopupContainer } = this.context;
        let n = (
          this.getMergedPropByKey("getPopupContainer") || getPopupContainer
        )(this.getRootElement());
        if (n) {
          return void n.appendChild(e);
        }
      }
      this.rafId = w.e(() => {
        this.appendToContainer(e);
      });
    };
    this.getContainer = () => {
      let e = document.createElement("div");
      e.style.width = "100%";
      e.style.position = "absolute";
      e.style.top = "0";
      e.style.left = "0";
      this.popupContainer = e;
      this.appendToContainer(e);
      return e;
    };
    this.triggerPropsEvent = (e, t) => {
      let n = this.getChild();
      let r = n && n.props && n.props[e];
      let o = this.getMergedPropByKey(e);
      if (Tn(r)) {
        r(t);
      }
      if (Tn(o)) {
        o(t);
      }
    };
    this.triggerOriginEvent = (e) => {
      let t = this.getChild();
      let n = t && t.props && t.props[e];
      let r = this.getMergedPropByKey(e);
      if (Tn(r) && Tn(n)) {
        return (e) => {
          n(e);
          r(e);
        };
      }
      return n || r;
    };
    let n = this.getMergedPropByKey("popupVisible", e);
    let a = n != null ? n : this.getMergedPropByKey("defaultPopupVisible", e);
    this.popupOpen = !!a;
    this.state = {
      popupVisible: !!a,
      popupStyle: N,
    };
  }
}
A.displayName = "Trigger";
A.contextType = QO;
