import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import te from "./module-YR_12.js";
import tr from "./module-O9_12.js";
import tn from "./module-M_2_12.js";
import ti from "./module-X_13.js";
import to from "./module-ng_13.js";
import ta from "./module-D_2_12.js";
import ts from "./module-eXf_12.js";
import _tf from "./module-Ee_12.js";
const _tf_ctoi = _tf.ctoi;
const tu = /[^\d+/a-z]/i;
const tc = /[\t\n\f\r ]+/g;
const th = /[=]{1,2}$/;
const td = te("atob");
const tp = tr("".charAt);
const tb = tr("".replace);
const tv = tr(tu.exec);
const tg = ti(function () {
  return td(" ") !== "";
});
const ty = !ti(function () {
  td("a");
});
const tm =
  !tg &&
  !ty &&
  !ti(function () {
    td();
  });
const tw = !tg && !ty && td.length !== 1;
$(
  {
    global: true,
    bind: true,
    enumerable: true,
    forced: tg || ty || tm || tw,
  },
  {
    atob: function (J) {
      ts(arguments.length, 1);
      if (tm || tw) {
        return tn(td, tt, J);
      }
      let Z;
      let Q;
      let $ = tb(to(J), tc, "");
      let tr = "";
      let ti = 0;
      let tg = 0;
      if ($.length % 4 == 0) {
        $ = tb($, th, "");
      }
      if ($.length % 4 == 1 || tv(tu, $)) {
        throw new (te("DOMException"))(
          "The string is not correctly encoded",
          "InvalidCharacterError",
        );
      }
      while ((Z = tp($, ti++))) {
        if (ta(_tf_ctoi, Z)) {
          Q = tg % 4 ? 64 * Q + _tf_ctoi[Z] : _tf_ctoi[Z];
          if (tg++ % 4) {
            tr += String.fromCharCode(255 & (Q >> ((-2 * tg) & 6)));
          }
        }
      }
      return tr;
    },
  },
);
