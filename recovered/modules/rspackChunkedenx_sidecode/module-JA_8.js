import n from "./module-O9_7.js";
import o from "./module-Wg_3_7.js";
import i from "./module-e7_7.js";
const i_Map = i.Map;
const i_proto = i.proto;
const u = n(i_proto.forEach);
const c = n(i_proto.entries);
const next = c(new i_Map()).next;
export default function (r, t, e) {
  if (e) {
    return o(
      {
        iterator: c(r),
        next,
      },
      function (r) {
        return t(r[1], r[0]);
      },
    );
  }
  return u(r, t);
}
