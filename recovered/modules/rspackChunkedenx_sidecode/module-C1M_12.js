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
const tc = te("SuppressedError");
const td = ts("dispose");
const tl = ts("toStringTag");
const tp = "DisposableStack";
const tf_set = tf.set;
const tv = tf.getterFor(tp);
const tg = "sync-dispose";
const ty = "disposed";
const tm = (J) => {
  const Z = tv(J);
  if (Z.state === ty) {
    throw ReferenceError(tp + " already disposed");
  }
  return Z;
};
const DisposableStack = function () {
  tf_set(tn(this, tw_prototype), {
    type: tp,
    state: "pending",
    stack: [],
  });
  if (!tt) {
    this.disposed = false;
  }
};
var tw_prototype = DisposableStack.prototype;
to(tw_prototype, {
  dispose: function () {
    let J;
    const Z = tv(this);
    if (Z.state !== ty) {
      Z.state = ty;
      if (!tt) {
        this.disposed = true;
      }
      const Q = Z.stack;
      for (var $ = Q.length, te = false; $;) {
        const tr = Q[--$];
        Q[$] = null;
        try {
          tr();
        } catch (error) {
          if (te) {
            J = new tc(error, J);
          } else {
            te = true;
            J = error;
          }
        }
      }
      Z.stack = null;
      if (te) {
        throw J;
      }
    }
  },
  use: function (J) {
    tu(tm(this), J, tg);
    return J;
  },
  adopt: function (J, Z) {
    const Q = tm(this);
    tr(Z);
    tu(Q, undefined, tg, function () {
      Z(J);
    });
    return J;
  },
  defer: function (J) {
    const Z = tm(this);
    tr(J);
    tu(Z, undefined, tg, J);
  },
  move: function () {
    const J = tm(this);
    const Z = new DisposableStack();
    tv(Z).stack = J.stack;
    J.stack = [];
    J.state = ty;
    if (!tt) {
      this.disposed = true;
    }
    return Z;
  },
});
if (tt) {
  ta(tw_prototype, "disposed", {
    configurable: true,
    get: function () {
      return tv(this).state === ty;
    },
  });
}
ti(tw_prototype, td, tw_prototype.dispose, {
  name: "dispose",
});
ti(tw_prototype, tl, tp, {
  nonWritable: true,
});
$(
  {
    global: true,
    constructor: true,
  },
  {
    DisposableStack,
  },
);
