import n from "./module-m_6.js";
const call = Function.prototype.call;
const s = n && Function.prototype.bind.bind(call, call);
export default n
  ? s
  : function (t) {
      return function () {
        return call.apply(t, arguments);
      };
    };
