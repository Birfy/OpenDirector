import $ from "./module-Xy_3_2.js";
import tt from "./module-M_2_12.js";
import te from "./module-O9_12.js";
import tr from "./module-xg_13.js";
import tn from "./module-X_13.js";
import ti from "./module-d_13.js";
import to from "./module-Y_13.js";
import ta from "./module-Mi_12.js";
import ts from "./module-V6_13.js";
import tf from "./module-dV_12.js";
import tu from "./module-ng_13.js";
import tc from "./module-vj_13.js";
import th from "./module-Gl_12.js";
import td from "./module-C_13.js";
import tl from "./module-S5_12.js";
import tp from "./module-uc_12.js";
const tb = require("./module-lN_12.js")("replace");
const ty = te([].concat);
const tm = te([].push);
const tw = te("".indexOf);
const tx = te("".slice);
const t_ = "a".replace(/./, "$0") === "$0";
const tM = !!/./[tb] && /./[tb]("a", "$0") === "";
tr(
  "replace",
  function (J, Z, Q) {
    const te = tM ? "$" : "$0";
    return [
      function (J, Q) {
        const $ = tc(this);
        const te = ta(J) ? undefined : td(J, tb);
        if (te) {
          return tt(te, J, $, Q);
        }
        return tt(Z, tu($), J, Q);
      },
      function (J, tt) {
        const tr = ti(this);
        const tn = tu(J);
        if (
          typeof tt === "string" &&
          tw(tt, te) === -1 &&
          tw(tt, "$<") === -1
        ) {
          const ta = Q(Z, tr, tn, tt);
          if (ta.done) {
            return ta.value;
          }
        }
        const tc = to(tt);
        if (!tc) {
          tt = tu(tt);
        }
        const tr_global = tr.global;
        if (tr_global) {
          tE = tr.unicode;
          tr.lastIndex = 0;
        }
        for (
          var tb = [];
          (tR = tp(tr, tn)) !== null && (tm(tb, tR), tr_global);
        ) {
          if (tu(tR[0]) === "") {
            tr.lastIndex = th(tn, tf(tr.lastIndex), tE);
          }
        }
        let t_ = "";
        let tM = 0;
        for (let tS = 0; tS < tb.length; tS++) {
          let tA;
          var tE;
          let tk;
          for (
            var tR = tb[tS],
              tI = tu(tR[0]),
              tO = Math.max(Math.min(ts(tR.index), tn.length), 0),
              tT = [],
              tB = 1;
            tB < tR.length;
            tB++
          ) {
            tm(tT, (tA = tR[tB]) === undefined ? tA : String(tA));
          }
          const tj = tR.groups;
          if (tc) {
            const tC = ty([tI], tT, tO, tn);
            if (tj !== undefined) {
              tm(tC, tj);
            }
            tk = tu($(tt, undefined, tC));
          } else {
            tk = tl(tI, tn, tO, tT, tj, tt);
          }
          if (tO >= tM) {
            t_ += tx(tn, tM, tO) + tk;
            tM = tO + tI.length;
          }
        }
        return t_ + tx(tn, tM);
      },
    ];
  },
  !!tn(function () {
    const J = /./;
    J.exec = function () {
      const J = [];
      J.groups = {
        a: "7",
      };
      return J;
    };
    return "".replace(J, "$<a>") !== "7";
  }) ||
    !t_ ||
    tM,
);
