import n from "./module-WG_2_16.js";
import o from "./module-Q_17.js";
import i from "./module-aq_16.js";
import a from "./module-F4_17.js";
const s = (t) => {
  const r = t === 1;
  return function (e, s, u) {
    let c;
    const f = i(e);
    const l = o(f);
    const h = n(s, u);
    for (let v = a(l); v-- > 0;) {
      if (h((c = l[v]), v, f)) {
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
  findLast: s(0),
  findLastIndex: s(1),
};
