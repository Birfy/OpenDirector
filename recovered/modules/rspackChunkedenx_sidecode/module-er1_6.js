import n from "./module-M_2_6.js";
import o from "./module-O9_6.js";
import a from "./module-WG_2_6.js";
import i from "./module-d_7.js";
import s from "./module-vo_6.js";
import c from "./module-Mi_6.js";
import u from "./module-C_7.js";
import f from "./module-lN_6.js";
const l = f("asyncDispose");
const h = f("dispose");
const p = o([].push);
const v = (t, r) => {
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
    e = s(v(i(t), r));
  }
  if (e === undefined) {
    return function () {};
  }
  return a(e, t);
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
  p(t.stack, o);
}
