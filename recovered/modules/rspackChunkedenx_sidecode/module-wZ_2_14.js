import n from "./module-A_15.js";
import o from "./module-O9_14.js";
import i from "./module-zQ_15.js";
import a from "./module-vM_15.js";
import s from "./module-ng_15.js";
const c = o([].join);
const u = o([].push);
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    join: function (t) {
      const r = i(this);
      const e = t === undefined ? "," : s(t);
      const n = [];
      a(r, function (t) {
        u(n, t);
      });
      return c(n, e);
    },
  },
);
