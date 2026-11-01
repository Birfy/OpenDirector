import n from "./module-M_2_19.js";
import o from "./module-d_20.js";
import i from "./module-C_20.js";
export default function (r, t, e) {
  let a;
  let s;
  o(r);
  try {
    if (!(a = i(r, "return"))) {
      if (t === "throw") {
        throw e;
      }
      return e;
    }
    a = n(a, r);
  } catch (error) {
    s = true;
    a = error;
  }
  if (t === "throw") {
    throw e;
  }
  if (s) {
    throw a;
  }
  o(a);
  return e;
}
