import n from "./module-WG_2_19.js";
import o from "./module-Q_20.js";
import i from "./module-aq_19.js";
import a from "./module-F4_20.js";
const s = (r) => {
  const t = r === 1;
  return function (e, s, u) {
    let c;
    const f = i(e);
    const l = o(f);
    const h = n(s, u);
    for (let v = a(l); v-- > 0;) {
      if (h((c = l[v]), v, f)) {
        switch (r) {
          case 0:
            return c;
          case 1:
            return v;
        }
      }
    }
    if (t) {
      return -1;
    }
  };
};
export default {
  findLast: s(0),
  findLastIndex: s(1),
};
