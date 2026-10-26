import n from "./module-J_18.js";
import o from "./module-r9_17.js";
import i from "./module-I_18.js";
import get from "./module-qN_2_17.js";
import s from "./module-X_18.js";
const n_RegExp = n.RegExp;
const u_prototype = n_RegExp.prototype;
if (
  o &&
  s(function () {
    let r = true;
    try {
      n_RegExp(".", "d");
    } catch (t) {
      r = false;
    }
    const t = {};
    let e = "";
    const n = r ? "dgimsy" : "gimsy";
    const o = (r, n) => {
      Object.defineProperty(t, r, {
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
    if (r) {
      i.hasIndices = "d";
    }
    for (const a in i) {
      o(a, i[a]);
    }
    return (
      Object.getOwnPropertyDescriptor(u_prototype, "flags").get.call(t) !== n ||
      e !== n
    );
  })
) {
  i(u_prototype, "flags", {
    configurable: true,
    get,
  });
}
