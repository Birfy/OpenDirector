import n from "./module-p3.js";
import o from "./module-B.js";
import i from "./module-r.js";
import a from "./module-IF_2.js";
export default function (e, t) {
  let r;
  const u = a(this);
  const c = o(u.get);
  const f = o(u.has);
  const l = o(u.set);
  const p = arguments.length > 2 ? arguments[2] : undefined;
  if (!i(t) && !i(p)) {
    throw TypeError("At least one callback required");
  }
  if (n(f, u, e)) {
    r = n(c, u, e);
    if (i(t)) {
      n(l, u, e, (r = t(r)));
    }
  } else if (i(p)) {
    n(l, u, e, (r = p()));
  }
  return r;
}
