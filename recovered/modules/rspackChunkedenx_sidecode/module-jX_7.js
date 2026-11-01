import n from "./module-M_2_6.js";
import o from "./module-d_7.js";
import a from "./module-C_7.js";
export default function (t, r, e) {
  let i;
  let s;
  o(t);
  try {
    if (!(i = a(t, "return"))) {
      if (r === "throw") {
        throw e;
      }
      return e;
    }
    i = n(i, t);
  } catch (error) {
    s = true;
    i = error;
  }
  if (r === "throw") {
    throw e;
  }
  if (s) {
    throw i;
  }
  o(i);
  return e;
}
