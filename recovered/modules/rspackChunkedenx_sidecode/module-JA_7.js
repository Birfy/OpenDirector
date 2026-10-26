import n from "./module-O9_6.js";
import o from "./module-Wg_3_6.js";
import a from "./module-e7_6.js";
const a_Map = a.Map;
const a_proto = a.proto;
const c = n(a_proto.forEach);
const u = n(a_proto.entries);
const next = u(new a_Map()).next;
export default function (t, r, e) {
  if (e) {
    return o(
      {
        iterator: u(t),
        next,
      },
      function (t) {
        return r(t[1], t[0]);
      },
    );
  }
  return c(t, r);
}
