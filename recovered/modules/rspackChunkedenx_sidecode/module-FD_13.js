import n from "./module-A_14.js";
import o from "./module-O9_13.js";
import i from "./module-vo_13.js";
import a from "./module-vj_14.js";
import s from "./module-xK_13.js";
import u from "./module-e7_13.js";
import forced from "./module-N_13.js";
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
    groupBy: function (r, t) {
      a(r);
      i(t);
      const e = new u_Map();
      let n = 0;
      s(r, function (r) {
        const o = t(r, n++);
        if (u_has(e, o)) {
          p(u_get(e, o), r);
        } else {
          u_set(e, o, [r]);
        }
      });
      return e;
    },
  },
);
