import $ from "./module-yM_13.js";
import tt from "./module-Z_2_12.js";
export default function (J) {
  if ($(J)) {
    return J;
  }
  throw TypeError(tt(J) + " is not a constructor");
}
