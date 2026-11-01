import n from "./module-O9_4.js";
import i from "./module-Wg_3_4.js";
import o from "./module-yh_4.js";
const o_Set = o.Set;
const o_proto = o.proto;
const u = n(o_proto.forEach);
const c = n(o_proto.keys);
const next = c(new o_Set()).next;
export default function (t, r, e) {
  if (e) {
    return i(
      {
        iterator: c(t),
        next,
      },
      r,
    );
  }
  return u(t, r);
}
