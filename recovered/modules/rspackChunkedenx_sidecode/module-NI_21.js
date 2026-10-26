import n from "./module-b_21.js";
import i from "./module-L7_21.js";
import o from "./module-V3_21.js";
import s from "./module-Mi_21.js";
import a from "./module-y_2_21.js";
import u from "./module-I_22.js";
import c from "./module-r9_21.js";
const f = "Incorrect Iterator.range arguments";
const h = "NumericRangeIterator";
const n_set = n.set;
const v = n.getterFor(h);
const g = i(
  function (start, end, e, n, i, o) {
    if (
      typeof start != n ||
      (Infinity !== end && -Infinity !== end && typeof end != n)
    ) {
      throw TypeError(f);
    }
    if (Infinity === start || -Infinity === start) {
      throw RangeError(f);
    }
    let step;
    const v = end > start;
    let inclusive = false;
    if (e === undefined) {
      step = undefined;
    } else if (a(e)) {
      step = e.step;
      inclusive = !!e.inclusive;
    } else if (typeof e == n) {
      step = e;
    } else {
      throw TypeError(f);
    }
    if (s(step)) {
      step = v ? o : -o;
    }
    if (typeof step != n) {
      throw TypeError(f);
    }
    if (
      Infinity === step ||
      -Infinity === step ||
      (step === i && start !== end)
    ) {
      throw RangeError(f);
    }
    const hitsEnd =
      start != start || end != end || step != step || end > start != step > i;
    n_set(this, {
      type: h,
      start,
      end,
      step,
      inclusive,
      hitsEnd,
      currentCount: i,
      zero: i,
    });
    if (!c) {
      this.start = start;
      this.end = end;
      this.step = step;
      this.inclusive = inclusive;
    }
  },
  h,
  function () {
    const t = v(this);
    if (t.hitsEnd) {
      return o(undefined, true);
    }
    const t_start = t.start;
    const t_end = t.end;
    const n = t_start + t.step * t.currentCount++;
    if (n === t_end) {
      t.hitsEnd = true;
    }
    const t_inclusive = t.inclusive;
    if (
      t_end > t_start
        ? t_inclusive
          ? n > t_end
          : n >= t_end
        : t_inclusive
          ? t_end > n
          : t_end >= n
    ) {
      t.hitsEnd = true;
      return o(undefined, true);
    }
    return o(n, false);
  },
);
const y = (t) => {
  u(g.prototype, t, {
    get: function () {
      return v(this)[t];
    },
    set: function () {},
    configurable: true,
    enumerable: false,
  });
};
if (c) {
  y("start");
  y("end");
  y("inclusive");
  y("step");
}
export default g;
