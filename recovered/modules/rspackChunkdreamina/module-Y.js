import n from "./module-u.js";
import o from "./module-r.js";
export default function (e, t) {
  let r;
  if (arguments.length < 2) {
    if (o((r = n[e]))) {
      return r;
    }
    return undefined;
  }
  return n[e] && n[e][t];
}
