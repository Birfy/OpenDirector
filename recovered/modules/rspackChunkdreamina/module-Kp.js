import n from "./module-C.js";
import o from "./module-o.js";
export default function (e) {
  if (n(e) === "Function") {
    return o(e);
  }
}
