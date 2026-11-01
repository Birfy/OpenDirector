import $ from "./module-M_2_12.js";
import tt from "./module-Za_12.js";
import te from "./module-h_13.js";
import tr from "./module-dFV_12.js";
import tn from "./module-lN_12.js";
import ti from "./module-b_12.js";
import to from "./module-C_13.js";
import _ta from "./module-A5_12.js";
import ts from "./module-V3_12.js";
import tf from "./module-jX_13.js";
const _ta_IteratorPrototype = _ta.IteratorPrototype;
const tu = tn("toStringTag");
const tc = "IteratorHelper";
const th = "WrapForValidIterator";
const ti_set = ti.set;
const tl = (J) => {
  const Z = ti.getterFor(J ? th : tc);
  return tr(tt(_ta_IteratorPrototype), {
    next: function () {
      const Q = Z(this);
      if (J) {
        return Q.nextHandler();
      }
      try {
        const $ = Q.done ? undefined : Q.nextHandler();
        return ts($, Q.done);
      } catch (error) {
        Q.done = true;
        throw error;
      }
    },
    return: function () {
      const Q = Z(this);
      const Q_iterator = Q.iterator;
      Q.done = true;
      if (J) {
        const te = to(Q_iterator, "return");
        if (te) {
          return $(te, Q_iterator);
        }
        return ts(undefined, true);
      }
      if (Q.inner) {
        try {
          tf(Q.inner.iterator, "normal");
        } catch (error) {
          return tf(Q_iterator, "throw", error);
        }
      }
      tf(Q_iterator, "normal");
      return ts(undefined, true);
    },
  });
};
const tp = tl(true);
const tb = tl(false);
te(tb, tu, "Iterator Helper");
export default function (J, Z) {
  const Q = function (Q, $) {
    if ($) {
      $.iterator = Q.iterator;
      $.next = Q.next;
    } else {
      $ = Q;
    }
    $.type = Z ? th : tc;
    $.nextHandler = J;
    $.counter = 0;
    $.done = false;
    ti_set(this, $);
  };
  Q.prototype = Z ? tp : tb;
  return Q;
}
