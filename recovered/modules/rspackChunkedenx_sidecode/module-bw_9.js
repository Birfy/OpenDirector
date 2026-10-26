import n from "./module-M_2_9.js";
import o from "./module-vo_9.js";
import i from "./module-Y_10.js";
import a from "./module-d_10.js";
export default function (t, e) {
  let r;
  const u = a(this);
  const c = o(u.get);
  const f = o(u.has);
  const l = o(u.set);
  const h = arguments.length > 2 ? arguments[2] : undefined;
  if (!i(e) && !i(h)) {
    throw TypeError("At least one callback required");
  }
  if (n(f, u, t)) {
    r = n(c, u, t);
    if (i(e)) {
      n(l, u, t, (r = e(r)));
    }
  } else if (i(h)) {
    n(l, u, t, (r = h()));
  }
  return r;
}
