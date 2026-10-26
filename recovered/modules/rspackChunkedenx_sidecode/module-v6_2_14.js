import "./module-FA_15.js";
import i from "./module-A_15.js";
import a from "./module-M_2_14.js";
import s from "./module-Y_15.js";
import c from "./module-d_15.js";
import u from "./module-ng_15.js";
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
      const r = c(this);
      const e = u(t);
      const r_exec = r.exec;
      if (!s(r_exec)) {
        return a(test, r, e);
      }
      const o = a(r_exec, r, e);
      return o !== null && (c(o), true);
    },
  },
);
