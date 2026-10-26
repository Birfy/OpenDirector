import n from "./module-A_7.js";
import o from "./module-r9_6.js";
import a from "./module-J_7.js";
import i from "./module-O9_6.js";
import s from "./module-D_2_6.js";
import c from "./module-Y_7.js";
import u from "./module-e_6.js";
import f from "./module-ng_7.js";
import l from "./module-I_7.js";
import h from "./module-bE_7.js";
const a_Symbol = a.Symbol;
const v = a_Symbol && a_Symbol.prototype;
if (
  o &&
  c(a_Symbol) &&
  (!("description" in v) || a_Symbol().description !== undefined)
) {
  const d = {};
  const Symbol = function () {
    const t =
      arguments.length < 1 || arguments[0] === undefined
        ? undefined
        : f(arguments[0]);
    const r = u(v, this)
      ? new a_Symbol(t)
      : t === undefined
        ? a_Symbol()
        : a_Symbol(t);
    if (t === "") {
      d[r] = true;
    }
    return r;
  };
  h(Symbol, a_Symbol);
  Symbol.prototype = v;
  v.constructor = Symbol;
  const y =
    String(a_Symbol("description detection")) ===
    "Symbol(description detection)";
  const m = i(v.valueOf);
  const b = i(v.toString);
  const A = /^Symbol\((.*)\)[^)]+$/;
  const w = i("".replace);
  const x = i("".slice);
  l(v, "description", {
    configurable: true,
    get: function () {
      const t = m(this);
      if (s(d, t)) {
        return "";
      }
      const r = b(t);
      const e = y ? x(r, 7, -1) : w(r, A, "$1");
      if (e === "") {
        return undefined;
      }
      return e;
    },
  });
  n(
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
