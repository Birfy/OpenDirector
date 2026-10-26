import n from "z8";
import a from "zS";
import o from "Nx";
import c from "bT";
import _s from "xb";
import u from "A7";
import { u as u_1 } from "./module-KTE.js";
const i = {
  "scroll-container": "scroll-container-QZlJMD",
  scrollContainer: "scroll-container-QZlJMD",
  superscript: "superscript-OGKZZ9",
};
export var P = c.memo(
  c.forwardRef((e, t) => {
    var { threshold, className, children, onScroll } = e;
    var hRef = c.useRef(null);
    var vRef = c.useRef(null);
    var [scrollTop, setScrollTop] = c.useState(0);
    var { run } = o.A(
      () => {
        var e;
        var t;
        return setScrollTop(
          (e = (t = hRef.current) == null ? undefined : t.scrollTop) != null
            ? e
            : 0,
        );
      },
      200,
      [setScrollTop],
    );
    var {
      isReachBottom,
      onScroll: onScroll_1,
      refresh,
    } = (function () {
      const e =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
      const [isReachBottom_1, setIsReachBottom] = c.useState(false);
      const n = a.A((t) => {
        if (t.currentTarget) {
          var n =
            t.currentTarget.scrollHeight -
              t.currentTarget.scrollTop -
              t.currentTarget.clientHeight <
            e;
          setIsReachBottom(n);
          return n;
        }
        return false;
      });
      const refresh_1 = a.A((e) => {
        setIsReachBottom(false);
        setTimeout(() => n(e), 30);
      });
      return {
        isReachBottom: isReachBottom_1,
        onScroll: n,
        refresh: refresh_1,
      };
    })(threshold);
    var x = a.A(() =>
      refresh({
        currentTarget: hRef.current,
      }),
    );
    var wRef = c.useRef(new u.v());
    var onReachBottom = c.useMemo(() => wRef.current.event, []);
    c.useEffect(() => {
      if (isReachBottom) {
        wRef.current.fire();
      }
    }, [isReachBottom]);
    var kRef = c.useRef(new u.v());
    var T = c.useMemo(() => kRef.current.event, []);
    var N = a.A((e) => {
      if (onScroll != null) {
        onScroll(e);
      }
      onScroll_1(e);
      run();
      kRef.current.fire(e);
    });
    c.useEffect(
      () => () => {
        wRef.current.dispose();
        kRef.current.dispose();
      },
      [],
    );
    (function (e, t) {
      const r =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const { listenDimension, initialSize, element } = r;
      const sRef = c.useRef();
      if (!sRef.current) {
        let l;
        let u;
        const d = typeof element === "function" ? element() : element;
        if (!d && initialSize) {
          sRef.current = {
            width: initialSize.width || 0,
            height: initialSize.height || 0,
          };
        } else {
          sRef.current = {
            width:
              ((l = d || {
                clientWidth: 0,
              }) == null
                ? undefined
                : l.clientWidth) || 0,
            height:
              ((u = d || {
                clientHeight: 0,
              }) == null
                ? undefined
                : u.clientHeight) || 0,
          };
        }
      }
      const m = a.A((e) => {
        if (e == null ? undefined : e.length) {
          var { width, height } = e[0].contentRect;
          switch (listenDimension) {
            case "width":
              if (sRef.current.width !== width) {
                sRef.current.width = width;
                t(sRef.current);
              }
              break;
            case "height":
              if (sRef.current.height !== height) {
                sRef.current.height = height;
                t(sRef.current);
              }
              break;
            default:
              if (
                sRef.current.width !== width ||
                sRef.current.height !== height
              ) {
                sRef.current.width = width;
                sRef.current.height = height;
                t(sRef.current);
              }
          }
        }
      });
      c.useLayoutEffect(() => {
        var e_current = e.current;
        if (element) {
          e_current = typeof element === "function" ? element() : element;
        }
        var r = new ResizeObserver(m);
        if (e_current) {
          r.observe(e_current);
        }
        return () => r.disconnect();
      }, [m, element, e]);
    })(vRef, x, {
      listenDimension: "height",
    });
    var scrollTo = a.A((e) => {
      var t;
      if ((t = hRef.current) == null) {
        return undefined;
      }
      return t.scrollTo(e);
    });
    var MRef = c.useRef({
      get element() {
        return hRef.current;
      },
      get scrollTop() {
        let e;
        let t;
        if (
          (e = (t = hRef.current) == null ? undefined : t.scrollTop) != null
        ) {
          return e;
        }
        return 0;
      },
      get scrollHeight() {
        let e;
        let t;
        if (
          (e = (t = hRef.current) == null ? undefined : t.scrollHeight) != null
        ) {
          return e;
        }
        return 0;
      },
      get clientWidth() {
        let e;
        let t;
        if (
          (e = (t = hRef.current) == null ? undefined : t.clientWidth) != null
        ) {
          return e;
        }
        return 0;
      },
      get clientHeight() {
        let e;
        let t;
        if (
          (e = (t = hRef.current) == null ? undefined : t.clientHeight) != null
        ) {
          return e;
        }
        return 0;
      },
      scrollTo,
      onScroll: T,
      onReachBottom,
    });
    c.useImperativeHandle(t, () => MRef.current, []);
    return n.jsx(u_1.Provider, {
      value: {
        scrollContainerRef: MRef,
        isReachBottom,
        onReachBottom,
        onScroll: T,
        scrollTop,
        scrollTo,
        element: hRef.current,
      },
      children: n.jsx("div", {
        ref: hRef,
        className: _s(i.scrollContainer, className),
        onScroll: N,
        children: n.jsx("div", {
          className: i.scrollInner,
          ref: vRef,
          children,
        }),
      }),
    });
  }),
);
P.displayName = "ScrollContainer";
