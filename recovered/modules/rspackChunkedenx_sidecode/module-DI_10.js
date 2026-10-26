const n = require("./module-K_10.js");
const o = require("./module-YR_9.js");
const i = require("./module-O9_9.js");
const a = require("./module-i_2_9.js");
const s = require("./module-lN_9.js");
const u = o("Symbol");
const u_isWellKnownSymbol = u.isWellKnownSymbol;
const f = o("Object", "getOwnPropertyNames");
const l = i(u.prototype.valueOf);
const h = n("wks");
for (let v = 0, d = f(u), p = d.length; v < p; v++) {
  try {
    const g = d[v];
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
    const e = l(t);
    for (let r = 0, n = f(h), o = n.length; r < o; r++) {
      if (h[n[r]] == e) {
        return true;
      }
    }
  } catch (t) {}
  return false;
}
