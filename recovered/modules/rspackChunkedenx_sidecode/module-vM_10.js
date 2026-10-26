import n from "./module-O9_9.js";
import o from "./module-Wg_3_9.js";
import i from "./module-yh_9.js";
const i_Set = i.Set;
const i_proto = i.proto;
const u = n(i_proto.forEach);
const c = n(i_proto.keys);
const next = c(new i_Set()).next;
export default function (t, e, r) {
  if (r) {
    return o(
      {
        iterator: c(t),
        next,
      },
      e,
    );
  }
  return u(t, e);
}
