import n from "./module-fM_3.js";
import o from "./module-p3.js";
import i from "./module-B.js";
import a from "./module-Z.js";
import s from "./module-D.js";
import u from "./module-Fm_2_2.js";
const push = [].push;
export default function (e) {
  let t;
  let that;
  let f;
  let l;
  const arguments_length = arguments.length;
  const h = arguments_length > 1 ? arguments[1] : undefined;
  a(this);
  if ((t = h !== undefined)) {
    i(h);
  }
  if (s(e)) {
    return new this();
  }
  that = [];
  if (t) {
    f = 0;
    l = n(h, arguments_length > 2 ? arguments[2] : undefined);
    u(e, function (e) {
      o(push, that, l(e, f++));
    });
  } else {
    u(e, push, {
      that,
    });
  }
  return new this(that);
}
