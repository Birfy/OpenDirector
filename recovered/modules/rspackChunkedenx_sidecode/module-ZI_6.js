import n from "./module-A_7.js";
import o from "./module-d_7.js";
import a from "./module-Zl_8.js";
import i from "./module-L7_6.js";
import s from "./module-V3_6.js";
import c from "./module-b_6.js";
const u = "Seeded Random";
const f = u + " Generator";
const c_set = c.set;
const h = c.getterFor(f);
const v = i(
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
      if (!a(seed)) {
        throw TypeError(
          'Math.seededPRNG() argument should have a "seed" field with a finite value.',
        );
      }
      return new v(seed);
    },
  },
);
