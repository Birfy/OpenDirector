import $ from "./module-b_12.js";
import tt from "./module-L7_12.js";
import te from "./module-V3_12.js";
import tr from "./module-Mi_12.js";
import tn from "./module-y_2_12.js";
import ti from "./module-I_13.js";
import to from "./module-r9_12.js";
const ta = "Incorrect Iterator.range arguments";
const ts = "NumericRangeIterator";
const $_set = $.set;
const tu = $.getterFor(ts);
const td = tt(
  function (start, end, Q, $, tt, te) {
    if (
      typeof start != $ ||
      (Infinity !== end && -Infinity !== end && typeof end != $)
    ) {
      throw TypeError(ta);
    }
    if (Infinity === start || -Infinity === start) {
      throw RangeError(ta);
    }
    let step;
    const tu = end > start;
    let inclusive = false;
    if (Q === undefined) {
      step = undefined;
    } else if (tn(Q)) {
      step = Q.step;
      inclusive = !!Q.inclusive;
    } else if (typeof Q == $) {
      step = Q;
    } else {
      throw TypeError(ta);
    }
    if (tr(step)) {
      step = tu ? te : -te;
    }
    if (typeof step != $) {
      throw TypeError(ta);
    }
    if (
      Infinity === step ||
      -Infinity === step ||
      (step === tt && start !== end)
    ) {
      throw RangeError(ta);
    }
    const hitsEnd =
      start != start || end != end || step != step || end > start != step > tt;
    $_set(this, {
      type: ts,
      start,
      end,
      step,
      inclusive,
      hitsEnd,
      currentCount: tt,
      zero: tt,
    });
    if (!to) {
      this.start = start;
      this.end = end;
      this.step = step;
      this.inclusive = inclusive;
    }
  },
  ts,
  function () {
    const J = tu(this);
    if (J.hitsEnd) {
      return te(undefined, true);
    }
    const J_start = J.start;
    const J_end = J.end;
    const $ = J_start + J.step * J.currentCount++;
    if ($ === J_end) {
      J.hitsEnd = true;
    }
    const J_inclusive = J.inclusive;
    if (
      J_end > J_start
        ? J_inclusive
          ? $ > J_end
          : $ >= J_end
        : J_inclusive
          ? J_end > $
          : J_end >= $
    ) {
      J.hitsEnd = true;
      return te(undefined, true);
    }
    return te($, false);
  },
);
const tl = (J) => {
  ti(td.prototype, J, {
    get: function () {
      return tu(this)[J];
    },
    set: function () {},
    configurable: true,
    enumerable: false,
  });
};
if (to) {
  tl("start");
  tl("end");
  tl("inclusive");
  tl("step");
}
export default td;
