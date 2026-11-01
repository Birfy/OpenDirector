import n from "./module-X_17.js";
import { RegExp } from "./module-J_17.js";
export default n(function () {
  const t = RegExp(".", "s");
  return !(t.dotAll && t.exec("\n") && t.flags === "s");
});
