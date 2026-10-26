import n from "./module-g.js";
import o from "./module-F.js";
import i from "./module-u.js";
import a from "./module-o.js";
import s from "./module-h.js";
import u from "./module-r.js";
import c from "./module-V8.js";
import f from "./module-BC_2.js";
import l from "./module-Tg_2.js";
import p from "./module-cg.js";
const i_Symbol = i.Symbol;
const v = i_Symbol && i_Symbol.prototype;
if (
  o &&
  u(i_Symbol) &&
  (!("description" in v) || i_Symbol().description !== undefined)
) {
  const d = {};
  const Symbol = function () {
    const e =
      arguments.length < 1 || arguments[0] === undefined
        ? undefined
        : f(arguments[0]);
    const t = c(v, this)
      ? new i_Symbol(e)
      : e === undefined
        ? i_Symbol()
        : i_Symbol(e);
    if (e === "") {
      d[t] = true;
    }
    return t;
  };
  p(Symbol, i_Symbol);
  Symbol.prototype = v;
  v.constructor = Symbol;
  const y =
    String(i_Symbol("description detection")) ===
    "Symbol(description detection)";
  const m = a(v.valueOf);
  const x = a(v.toString);
  const b = /^Symbol\((.*)\)[^)]+$/;
  const w = a("".replace);
  const A = a("".slice);
  l(v, "description", {
    configurable: true,
    get: function () {
      const e = m(this);
      if (s(d, e)) {
        return "";
      }
      const t = x(e);
      const r = y ? A(t, 7, -1) : w(t, b, "$1");
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
