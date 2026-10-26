import $ from "./module-S9_12.js";
import tt from "./module-D_2_12.js";
import te from "./module-Mi_12.js";
import tr from "./module-lN_12.js";
import tn from "./module-at_12.js";
const ti = tr("iterator");
export default function (J) {
  if (te(J)) {
    return false;
  }
  const Z = Object(J);
  return Z[ti] !== undefined || "@@iterator" in Z || tt(tn, $(Z));
}
