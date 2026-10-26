import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-r9_12.js";
import tr from "./module-FG_12.js";
import tn from "./module-vo_12.js";
import ti from "./module-d_13.js";
import to from "./module-A2_13.js";
import ta from "./module-Y_13.js";
import ts from "./module-Mi_12.js";
import tf from "./module-y_2_12.js";
import tu from "./module-C_13.js";
import tc from "./module-vE_12.js";
import th from "./module-dFV_12.js";
import td from "./module-I_13.js";
import tl from "./module-qI_12.js";
import tp from "./module-lN_12.js";
import tb from "./module-b_12.js";
import forced from "./module-dy_14.js";
const tg = tp("observable");
const ty = "Observable";
const tm = "Subscription";
const tw = "SubscriptionObserver";
const tb_getterFor = tb.getterFor;
const tb_set = tb.set;
const tM = tb_getterFor(ty);
const tS = tb_getterFor(tm);
const tA = tb_getterFor(tw);
const tE = function (J) {
  this.observer = ti(J);
  this.cleanup = undefined;
  this.subscriptionObserver = undefined;
};
tE.prototype = {
  type: tm,
  clean: function () {
    const cleanup = this.cleanup;
    if (cleanup) {
      this.cleanup = undefined;
      try {
        cleanup();
      } catch (error) {
        tl(error);
      }
    }
  },
  close: function () {
    if (!te) {
      const J = this.facade;
      const Z = this.subscriptionObserver;
      J.closed = true;
      if (Z) {
        Z.closed = true;
      }
    }
    this.observer = undefined;
  },
  isClosed: function () {
    return this.observer === undefined;
  },
};
const tk = function (J, Z) {
  let Q;
  const $ = tb_set(this, new tE(J));
  if (!te) {
    this.closed = false;
  }
  try {
    if ((Q = tu(J, "start"))) {
      tt(Q, J, this);
    }
  } catch (error) {
    tl(error);
  }
  if (!$.isClosed()) {
    const tr = ($.subscriptionObserver = new tR($));
    try {
      const ti = Z(tr);
      if (!ts(ti)) {
        $.cleanup = ta(ti.unsubscribe)
          ? function () {
              ti.unsubscribe();
            }
          : tn(ti);
      }
    } catch (error) {
      tr.error(error);
      return;
    }
    if ($.isClosed()) {
      $.clean();
    }
  }
};
tk.prototype = th(
  {},
  {
    unsubscribe: function () {
      const J = tS(this);
      if (!J.isClosed()) {
        J.close();
        J.clean();
      }
    },
  },
);
if (te) {
  td(tk.prototype, "closed", {
    configurable: true,
    get: function () {
      return tS(this).isClosed();
    },
  });
}
var tR = function (subscriptionState) {
  tb_set(this, {
    type: tw,
    subscriptionState,
  });
  if (!te) {
    this.closed = false;
  }
};
tR.prototype = th(
  {},
  {
    next: function (J) {
      const subscriptionState = tA(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const Q = subscriptionState.observer;
        try {
          const $ = tu(Q, "next");
          if ($) {
            tt($, Q, J);
          }
        } catch (error) {
          tl(error);
        }
      }
    },
    error: function (J) {
      const subscriptionState = tA(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const Q = subscriptionState.observer;
        subscriptionState.close();
        try {
          const $ = tu(Q, "error");
          if ($) {
            tt($, Q, J);
          } else {
            tl(J);
          }
        } catch (error) {
          tl(error);
        }
        subscriptionState.clean();
      }
    },
    complete: function () {
      const subscriptionState = tA(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const Z = subscriptionState.observer;
        subscriptionState.close();
        try {
          const Q = tu(Z, "complete");
          if (Q) {
            tt(Q, Z);
          }
        } catch (error) {
          tl(error);
        }
        subscriptionState.clean();
      }
    },
  },
);
if (te) {
  td(tR.prototype, "closed", {
    configurable: true,
    get: function () {
      return tA(this).subscriptionState.isClosed();
    },
  });
}
const Observable = function (J) {
  to(this, tI_prototype);
  tb_set(this, {
    type: ty,
    subscriber: tn(J),
  });
};
var tI_prototype = Observable.prototype;
th(tI_prototype, {
  subscribe: function (next) {
    const arguments_length = arguments.length;
    return new tk(
      ta(next)
        ? {
            next,
            error: arguments_length > 1 ? arguments[1] : undefined,
            complete: arguments_length > 2 ? arguments[2] : undefined,
          }
        : tf(next)
          ? next
          : {},
      tM(this).subscriber,
    );
  },
});
tc(tI_prototype, tg, function () {
  return this;
});
$(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    Observable,
  },
);
tr(ty);
