import n from "./module-J_16.js";
import o from "./module-Y_16.js";
export default function (r, t) {
  let e;
  if (arguments.length < 2) {
    if (o((e = n[r]))) {
      return e;
    }
    return undefined;
  }
  return n[r] && n[r][t];
}
