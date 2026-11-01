import n from "./module-A_6.js";
import i from "./module-r9_5.js";
import o from "./module-J_6.js";
import s from "./module-O9_5.js";
import a from "./module-D_2_5.js";
import u from "./module-Y_6.js";
import c from "./module-e_5.js";
import f from "./module-ng_6.js";
import h from "./module-I_6.js";
import l from "./module-bE_6.js";
const o_Symbol = o.Symbol;
const p = o_Symbol && o_Symbol.prototype;
if (
  i &&
  u(o_Symbol) &&
  (!("description" in p) || o_Symbol().description !== undefined)
) {
  const d = {};
  const Symbol = function () {
    const t =
      arguments.length < 1 || arguments[0] === undefined
        ? undefined
        : f(arguments[0]);
    const r = c(p, this)
      ? new o_Symbol(t)
      : t === undefined
        ? o_Symbol()
        : o_Symbol(t);
    if (t === "") {
      d[r] = true;
    }
    return r;
  };
  l(Symbol, o_Symbol);
  Symbol.prototype = p;
  p.constructor = Symbol;
  const y =
    String(o_Symbol("description detection")) ===
    "Symbol(description detection)";
  const b = s(p.valueOf);
  const m = s(p.toString);
  const A = /^Symbol\((.*)\)[^)]+$/;
  const x = s("".replace);
  const w = s("".slice);
  h(p, "description", {
    configurable: true,
    get: function () {
      const t = b(this);
      if (a(d, t)) {
        return "";
      }
      const r = m(t);
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
