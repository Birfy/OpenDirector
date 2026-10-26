const n = require("./module-K.js");
const o = require("./module-YR.js");
const i = require("./module-O9.js");
const a = require("./module-i_2.js");
const s = require("./module-lN.js");
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
  } catch (t) {}
}
export default function (t) {
  if (u_isWellKnownSymbol && u_isWellKnownSymbol(t)) {
    return true;
  }
  try {
    const r = h(t);
    for (let e = 0, n = f(l), o = n.length; e < o; e++) {
      if (l[n[e]] == r) {
        return true;
      }
    }
  } catch (t) {}
  return false;
}
