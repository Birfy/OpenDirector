import $ from "./module-O9_12.js";
import tt from "./module-F_13.js";
import te from "./module-ng_13.js";
import tr from "./module-F4_13.js";
const ti = $([].push);
const to = $([].join);
export default function (J) {
  const Z = tt(J);
  const Q = tr(Z);
  if (!Q) {
    return "";
  }
  const arguments_length = arguments.length;
  const ta = [];
  let ts = 0;
  while (true) {
    const tf = Z[ts++];
    if (tf === undefined) {
      throw TypeError("Incorrect template");
    }
    ti(ta, te(tf));
    if (ts === Q) {
      return to(ta, "");
    }
    if (ts < arguments_length) {
      ti(ta, te(arguments[ts]));
    }
  }
}
