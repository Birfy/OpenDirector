import n from "./module-Y_3.js";
import i from "./module-Z_2_2.js";
export default function (t) {
  if (n(t)) {
    return t;
  }
  throw TypeError(i(t) + " is not a function");
}
