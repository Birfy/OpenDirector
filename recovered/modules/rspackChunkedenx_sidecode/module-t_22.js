import n from "./module-r9_21.js";
import i from "./module-XG_2_21.js";
import o from "./module-L_21.js";
import s from "./module-d_22.js";
import a from "./module-Vm_2_21.js";
const h = "enumerable";
const l = "configurable";
const v = "writable";
export const f = n
  ? o
    ? function (t, r, e) {
        s(t);
        r = a(r);
        s(e);
        if (
          typeof t === "function" &&
          r === "prototype" &&
          "value" in e &&
          v in e &&
          !e[v]
        ) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          if (n && n[v]) {
            t[r] = e.value;
            e = {
              configurable: l in e ? e[l] : n[l],
              enumerable: h in e ? e[h] : n[h],
              writable: false,
            };
          }
        }
        return Object.defineProperty(t, r, e);
      }
    : Object.defineProperty
  : function (t, r, e) {
      s(t);
      r = a(r);
      s(e);
      if (i) {
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
