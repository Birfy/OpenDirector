import n from "./module-o.js";
import o from "./module-cN_3.js";
import i from "./module-Do_2.js";
const i_Set = i.Set;
const i_proto = i.proto;
const u = n(i_proto.forEach);
const c = n(i_proto.keys);
const next = c(new i_Set()).next;
export default function (e, t, r) {
  if (r) {
    return o(
      {
        iterator: c(e),
        next,
      },
      t,
    );
  }
  return u(e, t);
}
