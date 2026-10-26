import n from "./module-WG_2_11.js";
import o from "./module-Q_12.js";
import i from "./module-aq_11.js";
import a from "./module-F4_12.js";
const s = (r) => {
  const t = r === 1;
  return function (e, s, u) {
    let c;
    const f = i(e);
    const h = o(f);
    const l = n(s, u);
    for (let v = a(h); v-- > 0;) {
      if (l((c = h[v]), v, f)) {
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
