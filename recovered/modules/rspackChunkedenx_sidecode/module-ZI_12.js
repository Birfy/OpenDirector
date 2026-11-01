import $ from "./module-A_13.js";
import tt from "./module-d_13.js";
import te from "./module-Zl_14.js";
import tr from "./module-L7_12.js";
import tn from "./module-V3_12.js";
import ti from "./module-b_12.js";
const to = "Seeded Random";
const ta = to + " Generator";
const ti_set = ti.set;
const tf = ti.getterFor(ta);
const tc = tr(
  function (J) {
    ti_set(this, {
      type: ta,
      seed: J % 2147483647,
    });
  },
  to,
  function () {
    const J = tf(this);
    return tn(
      (1073741823 & (J.seed = (1103515245 * J.seed + 12345) % 2147483647)) /
        1073741823,
      false,
    );
  },
);
$(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    seededPRNG: function (J) {
      const seed = tt(J).seed;
      if (!te(seed)) {
        throw TypeError(
          'Math.seededPRNG() argument should have a "seed" field with a finite value.',
        );
      }
      return new tc(seed);
    },
  },
);
