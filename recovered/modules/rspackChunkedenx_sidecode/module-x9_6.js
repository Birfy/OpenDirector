import n from "./module-O9_6.js";
import o from "./module-EV_7.js";
import a from "./module-Y_7.js";
import i from "./module-Md_6.js";
import s from "./module-ng_7.js";
const c = n([].push);
export default function (t) {
  if (a(t)) {
    return t;
  }
  if (o(t)) {
    for (var r = t.length, e = [], n = 0; n < r; n++) {
      const u = t[n];
      if (typeof u === "string") {
        c(e, u);
      } else if (
        typeof u === "number" ||
        i(u) === "Number" ||
        i(u) === "String"
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
