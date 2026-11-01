import n from "./module-b_6.js";
import o from "./module-L7_6.js";
import a from "./module-V3_6.js";
import i from "./module-Mi_6.js";
import s from "./module-y_2_6.js";
import c from "./module-I_7.js";
import u from "./module-r9_6.js";
const f = "Incorrect Iterator.range arguments";
const l = "NumericRangeIterator";
const n_set = n.set;
const p = n.getterFor(l);
const g = o(
  function (start, end, e, n, o, a) {
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
    const p = end > start;
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
    if (i(step)) {
      step = p ? a : -a;
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
    if (!u) {
      this.start = start;
      this.end = end;
      this.step = step;
      this.inclusive = inclusive;
    }
  },
  l,
  function () {
    const t = p(this);
    if (t.hitsEnd) {
      return a(undefined, true);
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
      return a(undefined, true);
    }
    return a(n, false);
  },
);
const y = (t) => {
  c(g.prototype, t, {
    get: function () {
      return p(this)[t];
    },
    set: function () {},
    configurable: true,
    enumerable: false,
  });
};
if (u) {
  y("start");
  y("end");
  y("inclusive");
  y("step");
}
export default g;
