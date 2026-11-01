import n from "./module-o.js";
import o from "./module-DN_2.js";
import i from "./module-r.js";
import a from "./module-C.js";
import s from "./module-BC_2.js";
const u = n([].push);
export default function (e) {
  if (i(e)) {
    return e;
  }
  if (o(e)) {
    for (var t = e.length, r = [], n = 0; n < t; n++) {
      const c = e[n];
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
    return function (e, t) {
      if (l) {
        l = false;
        return t;
      }
      if (o(this)) {
        return t;
      }
      for (let n = 0; n < f; n++) {
        if (r[n] === e) {
          return t;
        }
      }
    };
  }
}
