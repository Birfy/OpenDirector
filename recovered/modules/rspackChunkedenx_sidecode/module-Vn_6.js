import n from "./module-r9_6.js";
import o from "./module-D_2_6.js";
const i = n && Object.getOwnPropertyDescriptor;
const EXISTS = o(Function.prototype, "name");
const CONFIGURABLE =
  EXISTS && (!n || (n && i(Function.prototype, "name").configurable));
export default {
  EXISTS,
  PROPER: EXISTS && function () {}.name === "something",
  CONFIGURABLE,
};
