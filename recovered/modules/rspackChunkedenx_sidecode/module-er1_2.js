import n from "./module-M_2_2.js";
import i from "./module-O9_2.js";
import o from "./module-WG_2_2.js";
import s from "./module-d_3.js";
import a from "./module-vo_2.js";
import u from "./module-Mi_2.js";
import c from "./module-C_3.js";
import f from "./module-lN_2.js";
const h = f("asyncDispose");
const l = f("dispose");
const v = i([].push);
const p = (t, r) => {
  if (r === "async-dispose") {
    let e = c(t, h);
    if (e !== undefined) {
      return e;
    }
    e = c(t, l);
    return function () {
      n(e, this);
    };
  }
  return c(t, l);
};
const d = function (t, r, e) {
  if (arguments.length < 3 && !u(t)) {
    e = a(p(s(t), r));
  }
  if (e === undefined) {
    return function () {};
  }
  return o(e, t);
};
export default function (t, r, e, n) {
  let i;
  if (arguments.length < 4) {
    if (u(r) && e === "sync-dispose") {
      return;
    }
    i = d(r, e);
  } else {
    i = d(undefined, e, n);
  }
  v(t.stack, i);
}
