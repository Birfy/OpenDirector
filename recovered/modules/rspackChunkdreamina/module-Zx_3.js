import n from "./module-u.js";
import o from "./module-F.js";
import i from "./module-Tg_2.js";
import get from "./module-qs_2.js";
import s from "./module-VV_4.js";
const n_RegExp = n.RegExp;
const u_prototype = n_RegExp.prototype;
if (
  o &&
  s(function () {
    let e = true;
    try {
      n_RegExp(".", "d");
    } catch (t) {
      e = false;
    }
    const t = {};
    let r = "";
    const n = e ? "dgimsy" : "gimsy";
    const o = (e, n) => {
      Object.defineProperty(t, e, {
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
    if (e) {
      i.hasIndices = "d";
    }
    for (const a in i) {
      o(a, i[a]);
    }
    return (
      Object.getOwnPropertyDescriptor(u_prototype, "flags").get.call(t) !== n ||
      r !== n
    );
  })
) {
  i(u_prototype, "flags", {
    configurable: true,
    get,
  });
}
