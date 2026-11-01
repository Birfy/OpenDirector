import $ from "./module-J_13.js";
import tt from "./module-K_13.js";
import te from "./module-D_2_12.js";
import tr from "./module-o_12.js";
import tn from "./module-eZ_12.js";
import ti from "./module-x_2_12.js";
const $_Symbol = $.Symbol;
const ta = tt("wks");
const ts = ti
  ? $_Symbol.for || $_Symbol
  : ($_Symbol && $_Symbol.withoutSetter) || tr;
export default function (J) {
  if (!te(ta, J)) {
    ta[J] = tn && te($_Symbol, J) ? $_Symbol[J] : ts("Symbol." + J);
  }
  return ta[J];
}
