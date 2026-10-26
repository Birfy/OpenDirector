import n from "./module-WG_2_9.js";
import o from "./module-O9_9.js";
import i from "./module-Q_10.js";
import a from "./module-aq_9.js";
import s from "./module-F4_10.js";
import u from "./module-sT_9.js";
const c = o([].push);
const f = (t) => {
  const e = t === 1;
  const r = t === 2;
  const o = t === 3;
  const f = t === 4;
  const l = t === 6;
  const h = t === 7;
  const v = t === 5 || l;
  return function (d, p, g, y) {
    let m;
    let b;
    const w = a(d);
    const A = i(w);
    const x = n(p, g);
    for (
      var E = s(A),
        S = 0,
        O = y || u,
        _ = e ? O(d, E) : r || h ? O(d, 0) : undefined;
      E > S;
      S++
    ) {
      if ((v || S in A) && ((b = x((m = A[S]), S, w)), t)) {
        if (e) {
          _[S] = b;
        } else if (b) {
          switch (t) {
            case 3:
              return true;
            case 5:
              return m;
            case 6:
              return S;
            case 2:
              c(_, m);
          }
        } else {
          switch (t) {
            case 4:
              return false;
            case 7:
              c(_, m);
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
    return _;
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
