import n from "./module-m_8.js";
const call = Function.prototype.call;
const a = n && Function.prototype.bind.bind(call, call);
export default n
  ? a
  : function (r) {
      return function () {
        return call.apply(r, arguments);
      };
    };
