import n from "./module-r9_10.js";
import o from "./module-D_2_10.js";
const a = n && Object.getOwnPropertyDescriptor;
const EXISTS = o(Function.prototype, "name");
const CONFIGURABLE =
  EXISTS && (!n || (n && a(Function.prototype, "name").configurable));
export default {
  EXISTS,
  PROPER: EXISTS && function () {}.name === "something",
  CONFIGURABLE,
};
