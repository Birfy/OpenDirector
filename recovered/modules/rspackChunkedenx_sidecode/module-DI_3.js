const n = require("./module-K_3.js");
const i = require("./module-YR_2.js");
const o = require("./module-O9_2.js");
const s = require("./module-i_2_2.js");
const a = require("./module-lN_2.js");
const u = i("Symbol");
const u_isWellKnownSymbol = u.isWellKnownSymbol;
const f = i("Object", "getOwnPropertyNames");
const h = o(u.prototype.valueOf);
const l = n("wks");
for (let v = 0, p = f(u), d = p.length; v < d; v++) {
  try {
    const g = p[v];
    if (s(u[g])) {
      a(g);
    }
  } catch (t) {}
}
export default function (t) {
  if (u_isWellKnownSymbol && u_isWellKnownSymbol(t)) {
    return true;
  }
  try {
    const r = h(t);
    for (let e = 0, n = f(l), i = n.length; e < i; e++) {
      if (l[n[e]] == r) {
        return true;
      }
    }
  } catch (t) {}
  return false;
}
