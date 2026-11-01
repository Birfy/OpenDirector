(() => {
  "use strict";
  const hasOwnProperty = {}.hasOwnProperty;
  function t() {
    const e = [];
    for (let r = 0; r < arguments.length; r++) {
      const i = arguments[r];
      if (i) {
        const a = typeof i;
        if (a === "string" || a === "number") {
          e.push(i);
        } else if (Array.isArray(i)) {
          if (i.length) {
            const o = t.apply(null, i);
            if (o) {
              e.push(o);
            }
          }
        } else if (a === "object") {
          if (
            i.toString !== Object.prototype.toString &&
            !i.toString.toString().includes("[native code]")
          ) {
            e.push(i.toString());
            continue;
          }
          for (const s in i) {
            if (hasOwnProperty.call(i, s) && i[s]) {
              e.push(s);
            }
          }
        }
      }
    }
    return e.join(" ");
  }
  if (module.exports) {
    t.default = t;
    module.exports = t;
  } else if (
    typeof define === "function" &&
    typeof define.amd === "object" &&
    define.amd
  ) {
    define("classnames", [], function () {
      return t;
    });
  } else {
    window.classNames = t;
  }
})();
