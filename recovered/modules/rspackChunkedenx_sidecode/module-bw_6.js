import n from "./module-M_2_6.js";
import o from "./module-vo_6.js";
import a from "./module-Y_7.js";
import i from "./module-d_7.js";
export default function (t, r) {
  let e;
  const c = i(this);
  const u = o(c.get);
  const f = o(c.has);
  const l = o(c.set);
  const h = arguments.length > 2 ? arguments[2] : undefined;
  if (!a(r) && !a(h)) {
    throw TypeError("At least one callback required");
  }
  if (n(f, c, t)) {
    e = n(u, c, t);
    if (a(r)) {
      n(l, c, t, (e = r(e)));
    }
  } else if (a(h)) {
    n(l, c, t, (e = h()));
  }
  return e;
}
