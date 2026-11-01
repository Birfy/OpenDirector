import "./module-FA_13.js";
import te from "./module-A_13.js";
import tr from "./module-M_2_12.js";
import tn from "./module-Y_13.js";
import ti from "./module-d_13.js";
import to from "./module-ng_13.js";
let $;
let tt;
$ = false;
tt = /[ac]/;
tt.exec = function () {
  $ = true;
  return /./.exec.apply(this, arguments);
};
const ta = tt.test("abc") === true && $;
const test = /./.test;
te(
  {
    target: "RegExp",
    proto: true,
    forced: !ta,
  },
  {
    test: function (J) {
      const Z = ti(this);
      const Q = to(J);
      const Z_exec = Z.exec;
      if (!tn(Z_exec)) {
        return tr(test, Z, Q);
      }
      const tt = tr(Z_exec, Z, Q);
      return tt !== null && (ti(tt), true);
    },
  },
);
