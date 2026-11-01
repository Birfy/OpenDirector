import n from "./module-A_16.js";
import _o from "./module-kp_15.js";
const _o_trim = _o.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_15.js")("trim"),
  },
  {
    trim: function () {
      return _o_trim(this);
    },
  },
);
