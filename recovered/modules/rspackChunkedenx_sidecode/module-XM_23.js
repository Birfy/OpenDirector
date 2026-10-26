import n from "./module-J_24.js";
import o from "./module-r9_23.js";
import i from "./module-I_24.js";
import get from "./module-qN_2_23.js";
import s from "./module-X_24.js";
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
    const i = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y",
    };
    if (t) {
      i.hasIndices = "d";
    }
    for (const a in i) {
      o(a, i[a]);
    }
    return (
      Object.getOwnPropertyDescriptor(c_prototype, "flags").get.call(r) !== n ||
      e !== n
    );
  })
) {
  i(c_prototype, "flags", {
    configurable: true,
    get,
  });
}
