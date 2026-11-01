import n from "./module-r9.js";
import o from "./module-XG_2.js";
import i from "./module-L.js";
import a from "./module-d.js";
import s from "./module-Vm_2.js";
const h = "enumerable";
const l = "configurable";
const v = "writable";
export const f = n
  ? i
    ? function (t, r, e) {
        a(t);
        r = s(r);
        a(e);
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
      a(t);
      r = s(r);
      a(e);
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
