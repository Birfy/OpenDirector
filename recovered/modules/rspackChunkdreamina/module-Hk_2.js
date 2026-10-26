import n from "./module-o.js";
import o from "./module-h.js";
import i from "./module-MR.js";
import _a from "./module-TT_2.js";
import s from "./module-rw.js";
const _a_indexOf = _a.indexOf;
const u = n([].push);
export default function (e, t) {
  let r;
  const n = i(e);
  let c = 0;
  const f = [];
  for (r in n) {
    if (!o(s, r) && o(n, r)) {
      u(f, r);
    }
  }
  while (t.length > c) {
    if (o(n, (r = t[c++]))) {
      if (!~_a_indexOf(f, r)) {
        u(f, r);
      }
    }
  }
  return f;
}
