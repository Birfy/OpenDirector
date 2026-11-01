import n from "./module-O9_6.js";
import o from "./module-D_2_6.js";
import a from "./module-F_7.js";
import _i from "./module-g_7.js";
import s from "./module-S_6.js";
const _i_indexOf = _i.indexOf;
const c = n([].push);
export default function (t, r) {
  let e;
  const n = a(t);
  let u = 0;
  const f = [];
  for (e in n) {
    if (!o(s, e) && o(n, e)) {
      c(f, e);
    }
  }
  while (r.length > u) {
    if (o(n, (e = r[u++]))) {
      if (!~_i_indexOf(f, e)) {
        c(f, e);
      }
    }
  }
  return f;
}
