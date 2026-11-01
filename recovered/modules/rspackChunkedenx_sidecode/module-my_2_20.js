import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import i from "./module-r9_20.js";
import a from "./module-FG_20.js";
import s from "./module-vo_20.js";
import c from "./module-d_21.js";
import u from "./module-A2_21.js";
import f from "./module-Y_21.js";
import l from "./module-Mi_20.js";
import h from "./module-y_2_20.js";
import v from "./module-C_21.js";
import p from "./module-vE_20.js";
import d from "./module-dFV_20.js";
import g from "./module-I_21.js";
import y from "./module-qI_20.js";
import m from "./module-lN_20.js";
import b from "./module-b_20.js";
import forced from "./module-dy_22.js";
const A = m("observable");
const x = "Observable";
const S = "Subscription";
const E = "SubscriptionObserver";
const b_getterFor = b.getterFor;
const b_set = b.set;
const M = b_getterFor(x);
const I = b_getterFor(S);
const _ = b_getterFor(E);
const k = function (t) {
  this.observer = c(t);
  this.cleanup = undefined;
  this.subscriptionObserver = undefined;
};
k.prototype = {
  type: S,
  clean: function () {
    const cleanup = this.cleanup;
    if (cleanup) {
      this.cleanup = undefined;
      try {
        cleanup();
      } catch (error) {
        y(error);
      }
    }
  },
  close: function () {
    if (!i) {
      const t = this.facade;
      const r = this.subscriptionObserver;
      t.closed = true;
      if (r) {
        r.closed = true;
      }
    }
    this.observer = undefined;
  },
  isClosed: function () {
    return this.observer === undefined;
  },
};
const T = function (t, r) {
  let e;
  const n = b_set(this, new k(t));
  if (!i) {
    this.closed = false;
  }
  try {
    if ((e = v(t, "start"))) {
      o(e, t, this);
    }
  } catch (error) {
    y(error);
  }
  if (!n.isClosed()) {
    const a = (n.subscriptionObserver = new j(n));
    try {
      const c = r(a);
      if (!l(c)) {
        n.cleanup = f(c.unsubscribe)
          ? function () {
              c.unsubscribe();
            }
          : s(c);
      }
    } catch (error) {
      a.error(error);
      return;
    }
    if (n.isClosed()) {
      n.clean();
    }
  }
};
T.prototype = d(
  {},
  {
    unsubscribe: function () {
      const t = I(this);
      if (!t.isClosed()) {
        t.close();
        t.clean();
      }
    },
  },
);
if (i) {
  g(T.prototype, "closed", {
    configurable: true,
    get: function () {
      return I(this).isClosed();
    },
  });
}
var j = function (subscriptionState) {
  b_set(this, {
    type: E,
    subscriptionState,
  });
  if (!i) {
    this.closed = false;
  }
};
j.prototype = d(
  {},
  {
    next: function (t) {
      const subscriptionState = _(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const e = subscriptionState.observer;
        try {
          const n = v(e, "next");
          if (n) {
            o(n, e, t);
          }
        } catch (error) {
          y(error);
        }
      }
    },
    error: function (t) {
      const subscriptionState = _(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const e = subscriptionState.observer;
        subscriptionState.close();
        try {
          const n = v(e, "error");
          if (n) {
            o(n, e, t);
          } else {
            y(t);
          }
        } catch (error) {
          y(error);
        }
        subscriptionState.clean();
      }
    },
    complete: function () {
      const subscriptionState = _(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const r = subscriptionState.observer;
        subscriptionState.close();
        try {
          const e = v(r, "complete");
          if (e) {
            o(e, r);
          }
        } catch (error) {
          y(error);
        }
        subscriptionState.clean();
      }
    },
  },
);
if (i) {
  g(j.prototype, "closed", {
    configurable: true,
    get: function () {
      return _(this).subscriptionState.isClosed();
    },
  });
}
const Observable = function (t) {
  u(this, N_prototype);
  b_set(this, {
    type: x,
    subscriber: s(t),
  });
};
var N_prototype = Observable.prototype;
d(N_prototype, {
  subscribe: function (next) {
    const arguments_length = arguments.length;
    return new T(
      f(next)
        ? {
            next,
            error: arguments_length > 1 ? arguments[1] : undefined,
            complete: arguments_length > 2 ? arguments[2] : undefined,
          }
        : h(next)
          ? next
          : {},
      M(this).subscriber,
    );
  },
});
p(N_prototype, A, function () {
  return this;
});
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    Observable,
  },
);
a(x);
