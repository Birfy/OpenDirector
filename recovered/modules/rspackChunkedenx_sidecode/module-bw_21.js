import n from "./module-M_2_21.js";
import i from "./module-vo_21.js";
import o from "./module-Y_22.js";
import s from "./module-d_22.js";
export default function (t, r) {
  let e;
  const u = s(this);
  const c = i(u.get);
  const f = i(u.has);
  const h = i(u.set);
  const l = arguments.length > 2 ? arguments[2] : undefined;
  if (!o(r) && !o(l)) {
    throw TypeError("At least one callback required");
  }
  if (n(f, u, t)) {
    e = n(c, u, t);
    if (o(r)) {
      n(h, u, t, (e = r(e)));
    }
  } else if (o(l)) {
    n(h, u, t, (e = l()));
  }
  return e;
}
