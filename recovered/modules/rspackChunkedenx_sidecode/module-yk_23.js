import n from "./module-WG_2_23.js";
import o from "./module-Q_24.js";
import i from "./module-aq_23.js";
import a from "./module-F4_24.js";
const s = (t) => {
  const r = t === 1;
  return function (e, s, c) {
    let u;
    const f = i(e);
    const l = o(f);
    const h = n(s, c);
    for (let v = a(l); v-- > 0;) {
      if (h((u = l[v]), v, f)) {
        switch (t) {
          case 0:
            return u;
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
  findLast: s(0),
  findLastIndex: s(1),
};
