import n from "./module-J_17.js";
import o from "./module-Y_17.js";
export default function (t, r) {
  let e;
  if (arguments.length < 2) {
    if (o((e = n[t]))) {
      return e;
    }
    return undefined;
  }
  return n[t] && n[t][r];
}
