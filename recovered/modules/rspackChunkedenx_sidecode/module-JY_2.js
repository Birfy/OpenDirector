import n from "./module-WG_2_2.js";
import i from "./module-O9_2.js";
import o from "./module-Q_3.js";
import s from "./module-aq_2.js";
import a from "./module-F4_3.js";
import u from "./module-sT_2.js";
const c = i([].push);
const f = (t) => {
  const r = t === 1;
  const e = t === 2;
  const i = t === 3;
  const f = t === 4;
  const h = t === 6;
  const l = t === 7;
  const v = t === 5 || h;
  return function (p, d, g, y) {
    let b;
    let m;
    const A = s(p);
    const x = o(A);
    const w = n(d, g);
    for (
      var S = a(x),
        E = 0,
        O = y || u,
        R = r ? O(p, S) : e || l ? O(p, 0) : undefined;
      S > E;
      E++
    ) {
      if ((v || E in x) && ((m = w((b = x[E]), E, A)), t)) {
        if (r) {
          R[E] = m;
        } else if (m) {
          switch (t) {
            case 3:
              return true;
            case 5:
              return b;
            case 6:
              return E;
            case 2:
              c(R, b);
          }
        } else {
          switch (t) {
            case 4:
              return false;
            case 7:
              c(R, b);
          }
        }
      }
    }
    if (h) {
      return -1;
    }
    if (i || f) {
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
