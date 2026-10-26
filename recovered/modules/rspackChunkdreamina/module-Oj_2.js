import r from "bT";
let o = {};
export function A(e) {
  let [t, setT] = r.useState();
  r.useEffect(() => {
    o[e] = e in o ? o[e] : 0;
    setT(o[e]);
    o[e] += 1;
  }, []);
  if (typeof t === "number") {
    return `${e}${t}`;
  }
}
