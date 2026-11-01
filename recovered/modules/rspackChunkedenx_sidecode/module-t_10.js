import n from "./module-r9_9.js";
import o from "./module-XG_2_9.js";
import i from "./module-L_9.js";
import a from "./module-d_10.js";
import s from "./module-Vm_2_9.js";
const l = "enumerable";
const h = "configurable";
const v = "writable";
export const f = n
  ? i
    ? function (t, e, r) {
        a(t);
        e = s(e);
        a(r);
        if (
          typeof t === "function" &&
          e === "prototype" &&
          "value" in r &&
          v in r &&
          !r[v]
        ) {
          const n = Object.getOwnPropertyDescriptor(t, e);
          if (n && n[v]) {
            t[e] = r.value;
            r = {
              configurable: h in r ? r[h] : n[h],
              enumerable: l in r ? r[l] : n[l],
              writable: false,
            };
          }
        }
        return Object.defineProperty(t, e, r);
      }
    : Object.defineProperty
  : function (t, e, r) {
      a(t);
      e = s(e);
      a(r);
      if (o) {
        try {
          return Object.defineProperty(t, e, r);
        } catch (t) {}
      }
      if ("get" in r || "set" in r) {
        throw TypeError("Accessors not supported");
      }
      if ("value" in r) {
        t[e] = r.value;
      }
      return t;
    };
