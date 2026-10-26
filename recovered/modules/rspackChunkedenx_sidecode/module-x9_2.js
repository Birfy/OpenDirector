import n from "./module-O9_2.js";
import i from "./module-EV_3.js";
import o from "./module-Y_3.js";
import s from "./module-Md_2.js";
import a from "./module-ng_3.js";
const u = n([].push);
export default function (t) {
  if (o(t)) {
    return t;
  }
  if (i(t)) {
    for (var r = t.length, e = [], n = 0; n < r; n++) {
      const c = t[n];
      if (typeof c === "string") {
        u(e, c);
      } else if (
        typeof c === "number" ||
        s(c) === "Number" ||
        s(c) === "String"
      ) {
        u(e, a(c));
      }
    }
    const f = e.length;
    let h = true;
    return function (t, r) {
      if (h) {
        h = false;
        return r;
      }
      if (i(this)) {
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
