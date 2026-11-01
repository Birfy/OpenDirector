import r from "bT";
import o from "wnX";
import i from "rJ";
import { A as A_1 } from "./module-Vb_3.js";
import { A as A_2 } from "./module-Ruc.js";
import u from "jW8";
import { h } from "./module-sQ.js";
const s = r.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_visible = e.visible;
  const s = e_visible !== undefined && e_visible;
  const e_maskClass = e.maskClass;
  const e_maskStyle = e.maskStyle;
  const e_contentClass = e.contentClass;
  const e_contentStyle = e.contentStyle;
  const e_close = e.close;
  const e_onClose = e.onClose;
  const e_onOpen = e.onOpen;
  const e_onMaskClick = e.onMaskClick;
  const e_children = e.children;
  const e_maskTransitionType = e.maskTransitionType;
  const E = e_maskTransitionType === undefined ? "fade" : e_maskTransitionType;
  const e_contentTransitionType = e.contentTransitionType;
  const w =
    e_contentTransitionType === undefined ? "fade" : e_contentTransitionType;
  const e_maskTransitionTimeout = e.maskTransitionTimeout;
  const N =
    e_maskTransitionTimeout === undefined ? 300 : e_maskTransitionTimeout;
  const e_contentTransitionTimeout = e.contentTransitionTimeout;
  const R =
    e_contentTransitionTimeout === undefined ? 300 : e_contentTransitionTimeout;
  const e_maskClosable = e.maskClosable;
  const I = e_maskClosable === undefined || e_maskClosable;
  const e_animatingClosable = e.animatingClosable;
  const e_mountOnEnter = e.mountOnEnter;
  const mountOnEnter = e_mountOnEnter === undefined || e_mountOnEnter;
  const e_unmountOnExit = e.unmountOnExit;
  const unmountOnExit = e_unmountOnExit === undefined || e_unmountOnExit;
  const e_orientationDirection = e.orientationDirection;
  const e_preventBodyScroll = e.preventBodyScroll;
  const e_initialBodyOverflow = e.initialBodyOverflow;
  const e_contentAtCenter = e.contentAtCenter;
  const V = e_contentAtCenter !== undefined && e_contentAtCenter;
  const e_gestureOutOfControl = e.gestureOutOfControl;
  const e_getContainer = e.getContainer;
  const e_getScrollContainer = e.getScrollContainer;
  const e_onPreventTouchMove = e.onPreventTouchMove;
  const e_onTouchMove = e.onTouchMove;
  const JRef = r.useRef(null);
  const jRef = r.useRef(null);
  const URef = r.useRef(null);
  const XRef = r.useRef(-1);
  const KRef = r.useRef(false);
  const _Ref = r.useRef(false);
  const ZRef = r.useRef("");
  const Q = r.useState(s);
  const $ = Q[0];
  const ee = Q[1];
  const et = r.useState(s);
  const en = et[0];
  const er = et[1];
  const eo = r.useState("");
  const ei = eo[0];
  const ea = eo[1];
  function setCloseScene(e) {
    ZRef.current = e;
  }
  function eu(e, t) {
    if (typeof e === "number") {
      return e;
    }
    return e[t] || 0;
  }
  function onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e_onMaskClick != null) {
      e_onMaskClick();
    }
    if (I && (e_animatingClosable || !_Ref.current)) {
      ZRef.current = "mask";
      if (e_close != null) {
        e_close(e);
      }
    }
  }
  r.useImperativeHandle(t, function () {
    return {
      dom: JRef.current,
      mask: jRef.current,
      content: URef.current,
      setCloseScene,
    };
  });
  u.Lu(
    $,
    JRef.current,
    e_getScrollContainer,
    e_orientationDirection === undefined ? "top" : e_orientationDirection,
    e_onPreventTouchMove,
    e_onTouchMove,
    e_gestureOutOfControl !== undefined && e_gestureOutOfControl,
  );
  u.db(
    s,
    e_preventBodyScroll === undefined || e_preventBodyScroll,
    e_initialBodyOverflow,
  );
  r.useEffect(
    function () {
      if (XRef.current >= 0) {
        clearTimeout(XRef.current);
      }
      let e;
      const KRef_current = KRef.current;
      if (KRef_current) {
        _Ref.current = true;
      }
      if (!(KRef_current || s || mountOnEnter)) {
        ea("pre-mount");
      }
      if (s) {
        er(true);
        o.dY(function () {
          let e;
          ee(true);
          e = function () {
            _Ref.current = false;
            ea("");
            if (KRef_current) {
              if (e_onOpen != null) {
                e_onOpen();
              }
            }
          };
          window.setTimeout(e, Math.max(eu(N, "enter"), eu(R, "enter")));
        });
      } else {
        ee(false);
        e = function () {
          _Ref.current = false;
          er(false);
          if (KRef_current) {
            if (e_onClose != null) {
              e_onClose(ZRef.current || undefined);
            }
          }
          ZRef.current = "";
        };
        XRef.current = window.setTimeout(
          e,
          Math.max(eu(N, "exit"), eu(R, "exit")),
        );
      }
      KRef.current = true;
    },
    [s],
  );
  return r.createElement(i.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    if (mountOnEnter && !en && unmountOnExit) {
      return null;
    }
    return r.createElement(
      A_1,
      {
        getContainer: e_getContainer,
      },
      r.createElement(
        "div",
        {
          className: o.xF(
            e_prefixCls + "-masking",
            "all-border-box",
            e_className,
          ),
          ref: JRef,
        },
        r.createElement(
          A_2,
          {
            in: $,
            timeout: N,
            type: E,
            mountOnEnter,
            unmountOnExit,
            nodeRef: jRef,
          },
          r.createElement("div", {
            ref: jRef,
            className: o.xF(e_prefixCls + "-masking-mask", ei, e_maskClass),
            onClick,
            style: e_maskStyle,
          }),
        ),
        r.createElement(
          A_2,
          {
            in: $,
            timeout: R,
            type: w,
            mountOnEnter,
            unmountOnExit,
            nodeRef: URef,
          },
          r.createElement(
            "div",
            {
              ref: URef,
              className: o.xF(
                e_prefixCls + "-masking-content",
                {
                  "at-center": V,
                },
                ei,
                e_contentClass,
              ),
              style: e_contentStyle,
            },
            e_children,
          ),
        ),
      ),
    );
  });
});
const d = i.qm(s);
export const Ay = o.DU(s, {
  open: h(d),
});
