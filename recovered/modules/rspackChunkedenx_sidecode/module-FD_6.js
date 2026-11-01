import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-vo_6.js";
import i from "./module-vj_7.js";
import s from "./module-xK_6.js";
import c from "./module-e7_6.js";
import forced from "./module-N_6.js";
const c_Map = c.Map;
const c_has = c.has;
const c_get = c.get;
const c_set = c.set;
const v = o([].push);
n(
  {
    target: "Map",
    stat: true,
    forced,
  },
  {
    groupBy: function (t, r) {
      i(t);
      a(r);
      const e = new c_Map();
      let n = 0;
      s(t, function (t) {
        const o = r(t, n++);
        if (c_has(e, o)) {
          v(c_get(e, o), t);
        } else {
          c_set(e, o, [t]);
        }
      });
      return e;
    },
  },
);
