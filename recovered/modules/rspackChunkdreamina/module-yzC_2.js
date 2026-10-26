import r from "oa";
import n from "bk";
import i from "qa";
import o from "z8";
import s from "bT";
import _c from "xb";
import { P as P_1 } from "./module-JnT_2.js";
import { O } from "./module-UM_2.js";
export var P = s.memo(
  s.forwardRef(function (e, t) {
    const [a, ...c] = [e, t];
    const { className, onScroll, scrollbarMode = "always" } = a;
    const v = i._(a, ["className", "onScroll", "scrollbarMode"]);
    const [g] = c;
    const enabled = scrollbarMode !== "always";
    const bRef = s.useRef(null);
    const jRef = s.useRef(null);
    const yRef = s.useRef(null);
    const wRef = s.useRef(null);
    const kRef = s.useRef();
    const _Ref = s.useRef();
    const ref = s.useCallback(
      (e) => {
        bRef.current = e;
        if (typeof g === "function") {
          g(e);
        } else if (g) {
          g.current = e;
        }
      },
      [g],
    );
    const getViewport = s.useCallback(() => {
      var e;
      var t;
      if ((e = (t = bRef.current) == null ? undefined : t.element) != null) {
        return e;
      }
      return null;
    }, []);
    const getTrack = s.useCallback(() => yRef.current, []);
    const getThumb = s.useCallback(() => wRef.current, []);
    const onOverflowChange = s.useCallback(
      (e) => {
        var yRef_current = yRef.current;
        if (yRef_current) {
          yRef_current.style.visibility =
            scrollbarMode === "scrolling" && e ? "visible" : "hidden";
        }
      },
      [scrollbarMode],
    );
    const A = O({
      enabled,
      getViewport,
      getTrack,
      getThumb,
      trackStartInset: 8,
      trackEndInset: 8,
      onOverflowChange,
    });
    const T = s.useCallback((e, t) => {
      var a = Math.min(
        Math.max(e - t.trackTop - 8 - t.pointerOffsetY, 0),
        t.maxThumbOffset,
      );
      t.viewport.scrollTop = (a / t.maxThumbOffset) * t.maxScrollTop;
      t.thumb.style.transform = "translateY(".concat(a, "px)");
    }, []);
    const onPointerDown = s.useCallback(
      (e) => {
        if (e.button === 0) {
          var viewport = getViewport();
          var a = getTrack();
          var thumb = getThumb();
          if (viewport && a && thumb) {
            var n = a.getBoundingClientRect();
            var i = thumb.getBoundingClientRect();
            var maxThumbOffset = Math.max(
              Math.max(a.clientHeight - 16, 0) - i.height,
              0,
            );
            var maxScrollTop = Math.max(
              viewport.scrollHeight - viewport.clientHeight,
              0,
            );
            if (maxThumbOffset !== 0 && maxScrollTop !== 0) {
              e.preventDefault();
              e.stopPropagation();
              var pointerOffsetY =
                e.target === thumb ? e.clientY - i.top : 0.5 * i.height;
              var l = {
                maxScrollTop,
                maxThumbOffset,
                pointerId: e.pointerId,
                pointerOffsetY,
                thumb,
                trackTop: n.top,
                viewport,
              };
              _Ref.current = l;
              e.currentTarget.dataset.dragging = "true";
              e.currentTarget.setPointerCapture(e.pointerId);
              if (e.target !== thumb) {
                T(e.clientY, l);
              }
            }
          }
        }
      },
      [getTrack, getThumb, getViewport, T],
    );
    const onPointerMove = s.useCallback(
      (e) => {
        var _Ref_current = _Ref.current;
        if (_Ref_current && _Ref_current.pointerId === e.pointerId) {
          e.preventDefault();
          e.stopPropagation();
          T(e.clientY, _Ref_current);
        }
      },
      [T],
    );
    const P = s.useCallback((e) => {
      var _Ref_current = _Ref.current;
      if (_Ref_current && _Ref_current.pointerId === e.pointerId) {
        _Ref.current = undefined;
        e.currentTarget.removeAttribute("data-dragging");
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      }
    }, []);
    const E = s.useCallback(() => {
      var e;
      if (kRef.current !== undefined) {
        window.clearTimeout(kRef.current);
        kRef.current = undefined;
      }
      if ((e = jRef.current) != null) {
        e.removeAttribute("data-scrolling");
      }
    }, []);
    s.useEffect(() => {
      if (scrollbarMode !== "scrolling") {
        E();
      }
      return E;
    }, [E, scrollbarMode]);
    const onScroll_1 = s.useCallback(
      (e) => {
        if (scrollbarMode === "scrolling") {
          var t;
          if ((t = jRef.current) != null) {
            t.setAttribute("data-scrolling", "true");
          }
          A();
          if (kRef.current !== undefined) {
            window.clearTimeout(kRef.current);
          }
          kRef.current = window.setTimeout(() => {
            var e;
            if ((e = jRef.current) != null) {
              e.removeAttribute("data-scrolling");
            }
            kRef.current = undefined;
          }, 800);
        }
        if (onScroll != null) {
          onScroll(e);
        }
      },
      [onScroll, scrollbarMode, A],
    );
    const F = o.jsx(
      P_1,
      n._(r._({}, v), {
        ref,
        className: _c(
          "scroll-container-ccItuH",
          !enabled && className,
          enabled && "scroll-container-overlay-viewport-uAE9Ax",
        ),
        onScroll: onScroll_1,
      }),
    );
    if (enabled) {
      return o.jsxs("div", {
        ref: jRef,
        className: _c("scroll-container-overlay-Yr0Kp8", className, {
          "scroll-container-overlay-hidden-B0IBu2": scrollbarMode === "hidden",
        }),
        children: [
          F,
          o.jsx("div", {
            ref: yRef,
            className: "scroll-container-overlay-scrollbar-xQLMo7",
            "aria-hidden": "true",
            onPointerDown,
            onPointerMove,
            onPointerUp: P,
            onPointerCancel: P,
            onLostPointerCapture: P,
            children: o.jsx("div", {
              ref: wRef,
              className: "scroll-container-overlay-scrollbar-thumb-c0WdV5",
            }),
          }),
        ],
      });
    }
    return F;
  }),
);
P.displayName = "ScrollContainer";
