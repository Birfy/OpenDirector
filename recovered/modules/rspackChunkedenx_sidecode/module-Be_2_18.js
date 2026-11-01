import n from "./module-A_19.js";
import o from "./module-O9_18.js";
import i from "./module-S_18.js";
import a from "./module-y_2_18.js";
import s from "./module-D_2_18.js";
import { f as f_1 } from "./module-t_19.js";
import c from "./module-vV_18.js";
import { f as getOwnPropertyNames } from "./module-oI_19.js";
import h from "./module-QC_18.js";
import l from "./module-o_18.js";
import v from "./module-eP_18.js";
let p = false;
const d = l("meta");
let g = 0;
const y = (r) => {
  f_1(r, d, {
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
      if (!h(r)) {
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
      if (!h(r)) {
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
    if (v && p && h(r) && !s(r, d)) {
      y(r);
    }
    return r;
  },
};
export default b;
i[d] = true;
