import $ from "./module-WG_2_12.js";
import tt from "./module-O9_12.js";
import te from "./module-aq_12.js";
import tr from "./module-yM_13.js";
import tn from "./module-NF_12.js";
import ti from "./module-wz_13.js";
import to from "./module-NK_2_2.js";
import ta from "./module-Qn_13.js";
import ts from "./module-C_13.js";
import tf from "./module-He_12.js";
import tu from "./module-YR_12.js";
import tc from "./module-lN_12.js";
import th from "./module-xsY_12.js";
import _td from "./module-xY_2_12.js";
const _td_toArray = _td.toArray;
const tl = tc("asyncIterator");
const tp = tt(tf("Array").values);
const tb = tt(tp([]).next);
const tv = function () {
  return new tg(this);
};
var tg = function (J) {
  this.iterator = tp(J);
};
tg.prototype.next = function () {
  return tb(this.iterator);
};
export default function (J) {
  const Z = this;
  const arguments_length = arguments.length;
  let tt = arguments_length > 1 ? arguments[1] : undefined;
  const tf = arguments_length > 2 ? arguments[2] : undefined;
  return new (tu("Promise"))(function (Q) {
    const tu = te(J);
    if (tt !== undefined) {
      tt = $(tt, tf);
    }
    const tc = ts(tu, tl);
    const tp = tc ? undefined : ta(tu) || tv;
    const tb = tr(Z) ? new Z() : [];
    Q(_td_toArray(tc ? tn(tu, tc) : new th(to(ti(tu, tp))), tt, tb));
  });
}
