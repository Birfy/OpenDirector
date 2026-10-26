import n from "./module-WG_2_9.js";
import o from "./module-M_2_9.js";
import i from "./module-vo_9.js";
import a from "./module-CP_9.js";
import s from "./module-Mi_9.js";
import u from "./module-xK_9.js";
const push = [].push;
export default function (t) {
  let e;
  let that;
  let f;
  let l;
  const arguments_length = arguments.length;
  const v = arguments_length > 1 ? arguments[1] : undefined;
  a(this);
  if ((e = v !== undefined)) {
    i(v);
  }
  if (s(t)) {
    return new this();
  }
  that = [];
  if (e) {
    f = 0;
    l = n(v, arguments_length > 2 ? arguments[2] : undefined);
    u(t, function (t) {
      o(push, that, l(t, f++));
    });
  } else {
    u(t, push, {
      that,
    });
  }
  return new this(that);
}
