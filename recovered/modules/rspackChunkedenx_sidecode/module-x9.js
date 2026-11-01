import n from "./module-O9.js";
import o from "./module-EV.js";
import i from "./module-Y.js";
import a from "./module-Md.js";
import s from "./module-ng.js";
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
    let h = true;
    return function (t, r) {
      if (h) {
        h = false;
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
