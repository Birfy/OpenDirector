import n from "./module-m_7.js";
const call = Function.prototype.call;
const i = n && Function.prototype.bind.bind(call, call);
export default n
  ? i
  : function (t) {
      return function () {
        return call.apply(t, arguments);
      };
    };
