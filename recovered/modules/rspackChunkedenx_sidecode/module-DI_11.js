const n = require("./module-K_11.js");
const o = require("./module-YR_10.js");
const i = require("./module-O9_10.js");
const a = require("./module-i_2_10.js");
const s = require("./module-lN_10.js");
const u = o("Symbol");
const u_isWellKnownSymbol = u.isWellKnownSymbol;
const f = o("Object", "getOwnPropertyNames");
const l = i(u.prototype.valueOf);
const h = n("wks");
for (let v = 0, p = f(u), d = p.length; v < d; v++) {
  try {
    const g = p[v];
    if (a(u[g])) {
      s(g);
    }
  } catch (t) {}
}
export default function (t) {
  if (u_isWellKnownSymbol && u_isWellKnownSymbol(t)) {
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
