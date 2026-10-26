import a from "bT";
import { E } from "./module-G4.js";
export var w = (e, t, n) => {
  var [o, setO] = a.useState(n);
  var iRef = a.useRef(t);
  var cRef = a.useRef();
  E(() => {
    var t = e == null ? undefined : e.current;
    if (t) {
      var n = (e) => {
        var t = iRef.current(e);
        if (cRef.current !== undefined) {
          cancelAnimationFrame(cRef.current);
        }
        cRef.current = requestAnimationFrame(() => {
          cRef.current = undefined;
          setO(t);
        });
      };
      n(t.getBoundingClientRect());
      if (typeof ResizeObserver === "function") {
        var a = new ResizeObserver((e) => {
          var [t] = e;
          if (t) {
            n(t.contentRect);
          }
        });
        a.observe(t);
        return () => {
          if (cRef.current !== undefined) {
            cancelAnimationFrame(cRef.current);
            cRef.current = undefined;
          }
          a.disconnect();
        };
      }
      var r = () => {
        n(t.getBoundingClientRect());
      };
      window.addEventListener("resize", r);
      return () => {
        if (cRef.current !== undefined) {
          cancelAnimationFrame(cRef.current);
          cRef.current = undefined;
        }
        window.removeEventListener("resize", r);
      };
    }
  }, [e == null ? undefined : e.current]);
  E(() => {
    if ((e == null ? undefined : e.current) && t !== iRef.current) {
      setO(t(e.current.getBoundingClientRect()));
    }
  }, [e == null ? undefined : e.current, t]);
  a.useEffect(() => {
    iRef.current = t;
  }, [t]);
  return o;
};
