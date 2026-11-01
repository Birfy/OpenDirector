import n from "./module-O9_15.js";
import o from "./module-EV_16.js";
import i from "./module-Y_16.js";
import a from "./module-Md_15.js";
import s from "./module-ng_16.js";
const u = n([].push);
export default function (r) {
  if (i(r)) {
    return r;
  }
  if (o(r)) {
    for (var t = r.length, e = [], n = 0; n < t; n++) {
      const c = r[n];
      if (typeof c === "string") {
        u(e, c);
      } else if (
        typeof c === "number" ||
        a(c) === "Number" ||
        a(c) === "String"
      ) {
        u(e, s(c));
      }
    }
    const f = e.length;
    let h = true;
    return function (r, t) {
      if (h) {
        h = false;
        return t;
      }
      if (o(this)) {
        return t;
      }
      for (let n = 0; n < f; n++) {
        if (e[n] === r) {
          return t;
        }
      }
    };
  }
}
