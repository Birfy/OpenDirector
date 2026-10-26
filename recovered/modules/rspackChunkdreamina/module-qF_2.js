import n from "./module-p3.js";
import o from "./module-o.js";
import i from "./module-fM_3.js";
import a from "./module-IF_2.js";
import s from "./module-B.js";
import u from "./module-D.js";
import c from "./module-T_2.js";
import f from "./module-Nt_3.js";
const l = f("asyncDispose");
const p = f("dispose");
const h = o([].push);
const v = (e, t) => {
  if (t === "async-dispose") {
    let r = c(e, l);
    if (r !== undefined) {
      return r;
    }
    r = c(e, p);
    return function () {
      n(r, this);
    };
  }
  return c(e, p);
};
const d = function (e, t, r) {
  if (arguments.length < 3 && !u(e)) {
    r = s(v(a(e), t));
  }
  if (r === undefined) {
    return function () {};
  }
  return i(r, e);
};
export default function (e, t, r, n) {
  let o;
  if (arguments.length < 4) {
    if (u(t) && r === "sync-dispose") {
      return;
    }
    o = d(t, r);
  } else {
    o = d(undefined, r, n);
  }
  h(e.stack, o);
}
