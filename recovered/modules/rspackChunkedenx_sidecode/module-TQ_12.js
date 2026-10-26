import $ from "./module-A_13.js";
import tt from "./module-r9_12.js";
import te from "./module-YR_12.js";
import tr from "./module-vo_12.js";
import tn from "./module-A2_13.js";
import ti from "./module-vE_12.js";
import to from "./module-dFV_12.js";
import ta from "./module-I_13.js";
import ts from "./module-lN_12.js";
import tf from "./module-b_12.js";
import tu from "./module-er1_12.js";
const tc = te("Promise");
const th = te("SuppressedError");
const tl = ts("asyncDispose");
const tp = ts("toStringTag");
const tb = "AsyncDisposableStack";
const tf_set = tf.set;
const tg = tf.getterFor(tb);
const ty = "async-dispose";
const tm = "disposed";
const tw = (J) => {
  const Z = tg(J);
  if (Z.state === tm) {
    throw ReferenceError(tb + " already disposed");
  }
  return Z;
};
const AsyncDisposableStack = function () {
  tf_set(tn(this, tx_prototype), {
    type: tb,
    state: "pending",
    stack: [],
  });
  if (!tt) {
    this.disposed = false;
  }
};
var tx_prototype = AsyncDisposableStack.prototype;
to(tx_prototype, {
  disposeAsync: function () {
    const J = this;
    return new tc(function (Z, Q) {
      let $;
      const te = tg(J);
      if (te.state === tm) {
        return Z(undefined);
      }
      te.state = tm;
      if (!tt) {
        J.disposed = true;
      }
      const te_stack = te.stack;
      let tr_length = te_stack.length;
      let ti = false;
      const to = function (J) {
        if (ti) {
          $ = new th(J, $);
        } else {
          ti = true;
          $ = J;
        }
        ta();
      };
      var ta = function () {
        if (tr_length) {
          const J = te_stack[--tr_length];
          te_stack[tr_length] = null;
          try {
            tc.resolve(J()).then(ta, to);
          } catch (error) {
            to(error);
          }
        } else {
          te.stack = null;
          if (ti) {
            Q($);
          } else {
            Z(undefined);
          }
        }
      };
      ta();
    });
  },
  use: function (J) {
    tu(tw(this), J, ty);
    return J;
  },
  adopt: function (J, Z) {
    const Q = tw(this);
    tr(Z);
    tu(Q, undefined, ty, function () {
      return Z(J);
    });
    return J;
  },
  defer: function (J) {
    const Z = tw(this);
    tr(J);
    tu(Z, undefined, ty, J);
  },
  move: function () {
    const J = tw(this);
    const Z = new AsyncDisposableStack();
    tg(Z).stack = J.stack;
    J.stack = [];
    J.state = tm;
    if (!tt) {
      this.disposed = true;
    }
    return Z;
  },
});
if (tt) {
  ta(tx_prototype, "disposed", {
    configurable: true,
    get: function () {
      return tg(this).state === tm;
    },
  });
}
ti(tx_prototype, tl, tx_prototype.disposeAsync, {
  name: "disposeAsync",
});
ti(tx_prototype, tp, tb, {
  nonWritable: true,
});
$(
  {
    global: true,
    constructor: true,
  },
  {
    AsyncDisposableStack,
  },
);
