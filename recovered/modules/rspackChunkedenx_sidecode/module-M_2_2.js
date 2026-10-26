import n from "./module-m_3.js";
const call = Function.prototype.call;
export default n
  ? call.bind(call)
  : function () {
      return call.apply(call, arguments);
    };
