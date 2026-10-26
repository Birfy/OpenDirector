if (require.j == "wl4") var a = require("./module-Dm.js");
export function b(e, t) {
  return (function e(t, r, o) {
    if (t === r) {
      return true;
    }
    if (
      t == null ||
      r == null ||
      typeof t != typeof r ||
      typeof t !== "object" ||
      (a.X3(!o.has(t), "arguments object has circular."),
      o.add(t),
      Array.isArray(t) !== Array.isArray(r))
    ) {
      return false;
    }
    if (Array.isArray(t)) {
      if (t.length !== r.length) {
        return false;
      }
      for (let a = 0; a < t.length; a++) {
        if (!e(t[a], r[a], o)) {
          return false;
        }
      }
    } else {
      let a = Object.keys(t);
      a.sort();
      let i = Object.keys(r);
      i.sort();
      if (!e(a, i, o)) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!e(t[a[i]], r[a[i]], o)) {
          return false;
        }
      }
    }
    o.delete(t);
    return true;
  })(e, t, new Set());
}
