import n from "./module-WG_2_22.js";
import i from "./module-M_2_22.js";
import o from "./module-vo_22.js";
import s from "./module-CP_22.js";
import a from "./module-Mi_22.js";
import u from "./module-xK_22.js";
const push = [].push;
export default function (t) {
  let r;
  let that;
  let f;
  let h;
  const arguments_length = arguments.length;
  const v = arguments_length > 1 ? arguments[1] : undefined;
  s(this);
  if ((r = v !== undefined)) {
    o(v);
  }
  if (a(t)) {
    return new this();
  }
  that = [];
  if (r) {
    f = 0;
    h = n(v, arguments_length > 2 ? arguments[2] : undefined);
    u(t, function (t) {
      i(push, that, h(t, f++));
    });
  } else {
    u(t, push, {
      that,
    });
  }
  return new this(that);
}
