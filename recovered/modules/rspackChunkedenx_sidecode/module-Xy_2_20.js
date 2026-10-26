import n from "./module-m_21.js";
const apply = Function.prototype.apply;
const call = Function.prototype.call;
export default (typeof Reflect === "object" && Reflect.apply) ||
  (n
    ? call.bind(apply)
    : function () {
        return call.apply(apply, arguments);
      });
