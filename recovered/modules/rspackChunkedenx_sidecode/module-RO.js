import n from "./module-O9.js";
import o from "./module-D_2.js";
import i from "./module-F.js";
import _a from "./module-g.js";
import s from "./module-S.js";
const _a_indexOf = _a.indexOf;
const u = n([].push);
export default function (t, r) {
  let e;
  const n = i(t);
  let c = 0;
  const f = [];
  for (e in n) {
    if (!o(s, e) && o(n, e)) {
      u(f, e);
    }
  }
  while (r.length > c) {
    if (o(n, (e = r[c++]))) {
      if (!~_a_indexOf(f, e)) {
        u(f, e);
      }
    }
  }
  return f;
}
