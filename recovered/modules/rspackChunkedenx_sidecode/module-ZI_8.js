import n from "./module-A_9.js";
import i from "./module-d_9.js";
import o from "./module-Zl_10.js";
import s from "./module-L7_8.js";
import a from "./module-V3_8.js";
import u from "./module-b_8.js";
const c = "Seeded Random";
const f = c + " Generator";
const u_set = u.set;
const l = u.getterFor(f);
const p = s(
  function (t) {
    u_set(this, {
      type: f,
      seed: t % 2147483647,
    });
  },
  c,
  function () {
    const t = l(this);
    return a(
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
      const seed = i(t).seed;
      if (!o(seed)) {
        throw TypeError(
          'Math.seededPRNG() argument should have a "seed" field with a finite value.',
        );
      }
      return new p(seed);
    },
  },
);
