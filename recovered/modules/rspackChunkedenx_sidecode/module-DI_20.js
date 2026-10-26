const n = require("./module-K_20.js");
const o = require("./module-YR_19.js");
const i = require("./module-O9_19.js");
const a = require("./module-i_2_19.js");
const s = require("./module-lN_19.js");
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
  } catch (r) {}
}
export default function (r) {
  if (u_isWellKnownSymbol && u_isWellKnownSymbol(r)) {
    return true;
  }
  try {
    const t = l(r);
    for (let e = 0, n = f(h), o = n.length; e < o; e++) {
      if (h[n[e]] == t) {
        return true;
      }
    }
  } catch (r) {}
  return false;
}
