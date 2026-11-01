import n from "./module-M_2_14.js";
import o from "./module-vo_14.js";
import i from "./module-d_15.js";
import a from "./module-y_2_14.js";
import s from "./module-NK_14.js";
import c from "./module-tH_14.js";
import u from "./module-V3_14.js";
import f from "./module-Qd_15.js";
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
    t.resolve(i(n(r.next, r_iterator))).then((e) => {
      try {
        if (i(e).done) {
          r.done = true;
          s(u(undefined, true));
        } else {
          const n = e.value;
          try {
            const c = r_mapper(n, r.counter++);
            const f = function (t) {
              s(u(t, false));
            };
            if (a(c)) {
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
  i(this);
  o(mapper);
  return new l(s(this), {
    mapper,
  });
}
