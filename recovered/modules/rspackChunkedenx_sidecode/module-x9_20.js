import n from "./module-O9_20.js";
import o from "./module-EV_21.js";
import i from "./module-Y_21.js";
import a from "./module-Md_20.js";
import s from "./module-ng_21.js";
const c = n([].push);
export default function (t) {
  if (i(t)) {
    return t;
  }
  if (o(t)) {
    for (var r = t.length, e = [], n = 0; n < r; n++) {
      const u = t[n];
      if (typeof u === "string") {
        c(e, u);
      } else if (
        typeof u === "number" ||
        a(u) === "Number" ||
        a(u) === "String"
      ) {
        c(e, s(u));
      }
    }
    const f = e.length;
    let l = true;
    return function (t, r) {
      if (l) {
        l = false;
        return r;
      }
      if (o(this)) {
        return r;
      }
      for (let n = 0; n < f; n++) {
        if (e[n] === t) {
          return r;
        }
      }
    };
  }
}
