import n from "./module-f_2.js";
const call = Function.prototype.call;
const a = n && Function.prototype.bind.bind(call, call);
export default n
  ? a
  : function (e) {
      return function () {
        return call.apply(e, arguments);
      };
    };
