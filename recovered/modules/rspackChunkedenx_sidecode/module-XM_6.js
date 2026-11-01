import n from "./module-J_7.js";
import o from "./module-r9_6.js";
import a from "./module-I_7.js";
import get from "./module-qN_2_6.js";
import s from "./module-X_7.js";
const n_RegExp = n.RegExp;
const c_prototype = n_RegExp.prototype;
if (
  o &&
  s(function () {
    let t = true;
    try {
      n_RegExp(".", "d");
    } catch (r) {
      t = false;
    }
    const r = {};
    let e = "";
    const n = t ? "dgimsy" : "gimsy";
    const o = (t, n) => {
      Object.defineProperty(r, t, {
        get: function () {
          e += n;
          return true;
        },
      });
    };
    const a = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y",
    };
    if (t) {
      a.hasIndices = "d";
    }
    for (const i in a) {
      o(i, a[i]);
    }
    return (
      Object.getOwnPropertyDescriptor(c_prototype, "flags").get.call(r) !== n ||
      e !== n
    );
  })
) {
  a(c_prototype, "flags", {
    configurable: true,
    get,
  });
}
