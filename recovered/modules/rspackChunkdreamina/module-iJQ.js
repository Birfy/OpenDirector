if (require.j == "wl4") var a = require("aYe");
if (require.j == "wl4") var o = require("./module-ld_3.js");
export const f = (e, t, r) => {
  for (let i of e) {
    if (a.B6(i.path, t)) {
      let e = o._(i.isNeedCache, false);
      let t = !!o._(i.content, null);
      let a = !r || r === i._updateTime;
      return e && t && a;
    }
  }
  return false;
};
