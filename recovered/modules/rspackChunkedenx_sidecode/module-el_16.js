import n from "./module-M_2_16.js";
import o from "./module-vo_16.js";
import i from "./module-d_17.js";
import a from "./module-y_2_16.js";
import s from "./module-NK_16.js";
import u from "./module-tH_16.js";
import c from "./module-V3_16.js";
import f from "./module-Qd_17.js";
const l = u(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_mapper = r.mapper;
  return new t(function (s, u) {
    const l = function (t) {
      r.done = true;
      u(t);
    };
    const h = function (t) {
      f(r_iterator, l, t, l);
    };
    t.resolve(i(n(r.next, r_iterator))).then((e) => {
      try {
        if (i(e).done) {
          r.done = true;
          s(c(undefined, true));
        } else {
          const n = e.value;
          try {
            const u = r_mapper(n, r.counter++);
            const f = function (t) {
              s(c(t, false));
            };
            if (a(u)) {
              t.resolve(u).then(f, h);
            } else {
              f(u);
            }
          } catch (error) {
            h(error);
          }
        }
      } catch (error) {
        l(error);
      }
    }, l);
  });
});
export default function (mapper) {
  i(this);
  o(mapper);
  return new l(s(this), {
    mapper,
  });
}
