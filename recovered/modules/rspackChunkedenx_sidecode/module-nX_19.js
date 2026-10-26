import n from "./module-O9_19.js";
import o from "./module-X_20.js";
import i from "./module-Y_20.js";
import a from "./module-D_2_19.js";
import s from "./module-r9_19.js";
import _u from "./module-Vn_19.js";
import c from "./module-iJ_19.js";
import f from "./module-b_19.js";
const _u_CONFIGURABLE = _u.CONFIGURABLE;
const f_enforce = f.enforce;
const f_get = f.get;
const d = n("".slice);
const g = n("".replace);
const y = n([].join);
const b =
  s &&
  !o(function () {
    return (
      Object.defineProperty(function () {}, "length", {
        value: 8,
      }).length !== 8
    );
  });
const m = String(String).split("String");
const A = function (r, t, e) {
  if (d(String(t), 0, 7) === "Symbol(") {
    t = "[" + g(String(t), /^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (e && e.getter) {
    t = "get " + t;
  }
  if (e && e.setter) {
    t = "set " + t;
  }
  if (!a(r, "name") || (_u_CONFIGURABLE && r.name !== t)) {
    if (s) {
      Object.defineProperty(r, "name", {
        value: t,
        configurable: true,
      });
    } else {
      r.name = t;
    }
  }
  if (b && e && a(e, "arity") && r.length !== e.arity) {
    Object.defineProperty(r, "length", {
      value: e.arity,
    });
  }
  try {
    if (e && a(e, "constructor") && e.constructor) {
      if (s) {
        Object.defineProperty(r, "prototype", {
          writable: false,
        });
      }
    } else if (r.prototype) {
      r.prototype = undefined;
    }
  } catch (r) {}
  const n = f_enforce(r);
  if (!a(n, "source")) {
    n.source = y(m, typeof t === "string" ? t : "");
  }
  return r;
};
export default A;
Function.prototype.toString = A(function () {
  return (i(this) && f_get(this).source) || c(this);
}, "toString");
