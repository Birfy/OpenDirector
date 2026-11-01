import n from "./module-A_10.js";
import o from "./module-d_10.js";
import i from "./module-Zl_11.js";
import a from "./module-L7_9.js";
import s from "./module-V3_9.js";
import u from "./module-b_9.js";
const c = "Seeded Random";
const f = c + " Generator";
const u_set = u.set;
const h = u.getterFor(f);
const d = a(
  function (t) {
    u_set(this, {
      type: f,
      seed: t % 2147483647,
    });
  },
  c,
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
      return new d(seed);
    },
  },
);
