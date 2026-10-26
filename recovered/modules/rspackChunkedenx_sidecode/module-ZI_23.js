import n from "./module-A_24.js";
import o from "./module-d_24.js";
import i from "./module-Zl_25.js";
import a from "./module-L7_23.js";
import s from "./module-V3_23.js";
import c from "./module-b_23.js";
const u = "Seeded Random";
const f = u + " Generator";
const c_set = c.set;
const h = c.getterFor(f);
const p = a(
  function (t) {
    c_set(this, {
      type: f,
      seed: t % 2147483647,
    });
  },
  u,
  function () {
    const t = h(this);
    return s(
      (1073741823 & (t.seed = (1103515245 * t.seed + 12345) % 2147483647)) /
        1073741823,
      false,
    );
  },
);
n(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    seededPRNG: function (t) {
      const seed = o(t).seed;
      if (!i(seed)) {
        throw TypeError(
          'Math.seededPRNG() argument should have a "seed" field with a finite value.',
        );
      }
      return new p(seed);
    },
  },
);
