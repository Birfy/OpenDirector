import n from "./module-WG_2_18.js";
import o from "./module-O9_18.js";
import i from "./module-Q_19.js";
import a from "./module-aq_18.js";
import s from "./module-F4_19.js";
import u from "./module-sT_18.js";
const c = o([].push);
const f = (r) => {
  const t = r === 1;
  const e = r === 2;
  const o = r === 3;
  const f = r === 4;
  const h = r === 6;
  const l = r === 7;
  const v = r === 5 || h;
  return function (p, d, g, y) {
    let b;
    let m;
    const A = a(p);
    const x = i(A);
    const w = n(d, g);
    for (
      var S = s(x),
        E = 0,
        O = y || u,
        R = t ? O(p, S) : e || l ? O(p, 0) : undefined;
      S > E;
      E++
    ) {
      if ((v || E in x) && ((m = w((b = x[E]), E, A)), r)) {
        if (t) {
          R[E] = m;
        } else if (m) {
          switch (r) {
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
          switch (r) {
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
