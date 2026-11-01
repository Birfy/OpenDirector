import n from "./module-M_2.js";
import o from "./module-vo.js";
import i from "./module-d.js";
import a from "./module-y_2.js";
import s from "./module-NK.js";
import u from "./module-tH.js";
import c from "./module-V3.js";
import f from "./module-Qd.js";
const h = u(function (t) {
  const r = this;
  const r_iterator = r.iterator;
  const r_mapper = r.mapper;
  return new t(function (s, u) {
    const h = function (t) {
      r.done = true;
      u(t);
    };
    const l = function (t) {
      f(r_iterator, h, t, h);
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
  i(this);
  o(mapper);
  return new h(s(this), {
    mapper,
  });
}
