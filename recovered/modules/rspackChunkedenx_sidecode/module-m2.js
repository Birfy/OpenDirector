import n from "./module-A.js";
import _o from "./module-kp.js";
const _o_trim = _o.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2.js")("trim"),
  },
  {
    trim: function () {
      return _o_trim(this);
    },
  },
);
