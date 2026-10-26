import n from "./module-O9_6.js";
import o from "./module-Wg_3_6.js";
import a from "./module-yh_6.js";
const a_Set = a.Set;
const a_proto = a.proto;
const c = n(a_proto.forEach);
const u = n(a_proto.keys);
const next = u(new a_Set()).next;
export default function (t, r, e) {
  if (e) {
    return o(
      {
        iterator: u(t),
        next,
      },
      r,
    );
  }
  return c(t, r);
}
