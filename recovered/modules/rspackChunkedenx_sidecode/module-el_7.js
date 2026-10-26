import n from "./module-M_2_7.js";
import o from "./module-vo_7.js";
import i from "./module-d_8.js";
import a from "./module-y_2_7.js";
import s from "./module-NK_7.js";
import u from "./module-tH_7.js";
import c from "./module-V3_7.js";
import f from "./module-Qd_8.js";
const l = u(function (r) {
  const t = this;
  const t_iterator = t.iterator;
  const t_mapper = t.mapper;
  return new r(function (s, u) {
    const l = function (r) {
      t.done = true;
      u(r);
    };
    const h = function (r) {
      f(t_iterator, l, r, l);
    };
    r.resolve(i(n(t.next, t_iterator))).then((e) => {
      try {
        if (i(e).done) {
          t.done = true;
          s(c(undefined, true));
        } else {
          const n = e.value;
          try {
            const u = t_mapper(n, t.counter++);
            const f = function (r) {
              s(c(r, false));
            };
            if (a(u)) {
              r.resolve(u).then(f, h);
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
