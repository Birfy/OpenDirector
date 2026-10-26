import "./module-FA_10.js";
import i from "./module-A_10.js";
import a from "./module-M_2_9.js";
import s from "./module-Y_10.js";
import u from "./module-d_10.js";
import c from "./module-ng_10.js";
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
      const e = u(this);
      const r = c(t);
      const e_exec = e.exec;
      if (!s(e_exec)) {
        return a(test, e, r);
      }
      const o = a(e_exec, e, r);
      return o !== null && (u(o), true);
    },
  },
);
