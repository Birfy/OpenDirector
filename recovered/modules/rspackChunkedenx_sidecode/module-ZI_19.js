import n from "./module-A_20.js";
import o from "./module-d_20.js";
import i from "./module-Zl_21.js";
import a from "./module-L7_19.js";
import s from "./module-V3_19.js";
import u from "./module-b_19.js";
const c = "Seeded Random";
const f = c + " Generator";
const u_set = u.set;
const h = u.getterFor(f);
const p = a(
  function (r) {
    u_set(this, {
      type: f,
      seed: r % 2147483647,
    });
  },
  c,
  function () {
    const r = h(this);
    return s(
      (1073741823 & (r.seed = (1103515245 * r.seed + 12345) % 2147483647)) /
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
    seededPRNG: function (r) {
      const seed = o(r).seed;
      if (!i(seed)) {
        throw TypeError(
          'Math.seededPRNG() argument should have a "seed" field with a finite value.',
        );
      }
      return new p(seed);
    },
  },
);
