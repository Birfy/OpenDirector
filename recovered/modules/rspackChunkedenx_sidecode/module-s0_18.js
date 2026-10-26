import n from "./module-A_19.js";
import o from "./module-J_19.js";
import i from "./module-O9_18.js";
import a from "./module-Ze_2_18.js";
import s from "./module-vE_18.js";
import u from "./module-Be_2_18.js";
import c from "./module-xK_18.js";
import f from "./module-A2_19.js";
import h from "./module-Y_19.js";
import l from "./module-Mi_18.js";
import v from "./module-y_2_18.js";
import p from "./module-X_19.js";
import d from "./module-A3_19.js";
import g from "./module-HZ_18.js";
import y from "./module-JD_19.js";
export default function (r, t, e) {
  const AS_ENTRIES = r.indexOf("Map") !== -1;
  const m = r.indexOf("Weak") !== -1;
  const A = AS_ENTRIES ? "set" : "add";
  const x = o[r];
  const w = x && x.prototype;
  let S = x;
  const E = {};
  const O = (r) => {
    const t = i(w[r]);
    s(
      w,
      r,
      r === "add"
        ? function (r) {
            t(this, r === 0 ? 0 : r);
            return this;
          }
        : r === "delete"
          ? function (r) {
              return (!m || !!v(r)) && t(this, r === 0 ? 0 : r);
            }
          : r === "get"
            ? function (r) {
                if (m && !v(r)) {
                  return undefined;
                }
                return t(this, r === 0 ? 0 : r);
              }
            : r === "has"
              ? function (r) {
                  return (!m || !!v(r)) && t(this, r === 0 ? 0 : r);
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
    S = e.getConstructor(t, r, AS_ENTRIES, A);
    u.enable();
  } else if (a(r, true)) {
    const R = new S();
    const M = R[A](m ? {} : -0, 1) !== R;
    const I = p(function () {
      R.has(1);
    });
    const k = d(function (r) {
      new x(r);
    });
    const T =
      !m &&
      p(function () {
        const r = new x();
        for (let t = 5; t--;) {
          r[A](t, t);
        }
        return !r.has(-0);
      });
    if (!k) {
      S = t(function (r, t) {
        f(r, w);
        const that = y(new x(), r, S);
        if (!l(t)) {
          c(t, that[A], {
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
  E[r] = S;
  n(
    {
      global: true,
      constructor: true,
      forced: S !== x,
    },
    E,
  );
  g(S, r);
  if (!m) {
    e.setStrong(S, r, AS_ENTRIES);
  }
  return S;
}
