import n from "./module-b_9.js";
import o from "./module-L7_9.js";
import i from "./module-V3_9.js";
import a from "./module-Mi_9.js";
import s from "./module-y_2_9.js";
import u from "./module-I_10.js";
import c from "./module-r9_9.js";
const f = "Incorrect Iterator.range arguments";
const l = "NumericRangeIterator";
const n_set = n.set;
const v = n.getterFor(l);
const g = o(
  function (start, end, r, n, o, i) {
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
    if (r === undefined) {
      step = undefined;
    } else if (s(r)) {
      step = r.step;
      inclusive = !!r.inclusive;
    } else if (typeof r == n) {
      step = r;
    } else {
      throw TypeError(f);
    }
    if (a(step)) {
      step = v ? i : -i;
    }
    if (typeof step != n) {
      throw TypeError(f);
    }
    if (
      Infinity === step ||
      -Infinity === step ||
      (step === o && start !== end)
    ) {
      throw RangeError(f);
    }
    const hitsEnd =
      start != start || end != end || step != step || end > start != step > o;
    n_set(this, {
      type: l,
      start,
      end,
      step,
      inclusive,
      hitsEnd,
      currentCount: o,
      zero: o,
    });
    if (!c) {
      this.start = start;
      this.end = end;
      this.step = step;
      this.inclusive = inclusive;
    }
  },
  l,
  function () {
    const t = v(this);
    if (t.hitsEnd) {
      return i(undefined, true);
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
      return i(undefined, true);
    }
    return i(n, false);
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
