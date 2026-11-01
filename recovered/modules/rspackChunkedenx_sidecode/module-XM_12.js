import $ from "./module-J_13.js";
import tt from "./module-r9_12.js";
import te from "./module-I_13.js";
import get from "./module-qN_2_12.js";
import tn from "./module-X_13.js";
const $_RegExp = $.RegExp;
const ti_prototype = $_RegExp.prototype;
if (
  tt &&
  tn(function () {
    let J = true;
    try {
      $_RegExp(".", "d");
    } catch (Z) {
      J = false;
    }
    const Z = {};
    let Q = "";
    const $ = J ? "dgimsy" : "gimsy";
    const tt = (J, $) => {
      Object.defineProperty(Z, J, {
        get: function () {
          Q += $;
          return true;
        },
      });
    };
    const te = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y",
    };
    if (J) {
      te.hasIndices = "d";
    }
    for (const tr in te) {
      tt(tr, te[tr]);
    }
    return (
      Object.getOwnPropertyDescriptor(ti_prototype, "flags").get.call(Z) !==
        $ || Q !== $
    );
  })
) {
  te(ti_prototype, "flags", {
    configurable: true,
    get,
  });
}
