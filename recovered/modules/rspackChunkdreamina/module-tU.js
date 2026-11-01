import n from "./module-p3.js";
import o from "./module-IF_2.js";
import i from "./module-T_2.js";
export default function (e, t, r) {
  let a;
  let s;
  o(e);
  try {
    if (!(a = i(e, "return"))) {
      if (t === "throw") {
        throw r;
      }
      return r;
    }
    a = n(a, e);
  } catch (error) {
    s = true;
    a = error;
  }
  if (t === "throw") {
    throw r;
  }
  if (s) {
    throw a;
  }
  o(a);
  return r;
}
