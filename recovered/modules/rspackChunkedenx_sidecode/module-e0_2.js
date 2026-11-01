import n from "./module-X_3.js";
import { RegExp } from "./module-J_3.js";
export default n(function () {
  const t = RegExp(".", "s");
  return !(t.dotAll && t.exec("\n") && t.flags === "s");
});
