import n from "./module-A_21.js";
import o from "./module-O9_20.js";
import i from "./module-vo_20.js";
import a from "./module-vj_21.js";
import s from "./module-xK_20.js";
import c from "./module-e7_20.js";
import forced from "./module-N_20.js";
const c_Map = c.Map;
const c_has = c.has;
const c_get = c.get;
const c_set = c.set;
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
      const e = new c_Map();
      let n = 0;
      s(t, function (t) {
        const o = r(t, n++);
        if (c_has(e, o)) {
          p(c_get(e, o), t);
        } else {
          c_set(e, o, [t]);
        }
      });
      return e;
    },
  },
);
