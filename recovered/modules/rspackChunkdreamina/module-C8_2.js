const n = require("./module-Mz_2.js");
const o = require("./module-Y.js");
const i = require("./module-o.js");
const a = require("./module-n_2.js");
const s = require("./module-Nt_3.js");
const u = o("Symbol");
const u_isWellKnownSymbol = u.isWellKnownSymbol;
const f = o("Object", "getOwnPropertyNames");
const l = i(u.prototype.valueOf);
const p = n("wks");
for (let h = 0, v = f(u), d = v.length; h < d; h++) {
  try {
    const g = v[h];
    if (a(u[g])) {
      s(g);
    }
  } catch (e) {}
}
export default function (e) {
  if (u_isWellKnownSymbol && u_isWellKnownSymbol(e)) {
    return true;
  }
  try {
    const t = l(e);
    for (let r = 0, n = f(p), o = n.length; r < o; r++) {
      if (p[n[r]] == t) {
        return true;
      }
    }
  } catch (e) {}
  return false;
}
