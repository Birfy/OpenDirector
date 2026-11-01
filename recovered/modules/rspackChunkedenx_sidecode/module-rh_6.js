import n from "./module-WG_2_6.js";
import o from "./module-M_2_6.js";
import a from "./module-vo_6.js";
import i from "./module-CP_6.js";
import s from "./module-Mi_6.js";
import c from "./module-xK_6.js";
const push = [].push;
export default function (t) {
  let r;
  let that;
  let f;
  let l;
  const arguments_length = arguments.length;
  const p = arguments_length > 1 ? arguments[1] : undefined;
  i(this);
  if ((r = p !== undefined)) {
    a(p);
  }
  if (s(t)) {
    return new this();
  }
  that = [];
  if (r) {
    f = 0;
    l = n(p, arguments_length > 2 ? arguments[2] : undefined);
    c(t, function (t) {
      o(push, that, l(t, f++));
    });
  } else {
    c(t, push, {
      that,
    });
  }
  return new this(that);
}
