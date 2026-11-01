import $ from "./module-A_13.js";
import tt from "./module-TA_12.js";
import te from "./module-YR_12.js";
import tr from "./module-X_13.js";
import tn from "./module-Za_12.js";
import ti from "./module-w_13.js";
import { f } from "./module-t_13.js";
import ta from "./module-vE_12.js";
import ts from "./module-I_13.js";
import tf from "./module-D_2_12.js";
import tu from "./module-A2_13.js";
import tc from "./module-d_13.js";
import th from "./module-ab_2_2.js";
import td from "./module-Yw_12.js";
import tl from "./module-rr_12.js";
import tp from "./module-VQ_13.js";
import tb from "./module-b_12.js";
import tv from "./module-r9_12.js";
import tg from "./module-N_12.js";
const ty = "DOMException";
const tm = "DATA_CLONE_ERR";
const tw = te("Error");
const tx =
  te(ty) ||
  (() => {
    try {
      new (
        te("MessageChannel") || tt("worker_threads").MessageChannel
      )().port1.postMessage(new WeakMap());
    } catch (error) {
      if (error.name === tm && error.code === 25) {
        return error.constructor;
      }
    }
  })();
const t_ = tx && tx.prototype;
const tw_prototype = tw.prototype;
const tb_set = tb.set;
const tA = tb.getterFor(ty);
const tE = "stack" in tw(ty);
const tk = (J) => {
  if (tf(tl, J) && tl[J].m) {
    return tl[J].c;
  }
  return 0;
};
const tR = function () {
  tu(this, tI);
  const arguments_length = arguments.length;
  const message = td(arguments_length < 1 ? undefined : arguments[0]);
  const Q = td(arguments_length < 2 ? undefined : arguments[1], "Error");
  const code = tk(Q);
  tb_set(this, {
    type: ty,
    name: Q,
    message,
    code,
  });
  if (!tv) {
    this.name = Q;
    this.message = message;
    this.code = code;
  }
  if (tE) {
    const tt = tw(message);
    tt.name = ty;
    f(this, "stack", ti(1, tp(tt.stack, 1)));
  }
};
var tI = (tR.prototype = tn(tw_prototype));
const tO = (get) => ({
  enumerable: true,
  configurable: true,
  get,
});
const tT = (J) =>
  tO(function () {
    return tA(this)[J];
  });
if (tv) {
  ts(tI, "code", tT("code"));
  ts(tI, "message", tT("message"));
  ts(tI, "name", tT("name"));
}
f(tI, "constructor", ti(1, tR));
const tB = tr(function () {
  return !(new tx() instanceof tw);
});
const tj =
  tB ||
  tr(function () {
    return tw_prototype.toString !== th || String(new tx(1, 2)) !== "2: 1";
  });
const tC =
  tB ||
  tr(function () {
    return new tx(1, "DataCloneError").code !== 25;
  });
const tP = tB || tx[tm] !== 25 || t_[tm] !== 25;
const forced = tg ? tj || tC || tP : tB;
$(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    DOMException: forced ? tR : tx,
  },
);
const tN = te(ty);
const tN_prototype = tN.prototype;
if (tj && (tg || tx === tN)) {
  ta(tN_prototype, "toString", th);
}
if (tC && tv && tx === tN) {
  ts(
    tN_prototype,
    "code",
    tO(function () {
      return tk(tc(this).name);
    }),
  );
}
for (const tD in tl) {
  if (tf(tl, tD)) {
    const tF = tl[tD];
    const tq = tF.s;
    const tz = ti(6, tF.c);
    if (!tf(tN, tq)) {
      f(tN, tq, tz);
    }
    if (!tf(tN_prototype, tq)) {
      f(tN_prototype, tq, tz);
    }
  }
}
