import n from "./module-c2.js";
import o from "./module-j_2.js";
export default function (e) {
  if (n(e)) {
    return e;
  }
  throw TypeError(o(e) + " is not a constructor");
}
