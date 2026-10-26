import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-vo_9.js";
import a from "./module-vj_10.js";
import s from "./module-xK_9.js";
import u from "./module-e7_9.js";
import forced from "./module-N_9.js";
const u_Map = u.Map;
const u_has = u.has;
const u_get = u.get;
const u_set = u.set;
const d = o([].push);
n(
  {
    target: "Map",
    stat: true,
    forced,
  },
  {
    groupBy: function (t, e) {
      a(t);
      i(e);
      const r = new u_Map();
      let n = 0;
      s(t, function (t) {
        const o = e(t, n++);
        if (u_has(r, o)) {
          d(u_get(r, o), t);
        } else {
          u_set(r, o, [t]);
        }
      });
      return r;
    },
  },
);
