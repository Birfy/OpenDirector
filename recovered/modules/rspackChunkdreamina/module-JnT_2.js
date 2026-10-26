import r from "z8";
import n from "zS";
import i from "Nx";
import s from "bT";
import _c from "xb";
import d from "A7";
import { u } from "./module-KTE_2.js";
const o = {
  "scroll-container": "scroll-container-QZlJMD",
  scrollContainer: "scroll-container-QZlJMD",
  superscript: "superscript-OGKZZ9",
};
export var P = s.memo(
  s.forwardRef((e, t) => {
    var { threshold, className, children, onScroll } = e;
    var hRef = s.useRef(null);
    var vRef = s.useRef(null);
    var [scrollTop, setScrollTop] = s.useState(0);
    var { run } = i.A(
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
      const [isReachBottom_1, setIsReachBottom] = s.useState(false);
      const r = n.A((t) => {
        if (t.currentTarget) {
          var r =
            t.currentTarget.scrollHeight -
              t.currentTarget.scrollTop -
              t.currentTarget.clientHeight <
            e;
          setIsReachBottom(r);
          return r;
        }
        return false;
      });
      const refresh_1 = n.A((e) => {
        setIsReachBottom(false);
        setTimeout(() => r(e), 30);
      });
      return {
        isReachBottom: isReachBottom_1,
        onScroll: r,
        refresh: refresh_1,
      };
    })(threshold);
    var k = n.A(() =>
      refresh({
        currentTarget: hRef.current,
      }),
    );
    var _Ref = s.useRef(new d.v());
    var onReachBottom = s.useMemo(() => _Ref.current.event, []);
    s.useEffect(() => {
      if (isReachBottom) {
        _Ref.current.fire();
      }
    }, [isReachBottom]);
    var xRef = s.useRef(new d.v());
    var S = s.useMemo(() => xRef.current.event, []);
    var R = n.A((e) => {
      if (onScroll != null) {
        onScroll(e);
      }
      onScroll_1(e);
      run();
      xRef.current.fire(e);
    });
    s.useEffect(
      () => () => {
        _Ref.current.dispose();
        xRef.current.dispose();
      },
      [],
    );
    (function (e, t) {
      const a =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const { listenDimension, initialSize, element } = a;
      const cRef = s.useRef();
      if (!cRef.current) {
        let l;
        let d;
        const u = typeof element === "function" ? element() : element;
        if (!u && initialSize) {
          cRef.current = {
            width: initialSize.width || 0,
            height: initialSize.height || 0,
          };
        } else {
          cRef.current = {
            width:
              ((l = u || {
                clientWidth: 0,
              }) == null
                ? undefined
                : l.clientWidth) || 0,
            height:
              ((d = u || {
                clientHeight: 0,
              }) == null
                ? undefined
                : d.clientHeight) || 0,
          };
        }
      }
      const p = n.A((e) => {
        if (e == null ? undefined : e.length) {
          var { width, height } = e[0].contentRect;
          switch (listenDimension) {
            case "width":
              if (cRef.current.width !== width) {
                cRef.current.width = width;
                t(cRef.current);
              }
              break;
            case "height":
              if (cRef.current.height !== height) {
                cRef.current.height = height;
                t(cRef.current);
              }
              break;
            default:
              if (
                cRef.current.width !== width ||
                cRef.current.height !== height
              ) {
                cRef.current.width = width;
                cRef.current.height = height;
                t(cRef.current);
              }
          }
        }
      });
      s.useLayoutEffect(() => {
        var e_current = e.current;
        if (element) {
          e_current = typeof element === "function" ? element() : element;
        }
        var a = new ResizeObserver(p);
        if (e_current) {
          a.observe(e_current);
        }
        return () => a.disconnect();
      }, [p, element, e]);
    })(vRef, k, {
      listenDimension: "height",
    });
    var scrollTo = n.A((e) => {
      var t;
      if ((t = hRef.current) == null) {
        return undefined;
      }
      return t.scrollTo(e);
    });
    var ARef = s.useRef({
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
      onScroll: S,
      onReachBottom,
    });
    s.useImperativeHandle(t, () => ARef.current, []);
    return r.jsx(u.Provider, {
      value: {
        scrollContainerRef: ARef,
        isReachBottom,
        onReachBottom,
        onScroll: S,
        scrollTop,
        scrollTo,
        element: hRef.current,
      },
      children: r.jsx("div", {
        ref: hRef,
        className: _c(o.scrollContainer, className),
        onScroll: R,
        children: r.jsx("div", {
          className: o.scrollInner,
          ref: vRef,
          children,
        }),
      }),
    });
  }),
);
P.displayName = "ScrollContainer";
