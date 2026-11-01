import n from "./module-A_17.js";
import o from "./module-J_17.js";
import i from "./module-O9_16.js";
import a from "./module-Ze_2_16.js";
import s from "./module-vE_16.js";
import u from "./module-Be_2_16.js";
import c from "./module-xK_16.js";
import f from "./module-A2_17.js";
import l from "./module-Y_17.js";
import h from "./module-Mi_16.js";
import v from "./module-y_2_16.js";
import p from "./module-X_17.js";
import d from "./module-A3_17.js";
import g from "./module-HZ_16.js";
import y from "./module-JD_17.js";
export default function (t, r, e) {
  const AS_ENTRIES = t.indexOf("Map") !== -1;
  const b = t.indexOf("Weak") !== -1;
  const A = AS_ENTRIES ? "set" : "add";
  const x = o[t];
  const w = x && x.prototype;
  let S = x;
  const E = {};
  const O = (t) => {
    const r = i(w[t]);
    s(
      w,
      t,
      t === "add"
        ? function (t) {
            r(this, t === 0 ? 0 : t);
            return this;
          }
        : t === "delete"
          ? function (t) {
              return (!b || !!v(t)) && r(this, t === 0 ? 0 : t);
            }
          : t === "get"
            ? function (t) {
                if (b && !v(t)) {
                  return undefined;
                }
                return r(this, t === 0 ? 0 : t);
              }
            : t === "has"
              ? function (t) {
                  return (!b || !!v(t)) && r(this, t === 0 ? 0 : t);
                }
              : function (t, e) {
                  r(this, t === 0 ? 0 : t, e);
                  return this;
                },
    );
  };
  if (
    a(
      t,
      !l(x) ||
        !(
          b ||
          (w.forEach &&
            !p(function () {
              new x().entries().next();
            }))
        ),
    )
  ) {
    S = e.getConstructor(r, t, AS_ENTRIES, A);
    u.enable();
  } else if (a(t, true)) {
    const R = new S();
    const M = R[A](b ? {} : -0, 1) !== R;
    const I = p(function () {
      R.has(1);
    });
    const k = d(function (t) {
      new x(t);
    });
    const T =
      !b &&
      p(function () {
        const t = new x();
        for (let r = 5; r--;) {
          t[A](r, r);
        }
        return !t.has(-0);
      });
    if (!k) {
      S = r(function (t, r) {
        f(t, w);
        const that = y(new x(), t, S);
        if (!h(r)) {
          c(r, that[A], {
            that,
            AS_ENTRIES,
          });
        }
        return that;
      });
      S.prototype = w;
      w.constructor = S;
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
    if (b && w.clear) {
      delete w.clear;
    }
  }
  E[t] = S;
  n(
    {
      global: true,
      constructor: true,
      forced: S !== x,
    },
    E,
  );
  g(S, t);
  if (!b) {
    e.setStrong(S, t, AS_ENTRIES);
  }
  return S;
}
