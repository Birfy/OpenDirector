export function $() {
  let t;
  let e;
  for (var i = 0, r = "", s = arguments.length; i < s; i++) {
    if (
      (t = arguments[i]) &&
      (e = (function t(e) {
        let i;
        let r;
        let s = "";
        if (typeof e === "string" || typeof e === "number") {
          s += e;
        } else if (typeof e === "object") {
          if (Array.isArray(e)) {
            const n = e.length;
            for (i = 0; i < n; i++) {
              if (e[i] && (r = t(e[i]))) {
                if (s) {
                  s += " ";
                }
                s += r;
              }
            }
          } else {
            for (r in e) {
              if (e[r]) {
                if (s) {
                  s += " ";
                }
                s += r;
              }
            }
          }
        }
        return s;
      })(t))
    ) {
      if (r) {
        r += " ";
      }
      r += e;
    }
  }
  return r;
}
export { $ as A };
