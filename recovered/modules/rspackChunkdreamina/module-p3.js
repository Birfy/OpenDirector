import n from "./module-f_2.js";
const call = Function.prototype.call;
export default n
  ? call.bind(call)
  : function () {
      return call.apply(call, arguments);
    };
