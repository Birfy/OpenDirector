import n from "./module-M_2_16.js";
import o from "./module-vo_16.js";
import i from "./module-Y_17.js";
import a from "./module-d_17.js";
export default function (t, r) {
  let e;
  const u = a(this);
  const c = o(u.get);
  const f = o(u.has);
  const l = o(u.set);
  const h = arguments.length > 2 ? arguments[2] : undefined;
  if (!i(r) && !i(h)) {
    throw TypeError("At least one callback required");
  }
  if (n(f, u, t)) {
    e = n(c, u, t);
    if (i(r)) {
      n(l, u, t, (e = r(e)));
    }
  } else if (i(h)) {
    n(l, u, t, (e = h()));
  }
  return e;
}
