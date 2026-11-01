import $ from "./module-O9_12.js";
import tt from "./module-EV_13.js";
import te from "./module-Y_13.js";
import tr from "./module-Md_12.js";
import tn from "./module-ng_13.js";
const ti = $([].push);
export default function (J) {
  if (te(J)) {
    return J;
  }
  if (tt(J)) {
    for (var Z = J.length, Q = [], $ = 0; $ < Z; $++) {
      const to = J[$];
      if (typeof to === "string") {
        ti(Q, to);
      } else if (
        typeof to === "number" ||
        tr(to) === "Number" ||
        tr(to) === "String"
      ) {
        ti(Q, tn(to));
      }
    }
    const ta = Q.length;
    let ts = true;
    return function (J, Z) {
      if (ts) {
        ts = false;
        return Z;
      }
      if (tt(this)) {
        return Z;
      }
      for (let $ = 0; $ < ta; $++) {
        if (Q[$] === J) {
          return Z;
        }
      }
    };
  }
}
