import tn from "./module-A_13.js";
import ti from "./module-N_12.js";
import to from "./module-p2_12.js";
import ta from "./module-J_13.js";
import ts from "./module-M_2_12.js";
import tf from "./module-vE_12.js";
import tu from "./module-d4_12.js";
import tc from "./module-HZ_12.js";
import th from "./module-FG_12.js";
import td from "./module-vo_12.js";
import tl from "./module-Y_13.js";
import tp from "./module-y_2_12.js";
import tb from "./module-A2_13.js";
import tv from "./module-V0_12.js";
import _tg from "./module-Z6_12.js";
import ty from "./module-we_13.js";
import tm from "./module-qI_12.js";
import tw from "./module-FS_2_2.js";
import tx from "./module-nA_12.js";
import t_ from "./module-b_12.js";
import tM from "./module-xl_13.js";
import tS from "./module-FK_12.js";
import tA from "./module-Qa_13.js";
let $;
let tt;
let te;
let tr;
const _tg_set = _tg.set;
const tE = "Promise";
const tS_CONSTRUCTOR = tS.CONSTRUCTOR;
const tS_REJECTION_EVENT = tS.REJECTION_EVENT;
const tS_SUBCLASSING = tS.SUBCLASSING;
const tO = t_.getterFor(tE);
const t__set = t_.set;
const tB = tM && tM.prototype;
let Promise = tM;
let tC = tB;
const ta_TypeError = ta.TypeError;
const ta_document = ta.document;
const ta_process = ta.process;
let tU = tA.f;
const tD = tU;
const tF = !!(ta_document && ta_document.createEvent && ta.dispatchEvent);
const tq = "unhandledrejection";
const tz = (J) => {
  let Z;
  return !!(tp(J) && tl((Z = J.then))) && Z;
};
const tH = (J, Z) => {
  let Q;
  let $;
  let tt;
  const Z_value = Z.value;
  const tr = Z.state === 1;
  const tn = tr ? J.ok : J.fail;
  const J_resolve = J.resolve;
  const J_reject = J.reject;
  const J_domain = J.domain;
  try {
    if (tn) {
      if (!tr) {
        if (Z.rejection === 2) {
          tX(Z);
        }
        Z.rejection = 1;
      }
      if (tn === true) {
        Q = Z_value;
      } else {
        if (J_domain) {
          J_domain.enter();
        }
        Q = tn(Z_value);
        if (J_domain) {
          J_domain.exit();
          tt = true;
        }
      }
      if (Q === J.promise) {
        J_reject(ta_TypeError("Promise-chain cycle"));
      } else if (($ = tz(Q))) {
        ts($, Q, J_resolve, J_reject);
      } else {
        J_resolve(Q);
      }
    } else {
      J_reject(Z_value);
    }
  } catch (error) {
    if (J_domain && !tt) {
      J_domain.exit();
    }
    J_reject(error);
  }
};
const tV = (J, Z) => {
  if (!J.notified) {
    J.notified = true;
    ty(function () {
      let Q;
      for (const $ = J.reactions; (Q = $.get());) {
        tH(Q, J);
      }
      J.notified = false;
      if (Z && !J.rejection) {
        tK(J);
      }
    });
  }
};
const tW = (J, promise, reason) => {
  let $;
  let tt;
  if (tF) {
    $ = ta_document.createEvent("Event");
    $.promise = promise;
    $.reason = reason;
    $.initEvent(J, false, true);
    ta.dispatchEvent($);
  } else {
    $ = {
      promise,
      reason,
    };
  }
  if (!tS_REJECTION_EVENT && (tt = ta["on" + J])) {
    tt($);
  } else if (J === tq) {
    tm("Unhandled promise rejection", reason);
  }
};
var tK = (J) => {
  ts(_tg_set, ta, function () {
    let Z;
    const J_facade = J.facade;
    const J_value = J.value;
    if (
      tY(J) &&
      ((Z = tw(function () {
        if (to) {
          ta_process.emit("unhandledRejection", J_value, J_facade);
        } else {
          tW(tq, J_facade, J_value);
        }
      })),
      (J.rejection = to || tY(J) ? 2 : 1),
      Z.error)
    ) {
      throw Z.value;
    }
  });
};
var tY = (J) => J.rejection !== 1 && !J.parent;
var tX = (J) => {
  ts(_tg_set, ta, function () {
    const J_facade = J.facade;
    if (to) {
      ta_process.emit("rejectionHandled", J_facade);
    } else {
      tW("rejectionhandled", J_facade, J.value);
    }
  });
};
const tG = (J, Z, Q) =>
  function ($) {
    J(Z, $, Q);
  };
const tJ = function (J, Z, Q) {
  if (!J.done) {
    J.done = true;
    if (Q) {
      J = Q;
    }
    J.value = Z;
    J.state = 2;
    tV(J, true);
  }
};
const tZ = function (J, Z, Q) {
  if (!J.done) {
    J.done = true;
    if (Q) {
      J = Q;
    }
    try {
      if (J.facade === Z) {
        throw ta_TypeError("Promise can't be resolved itself");
      }
      const $ = tz(Z);
      if ($) {
        ty(function () {
          const Q = {
            done: false,
          };
          try {
            ts($, Z, tG(tZ, Q, J), tG(tJ, Q, J));
          } catch (error) {
            tJ(Q, error, J);
          }
        });
      } else {
        J.value = Z;
        J.state = 1;
        tV(J, false);
      }
    } catch (error) {
      tJ(
        {
          done: false,
        },
        error,
        J,
      );
    }
  }
};
if (
  tS_CONSTRUCTOR &&
  ((tC = (Promise = function (J) {
    tb(this, tC);
    td(J);
    ts($, this);
    const Z = tO(this);
    try {
      J(tG(tZ, Z), tG(tJ, Z));
    } catch (error) {
      tJ(Z, error);
    }
  }).prototype),
  (($ = function (J) {
    t__set(this, {
      type: tE,
      done: false,
      notified: false,
      parent: false,
      reactions: new tx(),
      rejection: false,
      state: 0,
      value: undefined,
    });
  }).prototype = tf(tC, "then", function (J, Z) {
    const Q = tO(this);
    const $ = tU(tv(this, Promise));
    Q.parent = true;
    $.ok = !tl(J) || J;
    $.fail = tl(Z) && Z;
    $.domain = to ? ta_process.domain : undefined;
    if (Q.state === 0) {
      Q.reactions.add($);
    } else {
      ty(function () {
        tH($, Q);
      });
    }
    return $.promise;
  })),
  (tt = function () {
    const J = new $();
    const Z = tO(J);
    this.promise = J;
    this.resolve = tG(tZ, Z);
    this.reject = tG(tJ, Z);
  }),
  (tA.f = tU =
    function (J) {
      if (J === Promise || J === te) {
        return new tt();
      }
      return tD(J);
    }),
  !ti && tl(tM) && tB !== Object.prototype)
) {
  tr = tB.then;
  if (!tS_SUBCLASSING) {
    tf(
      tB,
      "then",
      function (J, Z) {
        const Q = this;
        return new Promise(function (J, Z) {
          ts(tr, Q, J, Z);
        }).then(J, Z);
      },
      {
        unsafe: true,
      },
    );
  }
  try {
    delete tB.constructor;
  } catch (J) {}
  if (tu) {
    tu(tB, tC);
  }
}
tn(
  {
    global: true,
    constructor: true,
    wrap: true,
    forced: tS_CONSTRUCTOR,
  },
  {
    Promise,
  },
);
tc(Promise, tE, false, true);
th(tE);
