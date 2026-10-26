import n from "./module-M_2_10.js";
import o from "./module-d_11.js";
import i from "./module-C_11.js";
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
