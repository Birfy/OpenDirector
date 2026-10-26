import n from "./module-A_22.js";
import _i from "./module-kp_21.js";
const _i_trim = _i.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_21.js")("trim"),
  },
  {
    trim: function () {
      return _i_trim(this);
    },
  },
);
