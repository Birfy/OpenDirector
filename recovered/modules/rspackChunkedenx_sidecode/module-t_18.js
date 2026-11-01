import n from "./module-r9_17.js";
import o from "./module-XG_2_17.js";
import i from "./module-L_17.js";
import a from "./module-d_18.js";
import s from "./module-Vm_2_17.js";
const h = "enumerable";
const l = "configurable";
const v = "writable";
export const f = n
  ? i
    ? function (r, t, e) {
        a(r);
        t = s(t);
        a(e);
        if (
          typeof r === "function" &&
          t === "prototype" &&
          "value" in e &&
          v in e &&
          !e[v]
        ) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          if (n && n[v]) {
            r[t] = e.value;
            e = {
              configurable: l in e ? e[l] : n[l],
              enumerable: h in e ? e[h] : n[h],
              writable: false,
            };
          }
        }
        return Object.defineProperty(r, t, e);
      }
    : Object.defineProperty
  : function (r, t, e) {
      a(r);
      t = s(t);
      a(e);
      if (o) {
        try {
          return Object.defineProperty(r, t, e);
        } catch (r) {}
      }
      if ("get" in e || "set" in e) {
        throw TypeError("Accessors not supported");
      }
      if ("value" in e) {
        r[t] = e.value;
      }
      return r;
    };
