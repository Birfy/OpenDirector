import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-S_12.js";
import tr from "./module-y_2_12.js";
import tn from "./module-D_2_12.js";
import { f as f_1 } from "./module-t_13.js";
import to from "./module-vV_2_2.js";
import { f as getOwnPropertyNames } from "./module-oI_13.js";
import ts from "./module-QC_12.js";
import tf from "./module-o_12.js";
import tu from "./module-eP_12.js";
let tc = false;
const th = tf("meta");
let td = 0;
const tl = (J) => {
  f_1(J, th, {
    value: {
      objectID: `O${td++}`,
      weakData: {},
    },
  });
};
var tp = {
  enable: function () {
    tp.enable = function () {};
    tc = true;
    const J = to.f;
    const Z = tt([].splice);
    const Q = {};
    Q[th] = 1;
    if (J(Q).length) {
      to.f = function (Q) {
        const $ = J(Q);
        for (let tt = 0, te = $.length; tt < te; tt++) {
          if ($[tt] === th) {
            Z($, tt, 1);
            break;
          }
        }
        return $;
      };
      $(
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
  fastKey: function (J, Z) {
    if (!tr(J)) {
      if (typeof J === "symbol") {
        return J;
      }
      return (typeof J === "string" ? "S" : "P") + J;
    }
    if (!tn(J, th)) {
      if (!ts(J)) {
        return "F";
      }
      if (!Z) {
        return "E";
      }
      tl(J);
    }
    return J[th].objectID;
  },
  getWeakData: function (J, Z) {
    if (!tn(J, th)) {
      if (!ts(J)) {
        return true;
      }
      if (!Z) {
        return false;
      }
      tl(J);
    }
    return J[th].weakData;
  },
  onFreeze: function (J) {
    if (tu && tc && ts(J) && !tn(J, th)) {
      tl(J);
    }
    return J;
  },
};
export default tp;
te[th] = true;
