import n from "./module-J_9.js";
import i from "./module-r9_8.js";
import o from "./module-I_9.js";
import get from "./module-qN_2_8.js";
import a from "./module-X_9.js";
const n_RegExp = n.RegExp;
const u_prototype = n_RegExp.prototype;
if (
  i &&
  a(function () {
    let t = true;
    try {
      n_RegExp(".", "d");
    } catch (r) {
      t = false;
    }
    const r = {};
    let e = "";
    const n = t ? "dgimsy" : "gimsy";
    const i = (t, n) => {
      Object.defineProperty(r, t, {
        get: function () {
          e += n;
          return true;
        },
      });
    };
    const o = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y",
    };
    if (t) {
      o.hasIndices = "d";
    }
    for (const s in o) {
      i(s, o[s]);
    }
    return (
      Object.getOwnPropertyDescriptor(u_prototype, "flags").get.call(r) !== n ||
      e !== n
    );
  })
) {
  o(u_prototype, "flags", {
    configurable: true,
    get,
  });
}
