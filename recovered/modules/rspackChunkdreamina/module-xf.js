import n from "./module-V2_2.js";
import _o from "./module-Do_2.js";
import i from "./module-YF_2.js";
import a from "./module-Gb_3.js";
import s from "./module-cN_3.js";
const _o_add = _o.add;
export default function (e) {
  const t = n(this);
  const r = a(e).getIterator();
  const u = i(t);
  s(r, function (e) {
    _o_add(u, e);
  });
  return u;
}
