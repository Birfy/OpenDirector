import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-S_9.js";
import a from "./module-y_2_9.js";
import s from "./module-D_2_9.js";
import { f as f_1 } from "./module-t_10.js";
import c from "./module-vV_9.js";
import { f as getOwnPropertyNames } from "./module-oI_10.js";
import l from "./module-QC_9.js";
import h from "./module-o_9.js";
import v from "./module-eP_9.js";
let d = false;
const p = h("meta");
let g = 0;
const y = (t) => {
  f_1(t, p, {
    value: {
      objectID: `O${g++}`,
      weakData: {},
    },
  });
};
var m = {
  enable: function () {
    m.enable = function () {};
    d = true;
    const t = c.f;
    const e = o([].splice);
    const r = {};
    r[p] = 1;
    if (t(r).length) {
      c.f = function (r) {
        const n = t(r);
        for (let o = 0, i = n.length; o < i; o++) {
          if (n[o] === p) {
            e(n, o, 1);
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
  fastKey: function (t, e) {
    if (!a(t)) {
      if (typeof t === "symbol") {
        return t;
      }
      return (typeof t === "string" ? "S" : "P") + t;
    }
    if (!s(t, p)) {
      if (!l(t)) {
        return "F";
      }
      if (!e) {
        return "E";
      }
      y(t);
    }
    return t[p].objectID;
  },
  getWeakData: function (t, e) {
    if (!s(t, p)) {
      if (!l(t)) {
        return true;
      }
      if (!e) {
        return false;
      }
      y(t);
    }
    return t[p].weakData;
  },
  onFreeze: function (t) {
    if (v && d && l(t) && !s(t, p)) {
      y(t);
    }
    return t;
  },
};
export default m;
i[p] = true;
