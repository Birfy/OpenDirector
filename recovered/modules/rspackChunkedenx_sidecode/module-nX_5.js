import n from "./module-O9_5.js";
import i from "./module-X_6.js";
import o from "./module-Y_6.js";
import s from "./module-D_2_5.js";
import a from "./module-r9_5.js";
import _u from "./module-Vn_5.js";
import c from "./module-iJ_5.js";
import f from "./module-b_5.js";
const _u_CONFIGURABLE = _u.CONFIGURABLE;
const f_enforce = f.enforce;
const f_get = f.get;
const d = n("".slice);
const g = n("".replace);
const y = n([].join);
const b =
  a &&
  !i(function () {
    return (
      Object.defineProperty(function () {}, "length", {
        value: 8,
      }).length !== 8
    );
  });
const m = String(String).split("String");
const A = function (t, r, e) {
  if (d(String(r), 0, 7) === "Symbol(") {
    r = "[" + g(String(r), /^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (e && e.getter) {
    r = "get " + r;
  }
  if (e && e.setter) {
    r = "set " + r;
  }
  if (!s(t, "name") || (_u_CONFIGURABLE && t.name !== r)) {
    if (a) {
      Object.defineProperty(t, "name", {
        value: r,
        configurable: true,
      });
    } else {
      t.name = r;
    }
  }
  if (b && e && s(e, "arity") && t.length !== e.arity) {
    Object.defineProperty(t, "length", {
      value: e.arity,
    });
  }
  try {
    if (e && s(e, "constructor") && e.constructor) {
      if (a) {
        Object.defineProperty(t, "prototype", {
          writable: false,
        });
      }
    } else if (t.prototype) {
      t.prototype = undefined;
    }
  } catch (t) {}
  const n = f_enforce(t);
  if (!s(n, "source")) {
    n.source = y(m, typeof r === "string" ? r : "");
  }
  return t;
};
export default A;
Function.prototype.toString = A(function () {
  return (o(this) && f_get(this).source) || c(this);
}, "toString");
