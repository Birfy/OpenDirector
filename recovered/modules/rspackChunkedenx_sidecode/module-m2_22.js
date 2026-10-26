import n from "./module-A_23.js";
import _i from "./module-kp_22.js";
const _i_trim = _i.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_22.js")("trim"),
  },
  {
    trim: function () {
      return _i_trim(this);
    },
  },
);
