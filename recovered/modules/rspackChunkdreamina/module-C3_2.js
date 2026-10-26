import n from "./module-g.js";
import o from "./module-o.js";
import i from "./module-rw.js";
import a from "./module-N.js";
import s from "./module-h.js";
import { f as f_1 } from "./module-R_2.js";
import c from "./module-Fb_2.js";
import { f as getOwnPropertyNames } from "./module-X4_3.js";
import l from "./module-jk_2.js";
import p from "./module-I_2.js";
import h from "./module-BQ.js";
let v = false;
const d = p("meta");
let g = 0;
const y = (e) => {
  f_1(e, d, {
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
    const e = c.f;
    const t = o([].splice);
    const r = {};
    r[d] = 1;
    if (e(r).length) {
      c.f = function (r) {
        const n = e(r);
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
  fastKey: function (e, t) {
    if (!a(e)) {
      if (typeof e === "symbol") {
        return e;
      }
      return (typeof e === "string" ? "S" : "P") + e;
    }
    if (!s(e, d)) {
      if (!l(e)) {
        return "F";
      }
      if (!t) {
        return "E";
      }
      y(e);
    }
    return e[d].objectID;
  },
  getWeakData: function (e, t) {
    if (!s(e, d)) {
      if (!l(e)) {
        return true;
      }
      if (!t) {
        return false;
      }
      y(e);
    }
    return e[d].weakData;
  },
  onFreeze: function (e) {
    if (h && v && l(e) && !s(e, d)) {
      y(e);
    }
    return e;
  },
};
export default m;
i[d] = true;
