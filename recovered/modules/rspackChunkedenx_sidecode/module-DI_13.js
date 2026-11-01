const $ = require("./module-K_13.js");
const tt = require("./module-YR_12.js");
const te = require("./module-O9_12.js");
const tr = require("./module-i_2_12.js");
const tn = require("./module-lN_12.js");
const ti = tt("Symbol");
const ti_isWellKnownSymbol = ti.isWellKnownSymbol;
const ta = tt("Object", "getOwnPropertyNames");
const ts = te(ti.prototype.valueOf);
const tf = $("wks");
for (let tu = 0, tc = ta(ti), th = tc.length; tu < th; tu++) {
  try {
    const td = tc[tu];
    if (tr(ti[td])) {
      tn(td);
    }
  } catch (J) {}
}
export default function (J) {
  if (ti_isWellKnownSymbol && ti_isWellKnownSymbol(J)) {
    return true;
  }
  try {
    const Z = ts(J);
    for (let Q = 0, $ = ta(tf), tt = $.length; Q < tt; Q++) {
      if (tf[$[Q]] == Z) {
        return true;
      }
    }
  } catch (J) {}
  return false;
}
