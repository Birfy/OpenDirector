import n from "./module-M_2_19.js";
import o from "./module-vo_19.js";
import i from "./module-Y_20.js";
import a from "./module-d_20.js";
export default function (r, t) {
  let e;
  const u = a(this);
  const c = o(u.get);
  const f = o(u.has);
  const l = o(u.set);
  const h = arguments.length > 2 ? arguments[2] : undefined;
  if (!i(t) && !i(h)) {
    throw TypeError("At least one callback required");
  }
  if (n(f, u, r)) {
    e = n(c, u, r);
    if (i(t)) {
      n(l, u, r, (e = t(e)));
    }
  } else if (i(h)) {
    n(l, u, r, (e = h()));
  }
  return e;
}
