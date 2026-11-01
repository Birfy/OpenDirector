import n from "./module-J_17.js";
import o from "./module-r9_16.js";
import i from "./module-I_17.js";
import get from "./module-qN_2_16.js";
import s from "./module-X_17.js";
const n_RegExp = n.RegExp;
const u_prototype = n_RegExp.prototype;
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
      Object.getOwnPropertyDescriptor(u_prototype, "flags").get.call(r) !== n ||
      e !== n
    );
  })
) {
  i(u_prototype, "flags", {
    configurable: true,
    get,
  });
}
