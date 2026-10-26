import n from "./module-A_10.js";
import o from "./module-r9_9.js";
import i from "./module-J_10.js";
import a from "./module-O9_9.js";
import s from "./module-D_2_9.js";
import u from "./module-Y_10.js";
import c from "./module-e_9.js";
import f from "./module-ng_10.js";
import l from "./module-I_10.js";
import h from "./module-bE_10.js";
const i_Symbol = i.Symbol;
const d = i_Symbol && i_Symbol.prototype;
if (
  o &&
  u(i_Symbol) &&
  (!("description" in d) || i_Symbol().description !== undefined)
) {
  const p = {};
  const Symbol = function () {
    const t =
      arguments.length < 1 || arguments[0] === undefined
        ? undefined
        : f(arguments[0]);
    const e = c(d, this)
      ? new i_Symbol(t)
      : t === undefined
        ? i_Symbol()
        : i_Symbol(t);
    if (t === "") {
      p[e] = true;
    }
    return e;
  };
  h(Symbol, i_Symbol);
  Symbol.prototype = d;
  d.constructor = Symbol;
  const y =
    String(i_Symbol("description detection")) ===
    "Symbol(description detection)";
  const m = a(d.valueOf);
  const b = a(d.toString);
  const w = /^Symbol\((.*)\)[^)]+$/;
  const A = a("".replace);
  const x = a("".slice);
  l(d, "description", {
    configurable: true,
    get: function () {
      const t = m(this);
      if (s(p, t)) {
        return "";
      }
      const e = b(t);
      const r = y ? x(e, 7, -1) : A(e, w, "$1");
      if (r === "") {
        return undefined;
      }
      return r;
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
