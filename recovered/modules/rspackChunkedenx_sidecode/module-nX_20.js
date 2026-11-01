import n from "./module-O9_20.js";
import o from "./module-X_21.js";
import i from "./module-Y_21.js";
import a from "./module-D_2_20.js";
import s from "./module-r9_20.js";
import _c from "./module-Vn_20.js";
import u from "./module-iJ_20.js";
import f from "./module-b_20.js";
const _c_CONFIGURABLE = _c.CONFIGURABLE;
const f_enforce = f.enforce;
const f_get = f.get;
const d = n("".slice);
const g = n("".replace);
const y = n([].join);
const m =
  s &&
  !o(function () {
    return (
      Object.defineProperty(function () {}, "length", {
        value: 8,
      }).length !== 8
    );
  });
const b = String(String).split("String");
const w = function (t, r, e) {
  if (d(String(r), 0, 7) === "Symbol(") {
    r = "[" + g(String(r), /^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (e && e.getter) {
    r = "get " + r;
  }
  if (e && e.setter) {
    r = "set " + r;
  }
  if (!a(t, "name") || (_c_CONFIGURABLE && t.name !== r)) {
    if (s) {
      Object.defineProperty(t, "name", {
        value: r,
        configurable: true,
      });
    } else {
      t.name = r;
    }
  }
  if (m && e && a(e, "arity") && t.length !== e.arity) {
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
    n.source = y(b, typeof r === "string" ? r : "");
  }
  return t;
};
export default w;
Function.prototype.toString = w(function () {
  return (i(this) && f_get(this).source) || u(this);
}, "toString");
