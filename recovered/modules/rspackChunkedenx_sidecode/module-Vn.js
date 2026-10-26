import n from "./module-r9.js";
import o from "./module-D_2.js";
const a = n && Object.getOwnPropertyDescriptor;
const EXISTS = o(Function.prototype, "name");
const CONFIGURABLE =
  EXISTS && (!n || (n && a(Function.prototype, "name").configurable));
export default {
  EXISTS,
  PROPER: EXISTS && function () {}.name === "something",
  CONFIGURABLE,
};
