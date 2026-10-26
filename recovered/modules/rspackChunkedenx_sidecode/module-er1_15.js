import n from "./module-M_2_15.js";
import o from "./module-O9_15.js";
import i from "./module-WG_2_15.js";
import a from "./module-d_16.js";
import s from "./module-vo_15.js";
import u from "./module-Mi_15.js";
import c from "./module-C_16.js";
import f from "./module-lN_15.js";
const h = f("asyncDispose");
const l = f("dispose");
const v = o([].push);
const p = (r, t) => {
  if (t === "async-dispose") {
    let e = c(r, h);
    if (e !== undefined) {
      return e;
    }
    e = c(r, l);
    return function () {
      n(e, this);
    };
  }
  return c(r, l);
};
const d = function (r, t, e) {
  if (arguments.length < 3 && !u(r)) {
    e = s(p(a(r), t));
  }
  if (e === undefined) {
    return function () {};
  }
  return i(e, r);
};
export default function (r, t, e, n) {
  let o;
  if (arguments.length < 4) {
    if (u(t) && e === "sync-dispose") {
      return;
    }
    o = d(t, e);
  } else {
    o = d(undefined, e, n);
  }
  v(r.stack, o);
}
