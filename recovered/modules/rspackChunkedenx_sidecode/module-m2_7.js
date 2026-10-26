import n from "./module-A_8.js";
import _o from "./module-kp_7.js";
const _o_trim = _o.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_7.js")("trim"),
  },
  {
    trim: function () {
      return _o_trim(this);
    },
  },
);
