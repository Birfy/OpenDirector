import n from "./module-WG_2_7.js";
import o from "./module-O9_7.js";
import i from "./module-Q_8.js";
import a from "./module-aq_7.js";
import s from "./module-F4_8.js";
import u from "./module-sT_7.js";
const c = o([].push);
const f = (r) => {
  const t = r === 1;
  const e = r === 2;
  const o = r === 3;
  const f = r === 4;
  const l = r === 6;
  const h = r === 7;
  const v = r === 5 || l;
  return function (p, d, g, y) {
    let m;
    let b;
    const A = a(p);
    const w = i(A);
    const x = n(d, g);
    for (
      var E = s(w),
        S = 0,
        O = y || u,
        R = t ? O(p, E) : e || h ? O(p, 0) : undefined;
      E > S;
      S++
    ) {
      if ((v || S in w) && ((b = x((m = w[S]), S, A)), r)) {
        if (t) {
          R[S] = b;
        } else if (b) {
          switch (r) {
            case 3:
              return true;
            case 5:
              return m;
            case 6:
              return S;
            case 2:
              c(R, m);
          }
        } else {
          switch (r) {
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
