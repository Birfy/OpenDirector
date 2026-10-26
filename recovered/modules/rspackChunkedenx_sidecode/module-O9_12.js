import $ from "./module-m_13.js";
const call = Function.prototype.call;
const tr = $ && Function.prototype.bind.bind(call, call);
export default $
  ? tr
  : function (J) {
      return function () {
        return call.apply(J, arguments);
      };
    };
