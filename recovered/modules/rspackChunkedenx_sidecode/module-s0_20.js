import n from "./module-A_21.js";
import o from "./module-J_21.js";
import i from "./module-O9_20.js";
import a from "./module-Ze_2_20.js";
import s from "./module-vE_20.js";
import c from "./module-Be_2_20.js";
import u from "./module-xK_20.js";
import f from "./module-A2_21.js";
import l from "./module-Y_21.js";
import h from "./module-Mi_20.js";
import v from "./module-y_2_20.js";
import p from "./module-X_21.js";
import d from "./module-A3_21.js";
import g from "./module-HZ_20.js";
import y from "./module-JD_21.js";
export default function (t, r, e) {
  const AS_ENTRIES = t.indexOf("Map") !== -1;
  const b = t.indexOf("Weak") !== -1;
  const w = AS_ENTRIES ? "set" : "add";
  const A = o[t];
  const x = A && A.prototype;
  let S = A;
  const E = {};
  const O = (t) => {
    const r = i(x[t]);
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
      !l(A) ||
        !(
          b ||
          (x.forEach &&
            !p(function () {
              new A().entries().next();
            }))
        ),
    )
  ) {
    S = e.getConstructor(r, t, AS_ENTRIES, w);
    c.enable();
  } else if (a(t, true)) {
    const R = new S();
    const M = R[w](b ? {} : -0, 1) !== R;
    const I = p(function () {
      R.has(1);
    });
    const _ = d(function (t) {
      new A(t);
    });
    const k =
      !b &&
      p(function () {
        const t = new A();
        for (let r = 5; r--;) {
          t[w](r, r);
        }
        return !t.has(-0);
      });
    if (!_) {
      S = r(function (t, r) {
        f(t, x);
        const that = y(new A(), t, S);
        if (!h(r)) {
          u(r, that[w], {
            that,
            AS_ENTRIES,
          });
        }
        return that;
      });
      S.prototype = x;
      x.constructor = S;
    }
    if (I || k) {
      O("delete");
      O("has");
      if (AS_ENTRIES) {
        O("get");
      }
    }
    if (k || M) {
      O(w);
    }
    if (b && x.clear) {
      delete x.clear;
    }
  }
  E[t] = S;
  n(
    {
      global: true,
      constructor: true,
      forced: S !== A,
    },
    E,
  );
  g(S, t);
  if (!b) {
    e.setStrong(S, t, AS_ENTRIES);
  }
  return S;
}
