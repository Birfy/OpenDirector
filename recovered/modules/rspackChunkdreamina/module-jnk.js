import n from "./module-o.js";
import o from "./module-cN_3.js";
import i from "./module-UF_2.js";
const i_Map = i.Map;
const i_proto = i.proto;
const u = n(i_proto.forEach);
const c = n(i_proto.entries);
const next = c(new i_Map()).next;
export default function (e, t, r) {
  if (r) {
    return o(
      {
        iterator: c(e),
        next,
      },
      function (e) {
        return t(e[1], e[0]);
      },
    );
  }
  return u(e, t);
}
