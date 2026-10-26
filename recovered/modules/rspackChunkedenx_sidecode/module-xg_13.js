import "./module-FA_13.js";
import $ from "./module-Yj_12.js";
import tt from "./module-vE_12.js";
import te from "./module-X7_12.js";
import tr from "./module-X_13.js";
import tn from "./module-lN_12.js";
import ti from "./module-h_13.js";
const to = tn("species");
export default function (J, Z, Q, ts) {
  const tf = tn(J);
  const tu = !tr(function () {
    const Z = {};
    Z[tf] = function () {
      return 7;
    };
    return ""[J](Z) !== 7;
  });
  const tc =
    tu &&
    !tr(function () {
      let Z = false;
      let Q = /a/;
      if (J === "split") {
        Q = {};
        Q.constructor = {};
        Q.constructor[to] = function () {
          return Q;
        };
        Q.flags = "";
        Q[tf] = /./[tf];
      }
      Q.exec = function () {
        Z = true;
        return null;
      };
      Q[tf]("");
      return !Z;
    });
  if (!tu || !tc || Q) {
    const th = $(/./[tf]);
    const td = Z(tf, ""[J], function (J, Z, Q, tt, tr) {
      const tn = $(J);
      const Z_exec = Z.exec;
      if (Z_exec === te || Z_exec === RegExp.prototype.exec) {
        if (tu && !tr) {
          return {
            done: true,
            value: th(Z, Q, tt),
          };
        }
        return {
          done: true,
          value: tn(Q, Z, tt),
        };
      }
      return {
        done: false,
      };
    });
    tt(String.prototype, J, td[0]);
    tt(RegExp.prototype, tf, td[1]);
  }
  if (ts) {
    ti(RegExp.prototype[tf], "sham", true);
  }
}
