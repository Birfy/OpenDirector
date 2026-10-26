import n from "./module-A_23.js";
import i from "./module-O9_22.js";
import o from "./module-vo_22.js";
import s from "./module-vj_23.js";
import a from "./module-xK_22.js";
import u from "./module-e7_22.js";
import forced from "./module-N_22.js";
const u_Map = u.Map;
const u_has = u.has;
const u_get = u.get;
const u_set = u.set;
const p = i([].push);
n(
  {
    target: "Map",
    stat: true,
    forced,
  },
  {
    groupBy: function (t, r) {
      s(t);
      o(r);
      const e = new u_Map();
      let n = 0;
      a(t, function (t) {
        const i = r(t, n++);
        if (u_has(e, i)) {
          p(u_get(e, i), t);
        } else {
          u_set(e, i, [t]);
        }
      });
      return e;
    },
  },
);
