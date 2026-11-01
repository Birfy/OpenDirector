import n from "./module-M_2_10.js";
import o from "./module-O9_10.js";
import i from "./module-WG_2_10.js";
import a from "./module-d_11.js";
import s from "./module-vo_10.js";
import u from "./module-Mi_10.js";
import c from "./module-C_11.js";
import f from "./module-lN_10.js";
const l = f("asyncDispose");
const h = f("dispose");
const v = o([].push);
const p = (t, r) => {
  if (r === "async-dispose") {
    let e = c(t, l);
    if (e !== undefined) {
      return e;
    }
    e = c(t, h);
    return function () {
      n(e, this);
    };
  }
  return c(t, h);
};
const d = function (t, r, e) {
  if (arguments.length < 3 && !u(t)) {
    e = s(p(a(t), r));
  }
  if (e === undefined) {
    return function () {};
  }
  return i(e, t);
};
export default function (t, r, e, n) {
  let o;
  if (arguments.length < 4) {
    if (u(r) && e === "sync-dispose") {
      return;
    }
    o = d(r, e);
  } else {
    o = d(undefined, e, n);
  }
  v(t.stack, o);
}
