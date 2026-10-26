import n from "./module-WG_2_6.js";
import o from "./module-O9_6.js";
import a from "./module-Q_7.js";
import i from "./module-aq_6.js";
import s from "./module-F4_7.js";
import c from "./module-sT_6.js";
const u = o([].push);
const f = (t) => {
  const r = t === 1;
  const e = t === 2;
  const o = t === 3;
  const f = t === 4;
  const l = t === 6;
  const h = t === 7;
  const p = t === 5 || l;
  return function (v, d, g, y) {
    let m;
    let b;
    const A = i(v);
    const w = a(A);
    const x = n(d, g);
    for (
      var E = s(w),
        S = 0,
        O = y || c,
        R = r ? O(v, E) : e || h ? O(v, 0) : undefined;
      E > S;
      S++
    ) {
      if ((p || S in w) && ((b = x((m = w[S]), S, A)), t)) {
        if (r) {
          R[S] = b;
        } else if (b) {
          switch (t) {
            case 3:
              return true;
            case 5:
              return m;
            case 6:
              return S;
            case 2:
              u(R, m);
          }
        } else {
          switch (t) {
            case 4:
              return false;
            case 7:
              u(R, m);
          }
        }
      }
    }
    if (l) {
      return -1;
    }
    if (o || f) {
      return f;
    }
    return R;
  };
};
export default {
  forEach: f(0),
  map: f(1),
  filter: f(2),
  some: f(3),
  every: f(4),
  find: f(5),
  findIndex: f(6),
  filterReject: f(7),
};
