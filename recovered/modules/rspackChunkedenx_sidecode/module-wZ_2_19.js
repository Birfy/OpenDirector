import n from "./module-A_20.js";
import o from "./module-O9_19.js";
import i from "./module-zQ_20.js";
import a from "./module-vM_20.js";
import s from "./module-ng_20.js";
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
    join: function (r) {
      const t = i(this);
      const e = r === undefined ? "," : s(r);
      const n = [];
      a(t, function (r) {
        c(n, r);
      });
      return u(n, e);
    },
  },
);
