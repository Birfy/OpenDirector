if (require.j == "wl4") var a = require("./module-K8.js");
export function I(e, t) {
  return (r) => {
    if (r) {
      if (typeof r === "string") {
        return a.xz(e, r);
      }
      return a.iX(e, r.message, r);
    }
    return a.xz(e, t);
  };
}
