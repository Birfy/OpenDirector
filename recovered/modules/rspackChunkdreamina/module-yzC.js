import n from "oa";
import a from "bk";
import o from "qa";
import i from "z8";
import c from "bT";
import _s from "xb";
import { P as P_1 } from "./module-JnT.js";
import { O as O_1 } from "./module-UM.js";
export var P = c.memo(
  c.forwardRef(function (e, t) {
    const [r, ...s] = [e, t];
    const { className, onScroll, scrollbarMode = "always" } = r;
    const v = o._(r, ["className", "onScroll", "scrollbarMode"]);
    const [f] = s;
    const enabled = scrollbarMode !== "always";
    const bRef = c.useRef(null);
    const jRef = c.useRef(null);
    const yRef = c.useRef(null);
    const _Ref = c.useRef(null);
    const xRef = c.useRef();
    const wRef = c.useRef();
    const ref = c.useCallback(
      (e) => {
        bRef.current = e;
        if (typeof f === "function") {
          f(e);
        } else if (f) {
          f.current = e;
        }
      },
      [f],
    );
    const getViewport = c.useCallback(() => {
      var e;
      var t;
      if ((e = (t = bRef.current) == null ? undefined : t.element) != null) {
        return e;
      }
      return null;
    }, []);
    const getTrack = c.useCallback(() => yRef.current, []);
    const getThumb = c.useCallback(() => _Ref.current, []);
    const onOverflowChange = c.useCallback(
      (e) => {
        var yRef_current = yRef.current;
        if (yRef_current) {
          yRef_current.style.visibility =
            scrollbarMode === "scrolling" && e ? "visible" : "hidden";
        }
      },
      [scrollbarMode],
    );
    const M = O_1({
      enabled,
      getViewport,
      getTrack,
      getThumb,
      trackStartInset: 8,
      trackEndInset: 8,
      onOverflowChange,
    });
    const R = c.useCallback((e, t) => {
      var r = Math.min(
        Math.max(e - t.trackTop - 8 - t.pointerOffsetY, 0),
        t.maxThumbOffset,
      );
      t.viewport.scrollTop = (r / t.maxThumbOffset) * t.maxScrollTop;
      t.thumb.style.transform = "translateY(".concat(r, "px)");
    }, []);
    const onPointerDown = c.useCallback(
      (e) => {
        if (e.button === 0) {
          var viewport = getViewport();
          var r = getTrack();
          var thumb = getThumb();
          if (viewport && r && thumb) {
            var a = r.getBoundingClientRect();
            var o = thumb.getBoundingClientRect();
            var maxThumbOffset = Math.max(
              Math.max(r.clientHeight - 16, 0) - o.height,
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
                e.target === thumb ? e.clientY - o.top : 0.5 * o.height;
              var l = {
                maxScrollTop,
                maxThumbOffset,
                pointerId: e.pointerId,
                pointerOffsetY,
                thumb,
                trackTop: a.top,
                viewport,
              };
              wRef.current = l;
              e.currentTarget.dataset.dragging = "true";
              e.currentTarget.setPointerCapture(e.pointerId);
              if (e.target !== thumb) {
                R(e.clientY, l);
              }
            }
          }
        }
      },
      [getTrack, getThumb, getViewport, R],
    );
    const onPointerMove = c.useCallback(
      (e) => {
        var wRef_current = wRef.current;
        if (wRef_current && wRef_current.pointerId === e.pointerId) {
          e.preventDefault();
          e.stopPropagation();
          R(e.clientY, wRef_current);
        }
      },
      [R],
    );
    const P = c.useCallback((e) => {
      var wRef_current = wRef.current;
      if (wRef_current && wRef_current.pointerId === e.pointerId) {
        wRef.current = undefined;
        e.currentTarget.removeAttribute("data-dragging");
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      }
    }, []);
    const O = c.useCallback(() => {
      var e;
      if (xRef.current !== undefined) {
        window.clearTimeout(xRef.current);
        xRef.current = undefined;
      }
      if ((e = jRef.current) != null) {
        e.removeAttribute("data-scrolling");
      }
    }, []);
    c.useEffect(() => {
      if (scrollbarMode !== "scrolling") {
        O();
      }
      return O;
    }, [O, scrollbarMode]);
    const onScroll_1 = c.useCallback(
      (e) => {
        if (scrollbarMode === "scrolling") {
          var t;
          if ((t = jRef.current) != null) {
            t.setAttribute("data-scrolling", "true");
          }
          M();
          if (xRef.current !== undefined) {
            window.clearTimeout(xRef.current);
          }
          xRef.current = window.setTimeout(() => {
            var e;
            if ((e = jRef.current) != null) {
              e.removeAttribute("data-scrolling");
            }
            xRef.current = undefined;
          }, 800);
        }
        if (onScroll != null) {
          onScroll(e);
        }
      },
      [onScroll, scrollbarMode, M],
    );
    const z = i.jsx(
      P_1,
      a._(n._({}, v), {
        ref,
        className: _s(
          "scroll-container-ccItuH",
          !enabled && className,
          enabled && "scroll-container-overlay-viewport-uAE9Ax",
        ),
        onScroll: onScroll_1,
      }),
    );
    if (enabled) {
      return i.jsxs("div", {
        ref: jRef,
        className: _s("scroll-container-overlay-Yr0Kp8", className, {
          "scroll-container-overlay-hidden-B0IBu2": scrollbarMode === "hidden",
        }),
        children: [
          z,
          i.jsx("div", {
            ref: yRef,
            className: "scroll-container-overlay-scrollbar-xQLMo7",
            "aria-hidden": "true",
            onPointerDown,
            onPointerMove,
            onPointerUp: P,
            onPointerCancel: P,
            onLostPointerCapture: P,
            children: i.jsx("div", {
              ref: _Ref,
              className: "scroll-container-overlay-scrollbar-thumb-c0WdV5",
            }),
          }),
        ],
      });
    }
    return z;
  }),
);
P.displayName = "ScrollContainer";
