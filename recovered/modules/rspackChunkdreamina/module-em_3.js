if (require.j == "wl4") var a = require("./module-iJQ.js");
export const Z = (e, t, r) => {
  r.forEach((t) => {
    if (
      !(
        t.isCacheItem &&
        a.f(e, t.pathname, t == null ? undefined : t.updateTime)
      )
    ) {
      t.outlet = null;
    }
  });
  return r.filter((e) => e.outlet);
};
