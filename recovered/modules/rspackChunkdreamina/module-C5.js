if (require.j == "wl4") var a = require("c8J");
const o = require("bT");
export const d = (e, t = {}) => {
  let { throttleTime = 200 } = t;
  let [i, setI] = o.useState(
    () =>
      !(e === undefined || typeof window === "undefined") &&
      document.body.clientWidth < e,
  );
  let c = o.useCallback(() => {
    if (e === undefined) {
      setI(false);
    } else {
      setI(document.body.clientWidth < e);
    }
  }, [e]);
  o.useEffect(() => {
    if (e === undefined || typeof window === "undefined") {
      return;
    }
    let t = a.A(c, throttleTime);
    t();
    window.addEventListener("resize", t);
    return () => {
      var e;
      window.removeEventListener("resize", t);
      if ((e = t.cancel) != null) {
        e.call(t);
      }
    };
  }, [c, throttleTime, e]);
  return i;
};
