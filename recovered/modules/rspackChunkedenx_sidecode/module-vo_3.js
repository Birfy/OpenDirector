import n from "./module-Y_4.js";
import i from "./module-Z_2_3.js";
export default function (t) {
  if (n(t)) {
    return t;
  }
  throw TypeError(i(t) + " is not a function");
}
