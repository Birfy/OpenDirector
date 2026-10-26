import n from "./module-M_2.js";
import o from "./module-vo.js";
import i from "./module-Y.js";
import a from "./module-d.js";
export default function (t, r) {
  let e;
  const u = a(this);
  const c = o(u.get);
  const f = o(u.has);
  const h = o(u.set);
  const l = arguments.length > 2 ? arguments[2] : undefined;
  if (!i(r) && !i(l)) {
    throw TypeError("At least one callback required");
  }
  if (n(f, u, t)) {
    e = n(c, u, t);
    if (i(r)) {
      n(h, u, t, (e = r(e)));
    }
  } else if (i(l)) {
    n(h, u, t, (e = l()));
  }
  return e;
}
