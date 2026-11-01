import "./module-FA_3.js";
import o from "./module-A_3.js";
import s from "./module-M_2_2.js";
import a from "./module-Y_3.js";
import u from "./module-d_3.js";
import c from "./module-ng_3.js";
let n;
let i;
n = false;
i = /[ac]/;
i.exec = function () {
  n = true;
  return /./.exec.apply(this, arguments);
};
const f = i.test("abc") === true && n;
const test = /./.test;
o(
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
      if (!a(r_exec)) {
        return s(test, r, e);
      }
      const i = s(r_exec, r, e);
      return i !== null && (u(i), true);
    },
  },
);
