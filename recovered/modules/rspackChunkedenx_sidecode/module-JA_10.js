import n from "./module-O9_9.js";
import o from "./module-Wg_3_9.js";
import i from "./module-e7_9.js";
const i_Map = i.Map;
const i_proto = i.proto;
const u = n(i_proto.forEach);
const c = n(i_proto.entries);
const next = c(new i_Map()).next;
export default function (t, e, r) {
  if (r) {
    return o(
      {
        iterator: c(t),
        next,
      },
      function (t) {
        return e(t[1], t[0]);
      },
    );
  }
  return u(t, e);
}
