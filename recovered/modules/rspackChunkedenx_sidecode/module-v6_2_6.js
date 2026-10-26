import "./module-FA_7.js";
import a from "./module-A_7.js";
import i from "./module-M_2_6.js";
import s from "./module-Y_7.js";
import c from "./module-d_7.js";
import u from "./module-ng_7.js";
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
a(
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
        return i(test, r, e);
      }
      const o = i(r_exec, r, e);
      return o !== null && (c(o), true);
    },
  },
);
