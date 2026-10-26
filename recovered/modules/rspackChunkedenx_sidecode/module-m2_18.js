import n from "./module-A_19.js";
import _o from "./module-kp_18.js";
const _o_trim = _o.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_18.js")("trim"),
  },
  {
    trim: function () {
      return _o_trim(this);
    },
  },
);
