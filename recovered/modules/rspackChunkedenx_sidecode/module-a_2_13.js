import n from "./module-A_14.js";
import o from "./module-r9_13.js";
import i from "./module-J_14.js";
import a from "./module-O9_13.js";
import s from "./module-D_2_13.js";
import u from "./module-Y_14.js";
import c from "./module-e_13.js";
import f from "./module-ng_14.js";
import h from "./module-I_14.js";
import l from "./module-bE_14.js";
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
  l(Symbol, i_Symbol);
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
  h(p, "description", {
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
