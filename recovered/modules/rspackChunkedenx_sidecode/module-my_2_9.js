import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-r9_9.js";
import a from "./module-FG_9.js";
import s from "./module-vo_9.js";
import u from "./module-d_10.js";
import c from "./module-A2_10.js";
import f from "./module-Y_10.js";
import l from "./module-Mi_9.js";
import h from "./module-y_2_9.js";
import v from "./module-C_10.js";
import d from "./module-vE_9.js";
import p from "./module-dFV_9.js";
import g from "./module-I_10.js";
import y from "./module-qI_9.js";
import m from "./module-lN_9.js";
import b from "./module-b_9.js";
import forced from "./module-dy_11.js";
const A = m("observable");
const x = "Observable";
const E = "Subscription";
const S = "SubscriptionObserver";
const b_getterFor = b.getterFor;
const b_set = b.set;
const R = b_getterFor(x);
const M = b_getterFor(E);
const I = b_getterFor(S);
const T = function (t) {
  this.observer = u(t);
  this.cleanup = undefined;
  this.subscriptionObserver = undefined;
};
T.prototype = {
  type: E,
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
      const e = this.subscriptionObserver;
      t.closed = true;
      if (e) {
        e.closed = true;
      }
    }
    this.observer = undefined;
  },
  isClosed: function () {
    return this.observer === undefined;
  },
};
const k = function (t, e) {
  let r;
  const n = b_set(this, new T(t));
  if (!i) {
    this.closed = false;
  }
  try {
    if ((r = v(t, "start"))) {
      o(r, t, this);
    }
  } catch (error) {
    y(error);
  }
  if (!n.isClosed()) {
    const a = (n.subscriptionObserver = new N(n));
    try {
      const u = e(a);
      if (!l(u)) {
        n.cleanup = f(u.unsubscribe)
          ? function () {
              u.unsubscribe();
            }
          : s(u);
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
k.prototype = p(
  {},
  {
    unsubscribe: function () {
      const t = M(this);
      if (!t.isClosed()) {
        t.close();
        t.clean();
      }
    },
  },
);
if (i) {
  g(k.prototype, "closed", {
    configurable: true,
    get: function () {
      return M(this).isClosed();
    },
  });
}
var N = function (subscriptionState) {
  b_set(this, {
    type: S,
    subscriptionState,
  });
  if (!i) {
    this.closed = false;
  }
};
N.prototype = p(
  {},
  {
    next: function (t) {
      const subscriptionState = I(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const r = subscriptionState.observer;
        try {
          const n = v(r, "next");
          if (n) {
            o(n, r, t);
          }
        } catch (error) {
          y(error);
        }
      }
    },
    error: function (t) {
      const subscriptionState = I(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const r = subscriptionState.observer;
        subscriptionState.close();
        try {
          const n = v(r, "error");
          if (n) {
            o(n, r, t);
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
      const subscriptionState = I(this).subscriptionState;
      if (!subscriptionState.isClosed()) {
        const e = subscriptionState.observer;
        subscriptionState.close();
        try {
          const r = v(e, "complete");
          if (r) {
            o(r, e);
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
  g(N.prototype, "closed", {
    configurable: true,
    get: function () {
      return I(this).subscriptionState.isClosed();
    },
  });
}
const Observable = function (t) {
  c(this, j_prototype);
  b_set(this, {
    type: x,
    subscriber: s(t),
  });
};
var j_prototype = Observable.prototype;
p(j_prototype, {
  subscribe: function (next) {
    const arguments_length = arguments.length;
    return new k(
      f(next)
        ? {
            next,
            error: arguments_length > 1 ? arguments[1] : undefined,
            complete: arguments_length > 2 ? arguments[2] : undefined,
          }
        : h(next)
          ? next
          : {},
      R(this).subscriber,
    );
  },
});
d(j_prototype, A, function () {
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
