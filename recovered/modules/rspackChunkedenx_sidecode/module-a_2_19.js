import n from "./module-A_20.js";
import o from "./module-r9_19.js";
import i from "./module-J_20.js";
import a from "./module-O9_19.js";
import s from "./module-D_2_19.js";
import u from "./module-Y_20.js";
import c from "./module-e_19.js";
import f from "./module-ng_20.js";
import l from "./module-I_20.js";
import h from "./module-bE_20.js";
const i_Symbol = i.Symbol;
const p = i_Symbol && i_Symbol.prototype;
if (
  o &&
  u(i_Symbol) &&
  (!("description" in p) || i_Symbol().description !== undefined)
) {
  const d = {};
  const Symbol = function () {
    const r =
      arguments.length < 1 || arguments[0] === undefined
        ? undefined
        : f(arguments[0]);
    const t = c(p, this)
      ? new i_Symbol(r)
      : r === undefined
        ? i_Symbol()
        : i_Symbol(r);
    if (r === "") {
      d[t] = true;
    }
    return t;
  };
  h(Symbol, i_Symbol);
  Symbol.prototype = p;
  p.constructor = Symbol;
  const y =
    String(i_Symbol("description detection")) ===
    "Symbol(description detection)";
  const b = a(p.valueOf);
  const m = a(p.toString);
  const A = /^Symbol\((.*)\)[^)]+$/;
  const x = a("".replace);
  const w = a("".slice);
  l(p, "description", {
    configurable: true,
    get: function () {
      const r = b(this);
      if (s(d, r)) {
        return "";
      }
      const t = m(r);
      const e = y ? w(t, 7, -1) : x(t, A, "$1");
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
