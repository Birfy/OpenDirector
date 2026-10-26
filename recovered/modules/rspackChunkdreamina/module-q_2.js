import n from "./module-o.js";
import o from "./module-VV_4.js";
import i from "./module-r.js";
import a from "./module-h.js";
import s from "./module-F.js";
import _u from "./module-A.js";
import c from "./module-VO_3.js";
import f from "./module-G_2.js";
const _u_CONFIGURABLE = _u.CONFIGURABLE;
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
const x = String(String).split("String");
const b = function (e, t, r) {
  if (d(String(t), 0, 7) === "Symbol(") {
    t = "[" + g(String(t), /^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (r && r.getter) {
    t = "get " + t;
  }
  if (r && r.setter) {
    t = "set " + t;
  }
  if (!a(e, "name") || (_u_CONFIGURABLE && e.name !== t)) {
    if (s) {
      Object.defineProperty(e, "name", {
        value: t,
        configurable: true,
      });
    } else {
      e.name = t;
    }
  }
  if (m && r && a(r, "arity") && e.length !== r.arity) {
    Object.defineProperty(e, "length", {
      value: r.arity,
    });
  }
  try {
    if (r && a(r, "constructor") && r.constructor) {
      if (s) {
        Object.defineProperty(e, "prototype", {
          writable: false,
        });
      }
    } else if (e.prototype) {
      e.prototype = undefined;
    }
  } catch (e) {}
  const n = f_enforce(e);
  if (!a(n, "source")) {
    n.source = y(x, typeof t === "string" ? t : "");
  }
  return e;
};
export default b;
Function.prototype.toString = b(function () {
  return (i(this) && f_get(this).source) || c(this);
}, "toString");
