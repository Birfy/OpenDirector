import $ from "./module-A_13.js";
import tt from "./module-r9_12.js";
import te from "./module-J_13.js";
import tr from "./module-O9_12.js";
import tn from "./module-D_2_12.js";
import ti from "./module-Y_13.js";
import to from "./module-e_12.js";
import ta from "./module-ng_13.js";
import ts from "./module-I_13.js";
import tf from "./module-bE_13.js";
const te_Symbol = te.Symbol;
const tc = te_Symbol && te_Symbol.prototype;
if (
  tt &&
  ti(te_Symbol) &&
  (!("description" in tc) || te_Symbol().description !== undefined)
) {
  const th = {};
  const Symbol = function () {
    const J =
      arguments.length < 1 || arguments[0] === undefined
        ? undefined
        : ta(arguments[0]);
    const Z = to(tc, this)
      ? new te_Symbol(J)
      : J === undefined
        ? te_Symbol()
        : te_Symbol(J);
    if (J === "") {
      th[Z] = true;
    }
    return Z;
  };
  tf(Symbol, te_Symbol);
  Symbol.prototype = tc;
  tc.constructor = Symbol;
  const tl =
    String(te_Symbol("description detection")) ===
    "Symbol(description detection)";
  const tp = tr(tc.valueOf);
  const tb = tr(tc.toString);
  const tv = /^Symbol\((.*)\)[^)]+$/;
  const tg = tr("".replace);
  const ty = tr("".slice);
  ts(tc, "description", {
    configurable: true,
    get: function () {
      const J = tp(this);
      if (tn(th, J)) {
        return "";
      }
      const Z = tb(J);
      const Q = tl ? ty(Z, 7, -1) : tg(Z, tv, "$1");
      if (Q === "") {
        return undefined;
      }
      return Q;
    },
  });
  $(
    {
      global: true,
      constructor: true,
      forced: true,
    },
    {
      Symbol,
    },
  );
}
