import $ from "./module-r9_12.js";
import tt from "./module-D_2_12.js";
const tr = $ && Object.getOwnPropertyDescriptor;
const EXISTS = tt(Function.prototype, "name");
const CONFIGURABLE =
  EXISTS && (!$ || ($ && tr(Function.prototype, "name").configurable));
export default {
  EXISTS,
  PROPER: EXISTS && function () {}.name === "something",
  CONFIGURABLE,
};
