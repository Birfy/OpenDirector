import $ from "./module-r9_12.js";
import tt from "./module-X_13.js";
import te from "./module-O9_12.js";
import tr from "./module-H_2_12.js";
import tn from "./module-II_12.js";
import ti from "./module-F_13.js";
import { f } from "./module-P_13.js";
const to = te(f);
const ta = te([].push);
const ts =
  $ &&
  tt(function () {
    const J = Object.create(null);
    J[2] = 2;
    return !to(J, 2);
  });
const tf = (J) =>
  function (Z) {
    let Q;
    const tt = ti(Z);
    const te = tn(tt);
    const tf = ts && tr(tt) === null;
    for (var tu = te.length, tc = 0, th = []; tu > tc;) {
      Q = te[tc++];
      if (!$ || (tf ? Q in tt : to(tt, Q))) {
        ta(th, J ? [Q, tt[Q]] : tt[Q]);
      }
    }
    return th;
  };
export default {
  entries: tf(true),
  values: tf(false),
};
