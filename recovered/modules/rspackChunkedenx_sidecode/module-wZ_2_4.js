import n from "./module-A_5.js";
import i from "./module-O9_4.js";
import o from "./module-zQ_5.js";
import s from "./module-vM_5.js";
import a from "./module-ng_5.js";
const u = i([].join);
const c = i([].push);
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    join: function (t) {
      const r = o(this);
      const e = t === undefined ? "," : a(t);
      const n = [];
      s(r, function (t) {
        c(n, t);
      });
      return u(n, e);
    },
  },
);
