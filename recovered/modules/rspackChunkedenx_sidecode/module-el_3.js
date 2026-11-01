import n from "./module-M_2_3.js";
import i from "./module-vo_3.js";
import o from "./module-d_4.js";
import s from "./module-y_2_3.js";
import a from "./module-NK_3.js";
import u from "./module-tH_3.js";
import c from "./module-V3_3.js";
import f from "./module-Qd_4.js";
const h = u(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_mapper = r.mapper;
  return new t(function (a, u) {
    const h = function (t) {
      r.done = true;
      u(t);
    };
    const l = function (t) {
      f(r_iterator, h, t, h);
    };
    t.resolve(o(n(r.next, r_iterator))).then((e) => {
      try {
        if (o(e).done) {
          r.done = true;
          a(c(undefined, true));
        } else {
          const n = e.value;
          try {
            const u = r_mapper(n, r.counter++);
            const f = function (t) {
              a(c(t, false));
            };
            if (s(u)) {
              t.resolve(u).then(f, l);
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
  o(this);
  i(mapper);
  return new h(a(this), {
    mapper,
  });
}
