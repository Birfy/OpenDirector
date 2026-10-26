import $ from "./module-r9_12.js";
import tt from "./module-XG_2_12.js";
import te from "./module-L_12.js";
import tr from "./module-d_13.js";
import tn from "./module-Vm_2_12.js";
const ts = "enumerable";
const tf = "configurable";
const tu = "writable";
export const f = $
  ? te
    ? function (J, Z, Q) {
        tr(J);
        Z = tn(Z);
        tr(Q);
        if (
          typeof J === "function" &&
          Z === "prototype" &&
          "value" in Q &&
          tu in Q &&
          !Q[tu]
        ) {
          const $ = Object.getOwnPropertyDescriptor(J, Z);
          if ($ && $[tu]) {
            J[Z] = Q.value;
            Q = {
              configurable: tf in Q ? Q[tf] : $[tf],
              enumerable: ts in Q ? Q[ts] : $[ts],
              writable: false,
            };
          }
        }
        return Object.defineProperty(J, Z, Q);
      }
    : Object.defineProperty
  : function (J, Z, Q) {
      tr(J);
      Z = tn(Z);
      tr(Q);
      if (tt) {
        try {
          return Object.defineProperty(J, Z, Q);
        } catch (J) {}
      }
      if ("get" in Q || "set" in Q) {
        throw TypeError("Accessors not supported");
      }
      if ("value" in Q) {
        J[Z] = Q.value;
      }
      return J;
    };
