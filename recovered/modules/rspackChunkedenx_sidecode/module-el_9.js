import n from "./module-M_2_9.js";
import o from "./module-vo_9.js";
import i from "./module-d_10.js";
import a from "./module-y_2_9.js";
import s from "./module-NK_9.js";
import u from "./module-tH_9.js";
import c from "./module-V3_9.js";
import f from "./module-Qd_10.js";
const l = u(function (t) {
  const e = this;
  const e_iterator = e.iterator;
  const e_mapper = e.mapper;
  return new t(function (s, u) {
    const l = function (t) {
      e.done = true;
      u(t);
    };
    const h = function (t) {
      f(e_iterator, l, t, l);
    };
    t.resolve(i(n(e.next, e_iterator))).then((r) => {
      try {
        if (i(r).done) {
          e.done = true;
          s(c(undefined, true));
        } else {
          const n = r.value;
          try {
            const u = e_mapper(n, e.counter++);
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
