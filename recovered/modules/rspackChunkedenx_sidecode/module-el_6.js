import n from "./module-M_2_6.js";
import o from "./module-vo_6.js";
import a from "./module-d_7.js";
import i from "./module-y_2_6.js";
import s from "./module-NK_6.js";
import c from "./module-tH_6.js";
import u from "./module-V3_6.js";
import f from "./module-Qd_7.js";
const l = c(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_mapper = r.mapper;
  return new t(function (s, c) {
    const l = function (t) {
      r.done = true;
      c(t);
    };
    const h = function (t) {
      f(r_iterator, l, t, l);
    };
    t.resolve(a(n(r.next, r_iterator))).then((e) => {
      try {
        if (a(e).done) {
          r.done = true;
          s(u(undefined, true));
        } else {
          const n = e.value;
          try {
            const c = r_mapper(n, r.counter++);
            const f = function (t) {
              s(u(t, false));
            };
            if (i(c)) {
              t.resolve(c).then(f, h);
            } else {
              f(c);
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
  a(this);
  o(mapper);
  return new l(s(this), {
    mapper,
  });
}
