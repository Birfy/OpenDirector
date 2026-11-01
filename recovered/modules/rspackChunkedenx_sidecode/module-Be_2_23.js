import n from "./module-A_24.js";
import o from "./module-O9_23.js";
import i from "./module-S_23.js";
import a from "./module-y_2_23.js";
import s from "./module-D_2_23.js";
import { f as f_1 } from "./module-t_24.js";
import u from "./module-vV_23.js";
import { f as getOwnPropertyNames } from "./module-oI_24.js";
import l from "./module-QC_23.js";
import h from "./module-o_23.js";
import v from "./module-eP_23.js";
let p = false;
const d = h("meta");
let g = 0;
const y = (t) => {
  f_1(t, d, {
    value: {
      objectID: `O${g++}`,
      weakData: {},
    },
  });
};
var b = {
  enable: function () {
    b.enable = function () {};
    p = true;
    const t = u.f;
    const r = o([].splice);
    const e = {};
    e[d] = 1;
    if (t(e).length) {
      u.f = function (e) {
        const n = t(e);
        for (let o = 0, i = n.length; o < i; o++) {
          if (n[o] === d) {
            r(n, o, 1);
            break;
          }
        }
        return n;
      };
      n(
        {
          target: "Object",
          stat: true,
          forced: true,
        },
        {
          getOwnPropertyNames,
        },
      );
    }
  },
  fastKey: function (t, r) {
    if (!a(t)) {
      if (typeof t === "symbol") {
        return t;
      }
      return (typeof t === "string" ? "S" : "P") + t;
    }
    if (!s(t, d)) {
      if (!l(t)) {
        return "F";
      }
      if (!r) {
        return "E";
      }
      y(t);
    }
    return t[d].objectID;
  },
  getWeakData: function (t, r) {
    if (!s(t, d)) {
      if (!l(t)) {
        return true;
      }
      if (!r) {
        return false;
      }
      y(t);
    }
    return t[d].weakData;
  },
  onFreeze: function (t) {
    if (v && p && l(t) && !s(t, d)) {
      y(t);
    }
    return t;
  },
};
export default b;
i[d] = true;
