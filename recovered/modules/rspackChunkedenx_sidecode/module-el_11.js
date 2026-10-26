import n from "./module-M_2_11.js";
import o from "./module-vo_11.js";
import i from "./module-d_12.js";
import a from "./module-y_2_11.js";
import s from "./module-NK_11.js";
import u from "./module-tH_11.js";
import c from "./module-V3_11.js";
import f from "./module-Qd_12.js";
const h = u(function (r) {
  const t = this;
  const t_iterator = t.iterator;
  const t_mapper = t.mapper;
  return new r(function (s, u) {
    const h = function (r) {
      t.done = true;
      u(r);
    };
    const l = function (r) {
      f(t_iterator, h, r, h);
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
              r.resolve(u).then(f, l);
            } else {
              f(u);
            }
          } catch (error) {
            l(error);
          }
        }
      } catch (error) {
        h(error);
      }
    }, h);
  });
});
export default function (mapper) {
  i(this);
  o(mapper);
  return new h(s(this), {
    mapper,
  });
}
