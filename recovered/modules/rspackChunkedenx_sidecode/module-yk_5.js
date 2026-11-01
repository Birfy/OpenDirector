import n from "./module-WG_2_5.js";
import i from "./module-Q_6.js";
import o from "./module-aq_5.js";
import s from "./module-F4_6.js";
const a = (t) => {
  const r = t === 1;
  return function (e, a, u) {
    let c;
    const f = o(e);
    const h = i(f);
    const l = n(a, u);
    for (let v = s(h); v-- > 0;) {
      if (l((c = h[v]), v, f)) {
        switch (t) {
          case 0:
            return c;
          case 1:
            return v;
        }
      }
    }
    if (r) {
      return -1;
    }
  };
};
export default {
  findLast: a(0),
  findLastIndex: a(1),
};
