import n from "./module-b_18.js";
import o from "./module-L7_18.js";
import i from "./module-V3_18.js";
import a from "./module-Mi_18.js";
import s from "./module-y_2_18.js";
import u from "./module-I_19.js";
import c from "./module-r9_18.js";
const f = "Incorrect Iterator.range arguments";
const h = "NumericRangeIterator";
const n_set = n.set;
const v = n.getterFor(h);
const g = o(
  function (start, end, e, n, o, i) {
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
    } else if (s(e)) {
      step = e.step;
      inclusive = !!e.inclusive;
    } else if (typeof e == n) {
      step = e;
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
      type: h,
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
  h,
  function () {
    const r = v(this);
    if (r.hitsEnd) {
      return i(undefined, true);
    }
    const r_start = r.start;
    const r_end = r.end;
    const n = r_start + r.step * r.currentCount++;
    if (n === r_end) {
      r.hitsEnd = true;
    }
    const r_inclusive = r.inclusive;
    if (
      r_end > r_start
        ? r_inclusive
          ? n > r_end
          : n >= r_end
        : r_inclusive
          ? r_end > n
          : r_end >= n
    ) {
      r.hitsEnd = true;
      return i(undefined, true);
    }
    return i(n, false);
  },
);
const y = (r) => {
  u(g.prototype, r, {
    get: function () {
      return v(this)[r];
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
