import n from "./module-A.js";
import o from "./module-d.js";
import i from "./module-Zl.js";
import a from "./module-L7.js";
import s from "./module-V3.js";
import u from "./module-b.js";
const c = "Seeded Random";
const f = c + " Generator";
const u_set = u.set;
const l = u.getterFor(f);
const p = a(
  function (t) {
    u_set(this, {
      type: f,
      seed: t % 2147483647,
    });
  },
  c,
  function () {
    const t = l(this);
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
