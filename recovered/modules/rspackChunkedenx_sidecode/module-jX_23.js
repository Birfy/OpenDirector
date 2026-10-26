import n from "./module-M_2_22.js";
import i from "./module-d_23.js";
import o from "./module-C_23.js";
export default function (t, r, e) {
  let s;
  let a;
  i(t);
  try {
    if (!(s = o(t, "return"))) {
      if (r === "throw") {
        throw e;
      }
      return e;
    }
    s = n(s, t);
  } catch (error) {
    a = true;
    s = error;
  }
  if (r === "throw") {
    throw e;
  }
  if (a) {
    throw s;
  }
  i(s);
  return e;
}
