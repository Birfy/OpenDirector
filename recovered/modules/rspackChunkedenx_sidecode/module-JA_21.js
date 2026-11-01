import n from "./module-O9_20.js";
import o from "./module-Wg_3_20.js";
import i from "./module-e7_20.js";
const i_Map = i.Map;
const i_proto = i.proto;
const c = n(i_proto.forEach);
const u = n(i_proto.entries);
const next = u(new i_Map()).next;
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
