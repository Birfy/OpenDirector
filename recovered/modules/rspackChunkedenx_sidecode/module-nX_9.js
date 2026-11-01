import n from "./module-O9_9.js";
import o from "./module-X_10.js";
import i from "./module-Y_10.js";
import a from "./module-D_2_9.js";
import s from "./module-r9_9.js";
import _u from "./module-Vn_9.js";
import c from "./module-iJ_9.js";
import f from "./module-b_9.js";
const _u_CONFIGURABLE = _u.CONFIGURABLE;
const f_enforce = f.enforce;
const f_get = f.get;
const p = n("".slice);
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
const w = function (t, e, r) {
  if (p(String(e), 0, 7) === "Symbol(") {
    e = "[" + g(String(e), /^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (r && r.getter) {
    e = "get " + e;
  }
  if (r && r.setter) {
    e = "set " + e;
  }
  if (!a(t, "name") || (_u_CONFIGURABLE && t.name !== e)) {
    if (s) {
      Object.defineProperty(t, "name", {
        value: e,
        configurable: true,
      });
    } else {
      t.name = e;
    }
  }
  if (m && r && a(r, "arity") && t.length !== r.arity) {
    Object.defineProperty(t, "length", {
      value: r.arity,
    });
  }
  try {
    if (r && a(r, "constructor") && r.constructor) {
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
    n.source = y(b, typeof e === "string" ? e : "");
  }
  return t;
};
export default w;
Function.prototype.toString = w(function () {
  return (i(this) && f_get(this).source) || c(this);
}, "toString");
