import n from "./module-J_10.js";
import o from "./module-r9_9.js";
import i from "./module-I_10.js";
import get from "./module-qN_2_9.js";
import s from "./module-X_10.js";
const n_RegExp = n.RegExp;
const u_prototype = n_RegExp.prototype;
if (
  o &&
  s(function () {
    let t = true;
    try {
      n_RegExp(".", "d");
    } catch (e) {
      t = false;
    }
    const e = {};
    let r = "";
    const n = t ? "dgimsy" : "gimsy";
    const o = (t, n) => {
      Object.defineProperty(e, t, {
        get: function () {
          r += n;
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
      Object.getOwnPropertyDescriptor(u_prototype, "flags").get.call(e) !== n ||
      r !== n
    );
  })
) {
  i(u_prototype, "flags", {
    configurable: true,
    get,
  });
}
