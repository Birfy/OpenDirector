"use strict";
require.d(exports, {
  G: () =>
    function e(t) {
      if (!t || typeof t !== "object" || t instanceof RegExp) {
        return t;
      }
      let r = Array.isArray(t) ? [] : {};
      Object.entries(t).forEach(([t, a]) => {
        r[t] = a && typeof a === "object" ? e(a) : a;
      });
      return r;
    },
});
