import n from "./module-A_17.js";
import o from "./module-r9_16.js";
import i from "./module-J_17.js";
import a from "./module-O9_16.js";
import s from "./module-D_2_16.js";
import u from "./module-Y_17.js";
import c from "./module-e_16.js";
import f from "./module-ng_17.js";
import l from "./module-I_17.js";
import h from "./module-bE_17.js";
const i_Symbol = i.Symbol;
const p = i_Symbol && i_Symbol.prototype;
if (
  o &&
  u(i_Symbol) &&
  (!("description" in p) || i_Symbol().description !== undefined)
) {
  const d = {};
  const Symbol = function () {
    const t =
      arguments.length < 1 || arguments[0] === undefined
        ? undefined
        : f(arguments[0]);
    const r = c(p, this)
      ? new i_Symbol(t)
      : t === undefined
        ? i_Symbol()
        : i_Symbol(t);
    if (t === "") {
      d[r] = true;
    }
    return r;
  };
  h(Symbol, i_Symbol);
  Symbol.prototype = p;
  p.constructor = Symbol;
  const y =
    String(i_Symbol("description detection")) ===
    "Symbol(description detection)";
  const m = a(p.valueOf);
  const b = a(p.toString);
  const A = /^Symbol\((.*)\)[^)]+$/;
  const x = a("".replace);
  const w = a("".slice);
  l(p, "description", {
    configurable: true,
    get: function () {
      const t = m(this);
      if (s(d, t)) {
        return "";
      }
      const r = b(t);
      const e = y ? w(r, 7, -1) : x(r, A, "$1");
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
