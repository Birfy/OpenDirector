import n from "./module-M_2_14.js";
import o from "./module-d_15.js";
import i from "./module-C_15.js";
export default function (t, r, e) {
  let a;
  let s;
  o(t);
  try {
    if (!(a = i(t, "return"))) {
      if (r === "throw") {
        throw e;
      }
      return e;
    }
    a = n(a, t);
  } catch (error) {
    s = true;
    a = error;
  }
  if (r === "throw") {
    throw e;
  }
  if (s) {
    throw a;
  }
  o(a);
  return e;
}
