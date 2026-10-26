import n from "./module-r9_4.js";
import i from "./module-D_2_4.js";
const s = n && Object.getOwnPropertyDescriptor;
const EXISTS = i(Function.prototype, "name");
const CONFIGURABLE =
  EXISTS && (!n || (n && s(Function.prototype, "name").configurable));
export default {
  EXISTS,
  PROPER: EXISTS && function () {}.name === "something",
  CONFIGURABLE,
};
