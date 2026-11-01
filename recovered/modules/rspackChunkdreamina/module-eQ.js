import n from "./module-p3.js";
import o from "./module-B.js";
import i from "./module-IF_2.js";
import a from "./module-N.js";
import s from "./module-ju_2.js";
import u from "./module-NZ_3.js";
import c from "./module-SM_4.js";
import f from "./module-VQ_3.js";
const l = u(function (e) {
  const t = this;
  const t_iterator = t.iterator;
  const t_mapper = t.mapper;
  return new e(function (s, u) {
    const l = function (e) {
      t.done = true;
      u(e);
    };
    const p = function (e) {
      f(t_iterator, l, e, l);
    };
    e.resolve(i(n(t.next, t_iterator))).then((r) => {
      try {
        if (i(r).done) {
          t.done = true;
          s(c(undefined, true));
        } else {
          const n = r.value;
          try {
            const u = t_mapper(n, t.counter++);
            const f = function (e) {
              s(c(e, false));
            };
            if (a(u)) {
              e.resolve(u).then(f, p);
            } else {
              f(u);
            }
          } catch (error) {
            p(error);
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
