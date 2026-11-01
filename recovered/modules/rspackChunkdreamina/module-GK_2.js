import n from "./module-fM_3.js";
import o from "./module-o.js";
import i from "./module-x.js";
import a from "./module-O_2.js";
import s from "./module-OG_2.js";
import u from "./module-Cp_3.js";
const c = o([].push);
const f = (e) => {
  const t = e === 1;
  const r = e === 2;
  const o = e === 3;
  const f = e === 4;
  const l = e === 6;
  const p = e === 7;
  const h = e === 5 || l;
  return function (v, d, g, y) {
    let m;
    let x;
    const b = a(v);
    const w = i(b);
    const A = n(d, g);
    for (
      var E = s(w),
        j = 0,
        I = y || u,
        R = t ? I(v, E) : r || p ? I(v, 0) : undefined;
      E > j;
      j++
    ) {
      if ((h || j in w) && ((x = A((m = w[j]), j, b)), e)) {
        if (t) {
          R[j] = x;
        } else if (x) {
          switch (e) {
            case 3:
              return true;
            case 5:
              return m;
            case 6:
              return j;
            case 2:
              c(R, m);
          }
        } else {
          switch (e) {
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
