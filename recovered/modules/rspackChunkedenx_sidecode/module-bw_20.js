import n from "./module-M_2_20.js";
import o from "./module-vo_20.js";
import i from "./module-Y_21.js";
import a from "./module-d_21.js";
export default function (t, r) {
  let e;
  const c = a(this);
  const u = o(c.get);
  const f = o(c.has);
  const l = o(c.set);
  const h = arguments.length > 2 ? arguments[2] : undefined;
  if (!i(r) && !i(h)) {
    throw TypeError("At least one callback required");
  }
  if (n(f, c, t)) {
    e = n(u, c, t);
    if (i(r)) {
      n(l, c, t, (e = r(e)));
    }
  } else if (i(h)) {
    n(l, c, t, (e = h()));
  }
  return e;
}
