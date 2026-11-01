import $ from "./module-m_13.js";
const apply = Function.prototype.apply;
const call = Function.prototype.call;
export default (typeof Reflect === "object" && Reflect.apply) ||
  ($
    ? call.bind(apply)
    : function () {
        return call.apply(apply, arguments);
      });
