export function $() {
  let e;
  let t;
  for (var i = 0, r = "", n = arguments.length; i < n; i++) {
    if (
      (e = arguments[i]) &&
      (t = (function e(t) {
        let i;
        let r;
        let n = "";
        if (typeof t === "string" || typeof t === "number") {
          n += t;
        } else if (typeof t === "object") {
          if (Array.isArray(t)) {
            const a = t.length;
            for (i = 0; i < a; i++) {
              if (t[i] && (r = e(t[i]))) {
                if (n) {
                  n += " ";
                }
                n += r;
              }
            }
          } else {
            for (r in t) {
              if (t[r]) {
                if (n) {
                  n += " ";
                }
                n += r;
              }
            }
          }
        }
        return n;
      })(e))
    ) {
      if (r) {
        r += " ";
      }
      r += t;
    }
  }
  return r;
}
export { $ as A };
