import n from "./module-X_18.js";
import { RegExp } from "./module-J_18.js";
export default n(function () {
  const r = RegExp(".", "s");
  return !(r.dotAll && r.exec("\n") && r.flags === "s");
});
