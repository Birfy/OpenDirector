import n from "./module-J_5.js";
import i from "./module-Y_5.js";
export default function (t, r) {
  let e;
  if (arguments.length < 2) {
    if (i((e = n[t]))) {
      return e;
    }
    return undefined;
  }
  return n[t] && n[t][r];
}
