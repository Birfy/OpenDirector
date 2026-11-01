import tn from "./module-J_13.js";
import ti from "./module-Xy_3_2.js";
import to from "./module-WG_2_12.js";
import ta from "./module-Y_13.js";
import ts from "./module-D_2_12.js";
import tf from "./module-X_13.js";
import tu from "./module-iB_13.js";
import tc from "./module-E6_12.js";
import th from "./module-xv_12.js";
import td from "./module-eXf_12.js";
import tl from "./module-A1_13.js";
import tp from "./module-p2_12.js";
let $;
let tt;
let te;
let tr;
let tn_setImmediate = tn.setImmediate;
let tn_clearImmediate = tn.clearImmediate;
const tn_process = tn.process;
const tn_Dispatch = tn.Dispatch;
const tn_Function = tn.Function;
const tn_MessageChannel = tn.MessageChannel;
const tn_String = tn.String;
let t_ = 0;
const tM = {};
const tS = "onreadystatechange";
tf(function () {
  $ = tn.location;
});
const tA = (J) => {
  if (ts(tM, J)) {
    const Z = tM[J];
    delete tM[J];
    Z();
  }
};
const tE = (J) =>
  function () {
    tA(J);
  };
const tk = function (J) {
  tA(J.data);
};
const tR = function (J) {
  tn.postMessage(tn_String(J), $.protocol + "//" + $.host);
};
if (!(tn_setImmediate && tn_clearImmediate)) {
  tn_setImmediate = function (J) {
    td(arguments.length, 1);
    const Z = ta(J) ? J : tn_Function(J);
    const Q = tc(arguments, 1);
    tM[++t_] = function () {
      ti(Z, undefined, Q);
    };
    tt(t_);
    return t_;
  };
  tn_clearImmediate = function (J) {
    delete tM[J];
  };
  if (tp) {
    tt = function (J) {
      tn_process.nextTick(tE(J));
    };
  } else if (tn_Dispatch && tn_Dispatch.now) {
    tt = function (J) {
      tn_Dispatch.now(tE(J));
    };
  } else if (tn_MessageChannel && !tl) {
    tr = (te = new tn_MessageChannel()).port2;
    te.port1.onmessage = tk;
    tt = to(tr.postMessage, tr);
  } else if (
    tn.addEventListener &&
    ta(tn.postMessage) &&
    !tn.importScripts &&
    $ &&
    $.protocol !== "file:" &&
    !tf(tR)
  ) {
    tt = tR;
    tn.addEventListener("message", tk, false);
  } else {
    tt =
      tS in th("script")
        ? function (J) {
            tu.appendChild(th("script"))[tS] = function () {
              tu.removeChild(this);
              tA(J);
            };
          }
        : function (J) {
            setTimeout(tE(J), 0);
          };
  }
}
export default {
  set: tn_setImmediate,
  clear: tn_clearImmediate,
};
