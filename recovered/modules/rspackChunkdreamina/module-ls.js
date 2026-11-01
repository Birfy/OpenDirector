import n from "g";
import i from "IF";
import a from "UFM";
import o from "ib";
import s from "SM";
import A from "G";
const c = "Seeded Random";
const u = c + " Generator";
const A_set = A.set;
const h = A.getterFor(u);
const g = o(
  function (t) {
    A_set(this, {
      type: u,
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
      const seed = i(t).seed;
      if (!a(seed)) {
        throw TypeError(
          'Math.seededPRNG() argument should have a "seed" field with a finite value.',
        );
      }
      return new g(seed);
    },
  },
);
