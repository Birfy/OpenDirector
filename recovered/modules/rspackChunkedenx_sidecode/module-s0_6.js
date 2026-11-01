import n from "./module-A_7.js";
import o from "./module-J_7.js";
import a from "./module-O9_6.js";
import i from "./module-Ze_2_6.js";
import s from "./module-vE_6.js";
import c from "./module-Be_2_6.js";
import u from "./module-xK_6.js";
import f from "./module-A2_7.js";
import l from "./module-Y_7.js";
import h from "./module-Mi_6.js";
import p from "./module-y_2_6.js";
import v from "./module-X_7.js";
import d from "./module-A3_7.js";
import g from "./module-HZ_6.js";
import y from "./module-JD_7.js";
export default function (t, r, e) {
  const AS_ENTRIES = t.indexOf("Map") !== -1;
  const b = t.indexOf("Weak") !== -1;
  const A = AS_ENTRIES ? "set" : "add";
  const w = o[t];
  const x = w && w.prototype;
  let E = w;
  const S = {};
  const O = (t) => {
    const r = a(x[t]);
    s(
      x,
      t,
      t === "add"
        ? function (t) {
            r(this, t === 0 ? 0 : t);
            return this;
          }
        : t === "delete"
          ? function (t) {
              return (!b || !!p(t)) && r(this, t === 0 ? 0 : t);
            }
          : t === "get"
            ? function (t) {
                if (b && !p(t)) {
                  return undefined;
                }
                return r(this, t === 0 ? 0 : t);
              }
            : t === "has"
              ? function (t) {
                  return (!b || !!p(t)) && r(this, t === 0 ? 0 : t);
                }
              : function (t, e) {
                  r(this, t === 0 ? 0 : t, e);
                  return this;
                },
    );
  };
  if (
    i(
      t,
      !l(w) ||
        !(
          b ||
          (x.forEach &&
            !v(function () {
              new w().entries().next();
            }))
        ),
    )
  ) {
    E = e.getConstructor(r, t, AS_ENTRIES, A);
    c.enable();
  } else if (i(t, true)) {
    const R = new E();
    const M = R[A](b ? {} : -0, 1) !== R;
    const I = v(function () {
      R.has(1);
    });
    const k = d(function (t) {
      new w(t);
    });
    const T =
      !b &&
      v(function () {
        const t = new w();
        for (let r = 5; r--;) {
          t[A](r, r);
        }
        return !t.has(-0);
      });
    if (!k) {
      E = r(function (t, r) {
        f(t, x);
        const that = y(new w(), t, E);
        if (!h(r)) {
          u(r, that[A], {
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
  S[t] = E;
  n(
    {
      global: true,
      constructor: true,
      forced: E !== w,
    },
    S,
  );
  g(E, t);
  if (!b) {
    e.setStrong(E, t, AS_ENTRIES);
  }
  return E;
}
