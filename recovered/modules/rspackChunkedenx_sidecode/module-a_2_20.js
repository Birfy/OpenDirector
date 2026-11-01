import n from "./module-A_21.js";
import o from "./module-r9_20.js";
import i from "./module-J_21.js";
import a from "./module-O9_20.js";
import s from "./module-D_2_20.js";
import c from "./module-Y_21.js";
import u from "./module-e_20.js";
import f from "./module-ng_21.js";
import l from "./module-I_21.js";
import h from "./module-bE_21.js";
const i_Symbol = i.Symbol;
const p = i_Symbol && i_Symbol.prototype;
if (
  o &&
  c(i_Symbol) &&
  (!("description" in p) || i_Symbol().description !== undefined)
) {
  const d = {};
  const Symbol = function () {
    const t =
      arguments.length < 1 || arguments[0] === undefined
        ? undefined
        : f(arguments[0]);
    const r = u(p, this)
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
  const w = /^Symbol\((.*)\)[^)]+$/;
  const A = a("".replace);
  const x = a("".slice);
  l(p, "description", {
    configurable: true,
    get: function () {
      const t = m(this);
      if (s(d, t)) {
        return "";
      }
      const r = b(t);
      const e = y ? x(r, 7, -1) : A(r, w, "$1");
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
