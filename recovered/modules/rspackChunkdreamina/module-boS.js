export function uc(e) {
  if (e) {
    return e.replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`);
  }
  return "";
}
export function Cb(e) {
  if (e) {
    return e.replace(/_([a-z])/g, (e, t) => t.toUpperCase());
  }
  return "";
}
Object.defineProperty(exports, "Go", {
  enumerable: true,
  get: () =>
    function e(t) {
      if (t === null || typeof t !== "object") {
        return t;
      }
      if (t instanceof Date) {
        return new Date(t.getTime());
      }
      if (t instanceof Array) {
        return t.map((t) => e(t));
      }
      if (typeof t === "object") {
        let r = {};
        for (let a in t) {
          if (Object.prototype.hasOwnProperty.call(t, a)) {
            r[a] = e(t[a]);
          }
        }
        return r;
      }
      return t;
    },
});
Object.defineProperty(exports, "wN", {
  enumerable: true,
  get: () =>
    function e(t, r) {
      if (t && typeof t === "object") {
        for (let a of Object.keys(t)) {
          let o = r(a);
          if (o !== a) {
            t[o] = t[a];
            delete t[a];
          }
          e(t[o], r);
        }
      }
      return t;
    },
});
