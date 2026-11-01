import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-zQ_7.js";
import i from "./module-vM_7.js";
import s from "./module-ng_7.js";
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
      const r = a(this);
      const e = t === undefined ? "," : s(t);
      const n = [];
      i(r, function (t) {
        u(n, t);
      });
      return c(n, e);
    },
  },
);
