import n from "./module-WG_2_6.js";
import o from "./module-Q_7.js";
import a from "./module-aq_6.js";
import i from "./module-F4_7.js";
const s = (t) => {
  const r = t === 1;
  return function (e, s, c) {
    let u;
    const f = a(e);
    const l = o(f);
    const h = n(s, c);
    for (let p = i(l); p-- > 0;) {
      if (h((u = l[p]), p, f)) {
        switch (t) {
          case 0:
            return u;
          case 1:
            return p;
        }
      }
    }
    if (r) {
      return -1;
    }
  };
};
export default {
  findLast: s(0),
  findLastIndex: s(1),
};
