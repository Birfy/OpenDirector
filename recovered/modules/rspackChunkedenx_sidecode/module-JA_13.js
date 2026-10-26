import $ from "./module-O9_12.js";
import tt from "./module-Wg_3_12.js";
import te from "./module-e7_12.js";
const te_Map = te.Map;
const te_proto = te.proto;
const ti = $(te_proto.forEach);
const to = $(te_proto.entries);
const next = to(new te_Map()).next;
export default function (J, Z, Q) {
  if (Q) {
    return tt(
      {
        iterator: to(J),
        next,
      },
      function (J) {
        return Z(J[1], J[0]);
      },
    );
  }
  return ti(J, Z);
}
