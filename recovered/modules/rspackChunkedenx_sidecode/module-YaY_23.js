import _n from "./module-JY_23.js";
const _n_forEach = _n.forEach;
export default require("./module-bYn_23.js")("forEach")
  ? [].forEach
  : function (t) {
      return _n_forEach(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    };
