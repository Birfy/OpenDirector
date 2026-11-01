import n from "./module-A.js";
import o from "./module-r9.js";
import i from "./module-J.js";
import a from "./module-O9.js";
import s from "./module-D_2.js";
import u from "./module-Y.js";
import c from "./module-e.js";
import f from "./module-ng.js";
import h from "./module-I.js";
import l from "./module-bE.js";
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
      const t = b(this);
      if (s(d, t)) {
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
