import n from "./module-A_24.js";
import _o from "./module-kp_23.js";
const _o_trim = _o.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_23.js")("trim"),
  },
  {
    trim: function () {
      return _o_trim(this);
    },
  },
);
