import n from "./module-O9_9.js";
import o from "./module-D_2_9.js";
import i from "./module-F_10.js";
import _a from "./module-g_10.js";
import s from "./module-S_9.js";
const _a_indexOf = _a.indexOf;
const u = n([].push);
export default function (t, e) {
  let r;
  const n = i(t);
  let c = 0;
  const f = [];
  for (r in n) {
    if (!o(s, r) && o(n, r)) {
      u(f, r);
    }
  }
  while (e.length > c) {
    if (o(n, (r = e[c++]))) {
      if (!~_a_indexOf(f, r)) {
        u(f, r);
      }
    }
  }
  return f;
}
