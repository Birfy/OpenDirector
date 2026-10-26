import n from "./module-O9_10.js";
import o from "./module-EV_11.js";
import i from "./module-Y_11.js";
import a from "./module-Md_10.js";
import s from "./module-ng_11.js";
const u = n([].push);
export default function (t) {
  if (i(t)) {
    return t;
  }
  if (o(t)) {
    for (var r = t.length, e = [], n = 0; n < r; n++) {
      const c = t[n];
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
