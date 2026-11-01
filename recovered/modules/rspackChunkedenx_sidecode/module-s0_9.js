import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-O9_9.js";
import a from "./module-Ze_2_9.js";
import s from "./module-vE_9.js";
import u from "./module-Be_2_9.js";
import c from "./module-xK_9.js";
import f from "./module-A2_10.js";
import l from "./module-Y_10.js";
import h from "./module-Mi_9.js";
import v from "./module-y_2_9.js";
import d from "./module-X_10.js";
import p from "./module-A3_10.js";
import g from "./module-HZ_9.js";
import y from "./module-JD_10.js";
export default function (t, e, r) {
  const AS_ENTRIES = t.indexOf("Map") !== -1;
  const b = t.indexOf("Weak") !== -1;
  const w = AS_ENTRIES ? "set" : "add";
  const A = o[t];
  const x = A && A.prototype;
  let E = A;
  const S = {};
  const O = (t) => {
    const e = i(x[t]);
    s(
      x,
      t,
      t === "add"
        ? function (t) {
            e(this, t === 0 ? 0 : t);
            return this;
          }
        : t === "delete"
          ? function (t) {
              return (!b || !!v(t)) && e(this, t === 0 ? 0 : t);
            }
          : t === "get"
            ? function (t) {
                if (b && !v(t)) {
                  return undefined;
                }
                return e(this, t === 0 ? 0 : t);
              }
            : t === "has"
              ? function (t) {
                  return (!b || !!v(t)) && e(this, t === 0 ? 0 : t);
                }
              : function (t, r) {
                  e(this, t === 0 ? 0 : t, r);
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
            !d(function () {
              new A().entries().next();
            }))
        ),
    )
  ) {
    E = r.getConstructor(e, t, AS_ENTRIES, w);
    u.enable();
  } else if (a(t, true)) {
    const _ = new E();
    const R = _[w](b ? {} : -0, 1) !== _;
    const M = d(function () {
      _.has(1);
    });
    const I = p(function (t) {
      new A(t);
    });
    const T =
      !b &&
      d(function () {
        const t = new A();
        for (let e = 5; e--;) {
          t[w](e, e);
        }
        return !t.has(-0);
      });
    if (!I) {
      E = e(function (t, e) {
        f(t, x);
        const that = y(new A(), t, E);
        if (!h(e)) {
          c(e, that[w], {
            that,
            AS_ENTRIES,
          });
        }
        return that;
      });
      E.prototype = x;
      x.constructor = E;
    }
    if (M || T) {
      O("delete");
      O("has");
      if (AS_ENTRIES) {
        O("get");
      }
    }
    if (T || R) {
      O(w);
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
      forced: E !== A,
    },
    S,
  );
  g(E, t);
  if (!b) {
    r.setStrong(E, t, AS_ENTRIES);
  }
  return E;
}
