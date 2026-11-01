import n from "./module-A_17.js";
import _o from "./module-kp_16.js";
const _o_trim = _o.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_16.js")("trim"),
  },
  {
    trim: function () {
      return _o_trim(this);
    },
  },
);
