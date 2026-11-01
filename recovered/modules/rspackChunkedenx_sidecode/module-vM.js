import n from "./module-O9.js";
import o from "./module-Wg_3.js";
import i from "./module-yh.js";
const i_Set = i.Set;
const i_proto = i.proto;
const u = n(i_proto.forEach);
const c = n(i_proto.keys);
const next = c(new i_Set()).next;
export default function (t, r, e) {
  if (e) {
    return o(
      {
        iterator: c(t),
        next,
      },
      r,
    );
  }
  return u(t, r);
}
