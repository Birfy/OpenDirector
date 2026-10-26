import n from "./module-fM_3.js";
import o from "./module-p3.js";
import i from "./module-O_2.js";
import a from "./module-rIh.js";
import s from "./module-Ow_3.js";
import u from "./module-c2.js";
import c from "./module-OG_2.js";
import f from "./module-Id_2.js";
import l from "./module-jn_2.js";
import p from "./module-UZ_3.js";
export default function (e) {
  let t;
  let r;
  let v;
  let d;
  let g;
  let y;
  const m = i(e);
  const x = u(this);
  const arguments_length = arguments.length;
  let w = arguments_length > 1 ? arguments[1] : undefined;
  const A = w !== undefined;
  if (A) {
    w = n(w, arguments_length > 2 ? arguments[2] : undefined);
  }
  const E = p(m);
  let j = 0;
  if (E && !(this === Array && s(E))) {
    g = (d = l(m, E)).next;
    for (r = x ? new this() : []; !(v = o(g, d)).done; j++) {
      y = A ? a(d, w, [v.value, j], true) : v.value;
      f(r, j, y);
    }
  } else {
    t = c(m);
    for (r = x ? new this(t) : Array(t); t > j; j++) {
      y = A ? w(m[j], j) : m[j];
      f(r, j, y);
    }
  }
  r.length = j;
  return r;
}
