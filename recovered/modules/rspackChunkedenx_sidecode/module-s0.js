import n from "./module-A.js";
import o from "./module-J.js";
import i from "./module-O9.js";
import a from "./module-Ze_2.js";
import s from "./module-vE.js";
import u from "./module-Be_2.js";
import c from "./module-xK.js";
import f from "./module-A2.js";
import h from "./module-Y.js";
import l from "./module-Mi.js";
import v from "./module-y_2.js";
import p from "./module-X.js";
import d from "./module-A3.js";
import g from "./module-HZ.js";
import y from "./module-JD.js";
export default function (t, r, e) {
  const AS_ENTRIES = t.indexOf("Map") !== -1;
  const m = t.indexOf("Weak") !== -1;
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
              return (!m || !!v(t)) && r(this, t === 0 ? 0 : t);
            }
          : t === "get"
            ? function (t) {
                if (m && !v(t)) {
                  return undefined;
                }
                return r(this, t === 0 ? 0 : t);
              }
            : t === "has"
              ? function (t) {
                  return (!m || !!v(t)) && r(this, t === 0 ? 0 : t);
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
      !h(x) ||
        !(
          m ||
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
    const M = R[A](m ? {} : -0, 1) !== R;
    const I = p(function () {
      R.has(1);
    });
    const k = d(function (t) {
      new x(t);
    });
    const T =
      !m &&
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
        if (!l(r)) {
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
    if (m && w.clear) {
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
  if (!m) {
    e.setStrong(S, t, AS_ENTRIES);
  }
  return S;
}
