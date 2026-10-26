import $ from "./module-M_2_12.js";
import tt from "./module-vo_12.js";
import te from "./module-Y_13.js";
import tr from "./module-d_13.js";
export default function (J, Z) {
  let Q;
  const ti = tr(this);
  const to = tt(ti.get);
  const ta = tt(ti.has);
  const ts = tt(ti.set);
  const tf = arguments.length > 2 ? arguments[2] : undefined;
  if (!te(Z) && !te(tf)) {
    throw TypeError("At least one callback required");
  }
  if ($(ta, ti, J)) {
    Q = $(to, ti, J);
    if (te(Z)) {
      $(ts, ti, J, (Q = Z(Q)));
    }
  } else if (te(tf)) {
    $(ts, ti, J, (Q = tf()));
  }
  return Q;
}
