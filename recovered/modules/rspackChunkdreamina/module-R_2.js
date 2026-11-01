import n from "./module-F.js";
import o from "./module-Oq_4.js";
import i from "./module-N5_2.js";
import a from "./module-IF_2.js";
import s from "./module-c_2.js";
const l = "enumerable";
const p = "configurable";
const h = "writable";
export const f = n
  ? i
    ? function (e, t, r) {
        a(e);
        t = s(t);
        a(r);
        if (
          typeof e === "function" &&
          t === "prototype" &&
          "value" in r &&
          h in r &&
          !r[h]
        ) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          if (n && n[h]) {
            e[t] = r.value;
            r = {
              configurable: p in r ? r[p] : n[p],
              enumerable: l in r ? r[l] : n[l],
              writable: false,
            };
          }
        }
        return Object.defineProperty(e, t, r);
      }
    : Object.defineProperty
  : function (e, t, r) {
      a(e);
      t = s(t);
      a(r);
      if (o) {
        try {
          return Object.defineProperty(e, t, r);
        } catch (e) {}
      }
      if ("get" in r || "set" in r) {
        throw TypeError("Accessors not supported");
      }
      if ("value" in r) {
        e[t] = r.value;
      }
      return e;
    };
