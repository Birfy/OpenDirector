import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-S.js";
import a from "./module-y_2.js";
import s from "./module-D_2.js";
import { f as f_1 } from "./module-t.js";
import c from "./module-vV.js";
import { f as getOwnPropertyNames } from "./module-oI.js";
import h from "./module-QC.js";
import l from "./module-o.js";
import v from "./module-eP.js";
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
    const r = o([].splice);
    const e = {};
    e[d] = 1;
    if (t(e).length) {
      c.f = function (e) {
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
    if (!s(t, d)) {
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
    if (v && p && h(t) && !s(t, d)) {
      y(t);
    }
    return t;
  },
};
export default b;
i[d] = true;
