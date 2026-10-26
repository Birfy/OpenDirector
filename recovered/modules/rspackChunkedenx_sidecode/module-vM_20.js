import n from "./module-O9_19.js";
import o from "./module-Wg_3_19.js";
import i from "./module-yh_19.js";
const i_Set = i.Set;
const i_proto = i.proto;
const u = n(i_proto.forEach);
const c = n(i_proto.keys);
const next = c(new i_Set()).next;
export default function (r, t, e) {
  if (e) {
    return o(
      {
        iterator: c(r),
        next,
      },
      t,
    );
  }
  return u(r, t);
}
