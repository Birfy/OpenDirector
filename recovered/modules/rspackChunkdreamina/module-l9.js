import _n from "./module-GK_2.js";
const _n_forEach = _n.forEach;
export default require("./module-ms.js")("forEach")
  ? [].forEach
  : function (e) {
      return _n_forEach(
        this,
        e,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    };
