import n from "./module-VV_4.js";
import { RegExp } from "./module-u.js";
export default n(function () {
  const e = RegExp(".", "s");
  return !(e.dotAll && e.exec("\n") && e.flags === "s");
});
