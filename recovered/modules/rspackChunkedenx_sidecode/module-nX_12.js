import $ from "./module-O9_12.js";
import tt from "./module-X_13.js";
import te from "./module-Y_13.js";
import tr from "./module-D_2_12.js";
import tn from "./module-r9_12.js";
import _ti from "./module-Vn_12.js";
import to from "./module-iJ_12.js";
import ta from "./module-b_12.js";
const _ti_CONFIGURABLE = _ti.CONFIGURABLE;
const ta_enforce = ta.enforce;
const ta_get = ta.get;
const th = $("".slice);
const td = $("".replace);
const tl = $([].join);
const tp =
  tn &&
  !tt(function () {
    return (
      Object.defineProperty(function () {}, "length", {
        value: 8,
      }).length !== 8
    );
  });
const tb = String(String).split("String");
const tv = function (J, Z, Q) {
  if (th(String(Z), 0, 7) === "Symbol(") {
    Z = "[" + td(String(Z), /^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (Q && Q.getter) {
    Z = "get " + Z;
  }
  if (Q && Q.setter) {
    Z = "set " + Z;
  }
  if (!tr(J, "name") || (_ti_CONFIGURABLE && J.name !== Z)) {
    if (tn) {
      Object.defineProperty(J, "name", {
        value: Z,
        configurable: true,
      });
    } else {
      J.name = Z;
    }
  }
  if (tp && Q && tr(Q, "arity") && J.length !== Q.arity) {
    Object.defineProperty(J, "length", {
      value: Q.arity,
    });
  }
  try {
    if (Q && tr(Q, "constructor") && Q.constructor) {
      if (tn) {
        Object.defineProperty(J, "prototype", {
          writable: false,
        });
      }
    } else if (J.prototype) {
      J.prototype = undefined;
    }
  } catch (J) {}
  const $ = ta_enforce(J);
  if (!tr($, "source")) {
    $.source = tl(tb, typeof Z === "string" ? Z : "");
  }
  return J;
};
export default tv;
Function.prototype.toString = tv(function () {
  return (te(this) && ta_get(this).source) || to(this);
}, "toString");
