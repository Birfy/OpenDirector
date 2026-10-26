if (require.j == "wl4") var a = require("uD");
if (require.j == "wl4") var o = require("mL");
if (require.j == "wl4") var i = require("gr");
if (require.j == "wl4") var n = require("./module-NT_2.js");
function c(e, t) {
  if (e && typeof e === "object") {
    for (let r of Object.keys(e)) {
      let a = t(r);
      if (a !== r) {
        e[a] = e[r];
        delete e[r];
      }
      c(e[a], t);
    }
  }
  return e;
}
export const o = (e, t, r = true) => c(r ? o.A(e) : e, t != null ? t : i.A);
export const w = (e, t) => c(t ? n.G(e) : e, a.A);
