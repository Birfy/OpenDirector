if (require.j == "wl4") var a = require("./module-K8.js");
export function c(e, t = -1, r = "unknown error") {
  t = typeof e === "object" && (e == null ? undefined : e.ret) ? e.ret : t;
  r =
    typeof e === "object" && (e == null ? undefined : e.errmsg) ? e.errmsg : r;
  return a.iX(t, r, e);
}
let i = require.j == "wl4" ? -1 : null;
export const r = (e) => {
  if (e instanceof Error) {
    return a.iX(i, e.message, e);
  }
  if (a.GC(e)) {
    return a.iX(e.code, e.msg, e);
  }
  let t = (() => {
    if (
      !(typeof e === "object" && e && "ret" in e) ||
      (typeof e.ret !== "string" && typeof e.ret !== "number")
    ) {
      return i;
    }
    let t = typeof e.ret === "number" ? e.ret : parseInt(e.ret, 10);
    if (Number.isNaN(t)) {
      return i;
    }
    return t;
  })();
  let r =
    typeof e === "object" && e && "errmsg" in e && typeof e.errmsg === "string"
      ? e.errmsg
      : "unknown error";
  return a.xz(t, r, e);
};
