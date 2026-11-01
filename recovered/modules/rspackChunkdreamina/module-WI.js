import n from "./module-g.js";
import _o from "./module-ym_2_2.js";
const _o_trim = _o.trim;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-R9.js")("trim"),
  },
  {
    trim: function () {
      return _o_trim(this);
    },
  },
);
