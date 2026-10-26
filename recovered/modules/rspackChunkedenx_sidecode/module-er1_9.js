import n from "./module-M_2_9.js";
import o from "./module-O9_9.js";
import i from "./module-WG_2_9.js";
import a from "./module-d_10.js";
import s from "./module-vo_9.js";
import u from "./module-Mi_9.js";
import c from "./module-C_10.js";
import f from "./module-lN_9.js";
const l = f("asyncDispose");
const h = f("dispose");
const v = o([].push);
const d = (t, e) => {
  if (e === "async-dispose") {
    let r = c(t, l);
    if (r !== undefined) {
      return r;
    }
    r = c(t, h);
    return function () {
      n(r, this);
    };
  }
  return c(t, h);
};
const p = function (t, e, r) {
  if (arguments.length < 3 && !u(t)) {
    r = s(d(a(t), e));
  }
  if (r === undefined) {
    return function () {};
  }
  return i(r, t);
};
export default function (t, e, r, n) {
  let o;
  if (arguments.length < 4) {
    if (u(e) && r === "sync-dispose") {
      return;
    }
    o = p(e, r);
  } else {
    o = p(undefined, r, n);
  }
  v(t.stack, o);
}
