import n from "./module-O9_5.js";
import i from "./module-D_2_5.js";
import o from "./module-F_6.js";
import _s from "./module-g_6.js";
import a from "./module-S_5.js";
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
