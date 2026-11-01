import n from "./module-O9_22.js";
import i from "./module-D_2_22.js";
import o from "./module-F_23.js";
import _s from "./module-g_23.js";
import a from "./module-S_22.js";
const _s_indexOf = _s.indexOf;
const u = n([].push);
export default function (t, r) {
  let e;
  const n = o(t);
  let c = 0;
  const f = [];
  for (e in n) {
    if (!i(a, e) && i(n, e)) {
      u(f, e);
    }
  }
  while (r.length > c) {
    if (i(n, (e = r[c++]))) {
      if (!~_s_indexOf(f, e)) {
        u(f, e);
      }
    }
  }
  return f;
}
