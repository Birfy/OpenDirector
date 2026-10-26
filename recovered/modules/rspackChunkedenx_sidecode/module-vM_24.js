import n from "./module-O9_23.js";
import o from "./module-Wg_3_23.js";
import i from "./module-yh_23.js";
const i_Set = i.Set;
const i_proto = i.proto;
const c = n(i_proto.forEach);
const u = n(i_proto.keys);
const next = u(new i_Set()).next;
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
