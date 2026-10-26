import n from "./module-WG_2_18.js";
import o from "./module-M_2_18.js";
import i from "./module-vo_18.js";
import a from "./module-CP_18.js";
import s from "./module-Mi_18.js";
import u from "./module-xK_18.js";
const push = [].push;
export default function (r) {
  let t;
  let that;
  let f;
  let h;
  const arguments_length = arguments.length;
  const v = arguments_length > 1 ? arguments[1] : undefined;
  a(this);
  if ((t = v !== undefined)) {
    i(v);
  }
  if (s(r)) {
    return new this();
  }
  that = [];
  if (t) {
    f = 0;
    h = n(v, arguments_length > 2 ? arguments[2] : undefined);
    u(r, function (r) {
      o(push, that, h(r, f++));
    });
  } else {
    u(r, push, {
      that,
    });
  }
  return new this(that);
}
