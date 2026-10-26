import _$ from "./module-JY_12.js";
const _$_forEach = _$.forEach;
export default require("./module-bYn_12.js")("forEach")
  ? [].forEach
  : function (J) {
      return _$_forEach(
        this,
        J,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    };
