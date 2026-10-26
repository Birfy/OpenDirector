import n from "./module-A_4.js";
import i from "./module-O9_3.js";
import o from "./module-zQ_4.js";
import s from "./module-vM_4.js";
import a from "./module-ng_4.js";
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
