import $ from "./module-M_2_12.js";
import tt from "./module-FS_2_2.js";
import te from "./module-d_13.js";
import tr from "./module-Za_12.js";
import tn from "./module-h_13.js";
import ti from "./module-dFV_12.js";
import to from "./module-lN_12.js";
import ta from "./module-b_12.js";
import ts from "./module-YR_12.js";
import tf from "./module-C_13.js";
import tu from "./module-fq_12.js";
import tc from "./module-V3_12.js";
import th from "./module-jX_13.js";
const td = ts("Promise");
const tl = to("toStringTag");
const tp = "AsyncIteratorHelper";
const tb = "WrapForValidAsyncIterator";
const ta_set = ta.set;
const tg = (J) => {
  const Z = !J;
  const Q = ta.getterFor(J ? tb : tp);
  const tn = (J) => {
    const $ = tt(function () {
      return Q(J);
    });
    const $_error = $.error;
    const $_value = $.value;
    if ($_error || (Z && $_value.done)) {
      return {
        exit: true,
        value: $_error ? td.reject($_value) : td.resolve(tc(undefined, true)),
      };
    }
    return {
      exit: false,
      value: $_value,
    };
  };
  return ti(tr(tu), {
    next: function () {
      const J = tn(this);
      const J_value = J.value;
      if (J.exit) {
        return J_value;
      }
      const Q = tt(function () {
        return te(J_value.nextHandler(td));
      });
      const Q_error = Q.error;
      const Q_value = Q.value;
      if (Q_error) {
        J_value.done = true;
      }
      if (Q_error) {
        return td.reject(Q_value);
      }
      return td.resolve(Q_value);
    },
    return: function () {
      let Z;
      let Q;
      const tr = tn(this);
      const tr_value = tr.value;
      if (tr.exit) {
        return tr_value;
      }
      tr_value.done = true;
      const ti_iterator = tr_value.iterator;
      let ta = tt(function () {
        if (tr_value.inner) {
          try {
            th(tr_value.inner.iterator, "normal");
          } catch (error) {
            return th(ti_iterator, "throw", error);
          }
        }
        return tf(ti_iterator, "return");
      });
      Z = Q = ta.value;
      if (ta.error) {
        return td.reject(Q);
      }
      if (Z === undefined) {
        return td.resolve(tc(undefined, true));
      }
      Q = (ta = tt(function () {
        return $(Z, ti_iterator);
      })).value;
      if (ta.error) {
        return td.reject(Q);
      }
      if (J) {
        return td.resolve(Q);
      }
      return td.resolve(Q).then((J) => {
        te(J);
        return tc(undefined, true);
      });
    },
  });
};
const ty = tg(true);
const tm = tg(false);
tn(tm, tl, "Async Iterator Helper");
export default function (J, Z) {
  const Q = function (Q, $) {
    if ($) {
      $.iterator = Q.iterator;
      $.next = Q.next;
    } else {
      $ = Q;
    }
    $.type = Z ? tb : tp;
    $.nextHandler = J;
    $.counter = 0;
    $.done = false;
    ta_set(this, $);
  };
  Q.prototype = Z ? ty : tm;
  return Q;
}
