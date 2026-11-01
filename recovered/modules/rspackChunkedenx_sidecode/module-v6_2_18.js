import "./module-FA_19.js";
import i from "./module-A_19.js";
import a from "./module-M_2_18.js";
import s from "./module-Y_19.js";
import u from "./module-d_19.js";
import c from "./module-ng_19.js";
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
    test: function (r) {
      const t = u(this);
      const e = c(r);
      const t_exec = t.exec;
      if (!s(t_exec)) {
        return a(test, t, e);
      }
      const o = a(t_exec, t, e);
      return o !== null && (u(o), true);
    },
  },
);
