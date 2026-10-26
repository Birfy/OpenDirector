import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-N_12.js";
import tr from "./module-Vn_12.js";
import tn from "./module-Y_13.js";
import ti from "./module-L7_12.js";
import to from "./module-H_2_12.js";
import ta from "./module-d4_12.js";
import ts from "./module-HZ_12.js";
import tf from "./module-h_13.js";
import tu from "./module-vE_12.js";
import tc from "./module-lN_12.js";
import th from "./module-at_12.js";
import td from "./module-A5_12.js";
const tr_PROPER = tr.PROPER;
const tr_CONFIGURABLE = tr.CONFIGURABLE;
const td_IteratorPrototype = td.IteratorPrototype;
const td_BUGGY_SAFARI_ITERATORS = td.BUGGY_SAFARI_ITERATORS;
const tg = tc("iterator");
const ty = "keys";
const tm = "values";
const tw = "entries";
const tx = function () {
  return this;
};
export default function (J, target, Q, tr, tc, td, t_) {
  ti(Q, target, tr);
  let tM;
  let tS;
  let tA;
  const tE = (J) => {
    if (J === tc && tT) {
      return tT;
    }
    if (!td_BUGGY_SAFARI_ITERATORS && J && J in J_prototype) {
      return J_prototype[J];
    }
    switch (J) {
      case ty:
      case tm:
      case tw:
        return function () {
          return new Q(this, J);
        };
    }
    return function () {
      return new Q(this);
    };
  };
  const tk = target + " Iterator";
  let tR = false;
  var J_prototype = J.prototype;
  const tO =
    J_prototype[tg] || J_prototype["@@iterator"] || (tc && J_prototype[tc]);
  var tT = (!td_BUGGY_SAFARI_ITERATORS && tO) || tE(tc);
  const tB = (target === "Array" && J_prototype.entries) || tO;
  if (tB && (tM = to(tB.call(new J()))) !== Object.prototype && tM.next) {
    if (!te && to(tM) !== td_IteratorPrototype) {
      if (ta) {
        ta(tM, td_IteratorPrototype);
      } else if (!tn(tM[tg])) {
        tu(tM, tg, tx);
      }
    }
    ts(tM, tk, true, true);
    if (te) {
      th[tk] = tx;
    }
  }
  if (tr_PROPER && tc === tm && tO && tO.name !== tm) {
    if (!te && tr_CONFIGURABLE) {
      tf(J_prototype, "name", tm);
    } else {
      tR = true;
      tT = function () {
        return tt(tO, this);
      };
    }
  }
  if (tc) {
    tS = {
      values: tE(tm),
      keys: td ? tT : tE(ty),
      entries: tE(tw),
    };
    if (t_) {
      for (tA in tS) {
        if (!(!td_BUGGY_SAFARI_ITERATORS && !tR && tA in J_prototype)) {
          tu(J_prototype, tA, tS[tA]);
        }
      }
    } else {
      $(
        {
          target,
          proto: true,
          forced: td_BUGGY_SAFARI_ITERATORS || tR,
        },
        tS,
      );
    }
  }
  if ((!te || t_) && J_prototype[tg] !== tT) {
    tu(J_prototype, tg, tT, {
      name: tc,
    });
  }
  th[target] = tT;
  return tS;
}
