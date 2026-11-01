import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import te from "./module-YR_12.js";
import tr from "./module-O9_12.js";
import tn from "./module-M_2_12.js";
import ti from "./module-X_13.js";
import to from "./module-ng_13.js";
import ta from "./module-eXf_12.js";
import _ts from "./module-Ee_12.js";
const _ts_itoc = _ts.itoc;
const tf = te("btoa");
const tu = tr("".charAt);
const tc = tr("".charCodeAt);
const th =
  !!tf &&
  !ti(function () {
    tf();
  });
const td =
  !!tf &&
  ti(function () {
    return tf(null) !== "bnVsbA==";
  });
const tl = !!tf && tf.length !== 1;
$(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: th || td || tl,
  },
  {
    btoa: function (J) {
      ta(arguments.length, 1);
      if (th || td || tl) {
        return tn(tf, tt, to(J));
      }
      let Z;
      let Q;
      for (
        var $ = to(J), tr = "", ti = 0, tp = _ts_itoc;
        tu($, ti) || ((tp = "="), ti % 1);
      ) {
        if ((Q = tc($, (ti += 0.75))) > 255) {
          throw new (te("DOMException"))(
            "The string contains characters outside of the Latin1 range",
            "InvalidCharacterError",
          );
        }
        tr += tu(tp, 63 & ((Z = (Z << 8) | Q) >> (8 - (ti % 1) * 8)));
      }
      return tr;
    },
  },
);
