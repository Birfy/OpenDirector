import $ from "./module-WG_2_12.js";
import tt from "./module-M_2_12.js";
import te from "./module-CP_12.js";
import tr from "./module-aq_12.js";
import tn from "./module-F4_13.js";
import ti from "./module-wz_13.js";
import to from "./module-Qn_13.js";
import ta from "./module-se_13.js";
import ts from "./module-jOn_12.js";
import _tf from "./module-vB_14.js";
import tu from "./module-Ke_12.js";
const _tf_aTypedArrayConstructor = _tf.aTypedArrayConstructor;
export default function (J) {
  let Z;
  let Q;
  let tc;
  let th;
  let td;
  let tl;
  let tp;
  let tb;
  const tv = te(this);
  let tg = tr(J);
  const arguments_length = arguments.length;
  let tm = arguments_length > 1 ? arguments[1] : undefined;
  const tw = tm !== undefined;
  const tx = to(tg);
  if (tx && !ta(tx)) {
    tb = (tp = ti(tg, tx)).next;
    for (tg = []; !(tl = tt(tb, tp)).done;) {
      tg.push(tl.value);
    }
  }
  if (tw && arguments_length > 2) {
    tm = $(tm, arguments[2]);
  }
  Q = tn(tg);
  th = ts((tc = new (_tf_aTypedArrayConstructor(tv))(Q)));
  for (Z = 0; Q > Z; Z++) {
    td = tw ? tm(tg[Z], Z) : tg[Z];
    tc[Z] = th ? tu(td) : +td;
  }
  return tc;
}
