import n from "./module-O9.js";
import o from "./module-X.js";
import i from "./module-Y.js";
import a from "./module-D_2.js";
import s from "./module-r9.js";
import _u from "./module-Vn.js";
import c from "./module-iJ.js";
import f from "./module-b.js";
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
  if (!a(t, "name") || (_u_CONFIGURABLE && t.name !== r)) {
    if (s) {
      Object.defineProperty(t, "name", {
        value: r,
        configurable: true,
      });
    } else {
      t.name = r;
    }
  }
  if (b && e && a(e, "arity") && t.length !== e.arity) {
    Object.defineProperty(t, "length", {
      value: e.arity,
    });
  }
  try {
    if (e && a(e, "constructor") && e.constructor) {
      if (s) {
        Object.defineProperty(t, "prototype", {
          writable: false,
        });
      }
    } else if (t.prototype) {
      t.prototype = undefined;
    }
  } catch (t) {}
  const n = f_enforce(t);
  if (!a(n, "source")) {
    n.source = y(m, typeof r === "string" ? r : "");
  }
  return t;
};
export default A;
Function.prototype.toString = A(function () {
  return (i(this) && f_get(this).source) || c(this);
}, "toString");
