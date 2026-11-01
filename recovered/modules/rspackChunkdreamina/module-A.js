import n from "./module-F.js";
import o from "./module-h.js";
const a = n && Object.getOwnPropertyDescriptor;
const EXISTS = o(Function.prototype, "name");
const CONFIGURABLE =
  EXISTS && (!n || (n && a(Function.prototype, "name").configurable));
export default {
  EXISTS,
  PROPER: EXISTS && function () {}.name === "something",
  CONFIGURABLE,
};
