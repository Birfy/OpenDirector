const n = require("./module-K_7.js");
const o = require("./module-YR_6.js");
const a = require("./module-O9_6.js");
const i = require("./module-i_2_6.js");
const s = require("./module-lN_6.js");
const c = o("Symbol");
const c_isWellKnownSymbol = c.isWellKnownSymbol;
const f = o("Object", "getOwnPropertyNames");
const l = a(c.prototype.valueOf);
const h = n("wks");
for (let p = 0, v = f(c), d = v.length; p < d; p++) {
  try {
    const g = v[p];
    if (i(c[g])) {
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
