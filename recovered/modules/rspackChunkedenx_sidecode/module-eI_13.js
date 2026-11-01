import $ from "./module-O9_12.js";
import tt from "./module-dV_12.js";
import te from "./module-ng_13.js";
import tr from "./module-KM_12.js";
import tn from "./module-vj_13.js";
const ti = $(tr);
const to = $("".slice);
const ts = (J) =>
  function (Z, Q, $) {
    let tr;
    let ts;
    const tf = te(tn(Z));
    const tu = tt(Q);
    const tf_length = tf.length;
    const th = $ === undefined ? " " : te($);
    if (tu <= tf_length || th === "") {
      return tf;
    }
    if (
      (ts = ti(th, Math.ceil((tr = tu - tf_length) / th.length))).length > tr
    ) {
      ts = to(ts, 0, tr);
    }
    if (J) {
      return tf + ts;
    }
    return ts + tf;
  };
export default {
  start: ts(false),
  end: ts(true),
};
