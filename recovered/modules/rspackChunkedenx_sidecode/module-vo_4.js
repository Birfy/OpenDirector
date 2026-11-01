import n from "./module-Y_5.js";
import i from "./module-Z_2_4.js";
export default function (t) {
  if (n(t)) {
    return t;
  }
  throw TypeError(i(t) + " is not a function");
}
