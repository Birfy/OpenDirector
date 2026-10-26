import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-zQ_10.js";
import a from "./module-vM_10.js";
import s from "./module-ng_10.js";
const u = o([].join);
const c = o([].push);
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    join: function (t) {
      const e = i(this);
      const r = t === undefined ? "," : s(t);
      const n = [];
      a(e, function (t) {
        c(n, t);
      });
      return u(n, r);
    },
  },
);
