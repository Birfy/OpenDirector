import $ from "./module-EV_13.js";
import tt from "./module-yM_13.js";
import te from "./module-y_2_12.js";
const tr = require("./module-lN_12.js")("species");
export default function (J) {
  let Z;
  if ($(J)) {
    if (tt((Z = J.constructor)) && (Z === Array || $(Z.prototype))) {
      Z = undefined;
    } else if (te(Z) && (Z = Z[tr]) === null) {
      Z = undefined;
    }
  }
  if (Z === undefined) {
    return Array;
  }
  return Z;
}
