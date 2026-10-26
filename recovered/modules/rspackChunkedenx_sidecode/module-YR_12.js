import $ from "./module-J_13.js";
import tt from "./module-Y_13.js";
export default function (J, Z) {
  let Q;
  if (arguments.length < 2) {
    if (tt((Q = $[J]))) {
      return Q;
    }
    return undefined;
  }
  return $[J] && $[J][Z];
}
