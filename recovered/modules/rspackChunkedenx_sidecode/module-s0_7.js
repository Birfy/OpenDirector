import n from "./module-A_8.js";
import o from "./module-J_8.js";
import i from "./module-O9_7.js";
import a from "./module-Ze_2_7.js";
import s from "./module-vE_7.js";
import u from "./module-Be_2_7.js";
import c from "./module-xK_7.js";
import f from "./module-A2_8.js";
import l from "./module-Y_8.js";
import h from "./module-Mi_7.js";
import v from "./module-y_2_7.js";
import p from "./module-X_8.js";
import d from "./module-A3_8.js";
import g from "./module-HZ_7.js";
import y from "./module-JD_8.js";
export default function (r, t, e) {
  const AS_ENTRIES = r.indexOf("Map") !== -1;
  const b = r.indexOf("Weak") !== -1;
  const A = AS_ENTRIES ? "set" : "add";
  const w = o[r];
  const x = w && w.prototype;
  let E = w;
  const S = {};
  const O = (r) => {
    const t = i(x[r]);
    s(
      x,
      r,
      r === "add"
        ? function (r) {
            t(this, r === 0 ? 0 : r);
            return this;
          }
        : r === "delete"
          ? function (r) {
              return (!b || !!v(r)) && t(this, r === 0 ? 0 : r);
            }
          : r === "get"
            ? function (r) {
                if (b && !v(r)) {
                  return undefined;
                }
                return t(this, r === 0 ? 0 : r);
              }
            : r === "has"
              ? function (r) {
                  return (!b || !!v(r)) && t(this, r === 0 ? 0 : r);
                }
              : function (r, e) {
                  t(this, r === 0 ? 0 : r, e);
                  return this;
                },
    );
  };
  if (
    a(
      r,
      !l(w) ||
        !(
          b ||
          (x.forEach &&
            !p(function () {
              new w().entries().next();
            }))
        ),
    )
  ) {
    E = e.getConstructor(t, r, AS_ENTRIES, A);
    u.enable();
  } else if (a(r, true)) {
    const R = new E();
    const M = R[A](b ? {} : -0, 1) !== R;
    const I = p(function () {
      R.has(1);
    });
    const k = d(function (r) {
      new w(r);
    });
    const T =
      !b &&
      p(function () {
        const r = new w();
        for (let t = 5; t--;) {
          r[A](t, t);
        }
        return !r.has(-0);
      });
    if (!k) {
      E = t(function (r, t) {
        f(r, x);
        const that = y(new w(), r, E);
        if (!h(t)) {
          c(t, that[A], {
            that,
            AS_ENTRIES,
          });
        }
        return that;
      });
      E.prototype = x;
      x.constructor = E;
    }
    if (I || T) {
      O("delete");
      O("has");
      if (AS_ENTRIES) {
        O("get");
      }
    }
    if (T || M) {
      O(A);
    }
    if (b && x.clear) {
      delete x.clear;
    }
  }
  S[r] = E;
  n(
    {
      global: true,
      constructor: true,
      forced: E !== w,
    },
    S,
  );
  g(E, r);
  if (!b) {
    e.setStrong(E, r, AS_ENTRIES);
  }
  return E;
}
