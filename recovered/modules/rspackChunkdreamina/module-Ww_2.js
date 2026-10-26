import { Gv, Kg, cy } from "./module-V9.js";
import { A } from "./module-D7.js";
function i(...e) {
  let { length } = e;
  let n = [];
  for (let i = 0; i < length; i++) {
    let t = e[i];
    if (t) {
      if (Kg(t)) {
        n.push(t);
      } else if (cy(t)) {
        n = n.concat(t);
      } else if (Gv(t)) {
        Object.keys(t).forEach((e) => {
          if (t[e]) {
            n.push(e);
          }
        });
      } else {
        A(true, "arguments must be one of string/array/object.");
      }
    }
  }
  return [...new Set(n)].join(" ");
}
export { i as A };
