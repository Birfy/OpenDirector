import n from "./module-O9_14.js";
import o from "./module-D_2_14.js";
import i from "./module-F_15.js";
import _a from "./module-g_15.js";
import s from "./module-S_14.js";
const _a_indexOf = _a.indexOf;
const c = n([].push);
export default function (t, r) {
  let e;
  const n = i(t);
  let u = 0;
  const f = [];
  for (e in n) {
    if (!o(s, e) && o(n, e)) {
      c(f, e);
    }
  }
  while (r.length > u) {
    if (o(n, (e = r[u++]))) {
      if (!~_a_indexOf(f, e)) {
        c(f, e);
      }
    }
  }
  return f;
}
