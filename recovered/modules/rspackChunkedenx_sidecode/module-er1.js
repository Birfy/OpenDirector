import n from "./module-M_2.js";
import o from "./module-O9.js";
import i from "./module-WG_2.js";
import a from "./module-d.js";
import s from "./module-vo.js";
import u from "./module-Mi.js";
import c from "./module-C.js";
import f from "./module-lN.js";
const h = f("asyncDispose");
const l = f("dispose");
const v = o([].push);
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
