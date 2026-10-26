import n from "./module-A_9.js";
import _i from "./module-kp_8.js";
const _i_trim = _i.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_8.js")("trim"),
  },
  {
    trim: function () {
      return _i_trim(this);
    },
  },
);
