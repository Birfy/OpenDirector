import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-vo.js";
import a from "./module-vj.js";
import s from "./module-xK.js";
import u from "./module-e7.js";
import forced from "./module-N.js";
const u_Map = u.Map;
const u_has = u.has;
const u_get = u.get;
const u_set = u.set;
const p = o([].push);
n(
  {
    target: "Map",
    stat: true,
    forced,
  },
  {
    groupBy: function (t, r) {
      a(t);
      i(r);
      const e = new u_Map();
      let n = 0;
      s(t, function (t) {
        const o = r(t, n++);
        if (u_has(e, o)) {
          p(u_get(e, o), t);
        } else {
          u_set(e, o, [t]);
        }
      });
      return e;
    },
  },
);
