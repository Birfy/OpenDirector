import n from "./module-A.js";
import _o from "./module-eI.js";
const _o_end = _o.end;
n(
  {
    target: "String",
    proto: true,
    forced: require("./module-LJ.js"),
  },
  {
    padEnd: function (t) {
      return _o_end(this, t, arguments.length > 1 ? arguments[1] : undefined);
    },
  },
);
