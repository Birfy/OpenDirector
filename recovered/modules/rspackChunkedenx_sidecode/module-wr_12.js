import $ from "./module-V6_13.js";
import tt from "./module-dV_12.js";
export default function (J) {
  if (J === undefined) {
    return 0;
  }
  const Z = $(J);
  const Q = tt(Z);
  if (Z !== Q) {
    throw RangeError("Wrong length or index");
  }
  return Q;
}
