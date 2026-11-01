import $ from "./module-c1_2_12.js";
export default function (J, Z) {
  const Q = $(J);
  if (Q % Z) {
    throw RangeError("Wrong offset");
  }
  return Q;
}
