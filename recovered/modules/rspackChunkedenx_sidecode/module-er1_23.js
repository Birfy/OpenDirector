import n from "./module-M_2_23.js";
import o from "./module-O9_23.js";
import i from "./module-WG_2_23.js";
import a from "./module-d_24.js";
import s from "./module-vo_23.js";
import c from "./module-Mi_23.js";
import u from "./module-C_24.js";
import f from "./module-lN_23.js";
const l = f("asyncDispose");
const h = f("dispose");
const v = o([].push);
const p = (t, r) => {
  if (r === "async-dispose") {
    let e = u(t, l);
    if (e !== undefined) {
      return e;
    }
    e = u(t, h);
    return function () {
      n(e, this);
    };
  }
  return u(t, h);
};
const d = function (t, r, e) {
  if (arguments.length < 3 && !c(t)) {
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
    if (c(r) && e === "sync-dispose") {
      return;
    }
    o = d(r, e);
  } else {
    o = d(undefined, e, n);
  }
  v(t.stack, o);
}
