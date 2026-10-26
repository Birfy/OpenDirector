function r(e) {
  return e && typeof e === "object" && !Array.isArray(e);
}
require.d(exports, {
  h: () =>
    function e(n, ...t) {
      if (!t.length) {
        return n;
      }
      let l = t.shift();
      if (r(n) && r(l)) {
        for (let t in l) {
          if (
            !((e) => {
              if (!r(e)) {
                return false;
              }
              let n =
                typeof e.init === "function" ||
                typeof e.changeLanguage === "function" ||
                typeof e.t === "function";
              let t =
                e.isInitialized !== undefined ||
                e.language !== undefined ||
                e.store !== undefined;
              return n || t;
            })(l[t])
          ) {
            if (r(l[t])) {
              if (!n[t]) {
                Object.assign(n, {
                  [t]: {},
                });
              }
              e(n[t], l[t]);
            } else {
              Object.assign(n, {
                [t]: l[t],
              });
            }
          } else {
            Object.assign(n, {
              [t]: l[t],
            });
          }
        }
      }
      return e(n, ...t);
    },
});
