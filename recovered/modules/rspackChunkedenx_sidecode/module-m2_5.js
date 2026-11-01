import n from "./module-A_6.js";
import _i from "./module-kp_5.js";
const _i_trim = _i.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_5.js")("trim"),
  },
  {
    trim: function () {
      return _i_trim(this);
    },
  },
);
