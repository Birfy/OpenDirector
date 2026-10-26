import $ from "./module-A_13.js";
import _tt from "./module-kp_12.js";
const _tt_trim = _tt.trim;
$(
  {
    target: "String",
    proto: true,
    forced: require("./module-QA_2_12.js")("trim"),
  },
  {
    trim: function () {
      return _tt_trim(this);
    },
  },
);
