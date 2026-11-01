import n from "./module-WG_2.js";
import o from "./module-M_2.js";
import i from "./module-vo.js";
import a from "./module-CP.js";
import s from "./module-Mi.js";
import u from "./module-xK.js";
const push = [].push;
export default function (t) {
  let r;
  let that;
  let f;
  let h;
  const arguments_length = arguments.length;
  const v = arguments_length > 1 ? arguments[1] : undefined;
  a(this);
  if ((r = v !== undefined)) {
    i(v);
  }
  if (s(t)) {
    return new this();
  }
  that = [];
  if (r) {
    f = 0;
    h = n(v, arguments_length > 2 ? arguments[2] : undefined);
    u(t, function (t) {
      o(push, that, h(t, f++));
    });
  } else {
    u(t, push, {
      that,
    });
  }
  return new this(that);
}
