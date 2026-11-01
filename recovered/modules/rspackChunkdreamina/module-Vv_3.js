import s from "z8";
import i from "bT";
import r from "zP7";
import n from "zS";
export var k = i.memo(function (e) {
  const { children, delayTime = 0, transitionTime = 0, className } = e;
  const [c, ref] = ((e) => {
    const tRef = i.useRef(null);
    const aRef = i.useRef(null);
    const sRef = i.useRef(null);
    const [r, setR] = i.useState(false);
    const l = n.A(function (t) {
      if ((i = t[0]) == null ? undefined : i.isIntersecting) {
        var i;
        let r;
        const n = function () {
          sRef.current = null;
          setR(true);
        };
        if ((r = aRef.current) != null) {
          r.disconnect();
        }
        aRef.current = null;
        if (typeof (e == null ? undefined : e.time) === "number") {
          sRef.current = setTimeout(n, e.time);
        } else {
          n();
        }
      }
    });
    i.useLayoutEffect(
      function () {
        const tRef_current = tRef.current;
        if (tRef_current) {
          aRef.current = new IntersectionObserver(l);
          aRef.current.observe(tRef_current);
        }
        return () => {
          var e;
          if ((e = aRef.current) != null) {
            e.disconnect();
          }
          if (sRef.current) {
            clearTimeout(sRef.current);
            sRef.current = null;
          }
        };
      },
      [e, l],
    );
    return [r, tRef];
  })({
    time: delayTime,
  });
  return s.jsx("div", {
    ref,
    className,
    children: s.jsx(r.A, {
      in: c,
      timeout: 0,
      duration: transitionTime,
      mountOnEnter: true,
      unmountOnExit: false,
      children,
    }),
  });
});
