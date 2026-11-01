import n from "./module-M_2_9.js";
import o from "./module-d_10.js";
import i from "./module-C_10.js";
export default function (t, e, r) {
  let a;
  let s;
  o(t);
  try {
    if (!(a = i(t, "return"))) {
      if (e === "throw") {
        throw r;
      }
      return r;
    }
    a = n(a, t);
  } catch (error) {
    s = true;
    a = error;
  }
  if (e === "throw") {
    throw r;
  }
  if (s) {
    throw a;
  }
  o(a);
  return r;
}
