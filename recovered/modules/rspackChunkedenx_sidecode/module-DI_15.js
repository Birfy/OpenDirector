const n = require("./module-K_15.js");
const o = require("./module-YR_14.js");
const i = require("./module-O9_14.js");
const a = require("./module-i_2_14.js");
const s = require("./module-lN_14.js");
const c = o("Symbol");
const c_isWellKnownSymbol = c.isWellKnownSymbol;
const f = o("Object", "getOwnPropertyNames");
const l = i(c.prototype.valueOf);
const h = n("wks");
for (let v = 0, p = f(c), d = p.length; v < d; v++) {
  try {
    const g = p[v];
    if (a(c[g])) {
      s(g);
    }
  } catch (t) {}
}
export default function (t) {
  if (c_isWellKnownSymbol && c_isWellKnownSymbol(t)) {
    return true;
  }
  try {
    const r = l(t);
    for (let e = 0, n = f(h), o = n.length; e < o; e++) {
      if (h[n[e]] == r) {
        return true;
      }
    }
  } catch (t) {}
  return false;
}
