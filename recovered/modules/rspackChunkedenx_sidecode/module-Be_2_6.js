import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-S_6.js";
import i from "./module-y_2_6.js";
import s from "./module-D_2_6.js";
import { f as f_1 } from "./module-t_7.js";
import u from "./module-vV_6.js";
import { f as getOwnPropertyNames } from "./module-oI_7.js";
import l from "./module-QC_6.js";
import h from "./module-o_6.js";
import p from "./module-eP_6.js";
let v = false;
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
var m = {
  enable: function () {
    m.enable = function () {};
    v = true;
    const t = u.f;
    const r = o([].splice);
    const e = {};
    e[d] = 1;
    if (t(e).length) {
      u.f = function (e) {
        const n = t(e);
        for (let o = 0, a = n.length; o < a; o++) {
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
    if (!i(t)) {
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
    if (p && v && l(t) && !s(t, d)) {
      y(t);
    }
    return t;
  },
};
export default m;
a[d] = true;
