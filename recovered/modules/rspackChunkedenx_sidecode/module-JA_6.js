import n from "./module-O9_5.js";
import i from "./module-Wg_3_5.js";
import o from "./module-e7_5.js";
const o_Map = o.Map;
const o_proto = o.proto;
const u = n(o_proto.forEach);
const c = n(o_proto.entries);
const next = c(new o_Map()).next;
export default function (t, r, e) {
  if (e) {
    return i(
      {
        iterator: c(t),
        next,
      },
      function (t) {
        return r(t[1], t[0]);
      },
    );
  }
  return u(t, r);
}
