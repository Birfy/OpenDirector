import $ from "./module-WG_2_12.js";
import tt from "./module-M_2_12.js";
import te from "./module-vo_12.js";
import tr from "./module-CP_12.js";
import tn from "./module-Mi_12.js";
import ti from "./module-xK_12.js";
const push = [].push;
export default function (J) {
  let Z;
  let that;
  let ta;
  let ts;
  const arguments_length = arguments.length;
  const tu = arguments_length > 1 ? arguments[1] : undefined;
  tr(this);
  if ((Z = tu !== undefined)) {
    te(tu);
  }
  if (tn(J)) {
    return new this();
  }
  that = [];
  if (Z) {
    ta = 0;
    ts = $(tu, arguments_length > 2 ? arguments[2] : undefined);
    ti(J, function (J) {
      tt(push, that, ts(J, ta++));
    });
  } else {
    ti(J, push, {
      that,
    });
  }
  return new this(that);
}
