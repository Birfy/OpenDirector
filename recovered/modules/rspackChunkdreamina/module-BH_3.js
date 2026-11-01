import n from "./module-fM_3.js";
import o from "./module-x.js";
import i from "./module-O_2.js";
import a from "./module-OG_2.js";
const s = (e) => {
  const t = e === 1;
  return function (r, s, u) {
    let c;
    const f = i(r);
    const l = o(f);
    const p = n(s, u);
    for (let h = a(l); h-- > 0;) {
      if (p((c = l[h]), h, f)) {
        switch (e) {
          case 0:
            return c;
          case 1:
            return h;
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
