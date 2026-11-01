import n from "./module-r9_6.js";
import o from "./module-XG_2_6.js";
import a from "./module-L_6.js";
import i from "./module-d_7.js";
import s from "./module-Vm_2_6.js";
const l = "enumerable";
const h = "configurable";
const p = "writable";
export const f = n
  ? a
    ? function (t, r, e) {
        i(t);
        r = s(r);
        i(e);
        if (
          typeof t === "function" &&
          r === "prototype" &&
          "value" in e &&
          p in e &&
          !e[p]
        ) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          if (n && n[p]) {
            t[r] = e.value;
            e = {
              configurable: h in e ? e[h] : n[h],
              enumerable: l in e ? e[l] : n[l],
              writable: false,
            };
          }
        }
        return Object.defineProperty(t, r, e);
      }
    : Object.defineProperty
  : function (t, r, e) {
      i(t);
      r = s(r);
      i(e);
      if (o) {
        try {
          return Object.defineProperty(t, r, e);
        } catch (t) {}
      }
      if ("get" in e || "set" in e) {
        throw TypeError("Accessors not supported");
      }
      if ("value" in e) {
        t[r] = e.value;
      }
      return t;
    };
