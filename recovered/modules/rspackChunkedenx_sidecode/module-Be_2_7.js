import n from "./module-A_8.js";
import o from "./module-O9_7.js";
import i from "./module-S_7.js";
import a from "./module-y_2_7.js";
import s from "./module-D_2_7.js";
import { f as f_1 } from "./module-t_8.js";
import c from "./module-vV_7.js";
import { f as getOwnPropertyNames } from "./module-oI_8.js";
import l from "./module-QC_7.js";
import h from "./module-o_7.js";
import v from "./module-eP_7.js";
let p = false;
const d = h("meta");
let g = 0;
const y = (r) => {
  f_1(r, d, {
    value: {
      objectID: `O${g++}`,
      weakData: {},
    },
  });
};
var m = {
  enable: function () {
    m.enable = function () {};
    p = true;
    const r = c.f;
    const t = o([].splice);
    const e = {};
    e[d] = 1;
    if (r(e).length) {
      c.f = function (e) {
        const n = r(e);
        for (let o = 0, i = n.length; o < i; o++) {
          if (n[o] === d) {
            t(n, o, 1);
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
  fastKey: function (r, t) {
    if (!a(r)) {
      if (typeof r === "symbol") {
        return r;
      }
      return (typeof r === "string" ? "S" : "P") + r;
    }
    if (!s(r, d)) {
      if (!l(r)) {
        return "F";
      }
      if (!t) {
        return "E";
      }
      y(r);
    }
    return r[d].objectID;
  },
  getWeakData: function (r, t) {
    if (!s(r, d)) {
      if (!l(r)) {
        return true;
      }
      if (!t) {
        return false;
      }
      y(r);
    }
    return r[d].weakData;
  },
  onFreeze: function (r) {
    if (v && p && l(r) && !s(r, d)) {
      y(r);
    }
    return r;
  },
};
export default m;
i[d] = true;
