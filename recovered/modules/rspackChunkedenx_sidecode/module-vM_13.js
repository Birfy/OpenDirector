import $ from "./module-O9_12.js";
import tt from "./module-Wg_3_12.js";
import te from "./module-yh_12.js";
const te_Set = te.Set;
const te_proto = te.proto;
const ti = $(te_proto.forEach);
const to = $(te_proto.keys);
const next = to(new te_Set()).next;
export default function (J, Z, Q) {
  if (Q) {
    return tt(
      {
        iterator: to(J),
        next,
      },
      Z,
    );
  }
  return ti(J, Z);
}
