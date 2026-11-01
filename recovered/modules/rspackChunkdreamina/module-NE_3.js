import a from "bT";
if (require.j == "wl4") var o = require("dw4");
let i = (e, t) => e === t;
export function F(e, t, r = {}) {
  let { isEqual = i, deps, shouldUpdateOnlyOnChange = false } = r;
  let s = (() => {
    let [, setE] = a.useState(0);
    return a.useCallback(() => {
      setE((e) => e + 1);
    }, []);
  })();
  let d = (e) =>
    (function e(t) {
      if (typeof t !== "object") {
        return t;
      }
      if (t instanceof Array) {
        return t.map((t) => e(t));
      }
      if (t instanceof Object) {
        if (t && t.$$typeof === Symbol.for("react.element")) {
          return t;
        }
        let r = {};
        for (let a in t) {
          if (typeof t[a] === "object") {
            r[a] = e(t[a]);
          } else {
            r[a] = t[a];
          }
        }
        return r;
      }
      return t;
    })(t(e));
  let uRef = a.useRef();
  if (!uRef.current) {
    if (e) {
      let t = o.f2(true);
      try {
        uRef.current = d(e);
      } finally {
        o.w6(t);
      }
    } else {
      uRef.current = undefined;
    }
  }
  a.useEffect(() => {
    if (!e) {
      return;
    }
    let t = o.mJ(
      () => d(e),
      (e, t) => {
        uRef.current = e;
        if (!(shouldUpdateOnlyOnChange && isEqual(e, t))) {
          s();
        }
      },
      {
        fireImmediately: true,
      },
    );
    return () => {
      t();
    };
  }, [e, ...(deps != null ? deps : [])]);
  return uRef.current;
}
