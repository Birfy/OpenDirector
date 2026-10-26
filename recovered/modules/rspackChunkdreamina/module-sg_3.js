import n from "./module-g.js";
import o from "./module-u.js";
import i from "./module-o.js";
import a from "./module-I8.js";
import s from "./module-xX_2.js";
import u from "./module-C3_2.js";
import c from "./module-Fm_2_2.js";
import f from "./module-i9_3.js";
import l from "./module-r.js";
import p from "./module-D.js";
import h from "./module-N.js";
import v from "./module-VV_4.js";
import d from "./module-WH_3.js";
import g from "./module-Ii_2_2.js";
import y from "./module-U_2.js";
export default function (e, t, r) {
  const AS_ENTRIES = e.indexOf("Map") !== -1;
  const x = e.indexOf("Weak") !== -1;
  const b = AS_ENTRIES ? "set" : "add";
  const w = o[e];
  const A = w && w.prototype;
  let E = w;
  const j = {};
  const I = (e) => {
    const t = i(A[e]);
    s(
      A,
      e,
      e === "add"
        ? function (e) {
            t(this, e === 0 ? 0 : e);
            return this;
          }
        : e === "delete"
          ? function (e) {
              return (!x || !!h(e)) && t(this, e === 0 ? 0 : e);
            }
          : e === "get"
            ? function (e) {
                if (x && !h(e)) {
                  return undefined;
                }
                return t(this, e === 0 ? 0 : e);
              }
            : e === "has"
              ? function (e) {
                  return (!x || !!h(e)) && t(this, e === 0 ? 0 : e);
                }
              : function (e, r) {
                  t(this, e === 0 ? 0 : e, r);
                  return this;
                },
    );
  };
  if (
    a(
      e,
      !l(w) ||
        !(
          x ||
          (A.forEach &&
            !v(function () {
              new w().entries().next();
            }))
        ),
    )
  ) {
    E = r.getConstructor(t, e, AS_ENTRIES, b);
    u.enable();
  } else if (a(e, true)) {
    const R = new E();
    const z = R[b](x ? {} : -0, 1) !== R;
    const O = v(function () {
      R.has(1);
    });
    const S = d(function (e) {
      new w(e);
    });
    const _ =
      !x &&
      v(function () {
        const e = new w();
        for (let t = 5; t--;) {
          e[b](t, t);
        }
        return !e.has(-0);
      });
    if (!S) {
      E = t(function (e, t) {
        f(e, A);
        const that = y(new w(), e, E);
        if (!p(t)) {
          c(t, that[b], {
            that,
            AS_ENTRIES,
          });
        }
        return that;
      });
      E.prototype = A;
      A.constructor = E;
    }
    if (O || _) {
      I("delete");
      I("has");
      if (AS_ENTRIES) {
        I("get");
      }
    }
    if (_ || z) {
      I(b);
    }
    if (x && A.clear) {
      delete A.clear;
    }
  }
  j[e] = E;
  n(
    {
      global: true,
      constructor: true,
      forced: E !== w,
    },
    j,
  );
  g(E, e);
  if (!x) {
    r.setStrong(E, e, AS_ENTRIES);
  }
  return E;
}
