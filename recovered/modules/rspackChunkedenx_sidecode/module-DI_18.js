const n = require("./module-K_18.js");
const o = require("./module-YR_17.js");
const i = require("./module-O9_17.js");
const a = require("./module-i_2_17.js");
const s = require("./module-lN_17.js");
const u = o("Symbol");
const u_isWellKnownSymbol = u.isWellKnownSymbol;
const f = o("Object", "getOwnPropertyNames");
const h = i(u.prototype.valueOf);
const l = n("wks");
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
    const t = h(r);
    for (let e = 0, n = f(l), o = n.length; e < o; e++) {
      if (l[n[e]] == t) {
        return true;
      }
    }
  } catch (r) {}
  return false;
}
