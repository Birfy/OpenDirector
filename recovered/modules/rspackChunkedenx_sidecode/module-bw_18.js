import n from "./module-M_2_18.js";
import o from "./module-vo_18.js";
import i from "./module-Y_19.js";
import a from "./module-d_19.js";
export default function (r, t) {
  let e;
  const u = a(this);
  const c = o(u.get);
  const f = o(u.has);
  const h = o(u.set);
  const l = arguments.length > 2 ? arguments[2] : undefined;
  if (!i(t) && !i(l)) {
    throw TypeError("At least one callback required");
  }
  if (n(f, u, r)) {
    e = n(c, u, r);
    if (i(t)) {
      n(h, u, r, (e = t(e)));
    }
  } else if (i(l)) {
    n(h, u, r, (e = l()));
  }
  return e;
}
