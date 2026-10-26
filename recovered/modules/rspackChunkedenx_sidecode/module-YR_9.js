import n from "./module-J_10.js";
import o from "./module-Y_10.js";
export default function (t, e) {
  let r;
  if (arguments.length < 2) {
    if (o((r = n[t]))) {
      return r;
    }
    return undefined;
  }
  return n[t] && n[t][e];
}
