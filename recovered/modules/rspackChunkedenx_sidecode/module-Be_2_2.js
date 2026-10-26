import n from "./module-A_3.js";
import i from "./module-O9_2.js";
import o from "./module-S_2.js";
import s from "./module-y_2_2.js";
import a from "./module-D_2_2.js";
import { f as f_1 } from "./module-t_3.js";
import c from "./module-vV_2.js";
import { f as getOwnPropertyNames } from "./module-oI_3.js";
import h from "./module-QC_2.js";
import l from "./module-o_2.js";
import v from "./module-eP_2.js";
let p = false;
const d = l("meta");
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
    const t = c.f;
    const r = i([].splice);
    const e = {};
    e[d] = 1;
    if (t(e).length) {
      c.f = function (e) {
        const n = t(e);
        for (let i = 0, o = n.length; i < o; i++) {
          if (n[i] === d) {
            r(n, i, 1);
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
    if (!s(t)) {
      if (typeof t === "symbol") {
        return t;
      }
      return (typeof t === "string" ? "S" : "P") + t;
    }
    if (!a(t, d)) {
      if (!h(t)) {
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
    if (!a(t, d)) {
      if (!h(t)) {
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
    if (v && p && h(t) && !a(t, d)) {
      y(t);
    }
    return t;
  },
};
export default b;
o[d] = true;
