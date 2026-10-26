import a from "bT";
if (require.j == "wl4") var o = require("I0V");
export function P(e, t, r) {
  let [i, setI] = a.useState(() => e);
  let cRef = a.useRef(null);
  let l = o.A((a) => {
    if (cRef.current) {
      clearTimeout(cRef.current);
    }
    setI(a);
    if (r != null) {
      r(a);
    }
    cRef.current = setTimeout(() => {
      setI(e);
      if (r != null) {
        r(e);
      }
      cRef.current = null;
    }, t);
  });
  a.useEffect(
    () => () => {
      if (cRef.current) {
        clearTimeout(cRef.current);
      }
    },
    [],
  );
  return [i, l];
}
