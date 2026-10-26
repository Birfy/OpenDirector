import n from "./module-O9_9.js";
import o from "./module-EV_10.js";
import i from "./module-Y_10.js";
import a from "./module-Md_9.js";
import s from "./module-ng_10.js";
const u = n([].push);
export default function (t) {
  if (i(t)) {
    return t;
  }
  if (o(t)) {
    for (var e = t.length, r = [], n = 0; n < e; n++) {
      const c = t[n];
      if (typeof c === "string") {
        u(r, c);
      } else if (
        typeof c === "number" ||
        a(c) === "Number" ||
        a(c) === "String"
      ) {
        u(r, s(c));
      }
    }
    const f = r.length;
    let l = true;
    return function (t, e) {
      if (l) {
        l = false;
        return e;
      }
      if (o(this)) {
        return e;
      }
      for (let n = 0; n < f; n++) {
        if (r[n] === t) {
          return e;
        }
      }
    };
  }
}
