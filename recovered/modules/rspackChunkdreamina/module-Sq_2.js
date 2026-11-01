if (require.j == "wl4") var a = require("./module-K8.js");
let o = require.j == "wl4" ? -1 : null;
export const r = (e) => {
  if (e instanceof Error) {
    return a.iX(o, e.message, e);
  }
  if (a.GC(e)) {
    return a.iX(e.code, e.msg, e);
  }
  let t = (() => {
    if (
      !(typeof e === "object" && e && "ret" in e) ||
      (typeof e.ret !== "string" && typeof e.ret !== "number")
    ) {
      return o;
    }
    let t = typeof e.ret === "number" ? e.ret : parseInt(e.ret, 10);
    if (Number.isNaN(t)) {
      return o;
    }
    return t;
  })();
  let r =
    typeof e === "object" && e && "errmsg" in e && typeof e.errmsg === "string"
      ? e.errmsg
      : "unknown error";
  return a.xz(t, r, e);
};
