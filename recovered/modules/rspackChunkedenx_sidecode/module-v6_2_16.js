import "./module-FA_17.js";
import i from "./module-A_17.js";
import a from "./module-M_2_16.js";
import s from "./module-Y_17.js";
import u from "./module-d_17.js";
import c from "./module-ng_17.js";
let n;
let o;
n = false;
o = /[ac]/;
o.exec = function () {
  n = true;
  return /./.exec.apply(this, arguments);
};
const f = o.test("abc") === true && n;
const test = /./.test;
i(
  {
    target: "RegExp",
    proto: true,
    forced: !f,
  },
  {
    test: function (t) {
      const r = u(this);
      const e = c(t);
      const r_exec = r.exec;
      if (!s(r_exec)) {
        return a(test, r, e);
      }
      const o = a(r_exec, r, e);
      return o !== null && (u(o), true);
    },
  },
);
