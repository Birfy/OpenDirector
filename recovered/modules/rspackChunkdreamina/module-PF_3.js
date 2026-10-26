import n from "./module-G_2.js";
import o from "./module-ib_3.js";
import i from "./module-SM_4.js";
import a from "./module-D.js";
import s from "./module-N.js";
import u from "./module-Tg_2.js";
import c from "./module-F.js";
const f = "Incorrect Iterator.range arguments";
const l = "NumericRangeIterator";
const n_set = n.set;
const h = n.getterFor(l);
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
    const h = end > start;
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
      step = h ? i : -i;
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
    const e = h(this);
    if (e.hitsEnd) {
      return i(undefined, true);
    }
    const e_start = e.start;
    const e_end = e.end;
    const n = e_start + e.step * e.currentCount++;
    if (n === e_end) {
      e.hitsEnd = true;
    }
    const e_inclusive = e.inclusive;
    if (
      e_end > e_start
        ? e_inclusive
          ? n > e_end
          : n >= e_end
        : e_inclusive
          ? e_end > n
          : e_end >= n
    ) {
      e.hitsEnd = true;
      return i(undefined, true);
    }
    return i(n, false);
  },
);
const y = (e) => {
  u(g.prototype, e, {
    get: function () {
      return h(this)[e];
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
