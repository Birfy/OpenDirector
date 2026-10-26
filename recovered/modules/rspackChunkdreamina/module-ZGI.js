import n from "z8";
import t from "bT";
import o from "VB";
import r from "KTE";
import * as s from "./module-vy.js";
import l from "myQ";
import { A } from "./module-W5Q.js";
import { A as A_1 } from "./module-CN.js";
const m = "--recommendation-feed-sticky-end-gap";
function p(e, i) {
  const a =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  const n = Number.parseFloat(window.getComputedStyle(e).getPropertyValue(i));
  if (Number.isFinite(n)) {
    return n;
  }
  return a;
}
function u(e) {
  return p(e, s.Hc, s.KZ);
}
function h(e) {
  const {
    boundaryRef,
    onApproachingStickyChange,
    scrollContainerRef,
    sentinelRef,
    setIsMiniSearchRequired,
    setIsStickyBoundaryActive,
    setIsStuck,
  } = e;
  o.f(() => {
    var e;
    var o;
    var h;
    var boundaryRef_current = boundaryRef.current;
    var root = (e = scrollContainerRef.current) == null ? undefined : e.element;
    var sentinelRef_current = sentinelRef.current;
    var b =
      boundaryRef_current == null
        ? undefined
        : boundaryRef_current.querySelector(
            "[data-recommendation-feed-primary-navigation]",
          );
    if (boundaryRef_current && root && sentinelRef_current && b) {
      setIsStickyBoundaryActive(true);
      var f = u(root);
      var w = b.getBoundingClientRect().height;
      var k = sentinelRef_current.getBoundingClientRect().height;
      var y = function (top, i) {
        const a =
          arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        return top < i + f + a;
      };
      var isStuck = false;
      var W = false;
      var R = () => {
        if (h !== undefined) {
          window.clearTimeout(h);
          h = undefined;
        }
      };
      var j = function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        const i = boundaryRef_current.getBoundingClientRect();
        const a = b.getBoundingClientRect();
        const localEndGap = Math.max(
          0,
          root.getBoundingClientRect().right - a.right,
        );
        boundaryRef_current.style.setProperty(m, "".concat(localEndGap, "px"));
        if (e) {
          R();
          h = window.setTimeout(() => j(), 80);
          return;
        }
        R();
        const safeRight = p(root, s.CL);
        const o = l.bp({
          isStuck,
          localEndGap,
          navigationWidth: a.width || i.width,
          safeRight,
        });
        if (o !== W) {
          W = o;
          setIsMiniSearchRequired(o);
        }
      };
      var T = function (e) {
        const i =
          arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        const a = e !== isStuck;
        isStuck = e;
        setIsStuck((i) => {
          if (i === e) {
            return i;
          }
          return e;
        });
        j(i && !a);
      };
      var C = function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        const i = root.getBoundingClientRect();
        const n = sentinelRef_current.getBoundingClientRect();
        T(y(n.top, i.top, w), e);
        if (onApproachingStickyChange != null) {
          onApproachingStickyChange(y(n.top, i.top, 80));
        }
      };
      C();
      var M = (e, i) => {
        if (typeof IntersectionObserver === "function") {
          return new IntersectionObserver(
            (a) => {
              var [n] = a;
              if (n) {
                i(
                  y(
                    n.boundingClientRect.top,
                    root.getBoundingClientRect().top,
                    e,
                  ),
                );
              }
            },
            {
              root,
              rootMargin: `-${f + k + e}px 0px 0px 0px`,
              threshold: 0,
            },
          );
        }
      };
      var A = M(w, T);
      var F = onApproachingStickyChange
        ? M(80, onApproachingStickyChange)
        : undefined;
      if (A != null) {
        A.observe(sentinelRef_current);
      }
      if (F != null) {
        F.observe(sentinelRef_current);
      }
      var $ =
        A || (o = scrollContainerRef.current) == null
          ? undefined
          : o.onScroll(() => C());
      var S = A ? () => j(true) : () => C(true);
      var E =
        typeof ResizeObserver === "function"
          ? new ResizeObserver(S)
          : undefined;
      if (E != null) {
        E.observe(root);
      }
      if (E != null) {
        E.observe(boundaryRef_current);
      }
      if (E != null) {
        E.observe(b);
      }
      var Z = () => S();
      if (!E) {
        window.addEventListener("resize", Z);
      }
      return () => {
        if (A != null) {
          A.disconnect();
        }
        if (F != null) {
          F.disconnect();
        }
        if (E != null) {
          E.disconnect();
        }
        if ($ != null) {
          $.dispose();
        }
        window.removeEventListener("resize", Z);
        R();
        setIsStuck(false);
        if (onApproachingStickyChange != null) {
          onApproachingStickyChange(false);
        }
        setIsMiniSearchRequired(false);
        setIsStickyBoundaryActive(false);
        boundaryRef_current.style.removeProperty(m);
      };
    }
  });
  return null;
}
export var B = t.forwardRef(function (e, i) {
  const { children, onApproachingStickyChange } = e;
  const { scrollContainerRef } = t.useContext(r.u);
  const lRef = t.useRef(null);
  const mRef = t.useRef(null);
  const [p, setP] = t.useState(false);
  const [x, setX] = t.useState(false);
  const [b, setB] = t.useState(false);
  const [w, setW] = t.useState(false);
  t.useEffect(() => {
    setW(true);
  }, []);
  const scrollToStart = t.useCallback(() => {
    var scrollContainerRef_current = scrollContainerRef.current;
    var i =
      scrollContainerRef_current == null
        ? undefined
        : scrollContainerRef_current.element;
    var mRef_current = mRef.current;
    if (scrollContainerRef_current && i && mRef_current) {
      var n =
        mRef_current.getBoundingClientRect().top -
        i.getBoundingClientRect().top -
        u(i);
      if (!(n >= 0)) {
        scrollContainerRef_current.scrollTo({
          behavior: "auto",
          top: Math.max(0, scrollContainerRef_current.scrollTop + n),
        });
      }
    }
  }, [scrollContainerRef]);
  t.useImperativeHandle(
    i,
    () => ({
      scrollToStart,
    }),
    [scrollToStart],
  );
  const value = t.useMemo(
    () => ({
      isMiniSearchRequired: x,
      isStickyBoundaryActive: b,
      isStuck: p,
    }),
    [x, b, p],
  );
  return n.jsxs(A.Provider, {
    value,
    children: [
      w
        ? n.jsx(h, {
            boundaryRef: lRef,
            onApproachingStickyChange,
            scrollContainerRef,
            sentinelRef: mRef,
            setIsMiniSearchRequired: setX,
            setIsStickyBoundaryActive: setB,
            setIsStuck: setP,
          })
        : null,
      n.jsxs("div", {
        ref: lRef,
        className: A_1.stickyBoundary,
        "data-recommendation-feed-sticky-boundary": true,
        "data-stuck": p || undefined,
        "data-search-mini": x || undefined,
        children: [
          n.jsx("div", {
            ref: mRef,
            className: A_1.stickySentinel,
            "data-recommendation-feed-sticky-sentinel": true,
            "aria-hidden": "true",
          }),
          children,
        ],
      }),
    ],
  });
});
