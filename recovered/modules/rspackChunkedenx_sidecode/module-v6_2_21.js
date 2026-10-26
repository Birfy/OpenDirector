import "./module-FA_22.js";
import o from "./module-A_22.js";
import s from "./module-M_2_21.js";
import a from "./module-Y_22.js";
import u from "./module-d_22.js";
import c from "./module-ng_22.js";
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
