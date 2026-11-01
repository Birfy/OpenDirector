import n from "./module-O9_11.js";
import o from "./module-D_2_11.js";
import i from "./module-F_12.js";
import _a from "./module-g_12.js";
import s from "./module-S_11.js";
const _a_indexOf = _a.indexOf;
const u = n([].push);
export default function (r, t) {
  let e;
  const n = i(r);
  let c = 0;
  const f = [];
  for (e in n) {
    if (!o(s, e) && o(n, e)) {
      u(f, e);
    }
  }
  while (t.length > c) {
    if (o(n, (e = t[c++]))) {
      if (!~_a_indexOf(f, e)) {
        u(f, e);
      }
    }
  }
  return f;
}
