import n from "./module-WG_2_16.js";
import o from "./module-O9_16.js";
import i from "./module-Q_17.js";
import a from "./module-aq_16.js";
import s from "./module-F4_17.js";
import u from "./module-sT_16.js";
const c = o([].push);
const f = (t) => {
  const r = t === 1;
  const e = t === 2;
  const o = t === 3;
  const f = t === 4;
  const l = t === 6;
  const h = t === 7;
  const v = t === 5 || l;
  return function (p, d, g, y) {
    let m;
    let b;
    const A = a(p);
    const x = i(A);
    const w = n(d, g);
    for (
      var S = s(x),
        E = 0,
        O = y || u,
        R = r ? O(p, S) : e || h ? O(p, 0) : undefined;
      S > E;
      E++
    ) {
      if ((v || E in x) && ((b = w((m = x[E]), E, A)), t)) {
        if (r) {
          R[E] = b;
        } else if (b) {
          switch (t) {
            case 3:
              return true;
            case 5:
              return m;
            case 6:
              return E;
            case 2:
              c(R, m);
          }
        } else {
          switch (t) {
            case 4:
              return false;
            case 7:
              c(R, m);
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
