import _n from "./module-JY_15.js";
const _n_forEach = _n.forEach;
export default require("./module-bYn_15.js")("forEach")
  ? [].forEach
  : function (r) {
      return _n_forEach(
        this,
        r,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    };
