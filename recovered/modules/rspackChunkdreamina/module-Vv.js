import n from "z8";
import t from "bT";
import o from "zP7";
import r from "zS";
export var k = t.memo(function (e) {
  const { children, delayTime = 0, transitionTime = 0, className } = e;
  const [c, ref] = ((e) => {
    const iRef = t.useRef(null);
    const aRef = t.useRef(null);
    const nRef = t.useRef(null);
    const [o, setO] = t.useState(false);
    const l = r.A(function (i) {
      if ((t = i[0]) == null ? undefined : t.isIntersecting) {
        var t;
        let o;
        const r = function () {
          nRef.current = null;
          setO(true);
        };
        if ((o = aRef.current) != null) {
          o.disconnect();
        }
        aRef.current = null;
        if (typeof (e == null ? undefined : e.time) === "number") {
          nRef.current = setTimeout(r, e.time);
        } else {
          r();
        }
      }
    });
    t.useLayoutEffect(
      function () {
        const iRef_current = iRef.current;
        if (iRef_current) {
          aRef.current = new IntersectionObserver(l);
          aRef.current.observe(iRef_current);
        }
        return () => {
          var e;
          if ((e = aRef.current) != null) {
            e.disconnect();
          }
          if (nRef.current) {
            clearTimeout(nRef.current);
            nRef.current = null;
          }
        };
      },
      [e, l],
    );
    return [o, iRef];
  })({
    time: delayTime,
  });
  return n.jsx("div", {
    ref,
    className,
    children: n.jsx(o.A, {
      in: c,
      timeout: 0,
      duration: transitionTime,
      mountOnEnter: true,
      unmountOnExit: false,
      children,
    }),
  });
});
