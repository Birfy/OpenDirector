import "./module-OS_2.js";
import i from "./module-g.js";
import a from "./module-p3.js";
import s from "./module-r.js";
import u from "./module-IF_2.js";
import c from "./module-BC_2.js";
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
    test: function (e) {
      const t = u(this);
      const r = c(e);
      const t_exec = t.exec;
      if (!s(t_exec)) {
        return a(test, t, r);
      }
      const o = a(t_exec, t, r);
      return o !== null && (u(o), true);
    },
  },
);
