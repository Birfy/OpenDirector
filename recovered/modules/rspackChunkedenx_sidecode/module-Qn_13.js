import $ from "./module-S9_12.js";
import tt from "./module-C_13.js";
import te from "./module-Mi_12.js";
import tr from "./module-at_12.js";
const tn = require("./module-lN_12.js")("iterator");
export default function (J) {
  if (!te(J)) {
    return tt(J, tn) || tt(J, "@@iterator") || tr[$(J)];
  }
}
