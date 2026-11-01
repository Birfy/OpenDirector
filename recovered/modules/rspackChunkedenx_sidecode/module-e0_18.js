import n from "./module-X_19.js";
import { RegExp } from "./module-J_19.js";
export default n(function () {
  const r = RegExp(".", "s");
  return !(r.dotAll && r.exec("\n") && r.flags === "s");
});
