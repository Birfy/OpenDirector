import $ from "./module-m_13.js";
const call = Function.prototype.call;
export default $
  ? call.bind(call)
  : function () {
      return call.apply(call, arguments);
    };
