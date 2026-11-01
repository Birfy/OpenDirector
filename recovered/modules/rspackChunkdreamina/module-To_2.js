import r from "bT";
import { b0 } from "./module-Pl5.js";
import { A } from "./module-Vj5.js";
const l = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
function useA(e, t) {
  const n = t || {};
  const n_defaultValue = n.defaultValue;
  const n_value = n.value;
  const uRef = r.useRef(true);
  const s = A(t.value);
  const f = l(
    r.useState(
      b0(n_value) ? (b0(n_defaultValue) ? e : n_defaultValue) : n_value,
    ),
    2,
  );
  const p = f[0];
  const d = f[1];
  r.useEffect(
    function () {
      if (uRef.current) {
        uRef.current = false;
        return;
      }
      if (n_value === undefined && s !== n_value) {
        d(n_value);
      }
    },
    [n_value],
  );
  return [b0(n_value) ? p : n_value, d, p];
}
export { useA as A };
