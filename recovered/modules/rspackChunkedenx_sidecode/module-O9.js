import n from "./module-m.js";
const call = Function.prototype.call;
const a = n && Function.prototype.bind.bind(call, call);
export default n
  ? a
  : function (t) {
      return function () {
        return call.apply(t, arguments);
      };
    };
