import n from "./module-M_2_7.js";
import o from "./module-O9_7.js";
import i from "./module-WG_2_7.js";
import a from "./module-d_8.js";
import s from "./module-vo_7.js";
import u from "./module-Mi_7.js";
import c from "./module-C_8.js";
import f from "./module-lN_7.js";
const l = f("asyncDispose");
const h = f("dispose");
const v = o([].push);
const p = (r, t) => {
  if (t === "async-dispose") {
    let e = c(r, l);
    if (e !== undefined) {
      return e;
    }
    e = c(r, h);
    return function () {
      n(e, this);
    };
  }
  return c(r, h);
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
